
#day by day

var fetch = require('node-fetch');
var hongbao = 0
var goon = true
var hongbao = 0 //红包余额
test()  //抽奖5次
// tixian()

async function test(){
    //转盘红包
    for(var i = 1; i < 99; i++){
        console.log("开始第"+i+"次收取：")
        zhuanpan()
        await sleep(9000)
        console.log("\n")
        if(i == 20){
            console.log("等待8s")
            await sleep(8000)
        }
        if(!goon){
            console.log("转盘结束")
            goon = true
            break
        }
    }
    // 悬浮红包
    for(var i = 1; i < 99; i++){
        console.log("开始第"+i+"次收取：")
        xuanfu()
        await sleep(9000)
        console.log("\n")
        if(i == 20){
            console.log("等待8s")
            await sleep(8000)
        }
        if(!goon){
            console.log("悬浮红包结束")
            goon = true
            break
        }
    }
    console.log("总共获得红包：" + hongbao)
    await sleep(3000)
    hongbaoyue()
    await sleep(3000)
    while(hongbao > 3000) {
        tixian()
        await sleep(3000)
        hongbaoyue()
    }
}




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

 function xuanfu(){

 
const url = "https://api-aas-mm.luckylist.cn/api/v2/answer/task/reward";
var method = `POST`;
var headers = {
    "Accept-Encoding": "identity",
    "x-token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYXBwYXBpIiwiYXBwSWQiOiJhYXMyMDIxMDAwMDgyNjYiLCJ1aWQiOiI2NjAyNjYzNjMiLCJwYXlsb2FkIjp7ImFwcF92ZXJzaW9uIjoiMi40LjIiLCJpcCI6IjE4My4yMjYuMTAxLjE5IiwibGF0TG5nIjoiIiwic2MyIjoibGNfdHQifSwiYXVkIjoiYXBwYXBpLm1tIiwiZXhwIjoxNjI4MzM1MDk5LCJpYXQiOjE2Mjc3MzAyOTksImlzcyI6ImF1dGgtYXBwYXBpLm1tIn0.sk6eyG2aWFuvdGeXkMIIrd4D35zQhJ4iKrYWFEfZyHw"    ,
    "x-lng": "",
    "x-device-name": "PCAM10",
    "x-rom-name": "oppo",
    "x-app": "answerking",
    "x-screen-size": "1080*2340",
    "x-os-version": "10",
    "x-imei": "",
    "x-pkg": "net.tanggua.answerstar",
    "x-app-id": "aas202100008266",
    "Access-Control-Allow-Origin": "*",
    "x-lat": "",
    "x-city-code": "",
    "Content-Type": "application/json",
    "x-oaid": "1CF53215846842DC862E6ED6D54FA24Bee79c064503e704efaf511a1a9014ed8",
    "x-app-version": "2.4.2",
    "x-imei-sub": "",
    "x-device-id": "4cc822d26061f7ce",
    "x-network": "1",
    "x-sc": "lc_tt",
    "x-sc2": "0003310001",
    "Access-Control-Allow-Headers": "x-requested-with,content-type,authorization",
    "x-device-model": "OPPO",
    "Access-Control-Allow-Methods": "GET, POST",
    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; PCAM10 Build/QP1A.190711.020)",
    "Host": "api-aas-mm.luckylist.cn",
    "Connection": "Keep-Alive",
    "Content-Length": "23"
};

var body = '{"code":"float_bubble"}';  // 悬浮红包

