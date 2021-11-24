const { getExchangeDate, transformDate } = require('./../../utils/transform');
const { config } = require('./../../config');
const { dingdingrobot } = require('./../../utils/dingding');


function biance() {
    const rowData = config[2];
    const { exchange, feildName, url } = rowData;
    var result = getExchangeDate(rowData);
    const time = `时间： ${transformDate(new Date(), 'xx')} \n\n`;

    setTimeout(() => {
        if(!result) return
        const board = `🔔 \n\n ${result} \n\n`;
        let title = '幣安公告 \n\n';
        var hd = title + time + board;
        console.log(hd)
        // console.log(result)
        dingdingrobot(hd)
    }, 5000);
}

module.exports = {
    biance
}