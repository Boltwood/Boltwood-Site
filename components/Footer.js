import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__socials}>
          <ul>
            <li><a href="/"><img src="/fb.png"></img></a></li>
            <li><a href="/"><img src="/linkedin.png"></img></a></li>
            <li><a href="/"><img src="/twitter.png"></img></a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
