import items from './item';
import { useState, useEffect } from 'react';

var protocol = 'http';
var ip = 'localhost';
// var ip = '175.24.127.98'; // my tencent cloud server's public ip
var port = '2021';
var route = '/home';

function url(pr, i, p) {
    return pr + '://' + i + ':' + p
}

var no_dislike_count = 2;

function video_tip(item) {
    return (item.video_duration_str === undefined) ? '' : (
        <i className='video-tip'>
            <span>{ item.video_duration_str }</span>
        </i>
    )
}

function dislike() {
    return (no_dislike_count-- > 0) ? '' : (
        <div className='dislike'>
            <i className='dislike-icon'></i>
            不感兴趣
        </div>
        )
}

function tag(t) {
    return ((t.chinese_tag !== undefined) ? t.chinese_tag : t.tag);
}

function aggregate(number) {
    if (number === undefined)
        return 0;
    if (number >= 1e4)
        return Math.floor(number / 1e4) + '万';
    return number;
}

function count_tag(num, tag) {
    return aggregate(num) + tag;
}

function no_mode(item, index) {
    return (
    <li key={index}>
        <div className='content-card'>
            <div className='content-text-card'>
                <div className='title'>
                    <a href={'https://toutiao.com' + item.source_url} target='_blank' rel='noopener noreferrer'>{ item.title }</a>
                </div>
                <div className='content-foot'>
                    <a className='tag'>{tag(item)}</a>
                    <a className='avatar' href={'https://toutiao.com' + item.media_url} target='_blank' rel='noopener noreferrer'>
                        <img src={'https:' + item.media_avatar_url}/>
                    </a>
                    <a>&nbsp;{item.source}&nbsp;·</a>
                    <a href={'https://toutiao.com' + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>
                        &nbsp;{ count_tag(item.comments_count, '评论') }&nbsp;·</a>
                    <span>&nbsp;{ _(item.behot_time) }</span>
                    { dislike() }
                </div>
            </div>
        </div>
    </li>
    )
}

function single_mode(item, index) {
    return (
    <li key={index}>
        <div className='content-card'>
            <div className='content-image'>
                <a href={'https://toutiao.com' + item.source_url} target='_blank' rel='noopener noreferrer'>
                    <img src={'https://' + item.image_url}/>
                    { video_tip(item) }
                </a>
            </div>
            <div className='content-text-card has-image'>
                <div className='title'>
                    <a href={'https://toutiao.com' + item.source_url} target='_blank' rel='noopener noreferrer'> 
                        {item.title}
                    </a>
                </div>
                <div className='content-foot'>
                    <a className='tag'>{tag(item)}</a>
                    <a className='avatar' href={'https://toutiao.com' + item.media_url} target='_blank' rel='noopener noreferrer'>
                        <img src={'https:' + item.media_avatar_url}/>
                    </a>
                    <a>&nbsp;{item.source}&nbsp;·</a>
                    <a href={'https://toutiao.com' + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>
                        &nbsp;{ count_tag(item.comments_count, '评论') }&nbsp;·</a>
                    <span>&nbsp;{ _(item.behot_time) }</span>
                    { dislike() }
                </div>
            </div>
        </div>
    </li>
    )
}

function ugc_mode(item, index) {
    var len = item.ugc_data.ugc_images.length;

    return (
    <li key={index}>
        <div className='content-card'>
            { len ? (
            <div className='content-image ugc'>
                <a href={'https://toutiao.com' + item.source_url} target='_blank' rel='noopener noreferrer'>
                    <img src={'https://' + item.ugc_data.ugc_images[0]} />
                    { len > 1 ? (<i className='video-tip'><span> {len} 图</span></i>) : '' }
                </a>
            </div>
            ) : ''}
            <div className={len ? 'content-text-card has-image' : 'content-text-card' }>
                <div className='ugc-user'>
                    <div className='ugc-user-avatar'>
                        <a href={'https://toutiao.com' + item.ugc_data.ugc_user.open_url} target='_blank' rel='noopener noreferrer'>
                            <img src={ item.ugc_data.ugc_user.avatar_url } />
                        </a>
                    </div>
                    <div className='ugc-user-name'>
                        <div className='ugc-username'>
                            <span>{ item.ugc_data.ugc_user.name }</span>
                        </div>
                        <p className='ugc-meta'><span>未关注</span></p>
                    </div>
                </div>
                <div className='ugc-content'>
                    <a href={'https://toutiao.com/group/' + item.group_id } target='_blank' rel='noopener noreferrer'>
                        { item.title }
                    </a>
                </div>
                <div className='content-foot'>
                    <a href={'https://toutiao.com' + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>&nbsp;{ count_tag(item.ugc_data.digg_count, '赞') }&nbsp;·</a>
                    <a href={'https://toutiao.com' + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>&nbsp;{ count_tag(item.ugc_data.comment_count, '评论') }&nbsp;·</a>
                    <a href={'https://toutiao.com' + item.source_url + '//#comment-area'} target='_blank' rel='noopener noreferrer'>&nbsp;{ count_tag(item.ugc_data.display_count, '展现') }&nbsp;·</a>
                    <span>&nbsp;{ _(item.behot_time) }</span>
                    { dislike() }
                </div>
            </div>
        </div>
    </li>
    )
}

function gallery_mode(item, index) {
    return (
    <li key={index}>
        <div className='content-card'>
            <div className='content-image'>
                <a href={'https://toutiao.com' + item.source_url} target='_blank' rel='noopener noreferrer'>
                    <img src={'https://' + item.image_url} />
                    { video_tip(item) }
                </a>
            </div>
            <div className='content-text-card has-image'>
                <div className='title'>
                    <a href={'https://toutiao.com' + item.source_url} target='_blank' rel='noopener noreferrer'>
                        { item.title }
                    </a>
                </div>
                <div className='content-foot'>
                    <a className='tag'> { tag(item) } </a>
                    <a className='avatar' href={'https://toutiao.com' + item.media_url} target='_blank' rel='noopener noreferrer'>
                        <img src={'https:' + item.media_avatar_url} />
                    </a>
                    <a>&nbsp;{ item.source }&nbsp;·</a>
                    <a href={'https://toutiao.com' + item.source_url + '//#comment-area' } target='_blank' rel='noopener noreferrer'>
                        &nbsp;{ count_tag(item.comments_count, '评论') }&nbsp;·
                    </a>
                    <span>&nbsp;{ _(item.behot_time) }</span>
                    { dislike() }
                </div>
            </div>
        </div>
    </li>
    )
}

function _() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    if (!e)
        return "";
    var t = 1e3 * 60;
    var a = (new Date()).getTime() - 1e3 * e;
    var r = Math.floor(a / t);
    if (r < 1)
        return "\u521a\u521a";
    if (r < 60)
        return "".concat(r, "\u5206\u949f\u524d");
    else if (r < 60 * 24)
        return "".concat(Math.floor(r / 60), "\u5c0f\u65f6\u524d");
    else if (r < 60 * 24 * 30)
        return "".concat(Math.floor(r / 1440), "\u5929\u524d");
    else if (r < 60 * 24 * 30 * 12)
        return "".concat(Math.floor(r / 43200), "\u6708\u524d");
    var d = new Date(e);
    return d.getFullYear() + '\u5e74' + (d.getMonth() + 1) + '\u6708' + d.getDate() + '\u65e5';
}

function FeedBack(item, index) {
    if (item.article_genre === 'ugc')
        return
    if (item.ugc_data !== undefined)
        return ugc_mode(item, index)
    else if (item.single_mode)
        return single_mode(item, index)
    else if (item.has_gallery)
        return gallery_mode(item, index)
    else
        return no_mode(item, index)
}

function News() {
    var [flag, setFlag] = useState(true);
    var [data, setData] = useState({
        array: []
    });

    function pull() {
        console.log('pull')
        fetch(url(protocol, ip, port) + route).then((response) => {
            route = '/more'
            response.json().then((res) => {
                console.log(res.data)
                var tmp = data.array
                setData({ array: [...tmp, ...res.data] })
                console.log(data.array)
            })
        }).catch((e) => {
            console.log(e)
        })
    }

    useEffect(() => {
        pull();
    }, [])

    useEffect(() => {
        /*
        设置⏲来防止下滑到底部时短时间内大量发送请求，以至于ip被封
        */

        function update() {
            if (flag === false) 
                return
                
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight || 0;

            if ((scrollHeight - scrollTop) <= clientHeight * 1.05)
            {    
                setFlag(false);
                pull();
                setTimeout(() => {
                    console.log('hello world')
                    setFlag(true)
                }, 1000);
            }
        }

        window.addEventListener('scroll', update);
        return () => {
            window.removeEventListener('scroll', update);
        }
    }, [])

    return (
        <div className='center'>
            <div className='content'>
                <ul id='content-list'>{data.array.map((item, index) => FeedBack(item, index))}</ul>
            </div>
        </div>
    )
}

export default News
