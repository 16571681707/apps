var fetch = require('node-fetch');

const url = "http://api.yongchenbao.com/api/Member/getCoin";
const method = "POST";
const headers = process.env.YCB_COLLECT;
const myurl = {
    method: "POST",
    headers: headers,
}
fetch(url,myurl)
    .then(res => res.json())
    .then(json => console.log(json));
