const { getExchangeDate, transformDate } = require('./../../utils/transform');
const { config } = require('./../../config');
const { dingdingrobot } = require('./../../utils/dingding');

function okex() {
    const rowData = config[1];
    const { exchange, feildName, url } = rowData;
    var result = getExchangeDate(rowData);

    const time = `ζΆι΄οΌ ${transformDate(new Date(), 'xx')} \n\n`;

    setTimeout(() => {
        const board = `π${result} \n\n`;
        let title = 'ζ¬§ζε¬ε \n\n';
        const hd = title + time + board;
        console.log(hd)
        // console.log(result)
        // dingdingrobot(hd)
    }, 5000);
}

module.exports = {
    okex
}