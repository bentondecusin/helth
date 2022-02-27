import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Helth</title>
        <meta name="description" content="Helth by Team Helth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a >Helth</a>
        </h1>


        <div className={styles.grid}>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Demo &rarr;</h2>
            <p>See some awesome examples</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
        >
          Made with ❤️ in NYC
        </a>
      </footer>
    </div>
  )
}
