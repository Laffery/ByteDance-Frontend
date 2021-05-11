import styles from '../styles/feed.module.css'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Protocol, IP, Port, Route, Site, URL, _ } from '../config'

var protocol = Protocol
var ip = IP
var port = Port
var route = Route

var no_dislike_count = 2

function video_tip(item) {
    return (item.video_duration_str === undefined) ? '' : (
        <i className={styles.video_tip}>
            <span>{ item.video_duration_str }</span>
        </i>
    )
}

function dislike() {
    return (no_dislike_count-- > 0) ? '' : (
        <div className={styles.dislike}>
            <i className={styles.dislike_icon}></i>
            不感兴趣
        </div>
        )
}

function tag(t) {
    return ((t.chinese_tag !== undefined) ? t.chinese_tag : t.tag);
}

function aggregate(number) {
    if (number === undefined)
        return 0
    if (number >= 1e4)
        return Math.floor(number / 1e4) + '万'
    return number
}

function count_tag(num, tag) {
    return aggregate(num) + tag
}

function title_link(title, id) {
    var router = {
        pathname: '/a/[id]',
        query: {
            title: title,
            id: id
        }
    }

    return (
        <div className={styles.title}>
            <Link href={router} as={`/a/${id}`}><a>{ title }</a></Link>
        </div>
    )
}

