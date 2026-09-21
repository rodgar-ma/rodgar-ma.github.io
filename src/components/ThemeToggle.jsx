import useTheme from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <a id="theme-toggle" className="toggle-icon" aria-label="Toggle dark mode" onClick={toggle}>
      {theme === 'dark' ? <CrescentIcon /> : <RaysIcon />}
    </a>
  )
}
