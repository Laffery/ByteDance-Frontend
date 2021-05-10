import styles from '../../styles/posts/left.module.css'
import { useState, useEffect } from 'react'

function Container() {
    const [style, setStyle] = useState(styles.left_null)
    useEffect(() => {
        function leftFixer() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0
            if (scrollTop >= 92)
                setStyle(styles.left_fixed)
            else
                setStyle(styles.left_null)
        }

        window.addEventListener('scroll', leftFixer)

        return () => {
            window.removeEventListener('scroll', leftFixer)
        }
    }, [])

    return (
        <div className={styles.tools_wrapper}>
            <div className={ style }>
                <div className={styles.comment_count}>
                    <i className={'btn_icon ' + styles.comment_count_icon}></i>
                    <span>279</span>
                </div>
                <hr/>
                <ul className={styles.share_tools}>
                    <li>
                        <div className={styles.article_repost}>
                            <img className={styles.repost_img} src="//s3.pstatp.com/toutiao/static/img/repost.021bf16.png"/>
                            <span>转发</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.article_repost}>
                            <i className={'btn_icon ' + styles.icon_sina}></i>
                            <span>微博</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.article_repost}>
                            <i className={'btn_icon ' + styles.icon_qzone}></i>
                            <span>Qzone</span>
                            </div>
                    </li>
                    <li>
                        <div className="share-wx-wrapper">
                            <div className={styles.article_repost}>
                                <i className={'btn_icon ' + styles.icon_weixin}></i>
                                <span>微信</span>
                            </div>
                            <div className="wx-share-qrcode" style={{display: 'none'}}>
                                <p>微信扫一扫</p>
                                <div id="wx-qrcode" title="https://www.toutiao.com/a6956185210279068191/?utm_source=tt_pc_wx">
                                    <canvas width="82" height="82" style={{display: 'none'}}></canvas>
                                    <img alt="Scan me!" style={{display: 'block'}} src="data:image/png;base64,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"/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Container