function no_mode(item) {
    return (
        <div className={styles.content_card}>
            <div className={styles.content_text_card}>
                
                {title_link(item.title, item.group_id)}

                <div className={styles.content_foot}>
                    <a className={styles.tag} href={item.tag_url}>{tag(item)}</a>
                    <a className={styles.avatar} href={Site + item.media_url} target='_blank' rel='noopener noreferrer'>
                        <Image src={`https:${item.media_avatar_url}`} alt='avatar' width={18} height={18}/>
                    </a>
                    <a href={item.media_url}>&nbsp;{ item.source }&nbsp;·</a>
                    <a href={Site + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>
                        &nbsp;{ count_tag(item.comments_count, '评论') }&nbsp;·</a>
                    <span>&nbsp;{ _(item.behot_time) }</span>
                    { dislike() }
                </div>
            </div>
        </div>
    )
}

function single_mode(item) {
    return (
        <div className={styles.content_card}>
            <div className={styles.content_image}>
                <a href={Site + item.source_url} target='_blank' rel='noopener noreferrer'>
                    <Image src={'https:' + item.image_url} alt={item.title} width={158} height={103}/>
                    { video_tip(item) }
                </a>
            </div>
            <div className={styles.content_text_card_with_image}>

                {title_link(item.title, item.group_id)}

                <div className={styles.content_foot}>
                    <a className={styles.tag} href={item.tag_url}>{tag(item)}</a>
                    <a className={styles.avatar} href={Site + item.media_url} target='_blank' rel='noopener noreferrer'>
                        <Image src={`https:${item.media_avatar_url}`} alt='avatar' width={18} height={18}/>
                    </a>
                    <a href={item.media_url}>&nbsp;{ item.source }&nbsp;·</a>
                    <a href={Site + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>
                        &nbsp;{ count_tag(item.comments_count, '评论') }&nbsp;·</a>
                    <span>&nbsp;{ _(item.behot_time) }</span>
                    { dislike() }
                </div>
            </div>
        </div>
    )
}

function ugc_mode(item) {
    var len = item.ugc_data.ugc_images.length

    return (
        <div className={styles.content_card}>
            { len ? (
            <div className={styles.content_image_ugc}>
                <a href={Site + item.source_url} target='_blank' rel='noopener noreferrer'>
                    <Image src={`https://${item.ugc_data.ugc_images[0]}`} alt='cover' width={158} height={158}/>
                    { len > 1 ? (<i className='video-tip'><span> {len} 图</span></i>) : '' }
                </a>
            </div>
            ) : ''}
            <div className={len ? styles.content_text_card_with_image : styles.content_text_card}>
                <div className={styles.ugc_user}>
                    <div className={styles.ugc_user_avatar}>
                        <a href={Site + item.ugc_data.ugc_user.open_url} target='_blank' rel='noopener noreferrer'>
                            <Image src={item.ugc_data.ugc_user.avatar_url} alt='avatar' width={46} height={46}/>
                        </a>
                    </div>
                    <div className={ugc_user_name}>
                        <div className={styles.ugc_username}>
                            <span>{ item.ugc_data.ugc_user.name }</span>
                        </div>
                        <p className={styles.ugc_meta}><span>未关注</span></p>
                    </div>
                </div>
                <div className={styles.ugc_content}>
                    
                    {title_link(item.title, item.group_id)}

                </div>
                <div className={styles.content_foot}>
                    <a href={Site + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>&nbsp;{ count_tag(item.ugc_data.digg_count, '赞') }&nbsp;·</a>
                    <a href={Site + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>&nbsp;{ count_tag(item.ugc_data.comment_count, '评论') }&nbsp;·</a>
                    <a href={Site + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>&nbsp;{ count_tag(item.ugc_data.display_count, '展现') }&nbsp;·</a>
                    <span>&nbsp;{ _(item.behot_time) }</span>
                    { dislike() }
                </div>
            </div>
        </div>
    )
}

function gallery_mode(item) {
    return (
        <div className={styles.content_card}>
            <div className={styles.content_image}>
                <a href={Site + item.source_url} target='_blank' rel='noopener noreferrer'>
                    <Image src={`https://${item.image_url}`} alt={item.title} width={158} height={103}/>
                    { video_tip(item) }
                </a>
            </div>
            <div className={styles.content_text_card_with_image}>
                
                {title_link(item.title, item.group_id)}

                <div className={styles.content_foot}>
                    <a className={styles.tag} href={item.tag_url}> { tag(item) } </a>
                    <a className={styles.avatar} href={Site + item.media_url} target='_blank' rel='noopener noreferrer'>
                        <Image src={`https:${item.media_avatar_url}`} alt='avatar' width={18} height={18}/>
                    </a>
                    <a href={item.media_url}>&nbsp;{ item.source }&nbsp;·</a>
                    <a href={Site + item.source_url + '//#comment-area' } target='_blank' rel='noopener noreferrer'>
                        &nbsp;{ count_tag(item.comments_count, '评论') }&nbsp;·
                    </a>
                    <span>&nbsp;{ _(item.behot_time) }</span>
                    { dislike() }
                </div>
            </div>
        </div>
    )
}

function FeedBack(item) {
    if (item.article_genre === 'ugc')
        return
    if (item.ugc_data !== undefined)
        return ugc_mode(item)
    else if (item.single_mode)
        return single_mode(item)
    else if (item.has_gallery)
        return gallery_mode(item)
    else
        return no_mode(item)
}

function Feed({ list }) {
    var [flag, setFlag] = useState(true);
    var [data, setData] = useState({
        array: list
    }) // 由于useState好像没有数组的初始化，所以采用这种方式防止后面的map报错

    /*
     * 刷新页面时清楚本地缓存数据
     * 并作第一次、二次的数据请求
     */
    useEffect(() => {
        localStorage.removeItem('data');
        pull()
        route = '/more'
        var t = setTimeout(() => pull(), 2000);
        return () => {
            clearTimeout(t)
        }
    }, [])

    function pull() {
        // fetch(URL(protocol, ip, port) + route).then((response) => {
        //     response.json().then((res) => {
        //         var tmp = JSON.parse(localStorage.getItem('data'))
        //         if (!tmp) tmp = []
        //         localStorage.setItem('data', JSON.stringify([...tmp, ...res.data]))
        //         setData({ array: JSON.parse(localStorage.getItem('data')) })
        //     })
        // }).catch((e) => {
        //     console.log(e)
        // })

        fetch('/api/feed').then(async (response) => {
            const res = await response.json()
            var tmp = JSON.parse(localStorage.getItem('data'))
            if (!tmp) tmp = []
            localStorage.setItem('data', JSON.stringify([...tmp, ...res.data]))
            setData({ array: JSON.parse(localStorage.getItem('data')) })
        }).catch((e) => {
            console.log(e)
        })
    }

    useEffect(() => {
        /*
        设置⏲来防止下滑到底部时短时间内大量发送请求，以至于ip被封
        */

        function update() {
            if (flag === false) 
                return
                
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
            var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight || 0

            if ((scrollHeight - scrollTop) <= clientHeight * 1.05)
            {    
                setFlag(false);
                pull();
                setTimeout(() => {
                    setFlag(true)
                }, 1000)
            }
        }

        window.addEventListener('scroll', update)
        return () => {
            window.removeEventListener('scroll', update)
        }
    }, [])

    return (
        <div className={styles.center}>
            <div className={styles.content}>
                <ul id={styles.content_list}>
                { data.array.map((item, index) => (
                    <li key={index}> { FeedBack(item) } </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Feed
