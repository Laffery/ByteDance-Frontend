import styles from '../../styles/posts/header.module.css'
import { useState, useEffect } from 'react'

function Channel(item, last) {
    return (
        <li className={styles.item} key={item.tag}>
            <a href={item.url} rel='noopener noreferrer'>
                {item.tag}
                { last ? (<i className={ [styles.more_icon, 'btn_icon'] .join(' ') }></i>) : '' }
            </a> 
        </li>
    )
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
                    { state.channels.map((item) => Channel(item, state.channels.indexOf(item) === state.channels.length - 1)) }
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
