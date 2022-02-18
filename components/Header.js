import styles from './Header.module.scss'

export default function Header({ title }) {
  return (
  <>  
  <header className={styles.header}>
    <h1 className="title">{title}</h1>  
  </header>
  </>
  )
}
