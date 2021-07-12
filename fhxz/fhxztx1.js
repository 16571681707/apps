


const fetch = require('node-fetch')
let itermid = 10



/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
let fhxzid1 = `https://sunnytown.hyskgame.com/api/messages?accessToken=165763_1625926423_424e1930b80b52f66058e5af23baabdf`
//fhxzid1 = process.env.FHXZID1
var url = fhxzid1 +`&msgtype=market_getItemList`;
console.log(url)
var method = `POST`;
var headers = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/octet-stream`,
'Host' : `sunnytown.hyskgame.com`,
'User-Agent' : `fuhaoxiaozhen/22 CFNetwork/1197 Darwin/20.0.0`,
'Accept-Language' : `zh-cn`,
'X-Unity-Version' : `2019.2.9f1`
};
var body = `[{"type":"market_getItemList","data":{}}]`;

var myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

fetch(myRequest).then(res => {



    //console.log(response.statusCode + "\n\n" + response.body);
var result = JSON.parse(res.body)
console.log(result + "-------")
itermid = result[0].data.marketItemList[0].itemDefId
console.log(itermid)
const url1 = fhxzid1 +`&msgtype=market_exchange`
console.log(url1)
const method1 = `POST`;
const headers1 = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/octet-stream`,
'Host' : `sunnytown.hyskgame.com`,
'User-Agent' : `fuhaoxiaozhen/22 CFNetwork/1197 Darwin/20.0.0`,
'Accept-Language' : `zh-cn`,
'X-Unity-Version' : `2019.2.9f1`
};
const body1 = `[{"type":"market_exchange","data":{"itemDefId": ` + itermid + `}}]`;

const myRequest1 = {
    url: url1,
    method: method1,
    headers: headers1,
    body: body1
};

fetch(myRequest1).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
console.log("-----" + itermid)
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
    
}, reason => {
    console.log(reason.error);
    
});












