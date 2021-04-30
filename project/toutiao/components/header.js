import styles from '../styles/header.module.css'

function Header() {
    return <div id={styles.header}>
        <div id={styles.left_nav}>
            <div id="header-download-app">
                <a href="https://app.toutiao.com" target="_blank" rel="noopener noreferrer">
                    下载APP
                </a>
            </div>
            <div id={styles.header_sign_up}>
                <a href="https://mp.toutiao.com" target="_blank" rel="noopener noreferrer">
                    注册头条号
                </a>
            </div>
            <div id={styles.header_weather} rel="noopener noreferrer">
                <span>&nbsp;北京</span>
                <span>浮尘</span>
                <span><em>4</em>℃ &nbsp; / &nbsp; <em>12</em>℃</span>
                <i className={'btn_icon ' + styles.header_weather_icon}></i>
            </div>
        </div>
        <div id={styles.right_nav}>
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
}

export default Header
