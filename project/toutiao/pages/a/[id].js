import Header from '../../components/posts/header'
import Middle from '../../components/posts/middle'
import Left from '../../components/posts/left'
import Center from '../../components/posts/center'
import Right from '../../components/posts/right'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FE, URL } from '../../config'

export default function Article({ channels, content, list }) {
    const { query } = useRouter()

    return (
    <div>
        <Head>
            <title>{ query.title }</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <div style={{ marginBottom: '16px' }}>
            <Header data={channels}></Header>
            <Middle></Middle>
        </div>
        <div style={{ width: '1200px', margin: '0 auto'}}>
            <Left></Left>
            <Center data={content} list={list}></Center>
            <Right></Right>
        </div>
    </div>
    )
}

export const getServerSideProps = async () => {
    let res = await fetch(`${URL(FE.Protocol, FE.IP, FE.PORT)}/api/channels-new`)
    let data = await res.json()

    let resp = await fetch(`${URL(FE.Protocol, FE.IP, FE.PORT)}/api/content`)
    let content = await resp.json()

    let response = await fetch(`${URL(FE.Protocol, FE.IP, FE.PORT)}/api/feed`)
    let list = await response.json()

    return { 
        props: { channels: data.data, content: content.data, list: list.data }
    }
}
