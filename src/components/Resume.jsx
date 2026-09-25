import { Fragment } from 'react'

import styles from './Resume.module.css'
import cv from '../data/cv.json' with { type:"json" }

export default function Resume() {
  const {basics, work, education, certificates, skills, languages, projects} = cv
  return (
    <main className={styles.resume}>
      <section id="about">
        <h2>About me</h2>
        <article>
          <p>{basics.summary}</p>
        </article>
      </section>

      <section id="work">
        <h2>Work</h2>
        {work.map((job) => (
          <article key={`${job.name}-${job.startDate}`}>
            <h3>{job.position} · {job.name}.</h3>
            <p className={styles.date}>{job.startDate} - {job.endDate ?? 'Present'}</p>
            { job.summary && <p>{job.summary}</p>}
          </article>
        ))}
      </section>

      <section id="education">
        <h2>Education</h2>
        {education.map((e) => (
          <article key={`${e.institution}-${e.startDate}`}>
            <h3>{e.studyType} in {e.area}.</h3>
            <p>{e.institution}</p>
            <p className={styles.date}>{e.startDate} - {e.endDate ?? 'Present'}</p>
          </article>
        ))}
      </section>
      
      <section id="certificates">
        <h2>Certificates</h2>
        {cv.certificates.map((c) => (
          <article key={c.name}>
            <h3>{c.name}</h3>
            {c.issuer && <p>{c.issuer}</p>}
          </article>
        ))}
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((s) => (
            <li key={s.name}>
              <strong>{s.name}:</strong>
              {s.keywords?.length > 0 && ` ${s.keywords.join(', ')}`}
            </li>
          ))}
        </ul>
      </section>

      <section id="languages">
        <h2>Languages</h2>
        <ul>
          {languages.map((l) => (
            <li key={l.language}>{l.language} - {l.fluency}</li>
          ))}
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((p) => (
          <article key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
