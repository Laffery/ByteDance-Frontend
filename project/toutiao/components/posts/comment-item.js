import styles from '../../styles/posts/comment-item.module.css'

function Comment_Item() {
    return (
        <div className={styles.comment_item}>
            <a className={styles.comment_avatar} href="/c/user/51741424949/" target="_blank" rel="noopener noreferrer">
                <div>
                    <img src="https://p9.pstatp.com/img/mosaic-legacy/aad60015f15d4660a352~c5_300x300.image"/>
                </div>
            </a>
            <div style={{marginLeft: '42px'}}>
                <div className={styles.user_info}>
                    <a className={styles.username} href="/c/user/51741424949/" target="_blank" rel="noopener noreferrer">飞龙1422113</a>
                    <span className={styles.create_time}>6天前</span>
                </div>
                <p className={styles.content}>机场的工作人员是不是该反思一下了，一个女人能强闯关卡不可思议，当班人应该负有不可推卸的责任。</p>
                <div className={styles.footer}>
                    <span className={styles.reply_btn}>回复</span>
                    <span className={styles.reply_num}>
                        &nbsp;⋅&nbsp;14条回复
                        <i className={'btn_icon ' + styles.icon_arrow_down}></i>
                    </span>
                    <span className={styles.report_user}>
                        <i className={'btn_icon ' + styles.icon_report}></i>
                    </span>
                    <span className={styles.digg} title="点赞">
                        127&nbsp;
                        <i className={'btn_icon ' + styles.icon_thumbs_up}></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Comment_Item
