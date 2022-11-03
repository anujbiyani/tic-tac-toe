import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
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

      <main>
        <h1>
          Anuj Biyani
        </h1>
      </main>
    </div>
  )
}
