var more_links = [
    { tag: '关于头条', url: 'https://www.toutiao.com/about/' },
    { tag: '加入头条', url: 'https://job.bytedance.com/' },
    { tag: '媒体报道', url: 'https://www.toutiao.com/report/' },
    { tag: '媒体合作', url: 'https://www.toutiao.com/media_partners/' },
    { tag: '产品合作', url: 'https://www.toutiao.com/cooperation/' },
    { tag: '合作说明', url: 'https://www.toutiao.com/media_cooperation/' },
    { tag: '广告投放', url: 'https://www.oceanengine.com/?source=pchomemore' },
    { tag: '联系我们', url: 'https://www.toutiao.com/contact/' },
    { tag: '用户协议', url: 'https://www.toutiao.com/user_agreement' },
    { tag: '隐私政策', url: 'https://www.toutiao.com/privacy_protection/' },
    { tag: '侵权投诉', url: 'https://www.toutiao.com/complain/' },
    { tag: '廉洁举报', url: 'https://www.toutiao.com/corrupt_report/' },
    { tag: '企业认证', url: 'https://renzheng.toutiao.com/guide?platform=%27PC%27&source=%27www.toutiao.com%27' },
    { tag: '肺炎求助', url: 'https://hys.people-health.cn/m/#/pages/ncovSuff/index' },
    { tag: '辟谣专区', url: 'http://www.piyao.org.cn/2020yqpy' }
];

var str_more_links = '';
for (let i = 0; i < more_links.length; ++i)
{
    str_more_links += 
        "<li>" + 
            "<a class='more-link' href='" + more_links[i].url + "' rel='noopener noreferrer'>" + 
                more_links[i].tag + 
            "</a>" + 
        "</li>";
}

document.getElementById('more-links').innerHTML = str_more_links;
