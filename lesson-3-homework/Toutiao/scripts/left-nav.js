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

var str_channels = '';
for (let i = 0; i < channels.length; ++i)
{
    if (i === active)
    {
        str_channels += 
        "<li>" +
            "<a class='channel-item active' href='" + channels[i].url + "' rel='noopener noreferrer'>" + 
                channels[i].tag + 
            "</a>" + 
        "</li>";
    } 
    else
    {
        str_channels += 
        "<li>" + 
            "<a class='channel-item' href='" + channels[i].url + "' rel='noopener noreferrer'>" + 
                channels[i].tag + 
            "</a>" + 
        "</li>";
    }
}

document.getElementById('channel-ul').innerHTML = str_channels;


