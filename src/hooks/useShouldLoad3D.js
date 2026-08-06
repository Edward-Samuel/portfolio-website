import { useEffect, useState } from 'react'

export function useShouldLoad3D() {
  const [shouldLoad, setShouldLoad] = useState(() => canLoad3D())

  useEffect(() => {
    const nav = navigator
    const conn = nav.connection || nav.mozConnection || nav.webkitConnection
    if (!conn?.addEventListener) return

    const onChange = () => setShouldLoad(canLoad3D())
    conn.addEventListener('change', onChange)
    return () => conn.removeEventListener('change', onChange)
  }, [])

  return shouldLoad
}

function canLoad3D() {
  if (typeof navigator === 'undefined') return false

  try {
    if (!hasWebGL()) return false

    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    if (conn) {
      if (conn.saveData) return false
      if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') return false
    }

    const memory = navigator.deviceMemory
    if (typeof memory === 'number' && memory < 4) return false
  } catch {
    // deliberate: detection failed safely; allow 3D unless a hard constraint is known
  }

  return true
}

export function hasWebGL() {
  if (typeof document === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
  } catch {
    return false
  }
}
