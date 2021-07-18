var fetch = require('node-fetch');
/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

 const url = "http://api.yongchenbao.com/api//Member/addOrder";
 const method = "POST";
 const headers = {"Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbGllbnQueGhhZG1pbiIsImF1ZCI6InNlcnZlci54aGFkbWluIiwiaWF0IjoxNjI2MzIxNjY0LCJleHAiOjE2NDM1MjE2NjQsInVpZCI6IjE4NzQ5In0.iyksrMn6FHLIAPN0tDYlJ5jvO1gem5u9pdamVwFUVJY",
     "user-agent": "UNI-APP/1.0",
     "Content-Type": "application/x-www-form-urlencoded; charset\u003dutf-8",
     "Content-Length": "78",
     "Host": "api.yongchenbao.com",
     "Connection": "Keep-Alive",
     "Accept-Encoding": "gzip",
     "Cookie": "PHPSESSID\u003da6547cf348b75ad98aa1583bf1c0e8de"
 };
 let ycbtxbody = "";
ycbtxbody = process.env.ycbtxbody
 
 const myurl = {
    method: method,
    headers: headers,
    body: ycbtxbody
}
 fetch(url,myurl)
 .then(res =>
     res.json()
     )
 .then(function(json) {
     var result = json
     console.log(json)
     console.log(result.coin)
     
 })

 
