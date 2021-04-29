import styles from '../styles/login.module.css'

function LoginCard() {
    return (
        <div className={styles.login}>
            <div className={styles.login_card}>
                <p className={styles.login_msg}>
                    登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条
                </p>
                <a href="https://sso.toutiao.com">
                    <button className={styles.login_btn} type="button">登录</button>
                </a>
                <ul className={styles.login_3rd}>
                    <li className={styles.login_3rd_party}>
                        <span>QQ</span>
                    </li>
                    <li className={styles.login_3rd_party}>
                        <span>微信</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LoginCard
