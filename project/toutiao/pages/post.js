import Header from '../components/posts/header'
import Middle from '../components/posts/middle'
import Left from '../components/posts/left'
import Center from '../components/posts/center'
import Right from '../components/posts/right'
import Head from 'next/head'
import { useRouter } from 'next/router'

function Article() {
    const { query } = useRouter()
    
    return (
    <div>
        <Head>
            <title>{ query.title }</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <div style={{ marginBottom: '16px' }}>
            <Header></Header>
            <Middle></Middle>
        </div>
        <div style={{ width: '1200px', margin: '0 auto'}}>
            <Left></Left>
            <Center></Center>
            <Right></Right>
        </div>
    </div>
    )
}

export default Article