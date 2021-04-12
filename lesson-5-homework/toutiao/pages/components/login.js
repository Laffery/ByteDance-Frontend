function LoginCard() {
    return (
        <div className="login">
            <div className="login-card">
                <p className="login-msg">
                    登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条
                </p>
                <a href="https://sso.toutiao.com">
                    <button className="login-btn" type="button">登录</button>
                </a>
                <ul className="login-3rd">
                    <li className="login-3rd-party qq">
                        <span>QQ</span>
                    </li>
                    <li className="login-3rd-party wechat">
                        <span>微信</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LoginCard
