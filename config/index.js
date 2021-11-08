const keyWords = ['下线','下線','升級','調整','调整','停止','暂停',''];
const config = [
    {
        exchange:'HUOBI',
        url:"https://www.huobi.com/support/zh-cn/list/360000039982",
        feildName:".list-field1",
    },
    {
        exchange:'OKEX',
        url:"https://www.okex.com/support/hc/zh-cn/sections/360000030652-%E6%9C%80%E6%96%B0%E5%85%AC%E5%91%8A",
        feildName:'.article-list-link',
    },
    {
        exchange:'BINANCE',
        url:"https://www.binance.com/zh-CN/support/announcement/c-49?navId=49",
        feildName:".css-1ej4hfo",
    }
]



module.exports = {
    config,keyWords
}