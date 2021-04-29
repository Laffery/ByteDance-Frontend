import Head from 'next/head'

// components
import Header from '../components/header'
import LeftNav from '../components/left-nav'
import Feed from '../components/feed'
import RightNav from '../components/right-nav'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>今日头条</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       	<div>
          <Header></Header>
       		<div id={styles.main}>
         		<LeftNav></LeftNav>
 				    <Feed></Feed>
         		<RightNav></RightNav>
       		</div>
        </div>
      </main>
    </div>
  )
}
