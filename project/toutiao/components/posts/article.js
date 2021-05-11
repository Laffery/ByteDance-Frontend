import styles from '../../styles/posts/article.module.css'
import ReactHtmlParser from 'react-html-parser'
import { withRouter } from 'next/router'

function Article({ router, data }) {
    return (
        <div className={styles.article_wrapper}>
            <h1>{ router.query.title ? router.query.title : data.title }</h1>
            <div className={styles.article_meta}>
                <span className={styles.tag}>{ data.tag }</span>
                <span>{ data.author }</span>
                <span>{ data.hot_time }</span>
            </div>
            <article className={styles.article_content}>
                { ReactHtmlParser(data.content) }
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