var myurl = {
    method: method,
    headers: headers,
    body: body
};
fetch(url,myurl).then(res=>{

    return res.json()    //这里可以是json，也可以是字符串
    
    }).then(json =>{
        if(json.success != false){
            console.log(json.success)
            console.log("获得红包奖励:")
            console.log(json.data.reward_amount)
            hongbao = hongbao + json.data.reward_amount
        } else {
            console.log(json.msg)
            goon = false
        }
    //     result = json
    //  console.log(json)
    //  console.log(JSON.parse(result.toString()))

    })
 }

 function zhuanpan(){

 
    const url = "https://api-aas-mm.luckylist.cn/api/v2/answer/poplottery/confirm";
    var method = `POST`;
    var headers = {
        "Accept-Encoding": "identity",
        "x-token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYXBwYXBpIiwiYXBwSWQiOiJhYXMyMDIxMDAwMDgyNjYiLCJ1aWQiOiI2NjAyNjYzNjMiLCJwYXlsb2FkIjp7ImFwcF92ZXJzaW9uIjoiMi40LjIiLCJpcCI6IjE4My4yMjYuMTAxLjE5IiwibGF0TG5nIjoiIiwic2MyIjoibGNfdHQifSwiYXVkIjoiYXBwYXBpLm1tIiwiZXhwIjoxNjI4MzM1MDk5LCJpYXQiOjE2Mjc3MzAyOTksImlzcyI6ImF1dGgtYXBwYXBpLm1tIn0.sk6eyG2aWFuvdGeXkMIIrd4D35zQhJ4iKrYWFEfZyHw",
         "x-lng": "",
        "x-device-name": "PCAM10",
        "x-rom-name": "oppo",
        "x-app": "answerking",
        "x-screen-size": "1080*2340",
        "x-os-version": "10",
        "x-imei": "",
        "x-pkg": "net.tanggua.answerstar",
        "x-app-id": "aas202100008266",
        "Access-Control-Allow-Origin": "*",
        "x-lat": "",
        "x-city-code": "",
        "Content-Type": "application/json",
        "x-oaid": "1CF53215846842DC862E6ED6D54FA24Bee79c064503e704efaf511a1a9014ed8",
        "x-app-version": "2.4.2",
        "x-imei-sub": "",
        "x-device-id": "4cc822d26061f7ce",
        "x-network": "1",
        "x-sc": "lc_tt",
        "x-sc2": "0003310001",
        "Access-Control-Allow-Headers": "x-requested-with,content-type,authorization",
        "x-device-model": "OPPO",
        "Access-Control-Allow-Methods": "GET, POST",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; PCAM10 Build/QP1A.190711.020)",
        "Host": "api-aas-mm.luckylist.cn",
        "Connection": "Keep-Alive",
        "Content-Length": "23"
    };
    
    var body = '{"reward_amount":999}'; //转盘收取

    
    var myurl = {
        method: method,
        headers: headers,
        body: body
    };
    fetch(url,myurl).then(res=>{
    
        return res.json()    //这里可以是json，也可以是字符串
        
        }).then(json =>{
            if(json.success != false){
                console.log(json.success)
                console.log("获得红包奖励:")
                console.log(json.data.reward_amount)
                hongbao = hongbao + json.data.reward_amount
            } else {
                console.log(json.msg)
                goon = false
            }
        //     result = json
        //  console.log(json)
        //  console.log(JSON.parse(result.toString()))
    
        })
     }


