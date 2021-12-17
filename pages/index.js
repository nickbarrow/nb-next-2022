import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../scss/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nick Barrow 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome, I{"'"}m <a >Nick Barrow</a>
        </h1>
        <p style={{ fontSize: '1.5rem' }}>📍 Fort Wayne, IN</p>

        <p className={styles.description}>
          I{"'"}m a <code className={styles.code}>web developer</code> (HTML/CSS/JS) currently looking for full-time work, preferrably fully remote positions.
          <br className={styles.br} />
          I have 2 years demonstrated experience in creating and maintaining large-scale eCommerce websites, as well as full-stack JavaScript applications to control and manage business operations.
          I really enjoy eCommerce and have hands-on experience in using tools like Shopify, Google Analytics/Tag Manager, REST/GraphQL APIs, 1st/3rd Party user-tracking.
          I am no stranger to front-end design as well and have really loved working with artists and marketers to design smooth experiences for users.
          <br className={styles.br} />
          For a full list of my skills and work experience, please see my LinkedIn and feel free to send me a message!
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/nickbarrow0/" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>See my work experience or send me a message.</p>
          </a>

          <Link href="/projects" passHref>
            <a className={styles.card}>
              <h2>Examples &rarr;</h2>
              <p>See some of my previous works or free time projects.</p>
            </a>
          </Link>

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
