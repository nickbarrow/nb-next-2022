import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { SRLWrapper } from "simple-react-lightbox"

import styles from '../scss/Home.module.scss'


const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
`;

const TimelineH2 = styled.h2`
  width: 100%;
  text-align: left;
`;

const TLItem = styled.a`
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid dodgerblue;
  text-align: left;
  width: 90%;
  height: 100%;
  margin-left: 20px;
  position: relative;
  transition: all ease .3s;
  margin-bottom: 50px;
  &:hover {
    color: dodgerblue;
  }
  &:before {
    content: attr(data-year);
    position: absolute;
    left: -65px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: dodgerblue;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 12px;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  p {
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin: .5rem 0 ;
  }
`;

const TLImg = styled.img`
  display: block;
  border: 1px solid #eee;
  border-radius: 7px;
  padding: 5px;
  max-width: 100%;
  margin: 0 auto 30px;
`;

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
          Work Experience
        </h1>
        <hr style={{
          width: '30%',
          margin: '20px'
        }} />

        <TimelineH2>Shindigz:</TimelineH2>
        <Timeline>
          <TLItem data-year="Feb 2020" href="web.archive.org/web/20200229180107/www.shindigz.com">
            <TLImg src="/images/sz_old.png" alt="Shindigz Website in February 2020" />
            <p style={{ marginBottom: '30px' }}>Shindigz website when I joined the team.</p>
            <TLImg src="/images/sz_old_mobile.png" alt="Shindigz Website in February 2020" />
            <p>Previous mobile design which was very difficult to use.</p>
          </TLItem>

          <TLItem data-year="Jul 2020" href="web.archive.org/web/20200229180107/www.shindigz.com">
            <TLImg src="images/sz_2020.png" alt="Shindigz Website in July 2020" />
            <p style={{ marginBottom: '30px' }}>Shindigz after initial redesign.</p>
            <TLImg src="/images/sz_2020_mobile.png" alt="Shindigz Website in July 2020" />
            <p style={{ marginBottom: '30px' }}>Completely redesigned mobile experience.</p>
            <TLImg src="/images/sz_2020_mobile_nav.png" alt="Shindigz Website in July 2020" />
            <p>All new mobile navigation.</p>
          </TLItem>

          <TLItem data-year="Mar 2021" href="https://www.shindigz.com">
            <TLImg src="images/sz_new.png" alt="Shindigz Website in March 2021" />
            <p style={{ marginBottom: '30px' }}>Shindigz on Shopify and BRX SPA frontend.</p>
            <TLImg src="/images/sz_new_mobile.png" alt="Shindigz Website in March 2021" />
            <p style={{ marginBottom: '30px' }}>New mobile experience.</p>
          </TLItem>
        </Timeline>

        <h2 style={{
          fontSize: '28px',
          textDecoration: 'underline',
          marginTop: '50px'
        }}>Personal Projects:</h2>
    
        <Timeline>
          <TimelineH2>Secret Santa 2021:</TimelineH2>
          <TLItem data-year="2021" href="https://ss2021.vercel.app/">
            <TLImg src="/images/ss.png" alt="Secret Santa 2021" />
            <p style={{ marginBottom: '30px' }}>A Secret Santa group creation app with gift requests and match generation.</p>
          </TLItem>

          <TimelineH2>Beer Properties:</TimelineH2>
          <TLItem data-year="2021" href="https://r4tws.csb.app/">
            <TLImg src="/images/beer.png" alt="PBJ Chan" />
            <p style={{ marginBottom: '30px' }}>A real estate property listing site. Front end in React, backend on Google Firebase, WIP.</p>
          </TLItem>

          <TimelineH2>PBJ Chan:</TimelineH2>
          <TLItem data-year="2020" href="https://xwhpg.csb.app/">
            <TLImg src="/images/pbj.png" alt="PBJ Chan" />
            <p style={{ marginBottom: '30px' }}>PBJ Chan. A forum to share your delicious PBJs. Front end using React, backend on Google Firebase.</p>
            <p>Features realtime feed, replies, reactions, score.</p>
          </TLItem>

          <TimelineH2>GitHub:</TimelineH2>
          <TLItem data-year="2021" href="https://github.com/nickbarrow">
            {/* <TLImg src="/images/pbj.png" alt="PBJ Chan" /> */}
            <p>See my GitHub for a full list of projects.</p>
          </TLItem>
        </Timeline>
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
