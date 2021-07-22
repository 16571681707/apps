/*
更新时间: 2020-09-26 8:46
Github Actions使用方法见[@lxk0301](https://raw.githubusercontent.com/lxk0301/scripts/master/githubAction.md) 使用方法大同小异
请自行抓包，阅读文章和看视频，倒计时转一圈显示青豆到账即可，多看几篇文章和视频，获得更多包数据，抓包地址为"https://ios.baertt.com/v5/article/complete.json"，在Github Actions中的Secrets新建name为'YOUTH_READ'的一个值，拷贝抓包的请求体到下面Value的文本框中，添加的请求体越多，获得青豆次数越多，本脚本不包含任何推送通知
多个请求体时用'&'号或者换行隔开" ‼️
*/

let s = 30000 //等待延迟30s
const $ = new Env("中青看点")
//const notify = $.isNode() ? require('./sendNotify') : '';
let ReadArr = [], readscore = 0;
let YouthBody = ["p=ZWRHEiWXZdUk%3Dy_MwkRLXKJIfw9-wp2M1qG4Tpr8WWIjbgDQJ3zUVJ9QKE5MSc67cKx2O7M-SMaq6ymv9-UoQqnSZquvrFGnd7apth_TRoMwvlSDgrNr7TKM2ch_LZdzJm7tLReSSTj4Wp65hOXFSSFLLO_sxPRBsM8PXW7if1InNZPn0jazJsCQ0KlnkZ7Tf6IiXdgKBLCHqlNMLu8ziTiaI9a_UHrwNMKSFjbkYEhhZRPTwgOz38mSj8aoZyWxO2r5lWV-g2eDqswgOvM-viCIjnnMUz2EmesjA_UZIe7Bf0VPNmeEssBDC8YDzr6P0ddFYXkwUt7kBDc8ZPzfGZv9yvLOKUfonBhaSXYDIZSj2m0wmUhPgtVlAJS4nYMhgtD_Fp1L2k9YnbjaTmluu-SigCbowa-udWUZP6IFNX5tROiE_KASLLdSwPbfEi41VUsZhKC4VVJGewLOz1lNcVhmcMUrbR8okfWkgumk6vBhCfy5lbZdu9BiXjJOM_Enca9FSf2e2hNiwtCxTylKRar-XnqgMIQyQSFcon0fYGDwpv6tlwJjzNHrEuTm22qNXqNWweG-o0koOYgZfARhBGvqxCp6hGD253_C2qSFMIwIV1S-si6MkbmOoa3nPByq_83gABT5UPUOQE_UjFJBPNnIaFo2MofjR-FojuHuYK5WUq8dOeMbHUvQbMw14F0RJRPafOKvha57ug8MxdprELUx2GTpHHSNu0fo9fApDPH1VPP00SaiU9nem2-RkrRXMNA_kw1YabCDHiwIcTbMuvbKZHt6HbqoktEpjRSHKjINuXGfFTrH8eKmEdSewblg_AlB-FMDNPlTM3nBZIjGcE0rszyBD3AEHSxbRxhHyaW3VRJ_wQbu3H-26lpnSapfKefA_UYNo7MsOb-xvi98pPDqZBsgQm6HjBlzEJzw5U-1GpDw61hj77Ow03fHLBPMr5S_WQ_ZMyDHuFfB7U8LxgJrfVheFXAXMzsnBTk0uHGbLbUqOQb4JYXyyue0ahUGVZGNsXrbqawzKwAM84gzn1c9xaAt6C3dZwSaR5MxrON1dRqO54ud_IpyCOw5AMNqESLXkUH9z-4TVlMqCFnRYbercNm9corXKRzkS0C2IcU7c6_FSjxCT9B6x_dSH9X-FuQ%3D%3D","p=vCWzFwAroTSg%3DcJ9xcGX495V0UNqyWsojX7v7DKfGVK1uMRhrfTqmAXOUBh_zLCS8tfvKnvNnFaXDpyaPOoMl1L7v1TTt2_OHoTzUW7swkb-AQkZDKV5ImNlpzOEo-LaDCafHzbYajt6Bd_1y7nCZRg94q29Mfuk5TnF-JQnZiF2cuAOTia3RYJBGT6oPuDJNEwVoPidOnOoxXrA5fDQfE8Q4frEw-Hur5C3JlJcKSBSZ1B6O43VzWuTmAA4PgNT6-BlEUVmMp2fX_1T_AgfaZlclSa5lcmXG0lF6QIvPZeBw2YJ1YIZQxkeD6SKC9Afu2irUeyoBxbAJ0HjR_yo5n3PrJDwtirPufWAJ6BJdKx7FglVXXYsKAOXVLWauIv0v2ANCWEc26psuwY90RtCBv-0i3p2Xa8NncfirFSRhVl79F_nkDMq826mEgmaXwY0n-_3O4r8CnnwB0k_Um9kwm3TdWIO2WLU8s25pYASysbNDoYXpmKkGH5-LPYRG1lZ5rPZ_r8ytACN4hAsIcZ6qj20jixp4zE8x2FJVpFG6W93Yg-aa-6iixRPT5wVdtP4daZFxI5FEmE2Rd_wYEk9nIteqy2n-HVSJDXEcNc5KQav121ygSeqgZDJjRv6AWKq-Jd2oGLGtALS2AeTp3dtXx4f1B3Gtg4HJgfiVhmqZVXWhdn18_I1zYTENuDIafH33gZRsQ_6DOMxUFMA9kKPX1D1a-AfdqflbElyf8yT9MOZFt5Jg2nkAuLnWRc2qTExr0KP4RTnjJU8-saHhL1vsURgw_YgtyuBOti5NWWiNDOTidubaaJH1Jl2RMHZGhysD5CzNCB19ac2a5FlIQWiH6RiXWhk4fzg4Tr1D2msNP8XGR5p-X6O8rbTTgUIneCBqHfN0s92ZLlT_RUTXcbVYB5zKEfmeRb3XGRQtejQUJQQtz-LdaEi76jqIi9xIPxIBETTOXn3OdP-jVz0zEy7rYA6udyielbjPYZbNkcmGVOncG5yyVfFpSThoP-Wujk0eW1f-n5DTImRed-SnOkPIh8qCDY4X0fU82fVgedcuvC33FrzqHMRNuFzBj02hP9c7vHxtIok0Aa_NX0BiPC-xb0ahM-dSNQtMTTn0PR_aYf-xZ6dA29Ro5t7Yd0eu7Qa8jA%3D%3DJs","p=Tb9vgm3fvNuU%3DEwEuv541HjotjspRSmvRUSyXxzw1E0lKVnebg5Kn1JcvZY7LZ6JkHPraELrRVVxrDd56tChc0Z2ZjjEsnnzRZpfg0HlYmrBCHWHh_r0YDag_A1Cif-IYV7Jqe6oTstEAodz1TnEtsCDappgGGxMWY1yLrEiDgyxw7E6qemULCVi1TYG1Tmplze0x7YPWPHyBMFEkAkWHnDeuRBEwYckWwre7rFRVFggd4iQKilBTQmwfBFEog3R_iKpDeA5IYBoXakYJxgt69NkGU3BKS-zW4K3KftEnBhDpR3UrRGoqUgMC-qfy1zxr4tDf4RfEzLQ_kwkw0yKy9EAJ6IxQby-PLBvfYO_st4qfvYBxmyT5G97ljZAOcdqp0iMvbrtpAs7YjjiDPH6-7Kxt-dIMIOXABq9poDE6bEF669kzMZJVv6Wn2zfa17r0MGGtFvmwu-wpwolfNn8UsdOdEvzTKkZ2oWgaBkb_MuKgogGYnmECb5BaXyIOlEX-eRLmwWgSLUqYIZkeXZgplwXm2uEvl7Umkz1eXrpv8hXbntj4A_WmMWT_kQG5hpPGgCSd6eoHJgoq6lCz7gdB5NGhLn5hrJ3czue_QtmuL_9TXK2nQjI7gisIj1rErlGa8zV9UqyJZ14K0a1RDexj0r-LrDt6prIiPUNV6iT2SWIklMeSMTW6DjjotVRDZGx5_f6oOd2aL1NsZzimAcD2X5eoEv8EKP4VwxQpkzrFPchO8kUCMA9GW67ClfX7FdaTNJyFmKYGmu5PA1dfQgtul8nhgOT1Els0gga368MiAhSE5p9LVhuff3BQzrXqEMP-Y_c5XntIP2W09WcyyEZdHzzDAsTHQJ5WVPaO5B5jegenPyn-ncsy8Fcsw3PNToPehkCK0dopTJPvGtrXUafS4DpayfVrCyllcxe7aH9q_7kVk8j_vid8uIw0iGwK0VLx5qUwuzN-Wr3jafjuFsg2o7i_1yNkoQobrp13XSbbvD0h5fOaANa4isdSLmUIIV63QZMdQ6pqV1qFBAFV3gCPNEjAwz-Gd_qHRMMTA3s2czNBVdpQxgs8vNFzk_OPg0FLZO6dsLCE9-z8tXdm4dkWecZ3ohwlEAKS77mJy6X6jesJoY_4DDCWtohs7fvA-0rrrA%3D%3DX","p=f4W7v2WlUNXk%3DuUAtPFIjpWN7Gxpd3WZnAsbWawUb4Swgd2RP_RWYN8PRLncrLCTQ0riMeu4iMGbxsAfx0Oo5pfGUBq5ha-SapfTsP6Uy3PWzQCMtlHN1B9ontSCFpaPVJHVJADVryqO0X0Nbsd3Acy7O3w2BUXz3vEeOjkBrx2d8v0CnAkHav1Q9uSfJjtmlLaJwiDnXedFWkJ49B_KQo1_hHoK6Apk8VZgkbKbh0gQWxyi_SfsfJIPTH6-RmsmkdAzgIq2KtF8ra29v8hZVBNstdb_ctftbygXYZga7QEBGr9vC7fDU9VYWKHryXx90ERZ6JaaeFMXh-im1fY14JDRHswFZ2v7ulXfzmp0fHOgwL58ai6t2mFwrfYc2Z1BahqXBSzwPLZDbPRaYvQWvJVolWcG7kMNNPsoekoAWUYu4u-pEuQGbADcFnKVwSIua76X7dmoU_88B5zhKvIO28XL1KMQdbaC5Hg8-xKpq7z-MghsOZFIVN8Jo25MjpRoCsslRB3AxRBC7RWN5ZKbvyQ4hajtpJGfH1lgxFZVy98T4p_Hhs3wbII9DPauXVHsBIwAEQGzgax4ToZvP9wfEyCP_hCtahibUUTWBCjzKqWcXclQmsAWQLmQBRZyz7oGW3Tap82jnpVojsHPuVeaA5X2OeB4anYbywepe3pHUwh73QGml1vPH7py0wt7l4JVOX8yonwDJ-Xoxo6OkYqNlqS-kPD2jwbRjrMBshGRBYcKOsAXEhn1if1KiyFSSFWsEXYkbWTZGBezyHuf1cEcY37PxGtWCBoAYg3_HiGgiJ3hBVoDeq9_pXJk3W1yaUaybJ9e2BxeqhuMAYt5hLVVETaRisRQneMgUnb4D6ECZM8QptfRvXblFU6JxWLP2Tl6V8gLSXbA2PosuDD0FA3dW5WIv2TaaO4iLNihug_Az7p7mEJE26BB1G1KhVOwvRqp-id9eJzlMmA-v7RYRRl9zrIvD"];
//   if (process.env.JC_READ_QINGFENG && process.env.JC_READ_QINGFENG.indexOf('&') > -1) {
//   YouthBody = process.env.JC_READ_QINGFENG.toString().split('&');
//   console.log(`您选择的是用"&"隔开\n`)
//   }
//   else if (process.env.JC_READ_QINGFENG&& process.env.JC_READ_QINGFENG.indexOf('\n') > -1) {
//   YouthBody = process.env.JC_READ_QINGFENG.split('\n');
//   console.log(`您选择的是用换行隔开\n`)
//   } else {
//   YouthBody = process.env.JC_READ_QINGFENG.split()
//   }
  Object.keys(YouthBody).forEach((item) => {
        if (YouthBody[item]) {
          ReadArr.push(YouthBody[item])
        }
    })
      console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
      console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
 !(async () => {
  if (!ReadArr[0]) {
    console.log($.name, '【提示】请把抓包的请求体填入Github 的 Secrets 中，请以&隔开')
    return;
  }
  for (let i = 0; i < ReadArr.length; i++) {
    if (ReadArr[i]) {
      articlebody = ReadArr[i];
      $.index = i + 1;
      console.log(`-------------------------\n\n开始晶彩看点第${$.index}次阅读`)
    }
  await AutoRead();
 }
   console.log(`-------------------------\n\n晶彩看点共完成${$.index}次阅读，共计获得${readscore}个青豆，阅读请求全部结束`)
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function AutoRead() {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
       let url = {
            url: `https://ant.xunsl.com/v5/article/complete.json`,
            headers: {
            "device-platform": "android",
            "access": "WIFI",
            "os-version": "N2G47H+release-keys",
            "app-version": "8.1.2",
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": "1101",
            "Host": "ant.xunsl.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/3.12.2"
            },
            body: articlebody
        };
        $.post(url, (error, response, data) => {
           let readres = JSON.parse(data);
             console.log(data)
           if (readres.error_code == '0' && typeof readres.items.read_score === 'number') {
              console.log(`\n本次阅读获得${readres.items.read_score}个青豆，即将开始下次阅读\n`)
              readscore += readres.items.read_score
            }
            else if (readres.error_code == '0' && typeof readres.items.score === 'number') {
              console.log(`\n本次阅读获得${readres.items.score}个青豆，即将开始下次阅读\n`)
              readscore += readres.items.score
            }
            else if (readres.success == false){
              console.log(`第${$.index}次阅读请求有误，请删除此请求`)
            }
            else if (readres.items.max_notice == '\u770b\u592a\u4e45\u4e86\uff0c\u63621\u7bc7\u8bd5\u8bd5') {     
              console.log(readres.items.max_notice)
            }
          resolve()
        })
      },s)
    })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
