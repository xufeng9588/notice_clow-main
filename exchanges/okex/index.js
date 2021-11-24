const { getExchangeDate, transformDate } = require('./../../utils/transform');
const { config } = require('./../../config');
const { dingdingrobot } = require('./../../utils/dingding');

function okex() {
    const rowData = config[1];
    const { exchange, feildName, url } = rowData;
    var result = getExchangeDate(rowData);

    const time = `时间： ${transformDate(new Date(), 'xx')} \n\n`;

    setTimeout(() => {
        const board = `🔔${result} \n\n`;
        let title = '欧易公告 \n\n';
        const hd = title + time + board;
        console.log(hd)
        // console.log(result)
        // dingdingrobot(hd)
    }, 5000);
}

module.exports = {
    okex
}