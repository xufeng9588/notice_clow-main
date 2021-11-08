const { getExchangeDate, transformDate } = require('./../../utils/transform');
const { config } = require('./../../config');
const { dingdingrobot } = require('./../../utils/dingding');
const schedule = require('node-schedule');


function biance() {
    const rowData = config[2];
    const { exchange, feildName, url } = rowData;
    var result = getExchangeDate(rowData);
    const time = `[时间]时间： ${transformDate(new Date(), 'xx')} \n\n`;

    setTimeout(() => {
        const board = `🔔 \n\n ${result} \n\n`;
        let title = '幣安公告 \n\n';
        var hd = title + time + board;
        console.log('BN', hd)
        console.log(result)
    }, 5000);
    schedule.scheduleJob('00 00 10 * * *', () => {
        dingdingrobot(hd)
    });
    schedule.scheduleJob('00 00 18 * * *', () => {
        dingdingrobot(hd)
    });
}

// biance()

module.exports = {
    biance
}