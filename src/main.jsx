import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1200
    let raf

    const tick = () => {
      const elapsed = Date.now() - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(next)
      if (next < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(onDone, 300)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <div className="loader" role="status" aria-label={`Loading ${progress}%`}>
      <div className="loader__ring" aria-hidden="true" />
      <div className="loader__percent">{progress}%</div>
    </div>
  )
}

function Boot() {
  const [loading, setLoading] = useState(true)

  return loading ? <Loader onDone={() => setLoading(false)} /> : <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Boot />
  </React.StrictMode>,
)
