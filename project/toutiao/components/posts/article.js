import styles from '../../styles/posts/article.module.css'
import { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { withRouter } from 'next/router'

function Article({ router }) {
    const [state, setState] = useState({ data: {} })

    useEffect(() => {
        fetch('/api/content').then(async res => {
            const resp = await res.json()
            setState({
                data: { ...resp.data }
            })
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <div className={styles.article_wrapper}>
            <h1>{ router.query.title }</h1>
            <div className={styles.article_meta}>
                <span className={styles.tag}>{ state.data.tag }</span>
                <span>{ state.data.author }</span>
                <span>{ state.data.hot_time }</span>
            </div>
            <article className={styles.article_content}>
                { ReactHtmlParser(state.data.content) }
            </article>
            <div className={styles.content_action}>
                <div className={styles.meta_info}>
                </div>
                <div className={styles.action_list}>
                    <div className={styles.action_item}>
                        <i className={ 'btn_icon ' + styles.icon_favorite }></i>
                        <span>收藏</span>
                    </div>
                    <div className={styles.action_item}>
                        <i className={ 'btn_icon ' + styles.icon_report }></i>
                        <span>举报</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Article)
