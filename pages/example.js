import Head from 'next/head'
import Form from './form'

import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Example() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Helth Example</title>
        <meta name="description" content="Helth by Team Helth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.grid}>
          <a
            href="/eg1"
            className={styles.card}
          >
            <h2>Example 1</h2>
            <p>1 student</p>
          </a>
          <a
            href="/eg2"
            className={styles.card}
          >
            <h2>Example 2</h2>
            <p>Multiple Customers</p>
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
