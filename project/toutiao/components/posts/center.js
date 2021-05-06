import styles from '../../styles/posts/center.module.css'

import Article from './article'
import Comment from './comment'
import Feed from '../feed'

function Container() {

    return (
        <div className={styles.wrapper}>
            <Article></Article>
            <Comment></Comment>
            <div className={styles.feed_wrapper}>
                <div className={styles.feed}>
                    <p className={styles.subtitle}>相关推荐</p>
                    <Feed></Feed>
                </div>
            </div>
        </div>
    )
}

export default Container
