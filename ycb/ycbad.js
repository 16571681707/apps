var fetch = require('node-fetch');

 for(var i=1; i< 20; i++){
    setTimeout(function(){
    ad()},5000*i)
    
    }
    
    function ad(){
    const url = "http://api.yongchenbao.com/api//Member/getAdVideoReward";
    const method = "POST";
    const headers = {
    "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbGllbnQueGhhZG1pbiIsImF1ZCI6InNlcnZlci54aGFkbWluIiwiaWF0IjoxNjI2MzIxNjY0LCJleHAiOjE2NDM1MjE2NjQsInVpZCI6IjE4NzQ5In0.iyksrMn6FHLIAPN0tDYlJ5jvO1gem5u9pdamVwFUVJY",
        "user-agent": "UNI-APP/1.0",
        "Content-Type": "application/x-www-form-urlencoded; charset\u003dutf-8",
        "Content-Length": "24",
        "Host": "api.yongchenbao.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Cookie": "PHPSESSID\u003da6547cf348b75ad98aa1583bf1c0e8de"
    
    };
    //const data = {"info": "abc"};
    
    const myRequest = {
        url: url,
        method: method, // Optional, default GET.
        headers: headers, // Optional.
        //body: JSON.stringify(data) // Optional.
    };
    const myurl = {
        method: method,
        headers: headers,
    }
    fetch(url,myurl)
    .then(res =>
        res.json()
        )
    .then(function(json) {
        var result = json
        console.log(json)   
    })




}
    
