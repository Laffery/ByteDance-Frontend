function Header() {
    return <div id="header">
        <div id="left-nav">
            <div id="header-download-app">
                <a href="https://app.toutiao.com" target="_blank" rel="noopener noreferrer">
                    下载APP
                </a>
            </div>
            <div id="header-sign-up">
                <a href="https://mp.toutiao.com" target="_blank" rel="noopener noreferrer">
                    注册头条号
                </a>
            </div>
            <div id="header-weather" rel="noopener noreferrer">
                <span>&nbsp;北京</span>
                <span>浮尘</span>
                <span><em>4</em>℃ &nbsp; / &nbsp; <em>12</em>℃</span>
                <i className="header-weather-icon"></i>
            </div>
        </div>
        <div id="right-nav">
            <div id="complaint">
                <a href="https://mp.toutiao.com/profile_v4_public/public/protocol/complains/" target="_blank" rel="noopener noreferrer">
                    侵权投诉
                </a>
            </div>
            <div id="product">
                <a href="https://www.toutiao.com/about/" rel="noopener noreferrer">
                    头条产品
                </a>
            </div>
        </div>
    </div>
}

export default Header
