import styles from './Hero.module.css'
import cv from '../data/cv.json' with { type:"json" }
import { GitHubIcon, LinkedInIcon, CVIcon, ArrowDownIcon } from './icons.jsx'
import ScrollArrow from './ScrollArrow.jsx'

const profileIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon
}

export default function Hero () {
  const { name, label, profiles } = cv.basics
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <img
          src="/files/photo.jpg"
          alt="Foto de perfil"
          className={styles.image}
        />

        <h1 className={styles.title}>Miguel Ángel<br/>Rodríguez García</h1>

        <p className={styles.subtitle}>{label}</p>

        <ul className={styles.links}>
          {profiles.map(({ network, url }) => {
            const Icon = profileIcons[network.toLowerCase()]
            if (!Icon) return null
            return (
              <li key={network}>
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={network}>
                  <Icon className={styles.icon} />
                </a>
              </li>
            )
          })}
          <li>
            <a href='/files/cv-en.pdf' download aria-label="Download CV (PDF)">
              <CVIcon className={styles.icon} />
            </a>
          </li>
        </ul>

        <ScrollArrow />
      </div>
    </header>
  )
}
