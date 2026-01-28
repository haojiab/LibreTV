const CUSTOMER_SITES = {
    xl: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪HTTPS',
    },
    ff: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡资源',
    },
    ff: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
