const { biance } = require('./exchanges/binance');
const { okex } = require('./exchanges/okex');
const { huobi } = require('./exchanges/huobi');
const schedule = require('node-schedule');

function announcement() {
    schedule.scheduleJob('00 00 10 * * *', () => {
        biance();
    });
    schedule.scheduleJob('00 00 18 * * *', () => {
        biance();
    });
    schedule.scheduleJob('00 00 22 * * *', () => {
        biance();
    });
}
announcement()