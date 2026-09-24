import styles from './Navigation.module.css'

export default function Navigation () {
  return (
    <nav className={styles.navigation}>
      <a href="#">Home</a> 
      <a href="#">CV</a> 
      <a href="#">Projects</a> 
    </nav>
  )
}
