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

 
const url = "https://ant.xunsl.com/WebApi/RotaryTable/turnRotary?_\u003d1626864350085";
var method = `POST`;
var headers = {
    "Host": "ant.xunsl.com",
    "Connection": "keep-alive",
    "Content-Length": "165",
    "Accept": "application/json",
    "Origin": "https://ant.xunsl.com",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": "Mozilla/5.0 (Linux; Android 7.1.2; vivo Y66i A Build/N2G47H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded",
    "Referer": "https://ant.xunsl.com/html/rotaryTable/index.html?keyword_wyq\u003dwoyaoq.com\u0026access\u003dWIFI\u0026app-version\u003d8.1.2\u0026app_version\u003d8.1.2\u0026channel\u003dc1025\u0026cookie\u003dMDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Sxt59rhaKp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Foobdrs-mapqGcXY\u0026cookie_id\u003d0ab0285c1e48d4a5e4485ef1708035ec\u0026device_brand\u003dvivo\u0026device_id\u003d9666676b9796fff\u0026device_model\u003dvivo+Y66i+A\u0026device_platform\u003dandroid\u0026device_type\u003dandroid\u0026inner_version\u003d202107191702\u0026mi\u003d0\u0026openudid\u003d9666676b9796fff\u0026os_api\u003d25\u0026os_version\u003dN2G47H+release-keys\u0026phone_network\u003dWIFI\u0026phone_sim\u003d0\u0026request_time\u003d1626864047\u0026resolution\u003d720x1280\u0026sim\u003d2\u0026sm_device_id\u003d20210606132859b1d8aafbb5177ddc8dddfb44d03deaec0109edab11c1d101\u0026subv\u003d1.2.2\u0026time\u003d1626864047\u0026uid\u003d54865966\u0026uuid\u003d5edbca0b0cba4058a8340f2af5ae7a8f\u0026version_code\u003d800\u0026version_name\u003d%E6%99%B6%E5%BD%A9%E7%9C%8B%E7%82%B9\u0026zqkey\u003dMDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Sxt59rhaKp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Foobdrs-mapqGcXY\u0026zqkey_id\u003d0ab0285c1e48d4a5e4485ef1708035ec",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,en-US;q\u003d0.8",
    "Cookie": "sajssdk_2019_cross_new_user\u003d1; sensorsdata2019jssdkcross\u003d%7B%22distinct_id%22%3A%2254865966%22%2C%22%24device_id%22%3A%2217ac87b97f169-0c42e17a8bd4b3-4329146a-230400-17ac87b97f63d%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%2217ac87b97f169-0c42e17a8bd4b3-4329146a-230400-17ac87b97f63d%22%7D; Hm_lvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626861181; Hm_lpvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626864062"
};
var body = "cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Sxt59rhaKp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Foobdrs-mapqGcXY&cookie_id=0ab0285c1e48d4a5e4485ef1708035ec";

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
    "request_time": "1626864123",
    "os-api": "26",
    "phone-sim": "2",
    "device-model": "vivo+Y66i+A",
    "device-platform": "android",
    "access": "WIFI",
    "os-version": "N2G47H+release-keys",
    "app-version": "8.1.2",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "1133",
    "Host": "ant.xunsl.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.2"
};
var body = "p=I1HH-fn083Io%3DMU9bbDOU5wUpeKOKJBGDpcsEVPMwmG0hjafq7lTwSQGLR3u0fU90DFxMDMK48s3J2-1U04QQg16WnMybVQtkDDGeGhSxjIYYENeGYt7ohIggXMaMXzSC7z4oAvxShVhGNs2ep3pvEI6CAEVgW9hhRxIXDFESasK8XmuASeugw0CRttgbZob2O19Bxk_3Ro6yxde8tvedY9lNkG5JIOE-TstZfWLuygJ6wN_3GJOfqoaZ-biZyNXngVS5YVzpMSeRAjmsIhHgRg8_-cQrpIs5MO4yIwiz_FbSF-yJKCLIZEi32iPtl4-MPH7NzkRYTGSjC5FLDHYSmhkuwWoX4ird1OBiTVy2Z8KRZqGNGo7lfp1lvWqOlLmDFD0hl7NQAaJZTgnCxH6mjdQC4Q1utktKCM_CihqS7hW-CXjSQQRSw13qsp1NhAnu4QAj6eM-RIsyuvZAdGYCky5OTcLiccD0tIv35UcFOXPj9iDq26Z4KXZS2MxqYyauS-LcUYX58IeirtumEC2UMKdnaQ43CDMRqGMVjW2ljN6WoUAxUE60CLmo_-daqx9EIaVyrZU20hCPJHVWTTTxI8-AgffjHy-OcLhCc-GnlA3ZOICZgT7QRv5nDF4fPN_IvJ6kbMHbXP-fgHFWDtHJ5kM0ecTxLAWlAbYgyvqS1sBWBkQJLs0gXHIqW00yeLYU55JkGG8xusDAQ90MsVirK20t2fXOyCm7aUZNtEV4l9wynpDbkf-JhwpX5GBlT41-0tnCvtjLVQocCsMxvjyrpJ109lFqG6fVCUgrVz0jTG8TChfhCS_JlP4Pj7hdztv8pQE1H66ne79XF2_vf3q6RhlGH3m19TfXOQhBiPtSY6eB2x3orinevWJynnylvHxIC7waPg6HXa9R0PUdTTA_AKewZYD9XIjnBtgvLERcEk0icgSNVCXQHe8NelOAM0VKq_x_Qw6hxMtqof_7qA-_c6YmvtzjvuWYb0WpCUE6MRlV_NHQ1qWp8KV5pzlSL5lx4JzcIob4wEfOWxsq5XqV_gPTdnBn1qQk7fGGkbAco2aGO1dZVn0W7RKkT5YIvefHIy-kUljLeGlKnSMpjgCKjohWrYkdyBwBDQ%3D%3D";

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
