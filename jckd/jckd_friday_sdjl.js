
var fetch = require('node-fetch');

const url = "https://ant.xunsl.com/v5/CommonReward/toGetReward.json";
var method = "POST";
var headers = {
    "os-version": "DUA-TL00+1.0.0.184%28C01%29",
    "device-model": "DUA-TL00",
    "phone-sim": "2",
    "request_time": "1626862157",
    "access": "WIFI",
    "os-api": "26",
    "device-platform": "android",
    "app-version": "8.1.2",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "1139",
    "Host": "ant.xunsl.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.2"
};
var body = "p=R4W7v2WlUNXk%3DOizDqIly7NWI8mNFoeFk-qq-O2z20KPpHBywxONYCcZ-M341uK4QmICj9MCYullf52Zenb-rnse-3HbZzIUODgbdq9mZpDGpnZKTJ0JSLZCHN77L3k0_mzjQZRH663q2_vjMsxty4v9WwpdTl0nHpv6T4Hb82fm05DEZgm8qqBh48NaL33uAvCLe-i7a9VEMJMADSHG71JYyI1DiFiAcr56t5vFqbndESbpYfb4lF_tBA6lT9McOijkFKvTpoYE4MT6bEPFdUp54OXhQoN6_xSbdIWZXvpEr9puAeyBFzQl1fACvOFeoXHavYuvigdfUB6HJF2QRl36K5xfFroy5eX2cfrfgyYE4qX7jyVH55DddVg6I05nFixiD1KaCf7LHLMKS-63RyyGsN8UVvA8r2wdOSzU1ikLhMr5a_2WN90NsIU9qg6or7c85eZvZrfS0-kk6H3T2fWReDThysnoKKt2o9XselmEriFEhOn28DTAVztLL24E5-KYZCju6y8FNyvRMHzH7vYtniIOPbZG6bdVL9oviS942eIKWRVKQ78_j-rvBjyu7YgC0bAdOx54sYh16R6Eg0kSZqKEYb1CtXZdU7gTQdDN0DSORCCugiN-w9BT_YKqPOFr755Z7u1Zt_V8MWWCCF-Jis8kDYrbv1vEBzDG8EDsfTYwwleC7dYvsYJdZvJT3j28CamRhurBSyrLF649vS0be55u_jh4NBz9PejwAm3EjMtFzn3AjsKHA9329HXJ2MuQUoW6WHJPDg4mr0vDcvjg94xIbCxsyVqi28ehiIv1TylBuBFE49cdGrNdgRrdxs3RDpgN6pD1JjTRdG7x_qwvDXSsekYtuvYJrgQpfgvwPHXMWBINyD337mrY-yvhvDUdg-P10Vdfj7chu6Wn9PoAloJJzQnasaX7Q4oReqbcee21kCdYVyLxaeHNcxUE1wMyr7-kBTHq9PNCVuHLE5iOjL_0JaKMUwR0HDIJUgTT06ZGTr6dzscmHSOiZGvHuAUOTcmwETPmiFSuDmtxzUkbMWX2jwc0Yp1cQR3nLmHzweT52Dxj7zuYgH8B_7j6pYYUz-pN78eU-YbC-WHXDEig1vRJ3DU7jD2Wk_oWZw_5iVM";

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

