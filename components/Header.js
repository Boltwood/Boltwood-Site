import styles from './Header.module.scss'

export default function Header({ title }) {
  return (
    <>
  <header className={styles.header}>
  {/* <h1 className="title">{title}</h1> */}
  <nav>
  <div className={styles.header__logo}>
    <a href="/">
      <img src="/bb-logo.png"></img>
    </a>
  </div>
  <div className={styles.header__nav}>
    <ul>
      <li><a href="/">About</a></li>
      <li><a href="/">CV</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
  </div>
  </nav>
  </header>
  </>
  )
}
