import Head from 'next/head'
import Form from './form'

import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Example() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example 1</title>
        <meta name="description" content="Helth by Team Helth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.grid}>
          <p
            className={styles.card}
          >
            Type in Cornell ID
          </p>
        </div>
        <Form></Form>
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
