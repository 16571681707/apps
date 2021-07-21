
var fetch = require('node-fetch');

const url = "https://ant.xunsl.com/v5/CommonReward/toGetReward.json";
var method = "POST";
var headers = {
    "request_time": "1626861241",
    "os-api": "26",
    "phone-sim": "2",
    "device-model": "vivo+Y66i+A",
    "device-platform": "android",
    "access": "WIFI",
    "os-version": "N2G47H+release-keys",
    "app-version": "8.1.2",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "1119",
    "Host": "ant.xunsl.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.2"
};
var body = "p=jMIr0L3CWXKI%3DR6c4pmsQ_ZBojJYxHWeYmaIr2D2cHNaC65Ly49DP8JSypYrkUuNE6LMdvwek9abAlZbpa0sJ33fmmThBI7tC_bge1cH4jsmuhT3XyOgexND5nKQdgI2oHQo7znuvuIhQXApMsHDDIvsaNluqU2CouZsP_wK57xDHP61GbsXxdVcD4kiGh_AvwECY1I4iZ2M-33dlYN3BDkd-UjqysMaMb2NpIIijaPau5HyPqbj9K8gZFTaGR8KlhwMBlpA2OSXb1jG9iGYRz_Bt22Rf7NBBE1FmwGxU9XcMVsPbpm6S0dTfVYZWEKl8JNNc59yObNxia_g7XNQ0sgEGvUQPCy18MeZXKYo0Ebo7RF4nvsYuwq9Er8V0PrHjQBaB6Woh3FY0Z2nr9_kmsUHM-T9Ivhn629Y6zz1eXq2BNobhP3n-wWaoPRSifK-DD0PiXx-6duHnXuylBGwzwa0HWpkcHvwCF9Xxpd_1bC7_pTSNQDOwXUU65vmKVgDCYVIgqWn111mZIVDkDN6ME79HCNQQXGx27dfflwpE1WOGBmORiXkc23heGzhbMn2enkssa5lJ6PHYP2sy5NWrFcVmhAH_nO4jE7JGNntL0yY9bBS_t-cHogr0EGa3_A8Moc8gY2OgyR-w9GtmMY0DRXYGe56BQ1H1356YsG81cY4fqVEscvdOQVF2JrOlCYpiTShWOfr71q3VMYUuWwmAbmlsFgNECjYzRJiFl_4eAr6GCFi9HyG-ZNoO-vlg57ZzZ7mpCCDTuEcu64uxR_J-DSDUFQrRe1KZr1rwfXXySWbxSj8gYSMWwBCU6GHIiLq9yYvpgcqHw7-u5LvlxmuWxLQWjAmsPvOECb9TYrqDYKHwWje3x8QgARhv24s5z46BstHHEr5iDb7Z0gFH69wsfnvjfSlKkBFQlaJ1aUU4yvdWMqj8vvJ1qUUQuR_p6v4U4xuwIJu-nbn0td6UaG3MrS6odtoqcWPBqIzVva3EjCsDpCtC900gofV5hOx9m0QGRrTP_z_7ZV6eb6EIjTkzHckyU0iJDFnX1dl3X5xOqiSjDizxXLYTWqHX-C34zjKbMMTIwqOrtWOIXHHc_HpH9ws%3D";

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

