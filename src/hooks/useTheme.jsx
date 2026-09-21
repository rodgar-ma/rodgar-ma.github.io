import { useState, useEffect } from 'react'

const QUERY = '(prefers-color-scheme: dark)'

function readStored() {
  try { return sessionStorage.getItem('theme') || null } catch { return null }
}

export default function useTheme() {
  const [stored, setStored] = useState(readStored)
  const [systemDark, setSystemDark] = useState(() => window.matchMedia(QUERY).matches)

  // Cambio del tema del sistema: se sigue al sistema y se descarta lo guardado
  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const onChange = (e) => { setSystemDark(e.matches); setStored(null) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const theme = stored ?? (systemDark ? 'dark' : 'light')

  // Refleja el tema en <html data-theme="...">
  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

  // Persiste la elección explícita del usuario
  useEffect(() => {
    try {
      if (stored) sessionStorage.setItem('theme', stored)
      else sessionStorage.removeItem('theme')
    } catch {}
  }, [stored])

  const toggle = () => setStored(theme === 'dark' ? 'light' : 'dark')

  return { theme, toggle }
}
