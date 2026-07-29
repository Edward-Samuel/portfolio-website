import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function CustomCursor() {
  const dotRef = useRef(null)
  const hoverRef = useRef(false)
  const rafRef = useRef(null)
  const posRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    if (!dot) return

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const scale = hoverRef.current ? 2.2 : 1
          dot.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%) scale(${scale})`
          rafRef.current = null
        })
      }
    }

    const onOver = (e) => {
      if (
        e.target.closest('a, button, input, textarea, [role="button"]')
      ) {
        hoverRef.current = true
      }
    }

    const onOut = (e) => {
      if (
        e.target.closest('a, button, input, textarea, [role="button"]')
      ) {
        hoverRef.current = false
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Update scale on hover state change without losing translate position.
  useEffect(() => {
    const dot = dotRef.current
    if (!dot || window.matchMedia('(pointer: coarse)').matches) return
    const scale = hoverRef.current ? 2.2 : 1
    dot.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%) scale(${scale})`
  }, [])

  return (
    <div
      ref={dotRef}
      className="cursor"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        opacity: 0.7,
        pointerEvents: 'none',
      }}
    />
  )
}

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App