const { getExchangeDate, transformDate } = require('./../../utils/transform');
const { config } = require('./../../config');
const { dingdingrobot } = require('./../../utils/dingding');
const schedule = require('node-schedule');

function okex() {
    const rowData = config[1];
    const { exchange, feildName, url } = rowData;
    var result = getExchangeDate(rowData);

    const time = `[时间]时间： ${transformDate(new Date(), 'xx')} \n\n`;

    setTimeout(() => {
        const board = `🔔${result} \n\n`;
        let title = '欧易公告 \n\n';
        const hd = title + time + board;
        console.log(hd)
        console.log(result)
    }, 5000);
    schedule.scheduleJob('00 00 10 * * *', () => {
        dingdingrobot(hd)
    });
    schedule.scheduleJob('00 00 18 * * *', () => {
        dingdingrobot(hd)
    });
}

module.exports = {
    okex
}