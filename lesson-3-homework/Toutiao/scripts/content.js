var protocol = 'http';
// var ip = 'localhost';
var ip = '175.24.127.98'; // my tencent cloud server's public ip
var port = '2021';
var route = '/home';

function url(pr, i, p) {
    return pr + '://' + i + ':' + p;
}

function pull() {
    var xml;
    if (window.XMLHttpRequest) {
        xml = new XMLHttpRequest();
    }

    xml.onreadystatechange = function () {
        if (xml.status == 200 & xml.readyState === 4) {
            var content = JSON.parse(xml.responseText).data;
            render(content);
            console.log(content);
        }
    }
    xml.open('GET', url(protocol, ip, port) + route, true);
    xml.send(null);
    route = '/more';
}

var no_dislike_count = 2;

function video_tip(item) {
    return (item.video_duration_str === undefined) ? '' : 
        "<i class='video-tip'><span>" + item.video_duration_str + "</span></i>";
}

function dislike() {
    return (no_dislike_count-- > 0) ? '' : 
        ("<div class='dislike'><i class='dislike-icon'></i>不感兴趣</div>");
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

function no_mode(item, i) {
    return "\
    <li><div class='content-card'>\
        <div class='content-text-card'>\
            <div class='title'>\
                <a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + item.title + "</a>\
            </div>\
            <div class='content-foot'>\
                <a class='tag'>" + tag(item) + "</a>\
                <a class='avatar' href=\"https://toutiao.com" + item.media_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">\
                    <img src=\"https:" + item.media_avatar_url + "\">\
                </a>\
                <a>&nbsp;" + item.source + "&nbsp;·</a>\
                <a href=\"https://toutiao.com" + item.source_url + "//#comment-area\" target=\"_blank\" rel=\"noopener noreferrer\">\
                    &nbsp;" + count_tag(item.comments_count, '评论') + "&nbsp;·</a>\
                <span>&nbsp;" + _(item.behot_time) + "</span>" + 
                dislike() + 
            "</div>\
        </div>\
    </div></li>";
}

function single_mode(item, i) {
    return "\
    <li><div class='content-card'>\
        <div class='content-image'>" +
            "<a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
                "<img src='https://" + item.image_url + "'>" + 
                video_tip(item) +
            "</a>\
        </div>\
        <div class='content-text-card has-image'>\
            <div class='title'>\
                <a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + item.title + "</a>\
            </div>\
            <div class='content-foot'>\
                <a class='tag'>" + tag(item) + "</a>\
                <a class='avatar' href=\"https://toutiao.com" + item.media_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">\
                    <img src=\"https:" + item.media_avatar_url + "\">\
                </a>\
                <a>&nbsp;" + item.source + "&nbsp;·</a>\
                <a href=\"https://toutiao.com" + item.source_url + "//#comment-area\" target=\"_blank\" rel=\"noopener noreferrer\">&nbsp;" + count_tag(item.comments_count, '评论') + "&nbsp;·</a>\
                <span>&nbsp;" + _(item.behot_time) + "</span>" +
                dislike() +
            "</div>\
        </div>\
    </div></li>"
}

function ugc_mode(item, i) {
    var len = item.ugc_data.ugc_images.length;
    return "\
    <li><div class='content-card'>" + ((len) ? 
        "<div class='content-image ugc'>" +
            "<a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
                "<img src='https://" + item.ugc_data.ugc_images[0] + "'>" + 
                (len > 1 ? "<i class='video-tip'><span>" + len + "图</span></i>" : '') +
            "</a>\
        </div>\
        <div class='content-text-card has-image'>" :
        "<div class='content-text-card'>") +
            "<div class='ugc-user'>\
                <div class='ugc-user-avatar'>\
                    <a href=\"https://toutiao.com" + item.ugc_data.ugc_user.open_url + "\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"" + item.ugc_data.ugc_user.avatar_url + "\"></a>\
                </div>\
                <div class='ugc-user-name'>\
                    <div class='ugc-username'>\
                        <span>" + item.ugc_data.ugc_user.name + "</span>" +
                        // <i class='ugc-vtt'></i>\
                    "</div>\
                    <p class='ugc-meta'><span>未关注</span></p>\
                </div>\
            </div>\
            <div class='ugc-content'>\
                <a href=\"https://toutiao.com/group/" + item.group_id + "\" target=\"_blank\" rel=\"noopener noreferrer\">".concat(item.title) +
                "</a>\
            </div>\
            <div class='content-foot'>\
                <a href=\"https://toutiao.com" + item.source_url + "//#comment-area\" target=\"_blank\" rel=\"noopener noreferrer\">&nbsp;" + count_tag(item.ugc_data.digg_count, '赞') + "&nbsp;·</a>\
                <a href=\"https://toutiao.com" + item.source_url + "//#comment-area\" target=\"_blank\" rel=\"noopener noreferrer\">&nbsp;" + count_tag(item.ugc_data.comment_count, '评论') + "&nbsp;·</a>\
                <a href=\"https://toutiao.com" + item.source_url + "//#comment-area\" target=\"_blank\" rel=\"noopener noreferrer\">&nbsp;" + count_tag(item.ugc_data.display_count, '展现') + "&nbsp;·</a>\
                <span>&nbsp;" + _(item.behot_time) + "</span>" +
                dislike() +
            "</div>\
        </div>\
    </div></li>"
}

function gallery_mode(item, i) {
    return "\
    <li><div class='content-card'>\
        <div class='content-image'>" +
            "<a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
                "<img src='https://" + item.image_url + "'>" + 
                video_tip(item) +
            "</a>\
        </div>\
        <div class='content-text-card has-image'>\
            <div class='title'>\
                <a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + item.title + "</a>\
            </div>\
            <div class='content-foot'>\
                <a class='tag'>" + tag(item) + "</a>\
                <a class='avatar' href=\"https://toutiao.com" + item.media_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">\
                    <img src=\"https:" + item.media_avatar_url + "\">\
                </a>\
                <a>&nbsp;" + item.source + "&nbsp;·</a>\
                <a href=\"https://toutiao.com" + item.source_url + "//#comment-area\" target=\"_blank\" rel=\"noopener noreferrer\">&nbsp;" + count_tag(item.comments_count, '评论') + "&nbsp;·</a>\
                <span>&nbsp;" + _(item.behot_time) + "</span>" +
                dislike() +
            "</div>\
        </div>\
    </div></li>"
}

function render(content) {
    var str_content = document.getElementById('content-list').innerHTML;

    for (let i = 0; i < content.length; ++i) {
        // if (content[i].article_genre === 'ugc')
        //     continue;
        if (content[i].ugc_data !== undefined)
            str_content += ugc_mode(content[i], i);
        else if (content[i].single_mode)
            str_content += single_mode(content[i], i)
        else if (content[i].has_gallery)
            str_content += gallery_mode(content[i], i)
        else
            str_content += no_mode(content[i], i)
    }
    document.getElementById('content-list').innerHTML = str_content;
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

var timeOut = true;
/*
设置⏲来防止下滑到底部时短时间内大量发送请求，以至于ip被封
*/

window.addEventListener('scroll', () => {
    if (timeOut === false)
        return;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight || 0;

    if ((scrollHeight - scrollTop) <= clientHeight * 1.05)
    {    
        timeOut = false;
        pull();
        setTimeout(() => {
            timeOut = true;
        }, 1000);
    }
});

pull();
setTimeout(() => {
    pull();
}, 2000);