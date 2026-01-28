const CUSTOMER_SITES = {
    xl: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪HTTPS',
    },
    ff: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡资源',
    },
    wl: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    zuida: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源',
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源',
    },
    bf: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    wujin: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: '无尽资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    jszyapi: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
    },
    mdzyapi: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    dyttzyapi: {
        api:'http://caiji.dyttzyapi.com/api.php/provide/vod' ,
        name:'电影天堂'
    },
    ryzy: {
        api: "https://cj.rycjapi.com/api.php/provide/vod",
        name: "如意资源"
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺资源',
    },
    hnzy: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛资源',
    },
    gszy: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: '光速资源',
    },
    ikunzy: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源',
    },
    ykzy: {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: '优酷资源',
    },
    hyzy: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: '虎牙资源',
    },
    xlzy: {
        api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪资源',
    },
    lzzy: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '乐子资源',
    },
    htzy: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '海豚资源',
    },
    jyzy: {
        api: 'https://jyzyapi.com/provide/vod',
        name: '鲸鱼资源',
    },
    adzy: {
        api: 'https://lovedan.net/api.php/provide/vod',
        name: '爱蛋资源',
    },
    lbzy: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '乐播资源',
    },
    mdys: {
        api: 'https://www.moduzy.com/api.php/provide/vod',
        name: '魔都影视',
    },
    ffapi: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡API',
    },
    ffcj: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡采集',
    },
    ffxl1: {
        api: 'http://ffzy1.tv/api.php/provide/vod',
        name: '非凡线路1',
    },
    ffcjhttps: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡采集HTTPS',
    },
    wlcj: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙采集',
    },
    bfapp: {
        api: 'https://app.bfzyapi.com/api.php/provide/vod',
        name: '暴风APP',
    },
    wujinme: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽ME',
    },
    tyhj: {
        api: 'https://tyyszyapi.com/api.php/provide/vod',
        name: '天涯海角',
    },
    gshttp: {
        api: 'http://api.guangsuapi.com/api.php/provide/vod',
        name: '光速HTTP',
    },
    xlhttps: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪HTTPS',
    },
    json1080: {
        api: 'https://api.1080zyku.com/inc/apijson.php',
        name: '1080JSON',
    },
    lzhttp: {
        api: 'http://cj.lziapi.com/api.php/provide/vod',
        name: '乐子HTTP',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
