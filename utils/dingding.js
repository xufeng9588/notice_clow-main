const ChatBot = require('dingtalk-robot-sender');
function dingdingrobot(hd) {
    const robot = new ChatBot({
        webhook: 'https://oapi.dingtalk.com/robot/send?access_token=2503f74762e0610d0f2a5f03391672a3760e98756160dfd33560c7831814a93b',
    });
        var textContent = {
            'msgtype': 'markdown',
            'markdown': {
                "title":"公告信息",
                'text': hd
            }
        }
    robot.send(textContent).then((res) => {
        // console.log('')
    })
}

module.exports = {
    dingdingrobot
}










// const request = require('request');

// function postNotice_clow(text){
// const webhook = 'https://oapi.dingtalk.com/robot/send?access_token=2503f74762e0610d0f2a5f03391672a3760e98756160dfd33560c7831814a93b';
// const jsonData = {
//   "msgtype": "text", 
//   "text": {
//     "content": text
//   }, 
// }
// request.post({
//   url: webhook,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   json: jsonData,
// }, (error, response, body) => {
//   console.log(body);
// })
// }

// module.exports = {
//     postNotice_clow
// }