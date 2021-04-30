const channels = [
    { tag: '推荐', url: './index.html' },
    { tag: '热点', url: 'https://www.toutiao.com/ch/news_hot/' },
    { tag: '视频', url: 'https://www.ixigua.com' },
    { tag: '图片', url: 'https://www.toutiao.com/ch/news_image/' },
    { tag: '娱乐', url: 'https://www.toutiao.com/ch/news_entertainment/' },
    { tag: '科技', url: 'https://www.toutiao.com/ch/news_tech/' },
    { tag: '汽车', url: 'https://www.dongchedi.com/?zt=tt_pc_home_channel' },
    { tag: '体育', url: 'https://www.toutiao.com/ch/news_sports/' },
    { tag: '财经', url: 'https://www.toutiao.com/ch/news_finance/' },
    { tag: '军事', url: 'https://www.toutiao.com/ch/news_military/'},
    { tag: '国际', url: 'https://www.toutiao.com/ch/news_world/'},
    { tag: '时尚', url: 'https://www.toutiao.com/ch/news_fashion/'},
    { tag: '旅游', url: 'https://www.toutiao.com/ch/news_travel/'},
    { tag: '更多', url: '/' }
]

export default (req, res) => {
    res.status(200).json({ data: channels })
}
