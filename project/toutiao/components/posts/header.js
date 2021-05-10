import styles from '../../styles/posts/header.module.css'
import { useState, useEffect } from 'react'

function ChannelItem(url, tag) {
    return (
        <li className={styles.item} key={tag}>
            <a href={url} rel='noopener noreferrer'> {tag} </a>
        </li>
    )
}

function ChannelItemMore(url, tag) {
    return (
        <li className={[styles.item, styles.item_more].join(' ')} key={ tag }>
            <a href={ url } rel='noopener noreferrer'>
                { tag }
                <i className={ [styles.more_icon, 'btn_icon'] .join(' ') }></i>
            </a>
            <div className={styles.nav_layer}>
                <ul>
                    <li className={styles.nav_more_item} key={1}>
                        <a href="https://www.toutiao.com/ch/news_discovery/" target="_blank" rel="noopener noreferrer">探索</a>
                    </li>
                    <li className={styles.nav_more_item} key={2}>
                        <a href="https://www.toutiao.com/ch/news_baby/" target="_blank" rel="noopener noreferrer">育儿</a>
                    </li>
                    <li className={styles.nav_more_item} key={3}>
                        <a href="https://www.toutiao.com/ch/news_regimen/" target="_blank" rel="noopener noreferrer">养生</a>
                    </li>
                    <li className={styles.nav_more_item} key={4}>
                        <a href="https://www.toutiao.com/ch/news_essay/" target="_blank" rel="noopener noreferrer">美文</a>
                    </li>
                    <li className={styles.nav_more_item} key={5}>
                        <a href="https://www.toutiao.com/ch/news_game/" target="_blank" rel="noopener noreferrer">游戏</a>
                    </li>
                    <li className={styles.nav_more_item} key={6}>
                        <a href="https://www.toutiao.com/ch/news_history/" target="_blank" rel="noopener noreferrer">历史</a>
                    </li>
                    <li className={styles.nav_more_item} key={7}>
                        <a href="https://www.toutiao.com/ch/news_food/" target="_blank" rel="noopener noreferrer">美食</a>
                    </li>
                </ul>
            </div>
        </li>
    )
}

function Channel(props) {
    const item = props.data
    const last = props.last
    if (!last) return ChannelItem(item.url, item.tag)
    else return ChannelItemMore(item.url, item.tag)
}

function Header() {
    var [state, setState] = useState({
        channels: []
    })

    useEffect(() => {
        fetch('/api/channels-new').then(async (res) => {
            const resp = await res.json()
            setState({ channels: resp.data })
        })
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.channels}>
                <ul>
                    { state.channels.map((item) => (
                        <Channel data={item} last={item.tag === '更多'}></Channel>
                    ) )}
                </ul>
            </div>
            <div className={styles.right_nav}>
                <div id={styles.login}>
                    <a href="https://mp.toutiao.com/profile_v4_public/public/protocol/complains/" target="_blank" rel="noopener noreferrer">
                        登录
                    </a>
                </div>
                <div id={styles.complaint}>
                    <a href="https://mp.toutiao.com/profile_v4_public/public/protocol/complains/" target="_blank" rel="noopener noreferrer">
                        侵权投诉
                    </a>
                </div>
                <div id={styles.product}>
                    <a href="https://www.toutiao.com/about/" rel="noopener noreferrer">
                        头条产品
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
