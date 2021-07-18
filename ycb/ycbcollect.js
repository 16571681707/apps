var fetch = require('node-fetch');

const url = "http://api.yongchenbao.com/api/Member/getCoin";
const method = "POST";
var YCB_COLLECT = {};
YCB_COLLECT = process.env.YCB_COLLECT;
const myurl = {
    method: "POST",
    headers: YCB_COLLECT,
}
fetch(url,myurl)
    .then(res => res.json())
    .then(json => console.log(json));
