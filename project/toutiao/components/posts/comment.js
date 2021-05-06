import styles from '../../styles/posts/comment.module.css'
import CommentItem from './comment-item'

function Comment() {
    return (
        <div className={styles.wrapper}>
            <div id="comment_area" className="article_detail_comment">
                <div className={styles.comment_meta}>
                    <span className={styles.comment_number}>333</span>
                    &nbsp;条评论
                </div>
                <div>
                    <div className={styles.avatar}></div>
                    <div className={styles.input_textarea}>
                        <textarea placeholder="写下您的评论..." spellcheck="false" data_ms_editor="true"></textarea>
                        <div className={styles.input_footer}>
                            <button className={styles.submit_btn} type="button">评论</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.comment_list}>
                <ul>
                    <li>
                        <CommentItem></CommentItem>
                    </li>
                    <li>
                        <CommentItem></CommentItem>
                    </li>
                    <li>
                        <CommentItem></CommentItem>
                    </li>
                </ul>
            </div>
            <div className={styles.more_comment}>
                <button type="button">查看更多评论</button>
            </div>
        </div>
    )
}

export default Comment
