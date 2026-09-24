import styles from './Hero.module.css'

import { ArrowDownIcon } from './icons.jsx'

const arrowSize = 100

export default function ScrollArrow () {
  function handleClick (event) {
    const target = document.getElementById('about')
    if (!target) return
    event.preventDefault()
    target.scrollIntoView()
  }
  return (
      <a
        className={styles.arrow}
        href="#about"
        aria-label="Scroll down to About section"
        onClick={handleClick}
      >
        <ArrowDownIcon width={arrowSize} height={arrowSize} />
      </a>
  )
}