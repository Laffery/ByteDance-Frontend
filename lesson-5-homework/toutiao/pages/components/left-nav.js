import { useEffect } from 'react';

function LeftNavItem(item, active) {
    return (
        <li key={item.tag}>
            <a className={active ? 'channel-item active' : 'channel-item'} href={item.url} rel='noopener noreferrer'>
                {item.tag} 
            </a> 
        </li>
    )
}

function LeftNav() {
    var channels = [
        { tag: '推荐', url: './index.html' },
        { tag: '西瓜视频', url: 'https://www.ixigua.com' },
        { tag: '热点', url: 'https://www.toutiao.com/ch/news_hot/' },
        { tag: '直播', url: 'https://live.ixigua.com' },
        { tag: '图片', url: 'https://www.toutiao.com/ch/news_image/' },
        { tag: '科技', url: 'https://www.toutiao.com/ch/news_tech/' },
        { tag: '娱乐', url: 'https://www.toutiao.com/ch/news_entertainment/' },
        { tag: '游戏', url: 'https://www.toutiao.com/ch/news_game/' },
        { tag: '体育', url: 'https://www.toutiao.com/ch/news_sports/' },
        { tag: '懂车帝', url: 'https://www.dongchedi.com/?zt=tt_pc_home_channel' },
        { tag: '财经', url: 'https://www.toutiao.com/ch/news_finance/' },
        { tag: '数码', url: 'https://www.toutiao.com/ch/digital/' },
        { tag: '更多', url: '' }
    ];
    
    var active = 0;
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0;
            // console.log(scrollTop)
            document.getElementById('left-container').setAttribute('class', (scrollTop >= 50) ? 'left left-fixed': 'left');
        });
    }, []);

    return <div className="left">
        <div id="left-container">
            <div className="logo">
                <a href="https://www.toutiao.com/" rel="noopener noreferrer">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAA2CAMAAACSsKctAAAANlBMVEVHcEzuQEDwRETyRUX3TEzvQkLuQEDuQUHuQUHvQEDuQUHuQEDvQkLuQEDuQUHwQUHxQkLtQEDKaksGAAAAEXRSTlMAxiweDlyo49Nri/F5+bhLOapXaIgAAATMSURBVGje7ZrpsqQqDIAb2VEE3/9lx263AAmu3XVv1cn8mFOtIh+JIQuvFyFSzdK8/jsSrbg7BG+HSdjPZi3iJPTchR7a7iYam7mGNvwKTM5vlOQd6n3Z37IhN6zSNhW1TsJqMt/TwQk6G3gxmt0DC5/LfpxS9U38wOJ9RJN38uG4KGBR0wRNxrcHtn4dlPjpv4pCYzqEEffBfAG2XDC9sxyCUbbfH3wVDdbkS2P4FzQGRR4As8NdsEYXy01Y4xMa28C6KljT3gUDXNtYOn5fY3UwNtwEA9+XA397+zONxR03fQ1MerjG0Is4QYK5riLzEMDdC4+CuQoY99sKoW9R20z5zsKwN0gAczDFUohdPzSKRpw4j9Yp0+Jg2GgCrHBf3sAVuIytC8u4RjIwYmGOh8AMvTutfLtgydR8ZjzCgeV32M7eFlyZj2T8GY3lfHwNmChTGmcP5tECNNFBf4m4AqEGhGt8rYEj2i+AwUhwFCocgOs+ok383MFfMecdoGYUHFwkW76Jz5kiHlmQ4TtPY48+iNAnfqgX1a+vtNMueXyjvqox5WTkJFgthq3t0i2ydhY+4MsbYhKMtEu6dxFseqw1Gd+s2raasylPRgCluoJJgnnU3SYaHbS8Y4rJBv3h42AFdN1gGzwWZtgcMHD3Xk5BfYOz67qlsWKDnq3G1DP74DTCZVwQVbA1X57WpWWqk40od4svgInKBrtUPJSpfGPGyYYC6zma/OjJm0RzBcwcBONltAzKIVYxfyBObJlbFAHAtKSyOla4x+c1FiuhAxvOiDcpWBKo4GDbp3sLDA2CJR07EGCaUZYJwUys5OGgBhdYCRYFIWQQHKzrjU/AXCUdQ8C0e0+Y295XwbSsFhiS4qLUC9hePsZ2QqqVT4I3NvtgvrfbXQLxkwsYUoWsgI37uX4GbOXj231+J332DPHsXKb+cknCkC2gkZ1iLQE2RtRPgiVJq6mAadVtUKL5CAea69v9qGxxs/KTMLFrVaozYLLi7UcwrVxWY3XYtjfu32q07cOF/Ob7YKpWLm0Emewj+7m43Ud5EGzdAvjJKnz/jTbCg2B2OBIpXgBzZl9a/xFdhBChwYWXYIEYe1GYzn6fHlPIE3rJDhBBTPxIPHYng5bDObEXQqrEK34PTP+B/c/A/kzxD+wUWLB1AXVJd8cUm3Jkv1W/SpmGlsiVOUw32GxPbMVbZtA9WwneGjo+Xun/34s8hEGLqQ+AgUaVff0cDHCpJ7stSZvKTVW//vNPoXVuNV3rVQ7WVR+juRjRfLqtMeuzkWOtG2SxdtrnuehrSc9utyBpwjwB5sp23eqdI33Og5Wm6IZan3eXKz/wcc8UYdl87ZOsrUtDZmzz6xIwoU9nB2CHKw5FLGBWVkQXzrTsu4Fvw1K+JGRWmjoPiTjto6eqysMeF08NFA0chRVu8jNRyzpogXpF6rF9LuSw2MVzHtnphMxRNLgj6IasdpCBNef8B+CKj53zyI5tWOqdATsP0VP7GPoYJd1QDQuuagw2f30xj9URaFF6MM8pMPSxfa7w4FmqxtTb4YgjCOVPReQRanvgKa5TGuvQ7j9+rq5QD6aNMqRa/LffKb9JvQoR6Al9XCQyrCZCIL5eX5Z4+QEscJfekj/2D7KhSDEKe9jHAAAAAElFTkSuQmCC"/>
                </a>
            </div>
            <div className="channel-nav">
                <ul id="channel-ul">{channels.map((item) => LeftNavItem(item, channels[active] === item))}</ul>
            </div>
        </div>
    </div>
}

export default LeftNav
