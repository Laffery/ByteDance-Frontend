import styles from '../../styles/posts/right.module.css'

function Container() {
    return (
        <div className={styles.right_wrapper}>
            <div className={styles.media_info}>
                <div className={styles.user_info}>
                    <a className={styles.user_avatar} target="_blank" rel="noopener noreferrer" href="/c/user/token/MS4wLjABAAAAv0QcUypFz9CErjgw6EaDRg4siwvBJU-eNiX-kZSlWgM/">
                        <img src="https://p5.toutiaoimg.com/large/1010/308593673" alt=''/>
                    </a>
                    <div className={styles.user_name}>
                        <a className={styles.name} target="_blank" rel="noopener noreferrer" href="/c/user/token/MS4wLjABAAAAv0QcUypFz9CErjgw6EaDRg4siwvBJU-eNiX-kZSlWgM/">潇湘晨报</a>
                        <div className={styles.user_subscribe_wrapper}>
                            <i className={ 'btn_icon ' + styles.icon_add_small }></i>
                            <span>关注</span>
                        </div>
                    </div>
                </div>

                <ul className={styles.related_list}>
                    <li className={styles.related_list_item}>
                        <a href="https://www.toutiao.com/item/6956734272006783502/" target="_blank" rel="noopener noreferrer">
                            波兰宫殿下埋着48箱黄金，纳粹军官日记和情书透露藏匿之地，情人看守宝物60年；下周开始挖掘
                        </a>
                    </li>
                    <li className={styles.related_list_item}>
                        <a href="https://www.toutiao.com/item/6956734270132093477/" target="_blank" rel="noopener noreferrer">
                            洛杉矶连环枪击案一中国人遇难，枪手在洛杉矶五处不同地点行凶，两人丧生两人受伤
                        </a>
                    </li>
                    <li className={styles.related_list_item}>
                        <a href="https://www.toutiao.com/item/6956731521160086053/" target="_blank" rel="noopener noreferrer">
                            印度累计确诊超过1800万例
                        </a>
                    </li>
                    <li className={styles.related_list_item}>
                        <a href="https://www.toutiao.com/item/6956594226872238605/" target="_blank" rel="noopener noreferrer">
                            广西一市民死在朋友电动车上，警方通报：初步排除刑事案件可能
                        </a>
                    </li>
                    <li className={styles.related_list_item}>
                        <a href="https://www.toutiao.com/item/6956591923045990924/" target="_blank" rel="noopener noreferrer">
                            广西幼儿园伤人案受伤人员伤情稳定，警方通报：初步认定嫌犯患精神分裂
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Container
