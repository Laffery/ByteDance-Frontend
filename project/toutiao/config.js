export const Protocol = 'http';
// export const IP = 'localhost';
export const IP = '175.24.127.98'; // my tencent cloud server's public ip
export const Port = '2021';
export const Route = '/home';
// export const Route = '/hello'
export const Site = 'https://www.toutiao.com'

export const URL = (pr, i, p) => pr + '://' + i + ':' + p

export function _() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    if (!e)
        return ''
    var t = 1e3 * 60;
    var a = (new Date()).getTime() - 1e3 * e
    var r = Math.floor(a / t)
    if (r < 1)
        return '\u521a\u521a'
    if (r < 60)
        return ''.concat(r, '\u5206\u949f\u524d')
    else if (r < 60 * 24)
        return ''.concat(Math.floor(r / 60), '\u5c0f\u65f6\u524d')
    else if (r < 60 * 24 * 30)
        return ''.concat(Math.floor(r / 1440), '\u5929\u524d')
    else if (r < 60 * 24 * 30 * 12)
        return ''.concat(Math.floor(r / 43200), '\u6708\u524d')
    var d = new Date(e);
    return d.getFullYear() + '\u5e74' + (d.getMonth() + 1) + '\u6708' + d.getDate() + '\u65e5'
}
