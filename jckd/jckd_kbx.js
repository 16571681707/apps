
var fetch = require('node-fetch');

const url = "https://ant.xunsl.com/WebApi/invite/openHourRed";
var method = "POST";
var headers = {
    "Host": "ant.xunsl.com",
    "Connection": "keep-alive",
    "Content-Length": "1035",
    "Sec-Fetch-Mode": "cors",
    "Origin": "https://ant.xunsl.com",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM10 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "*/*",
    "Sec-Fetch-Site": "same-origin",
    "Referer": "https://ant.xunsl.com/h5/20190410invitefriend/?keyword_wyq\u003dwoyaoq.com\u0026access\u003dWIFI\u0026app-version\u003d8.1.1\u0026app_version\u003d8.1.1\u0026carrier\u003d%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8\u0026channel\u003dc1005\u0026cookie\u003dMDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Swt5-xhIyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Fooqars-mapqGcXY\u0026cookie_id\u003d29b1824f6682ea884a703d442ef75c07\u0026device_brand\u003dOPPO\u0026device_id\u003d8e1c32754bfc4ef8\u0026device_model\u003dPCAM10\u0026device_platform\u003dandroid\u0026device_type\u003dandroid\u0026inner_version\u003d202107151939\u0026mi\u003d0\u0026oaid\u003d1CF53215846842DC862E6ED6D54FA24Bee79c064503e704efaf511a1a9014ed8\u0026openudid\u003d8e1c32754bfc4ef8\u0026os_api\u003d29\u0026os_version\u003dPCAM10_11_C.16\u0026phone_network\u003dWIFI\u0026phone_sim\u003d1\u0026request_time\u003d1626867920\u0026resolution\u003d1080x2264\u0026sim\u003d1\u0026sm_device_id\u003d20210213203836663c3df68cecbe244aeb26de607df2c101996432d57c323b\u0026subv\u003d1.2.2\u0026time\u003d1626867920\u0026uid\u003d54861911\u0026uuid\u003d431f334f01b84c45baa74b9394334c17\u0026version_code\u003d800\u0026version_name\u003d%E6%99%B6%E5%BD%A9%E7%9C%8B%E7%82%B9\u0026zqkey\u003dMDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Swt5-xhIyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Fooqars-mapqGcXY\u0026zqkey_id\u003d29b1824f6682ea884a703d442ef75c07",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q\u003d0.9,en-US;q\u003d0.8,en;q\u003d0.7",
    "Cookie": "Hm_lvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626612584; sensorsdata2019jssdkcross\u003d%7B%22distinct_id%22%3A%2254861911%22%2C%22%24device_id%22%3A%2217ab9aa4e98140-009be2e4a9109a-60101e10-280800-17ab9aa4e991b%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%2217ab9aa4e98140-009be2e4a9109a-60101e10-280800-17ab9aa4e991b%22%7D; Hm_lpvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626621722; Hm_lvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626612584; __tins__20089745\u003d%7B%22sid%22%3A%201626695827353%2C%20%22vd%22%3A%201%2C%20%22expires%22%3A%201626697627353%7D; __51cke__\u003d; __51laig__\u003d1; Hm_lvt_268f0a31fc0d047e5253dd69ad3a4775\u003d1626697990; Hm_lpvt_268f0a31fc0d047e5253dd69ad3a4775\u003d1626779190; Hm_lpvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626867922"
};
var body = "keyword_wyq=woyaoq.com&access=WIFI&app-version=8.1.1&app_version=8.1.1&carrier=%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8&channel=c1005&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Swt5-xhIyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Fooqars-mapqGcXY&cookie_id=29b1824f6682ea884a703d442ef75c07&device_brand=OPPO&device_id=8e1c32754bfc4ef8&device_model=PCAM10&device_platform=android&device_type=android&inner_version=202107151939&mi=0&oaid=1CF53215846842DC862E6ED6D54FA24Bee79c064503e704efaf511a1a9014ed8&openudid=8e1c32754bfc4ef8&os_api=29&os_version=PCAM10_11_C.16&phone_network=WIFI&phone_sim=1&request_time=1626867987&resolution=1080x2264&sim=1&sm_device_id=20210213203836663c3df68cecbe244aeb26de607df2c101996432d57c323b&subv=1.2.2&time=1626867920&uid=54861911&uuid=431f334f01b84c45baa74b9394334c17&version_code=800&version_name=%E6%99%B6%E5%BD%A9%E7%9C%8B%E7%82%B9&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Swt5-xhIyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Fooqars-mapqGcXY&zqkey_id=29b1824f6682ea884a703d442ef75c07";

var myurl = {
    method: method,
    headers: headers,
    body: body
};

fetch(url,myurl).then(res=>{

    return res.json()    //这里可以是json，也可以是字符串
    
    }).then(json =>{
            console.log(json)
    })

