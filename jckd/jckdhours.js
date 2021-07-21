var fetch = require('node-fetch');

const url = "https://ant.xunsl.com/v5/CommonReward/toGetReward.json";
var method = `POST`;
var headers = {
    "os-version": "PCAM10_11_C.16",
    "device-model": "PCAM10",
    "phone-sim": "1",
    "carrier": "%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8",
    "request_time": "1626779254",
    "access": "WIFI",
    "os-api": "26",
    "device-platform": "android",
    "app-version": "8.1.1",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "1266",
    "Host": "ant.xunsl.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.2"
};
var body = "p=Q6NplMcA3HQU%3DdjkRiBZI3mBZswgMtHCzCDfBmucttHHRPvoqs2ZYTMPlThLPGyW84UK4QVZk3oSnnRwRMYLPqjl9GsPrF7X0tDR5yq2vlA4gMjWAYLt3g-P4rVxLsbaN5ifXr0kCZK2OAV-dUE38vLx14RL_AO-UH8NEt372Wa4uGBXvr5OO7oFZbFzzT9UTmPOKLQn-Tp0eqYIlGMbZ7R8_jtlE4JB1SoPEO0gDvdTfNEuWLkDjNWl1iPgGOCdM78nm3JW4skUUCws7F64c2_5b2XCvv0FN5GhcIvE8sy2eNRlZa7HUSIyFNTmyO87dDpB2xFMb_UBViZmnrxFNFAPOTXnFeZnaWZDSktMX7-7FBwEoPVjw1EG7qrkn5c8ZppIaHs6eL2Su-5opecc0MBL2n1oQhlkjMfbNCqVMAHxD14WQdI1zb0XV9USvi2EaejVi5AlUy3i4RdRTDlV-XRaPNjsMykjpWQxFUIA5C4KpMuALsKQQOrg5LNuVxHwTSTeVCBkzaxj6Otat6wghf0bWN9ydG8p4zy8UC2KrrifOjdX6mQPFjbpcDRf5Jmj1eUX1Qh-swt9DFUwZ3_knWJsPOE-V1OJlFyeAtLmNYcFV3gs6HU3VXUu3XZU2RG-Gg9Momr-_dcDvPKGCR8GLQZNThKZD54K0aa7qoRCTV_HsbBX6pqHdZcZMC8Xf9WaxvoNlqg-ugW1misnMevtXYhyPfjoQVaurutySZc8_vKrxDx36O9rSlKaO60OuscDRMQfj_gysmUyeNyPThhe_io6D4hbeegdhTgGZAdJqW8fUPYIvblZVv7UzN1Ygm_hZsPIVSZ0Ud-v4XHZ9F_clF6XuTqFJ2SthtnroVcMpZLcxS51ok3geFQvy8Y99uX0lwaquNkwPXY1I7OSIiDqjVHAeGLNGDEU1A-NZsoQe4FlYvlujI51ZOY7l2_o6iOyTCjCHdp5RRMarZQG_Bklx4RuPH2ogKLV6Dust58hv6_YL8yhfbc6kBOpSC1jvmqxEqvvzGuURsSa1FnyUvWY7pjE7iFLmuZu_DPi0aS4qNimgttdos78TgFJcM7dS0ZHOFq0sRrfreMxdZl5tb6ihaoM4YOv9SI9VxNQAI3sv9Wb-4P5IUtd3I4U8mLn4eDWZJ9S0BMXg25vp70Yl6y677CPvD7Ra_h5nki3jzFPLhevvRppGN2lbozrxjJlNheKLh5nfdY9QckIHePkivwfzO0091ISkEjHVsHO44v2lJxaog";

var myurl = {
    method: method,
    headers: headers,
    body: body
};

fetch(url,myurl).then(res=>{

    return res.json()    //这里可以是json，也可以是字符串
    
    }).then(json =>{
    console.log(json.message)

    })
