import styles from './Header.module.scss'
import Link from 'next/link'

export default function Header({ title }) {
  return (
    <>
  <header className={styles.header}>
  {/* <h1 className="title">{title}</h1> */}
  <nav>
  <div className={styles.header__logo}>
    <a href="/">
    <img src="/bb-logo1.png"></img>
    </a>
  </div>
  <div className={styles.header__nav}>
    <ul>
      <li><Link href="/">About</Link></li>
      <li><Link href="/resume">Resume</Link></li>
      <li><Link href="/">Contact</Link></li>
      <li><Link href="/">Portfolio</Link></li>
    </ul>
  </div>
  </nav>
  </header>
  </>
  )
}
