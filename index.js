const { biance } = require('./exchanges/binance');
const { okex } = require('./exchanges/okex');
const { huobi } = require('./exchanges/huobi');

function announcement(){
    biance();
    okex();
    // huobi();
}
announcement()