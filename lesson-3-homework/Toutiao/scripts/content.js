var content = [{
        title: '瓣瓣同心！七年来，习近平这样谈“京津冀协同发展”',
        image: null,
        url: 'https://www.toutiao.com/a6940203621590139405/',
        tag: '传媒',
        avatar: 'https://p6-tt-ipv6.byteimg.com/origin/pgc-image/21507a12df2c4e7eb2d859c6f32dd497',
        source: '新华社',
        comment: '104评论',
        time: '刚刚',
        dislike: false
    }, {
        title: '「央视快评」把碳达峰碳中和纳入生态文明建设整体布局',
        image: null,
        url: 'https://www.toutiao.com/a6940407916973294117/',
        tag: '时政',
        avatar: 'https://p26-tt.byteimg.com/large/bc20000b91968707dab',
        source: '央视网新闻',
        comment: '94评论',
        time: '2分钟前',
        dislike: false
    }, {
        title: '经济日报刊发经济学家解读“十四五”规划和2035年远景目标纲要',
        image: null,
        url: 'https://www.toutiao.com/a6939350735825977897/',
        tag: '时政',
        avatar: 'https://p1-tt-ipv6.byteimg.com/large/user-avatar/c0d83b3212f89c452d5d73220acf38ae',
        source: '经济日报',
        comment: '40评论',
        time: '5分钟前',
        dislike: true
    }, {
        title: '各地开展形式多样党史学习教育',
        image: './assets/images/image_01.jfif',
        url: 'https://3w.huanqiu.com/a/34f321/42Ja8xlVnRL?agt=20&tt_group_id=6939745993843802638',
        tag: '时政',
        avatar: 'https://p26-tt.byteimg.com/large/pgc-image/377d80150d1d4f2498e106b97cba7995',
        source: '环球网',
        comment: '2评论',
        time: '7分钟前',
        dislike: true
    }, {
        title: '地方保安穿军服处置业主维权引爆舆论打击非法制售军服行动纪实',
        image: './assets/images/image_02.jfif',
        url: 'https://www.ixigua.com/6940437359817130526',
        tag: '视频',
        avatar: 'https://p26-tt.byteimg.com/large/bc20000b91968707dab',
        source: '央视网新闻',
        comment: '868评论',
        time: '9分钟前',
        dislike: true
    }, {
        title: '女子将公寓出租给98年小情侣,收房时推门一看瞬间傻眼',
        image: './assets/images/image_03.jfif',
        url: 'https://www.toutiao.com/a6939031424968163877/',
        tag: '社会',
        avatar: 'https://p1-tt-ipv6.byteimg.com/large/ef600112027c38b89ca',
        source: '北青网',
        comment: '63评论',
        time: '12分钟前',
        dislike: true
    }
];

var str_content = '';

for (let i = 0; i < content.length; ++i) {
    str_content += 
        "<li><div class='content-card'>" + ((content[i].image !== null) ? (
            "<div class='content-image'>" +
                "<a href=\"" + content[i].url + "\">" +
                    "<img src='" + content[i].image + "'>" + ((content[i].tag === '视频') ? (
                    "<i class='video-tip'><span>25:23</span></i>"
                    ) : "") +
                "</a>" +
            "</div>" + 
            "<div class='content-text-card has-image'>") : 
            "<div class='content-text-card'>") +
                "<div class='title'>" +
                    "<a href=\"" + content[i].url + "\" rel=\"noopener noreferrer\">" + content[i].title + "</a>" +
                "</div>" +
                "<div class='content-foot'>" + 
                    "<a class='tag'>" + content[i].tag + "</a>" +
                    "<a class='avatar' href=''>" + 
                        "<img src=\"" + content[i].avatar + "\">" + 
                    "</a>" +
                    "<a>&nbsp;" + content[i].source + "&nbsp;·</a>" +
                    "<a>&nbsp;" + content[i].comment + "&nbsp;·</a>" +
                    "<span>&nbsp;" + content[i].time + "</span>" + ((content[i].dislike) ? (
                    "<div class='dislike'>" +
                        "<i class='dislike-icon'></i>" +
                        "不感兴趣" + 
                    "</div>") : "") +
                "</div>" +
            "</div>" + 
        "</div></li>";
}


document.getElementById('content-list').innerHTML = str_content;
