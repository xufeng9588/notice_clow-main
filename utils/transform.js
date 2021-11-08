const { keyWords } = require('./../config');
const cheerio = require('cheerio');
const request = require('superagent');


function getExchangeDate(data){
    const exportResult = [];
    const { exchange , feildName ,url } = data;
    request.get(url).end((err,res)=>{
        if(err) return '数据请求失败';
        const $ = cheerio.load(res.text);
        const announcement = $(feildName);
        announcement.each((i,v)=>{
            const tip = $(v).text().trim();
            keyWords.forEach(element => {
                const search = tip.indexOf(element);
                if (search > 0) {
                    const tips = `\n\n ${tip}`
                    exportResult.push(tips);
                }else return
            });
        })
    })
    // console.log(exportResult)
    return exportResult
    // console.log(exchange,feildName,url)
    // return exportResult
}

function transformDate(date,type){
    if(date){
        const d = date;
        const y = d.getFullYear();
        const m = d.getMonth()+1;
        const dd = d.getDate();
        const h = d.getHours();
        const mm = d.getMinutes();
        const ss = d.getSeconds();
        const simpleDate = `${y}-${m}-${dd}`;
        const minuteDate = simpleDate +  ` ${h}:${mm}`
        const secondDate = simpleDate +  ` ${h}:${mm}:${ss}`
        return !type ? simpleDate : type=== 'minuteDate' ? minuteDate : secondDate;
    }
}

module.exports = {
    getExchangeDate,
    transformDate
}