import { Suspense, Component, useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'
import { profile } from '../data.js'

const MODEL_URL = '/edward-avatar.glb'
const AUTO_ROTATE_SPEED = 0.35
const POINTER_FOLLOW_STRENGTH = 0.25
const POINTER_DAMP = 0.08
const RESUME_DELAY = 2000

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
  } catch {
    return false
  }
}

class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

function LoaderRing() {
  return (
    <Html center>
      <div className="avatar__spinner" aria-hidden="true" />
    </Html>
  )
}

function Model({ reducedMotion, pointerRef, draggingRef }) {
  const controlsRef = useRef(null)
  const { camera, gl } = useThree()
  const { scene } = useGLTF(MODEL_URL)

  const targetAzimuth = useRef(0)
  const targetPolar = useRef(Math.PI / 2)
  const currentAzimuth = useRef(0)
  const currentPolar = useRef(Math.PI / 2)
  const autoAngle = useRef(0)
  const autoPolar = useRef(Math.PI / 2)
  const resumeTime = useRef(0)

  const model = useMemo(() => scene.clone(true), [scene])

  useMemo(() => {
    const box = new THREE.Box3().setFromObject(model)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    const targetSize = maxDim > 1 ? 2.4 / maxDim : 2.4
    model.scale.setScalar(targetSize)
    model.position.sub(center.clone().multiplyScalar(targetSize))
  }, [model])

  useEffect(() => {
    const controls = controlsRef.current
    if (!controls) return

    const canvas = gl.domElement

    const syncFromControls = () => {
      const azimuth = controls.getAzimuthalAngle()
      const polar = controls.getPolarAngle()
      currentAzimuth.current = azimuth
      currentPolar.current = polar
      autoAngle.current = azimuth
      autoPolar.current = polar
      targetAzimuth.current = azimuth
      targetPolar.current = polar
    }

    const onStart = () => {
      draggingRef.current = true
      resumeTime.current = Infinity
      syncFromControls()
    }

    const onEnd = () => {
      draggingRef.current = false
      resumeTime.current = performance.now() + RESUME_DELAY
      syncFromControls()
    }

    const onMove = (e) => {
      if (draggingRef.current) return
      const rect = canvas.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      if (x < -1 || x > 1 || y < -1 || y > 1) {
        pointerRef.current = null
        resumeTime.current = performance.now() + RESUME_DELAY
        return
      }
      pointerRef.current = { x, y }
      resumeTime.current = performance.now() + RESUME_DELAY
    }

    const onLeave = () => {
      pointerRef.current = null
      resumeTime.current = performance.now() + RESUME_DELAY
    }

    controls.addEventListener('start', onStart)
    controls.addEventListener('end', onEnd)
    canvas.addEventListener('pointermove', onMove, { passive: true })
    canvas.addEventListener('pointerleave', onLeave, { passive: true })

    return () => {
      controls.removeEventListener('start', onStart)
      controls.removeEventListener('end', onEnd)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [gl.domElement, pointerRef, draggingRef])

  useFrame((_, delta) => {
    const controls = controlsRef.current
    if (!controls || draggingRef.current) return

    const now = performance.now()
    const canAutoRotate = !reducedMotion && now > resumeTime.current

    if (canAutoRotate && !pointerRef.current) {
      autoAngle.current += delta * AUTO_ROTATE_SPEED
    }

    targetAzimuth.current = autoAngle.current
    targetPolar.current = autoPolar.current

    if (!reducedMotion && pointerRef.current) {
      targetAzimuth.current = autoAngle.current - pointerRef.current.x * POINTER_FOLLOW_STRENGTH
      targetPolar.current = autoPolar.current + pointerRef.current.y * POINTER_FOLLOW_STRENGTH
    }

    currentAzimuth.current += (targetAzimuth.current - currentAzimuth.current) * POINTER_DAMP * (delta * 60)
    currentPolar.current += (targetPolar.current - currentPolar.current) * POINTER_DAMP * (delta * 60)

    controls.setAzimuthalAngle(currentAzimuth.current)
    controls.setPolarAngle(currentPolar.current)
  })

  return (
    <>
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 6, 4]} intensity={1.5} />
      <directionalLight position={[-4, 2, -4]} intensity={0.7} />
      <pointLight position={[0, 3, 0]} intensity={0.4} />

      <primitive object={model} />

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI - Math.PI / 8}
        rotateSpeed={0.65}
        makeDefault
      />
    </>
  )
}

function FallbackImage() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="avatar__inner">
      <img
        src={profile.photo}
        alt={`${profile.firstName} ${profile.lastName}`}
        className={`avatar__img ${loaded ? 'avatar__img--loaded' : ''}`}
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
      <div className={`avatar__fallback ${loaded ? '' : 'avatar__fallback--visible'}`} aria-hidden="true">
        <span className="avatar__initials">{profile.initials}</span>
      </div>
    </div>
  )
}

function AvatarModelInner() {
  const [fallback] = useState(() => !hasWebGL())
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const pointerRef = useRef(null)
  const draggingRef = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e) => setReducedMotion(e.matches)
    if (mq.addEventListener) {
      mq.addEventListener('change', onChange)
    } else {
      mq.addListener(onChange)
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', onChange)
      } else {
        mq.removeListener(onChange)
      }
    }
  }, [])

  return (
    <div
      className="avatar"
      role="img"
      aria-label={`${profile.firstName} ${profile.lastName} interactive 3D avatar. Drag to rotate.`}
    >
      {fallback ? (
        <FallbackImage />
      ) : (
        <ModelErrorBoundary fallback={<FallbackImage />}>
          <Canvas
            className="avatar__canvas"
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
            camera={{ position: [0, 0, 3.5], fov: 38 }}
            shadows
            aria-hidden="true"
            tabIndex={-1}
          >
            <Suspense fallback={<LoaderRing />}>
              <Model reducedMotion={reducedMotion} pointerRef={pointerRef} draggingRef={draggingRef} />
            </Suspense>
          </Canvas>
        </ModelErrorBoundary>
      )}
    </div>
  )
}

export default function AvatarModel() {
  return <AvatarModelInner />
}
