import Head from 'next/head'

// components
import Header from '../components/header'
import LeftNav from '../components/left-nav'
import Feed from '../components/feed'
import RightNav from '../components/right-nav'
import styles from '../styles/home.module.css'

import { FE, URL } from '../config'

export default function Home({ channels, list }) {
  return (
    <div>
      <Head>
        <title>今日头条</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <main>
       	<div>
          <Header></Header>
       		<div id={styles.main}>
         		<LeftNav data={channels}></LeftNav>
 				    <Feed list={list}></Feed>
         		<RightNav></RightNav>
       		</div>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  let res = await fetch(`${URL(FE.Protocol, FE.IP, FE.PORT)}/api/channels`)
  let data = await res.json()

  let resp = await fetch(`${URL(FE.Protocol, FE.IP, FE.PORT)}/api/feed`)
  let list = await resp.json()

  return { 
      props: { channels: data.data, list: list.data }
  }
}
