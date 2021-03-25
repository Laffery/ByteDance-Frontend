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

function tag(t) {
    return ((t.chinese_tag !== undefined) ? t.chinese_tag : t.tag);
}

function comments_count(c) {
    return (c.comments_count !== undefined) ? c.comments_count : 0;
}

function no_mode(item, i) {
    return "<li><div class='content-card'>" + 
        "<div class='content-text-card'>" +
    "<div class='title'>" +
        "<a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + item.title + "</a>" +
    "</div>" +
    "<div class='content-foot'>" +
        "<a class='tag'>" + tag(item) + "</a>" +
        "<a class='avatar' href=\"https://toutiao.com" + item.media_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
            "<img src=\"https:" + item.media_avatar_url + "\">" +
        "</a>" +
        "<a>&nbsp;" + item.source + "&nbsp;·</a>" +
        "<a href=\"https://toutiao.com" + item.source_url + "//#comment-area\" target=\"_blank\" rel=\"noopener noreferrer\">&nbsp;" + comments_count(item) + "评论&nbsp;·</a>" +
        "<span>&nbsp;" + _(item.behot_time) + "</span>" + ((no_dislike_count-- >= 0) ? '' : (
        "<div class='dislike'>" +
            "<i class='dislike-icon'></i>" +
            "不感兴趣" +
        "</div>")) +
    "</div>" +
    "</div>" +
    "</div></li>";
}

function single_mode(item, i) {
    return "<li><div class='content-card'>" + ((item.image_url !== undefined) ? (
        "<div class='content-image'>" +
            "<a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
                "<img src='https://" + item.image_url + "'>" + ((item.chinese_tag === '视频') ? (
                "<i class='video-tip'><span>" + item.video_duration_str + "</span></i>"
                ) : "") +
            "</a>" +
        "</div>" +
    "<div class='content-text-card has-image'>") :
        "<div class='content-text-card'>") +
    "<div class='title'>" +
        "<a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + item.title + "</a>" +
    "</div>" +
    "<div class='content-foot'>" +
        "<a class='tag'>" + tag(item) + "</a>" +
        "<a class='avatar' href=\"https://toutiao.com" + item.media_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
            "<img src=\"https:" + item.media_avatar_url + "\">" +
        "</a>" +
        "<a>&nbsp;" + item.source + "&nbsp;·</a>" +
        "<a href=\"https://toutiao.com" + item.source_url + "//#comment-area\" target=\"_blank\" rel=\"noopener noreferrer\">&nbsp;" + comments_count(item) + "评论&nbsp;·</a>" +
        "<span>&nbsp;" + _(item.behot_time) + "</span>" + ((no_dislike_count-- > 0) ? '' : (
        "<div class='dislike'>" +
            "<i class='dislike-icon'></i>" +
            "不感兴趣" +
        "</div>")) +
    "</div>" +
    "</div>" +
    "</div></li>";
}

function ugc_mode(item, i) {
    return "<li><div class='content-card'>" + ((item.image_url !== undefined) ? (
        "<div class='content-image'>" +
            "<a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
                "<img src='https://" + item.image_url + "'>" + ((item.chinese_tag === '视频') ? (
                "<i class='video-tip'><span>" + item.video_duration_str + "</span></i>"
                ) : "") +
            "</a>" +
        "</div>" +
    "<div class='content-text-card has-image'>") :
        "<div class='content-text-card'>") +
    "<div class='title'>" +
        "<a href=\"https://toutiao.com" + item.source_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + item.title + "</a>" +
    "</div>" +
    "<div class='content-foot'>" +
        "<a class='tag'>" + tag(item) + "</a>" +
        "<a class='avatar' href=\"https://toutiao.com" + item.media_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
            "<img src=\"https:" + item.media_avatar_url + "\">" +
        "</a>" +
        "<a>&nbsp;" + item.source + "&nbsp;·</a>" +
        "<a href=\"https://toutiao.com" + item.source_url + "//#comment-area\" target=\"_blank\" rel=\"noopener noreferrer\">&nbsp;" + comments_count(item) + "评论&nbsp;·</a>" +
        "<span>&nbsp;" + _(item.behot_time) + "</span>" + ((no_dislike_count-- >= 0) ? '' : (
        "<div class='dislike'>" +
            "<i class='dislike-icon'></i>" +
            "不感兴趣" +
        "</div>")) +
    "</div>" +
    "</div>" +
    "</div></li>";
}

function render(content) {
    var str_content = document.getElementById('content-list').innerHTML;

    for (let i = 0; i < content.length; ++i) {
        if (content[i].article_genre === 'ugc')
            continue;
        if (content[i].single_mode)
            str_content += single_mode(content[i], i)
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

window.addEventListener('scroll', () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight || 0;

    if ((scrollHeight - scrollTop) <= clientHeight * 1.1)
        pull();
});

pull();