function tixian(){


const url = "https://api-aas-mm.luckylist.cn/api/v2/user/cashout/apply";
var method = `POST`;
var headers = {
    "Accept-Encoding": "identity",
    "x-token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYXBwYXBpIiwiYXBwSWQiOiJhYXMyMDIxMDAwMDgyNjYiLCJ1aWQiOiI2NjAyNjYzNjMiLCJwYXlsb2FkIjp7ImFwcF92ZXJzaW9uIjoiMi40LjIiLCJpcCI6IjE4My4yMjYuMTAxLjE5IiwibGF0TG5nIjoiIiwic2MyIjoibGNfdHQifSwiYXVkIjoiYXBwYXBpLm1tIiwiZXhwIjoxNjI4MzM1MDk5LCJpYXQiOjE2Mjc3MzAyOTksImlzcyI6ImF1dGgtYXBwYXBpLm1tIn0.sk6eyG2aWFuvdGeXkMIIrd4D35zQhJ4iKrYWFEfZyHw",

    "x-lng": "",
    "x-device-name": "PCAM10",
    "x-rom-name": "oppo",
    "x-app": "answerking",
    "x-screen-size": "1080*2340",
    "x-os-version": "10",
    "x-imei": "",
    "x-pkg": "net.tanggua.answerstar",
    "x-app-id": "aas202100008266",
    "Access-Control-Allow-Origin": "*",
    "x-lat": "",
    "x-city-code": "",
    "Content-Type": "application/json",
    "x-oaid": "1CF53215846842DC862E6ED6D54FA24Bee79c064503e704efaf511a1a9014ed8",
    "x-app-version": "2.4.2",
    "x-imei-sub": "",
    "x-device-id": "4cc822d26061f7ce",
    "x-network": "1",
    "x-sc": "lc_tt",
    "x-sc2": "0003310001",
    "Access-Control-Allow-Headers": "x-requested-with,content-type,authorization",
    "x-device-model": "OPPO",
    "Access-Control-Allow-Methods": "GET, POST",
    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; PCAM10 Build/QP1A.190711.020)",
    "Host": "api-aas-mm.luckylist.cn",
    "Connection": "Keep-Alive",
    "Content-Length": "21"
};

var body = '{"option_key":"30.1"}'; //提现


var myurl = {
    method: method,
    headers: headers,
    body: body
};
fetch(url,myurl)
.then(res =>
res.json()
)
.then(function(json) {
console.log(json)

})
    }


function hongbaoyue(){


const url = "https://api-aas-mm.luckylist.cn/api/v2/user/cashout/status";
var method = `POST`;
var headers = {
    "Accept-Encoding": "identity",
    "x-token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYXBwYXBpIiwiYXBwSWQiOiJhYXMyMDIxMDAwMDgyNjYiLCJ1aWQiOiI2NjAyNjYzNjMiLCJwYXlsb2FkIjp7ImFwcF92ZXJzaW9uIjoiMi40LjIiLCJpcCI6IjE4My4yMjYuMTAxLjE5IiwibGF0TG5nIjoiIiwic2MyIjoibGNfdHQifSwiYXVkIjoiYXBwYXBpLm1tIiwiZXhwIjoxNjI4MzM1MDk5LCJpYXQiOjE2Mjc3MzAyOTksImlzcyI6ImF1dGgtYXBwYXBpLm1tIn0.sk6eyG2aWFuvdGeXkMIIrd4D35zQhJ4iKrYWFEfZyHw",

    "x-lng": "",
    "x-device-name": "PCAM10",
    "x-rom-name": "oppo",
    "x-app": "answerking",
    "x-screen-size": "1080*2340",
    "x-os-version": "10",
    "x-imei": "",
    "x-pkg": "net.tanggua.answerstar",
    "x-app-id": "aas202100008266",
    "Access-Control-Allow-Origin": "*",
    "x-lat": "",
    "x-city-code": "",
    "Content-Type": "application/json",
    "x-oaid": "1CF53215846842DC862E6ED6D54FA24Bee79c064503e704efaf511a1a9014ed8",
    "x-app-version": "2.4.2",
    "x-imei-sub": "",
    "x-device-id": "4cc822d26061f7ce",
    "x-network": "1",
    "x-sc": "lc_tt",
    "x-sc2": "0003310001",
    "Access-Control-Allow-Headers": "x-requested-with,content-type,authorization",
    "x-device-model": "OPPO",
    "Access-Control-Allow-Methods": "GET, POST",
    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; PCAM10 Build/QP1A.190711.020)",
    "Host": "api-aas-mm.luckylist.cn",
    "Connection": "Keep-Alive",
    "Content-Length": "0"
};

// var body = '{"option_key":"30.1"}'; //提现


var myurl = {
    method: method,
    headers: headers,
    // body: body
};
fetch(url,myurl)
.then(res =>
res.json()
)
.then(function(json) {
    hongbao = json.data.user.point
console.log("红包余额：" + json.data.user.point)

})
    }
