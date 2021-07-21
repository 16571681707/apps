var fetch = require('node-fetch');

test()  //抽奖5次

async function test(){for(var i = 1; i < 6; i++){
    console.log("开始第"+i+"次抽奖：")
    cj()
    await sleep(3000)
    console.log("\n")
}}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

 function cj(){

 
const url = "https://ant.xunsl.com/WebApi/RotaryTable/turnRotary?_\u003d1626862544082";
var method = `POST`;
var headers = {
    "Host": "ant.xunsl.com",
    "Connection": "keep-alive",
    "Content-Length": "165",
    "Accept": "application/json",
    "Origin": "https://ant.xunsl.com",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": "Mozilla/5.0 (Linux; Android 8.1.0; DUA-TL00 Build/HONORDUA-TL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded",
    "Referer": "https://ant.xunsl.com/html/rotaryTable/index.html?keyword_wyq\u003dwoyaoq.com\u0026access\u003dWIFI\u0026app-version\u003d8.1.2\u0026app_version\u003d8.1.2\u0026channel\u003dc1025\u0026cookie\u003dMDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Sxt5-yhaKp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Fonber6mmapqGcXY\u0026cookie_id\u003da0d6b9293cbad156bc8a6fdb634dec27\u0026device_brand\u003dHONOR\u0026device_id\u003d6ab0e082ed653779\u0026device_model\u003dDUA-TL00\u0026device_platform\u003dandroid\u0026device_type\u003dandroid\u0026inner_version\u003d202107191702\u0026mi\u003d0\u0026openudid\u003d6ab0e082ed653779\u0026os_api\u003d27\u0026os_version\u003dDUA-TL00+1.0.0.184%28C01%29\u0026phone_network\u003dWIFI\u0026phone_sim\u003d0\u0026request_time\u003d1626862423\u0026resolution\u003d720x1356\u0026sim\u003d2\u0026sm_device_id\u003d202107211724221f133be548668534609d224904018977011850bb09f25f78\u0026subv\u003d1.2.2\u0026time\u003d1626862423\u0026uid\u003d54865926\u0026uuid\u003da0e1ca66322d449ebbb68c183f6afc51\u0026version_code\u003d800\u0026version_name\u003d%E6%99%B6%E5%BD%A9%E7%9C%8B%E7%82%B9\u0026zqkey\u003dMDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Sxt5-yhaKp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Fonber6mmapqGcXY\u0026zqkey_id\u003da0d6b9293cbad156bc8a6fdb634dec27",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,en-US;q\u003d0.9",
    "Cookie": "Hm_lvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626859569; sajssdk_2019_cross_new_user\u003d1; sensorsdata2019jssdkcross\u003d%7B%22distinct_id%22%3A%2254865926%22%2C%22%24device_id%22%3A%2217ac86302aef2-00ff8424e8936b-195b4b70-204800-17ac86302b19d%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%2217ac86302aef2-00ff8424e8936b-195b4b70-204800-17ac86302b19d%22%7D; Hm_lpvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626862434"
};
var body = "cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Sxt5-yhaKp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Fonber6mmapqGcXY&cookie_id=a0d6b9293cbad156bc8a6fdb634dec27";

var myurl = {
    method: method,
    headers: headers,
    body: body
};

fetch(url,myurl).then(res=>{

    return res.json()    //这里可以是json，也可以是字符串
    
    }).then(json =>{
        if(json.data.score != 0){
            console.log("抽奖得分：" + json.data.score)
            cjjb()
        } else {
            console.log("未抽中" )
        }

    })
}

function cjjb(){
const url = "https://ant.xunsl.com/v5/RotaryTable/toTurnDouble.json";
var method = `POST`;
var headers = {
    "os-version": "DUA-TL00+1.0.0.184%28C01%29",
    "device-model": "DUA-TL00",
    "phone-sim": "2",
    "request_time": "1626862538",
    "access": "WIFI",
    "os-api": "26",
    "device-platform": "android",
    "app-version": "8.1.2",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "1087",
    "Host": "ant.xunsl.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.2"
};
var body = "p=LMIr0L3CWXKI%3DdjuFUVYbIhBZ4H7LKciK4Yopvbj_OiKyTYjsmjZ1N7tUBU_8oCGkUwQcEhyGPBrxk078qXJ-QMDRaQnNZp1AUXNtRa3nwQMwVzZVOBF-a6-MQxGFez_zEE5LBiJr6DCP5q0MiZz4uUZCzvHam3sGsy0HMTnqa2aPUuuOiekDJxZSLOTDcBvllr1TLGj1B9QCu64WCQs_b6QvrVBQvixIfs-fuXGoBn9XsTH-eeZhVCUKTF7s_u6F74gguQA8mnKpVaJbZ_l9GbQ9sIgadhSmhF48kskBQcnGfBumTjYF5FDxQgYYX4jLdOKDRPYYUoWO2G9LidBFUdubNnHug42FMfXlnFgUBupAP7ZrUlmwDF9gCkI10wdlkcwjt6FY7ql9G5fTUImtfnZYHHG-38zpkHvY_crIVjNVQ7w0KgQdPeewqPeYrhmwwFJTHOxL_gt8dvlzcAu6t5g2bHGlZG6GRfpxJJTIlvAgvQ4ik0ATOhTUvqRGomGONXTcWAoINYsdx1bkOTKNwV1Ac6fta0UnaedbDZZZxgWrZQUPhfOekgrxzqDdrum9DyvX4vfptHXLwSuRz1PaG37Ti721DgtGL32H3UVDWBW7RYOKVA-xHhsbVUdAJHiy2bz9iBYdcgWCMUgBD25wn_4iNSY7Epo_485Y1wSHH-ut9RPB0NcusQEUK6V32bEaoaGu1SLVvP0s_uMrqbB_kMG_OzITjN193JXuK4YK-qlmgpoEwwweT8M83wDU4BCIbuSZM2fcbnaVFsbPFnh8IPTNj1n8IGRn-Sg5igTPOQBVEtt6uqmzN4narTbeMNzf0HVxAvPe9FEWxTB97mtaTTu_QSquymAsrwvQo9v_ancCD6cCH5i8Uc9QpP2YgaJ8lcmoZ30t45lKXstsfA16MuPjGSbLkHJaQLSPrmRtK7xkXfbUUMlBuZ9mHGcu4DgETxup0DGhJwVIgoEoAHTg6TjUiafMZQywbA9ssXFAcvK1zkrXdLqry7nxdz5qWPpTc_olL24U6W3QxY_pyPZtpfPpGMC10nASzGDWZr-oSsOtYed4l9OsUL4%3D";

var myurl = {
    method: method,
    headers: headers,
    body: body
};

fetch(url,myurl).then(res=>{

    return res.json()    //这里可以是json，也可以是字符串
    
    }).then(json =>{
        if(json.items.score != null){
            console.log("加倍成功,分数：" + json.items.score)
        } else {
            console.log("加倍次数耗尽")
        }

    })
    }
