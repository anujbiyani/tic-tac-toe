import Head from 'next/head';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Offsite 2022</title>
      </Head>

      <div className={styles.nav}>
        <a href="/">Home</a>
        <a href="/about-me">About Me</a>
        <a href="/photos">Photos</a>
      </div>

      <main className={styles.main}>{children}</main>
    </div>
  )
}
