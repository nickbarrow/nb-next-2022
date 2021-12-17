import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../scss/Home.module.css'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Examples of my work" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <a style={{ color: 'dodgerblue', cursor: 'pointer', textDecoration: 'underline' }}>
            <h2>&larr; Back to Home</h2>
          </a>
        </Link>
        <h1 className={styles.title}>
          Previous Work {"&"} Projects
        </h1>

        {/* <p className={styles.description}>
        </p> */}

        <div className={styles.grid}>
          <a href="https://github.com/nickbarrow" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Link to my public GitHub repos.</p>
          </a>

          <a href="https://nb-commerce.vercel.app/" className={styles.card}>
            <h2>NB Commerce &rarr;</h2>
            <p>My fake online store.</p>
            {/* <a href="github.com">View on GitHub &rarr;</a> */}
          </a>

          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
