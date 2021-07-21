var fetch = require('node-fetch');
var goon = 1
test()  //抽奖5次

async function test(){for(var i = 1; i < 12; i++){
    console.log("开始第"+i+"次看视频：")
    ksp()
  console.log("等待12s")
    await sleep(12000)
    if(goon == 2){
        break
    }
    console.log("\n")
}}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

function ksp(){

 
const url = "https://ant.xunsl.com/v17/Rvideo/videoCallback.json";
var method = `POST`;
var headers = {
    "Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhY2Nlc3MiOiJXSUZJIiwiYWN0aW9uIjoicmlnaHRfY29ybmVyX3ZpZGVvIiwiYXBwLXZlcnNpb24iOiI4LjEuMiIsImFwcF9uYW1lIjoienFrZF9hcHAiLCJhcHBfdmVyc2lvbiI6IjguMS4yIiwiY2hhbm5lbCI6ImMxMDI1IiwiZGV2aWNlX2JyYW5kIjoiSE9OT1IiLCJkZXZpY2VfaWQiOiI1MTY0NzkwMSIsImRldmljZV9tb2RlbCI6IkRVQS1UTDAwIiwiZGV2aWNlX3BsYXRmb3JtIjoiYW5kcm9pZCIsImRldmljZV90eXBlIjoiYW5kcm9pZCIsImRwaSI6IjM2MCIsImlubmVyX3ZlcnNpb24iOiIyMDIxMDcxOTE3MDIiLCJsYW5ndWFnZSI6InpoLUNOIiwibWVtb3J5IjoiMSIsIm1pIjoiMCIsIm1vYmlsZV90eXBlIjoiMSIsIm5ldF90eXBlIjoiMSIsIm5ldHdvcmtfdHlwZSI6IldJRkkiLCJvcGVudWRpZCI6IjZhYjBlMDgyZWQ2NTM3NzkiLCJvc19hcGkiOiIyNyIsIm9zX3ZlcnNpb24iOiJEVUEtVEwwMCsxLjAuMC4xODQlMjhDMDElMjkiLCJyZXF1ZXN0X3RpbWUiOiIxNjI2ODYyMzIxIiwicmVzb2x1dGlvbiI6IjcyMHgxMzU2Iiwicm9tX3ZlcnNpb24iOiJEVUEtVEwwMCsxLjAuMC4xODQlMjhDMDElMjkiLCJzX2FkIjoiZTZOcGxNY0EzSFFVJTNEaHR2UFRTZF85eGd0VC1kblIzNjdlM0g3SWtjZHY0R2EyIiwic2ltIjoiMiIsInNtX2RldmljZV9pZCI6IjIwMjEwNzIxMTcyNDIyMWYxMzNiZTU0ODY2ODUzNDYwOWQyMjQ5MDQwMTg5NzcwMTE4NTBiYjA5ZjI1Zjc4Iiwic3RvcmFnZSI6IjExLjE4Iiwic3VidiI6IjEuMi4yIiwidWlkIjoiNTQ4NjU5MjYiLCJ2ZXJzaW9uX2NvZGUiOiI4MDAiLCJ6cWtleSI6Ik1EQXdNREF3TURBd01KQ01wTi13MDlXdGc1LUJiMzZlaDZDUHFIdWFsSWVqbDY5MXkyU3h0NS15aGFLcDRMRFB5R2w5b25xa2ozWnFZSmE4WTg5OG5haldzSnVwWkxETmpXMkZvbmJlcjZtbWFwcUdjWFkiLCJ6cWtleV9pZCI6ImEwZDZiOTI5M2NiYWQxNTZiYzhhNmZkYjYzNGRlYzI3In0.242eZbApx5YD-XldC_8s3P1Py1tEOQiQTHaNU-uaRE-f1R6liU-5F0fxoHWlq0HPeqZMrgoQdmybIh1JVs0Lkw",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "2256",
    "Host": "ant.xunsl.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.2"
};
var body = "access=WIFI&action=right_corner_video&app-version=8.1.2&app_name=zqkd_app&app_version=8.1.2&channel=c1025&device_brand=HONOR&device_id=51647901&device_model=DUA-TL00&device_platform=android&device_type=android&dpi=360&inner_version=202107191702&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=6ab0e082ed653779&os_api=27&os_version=DUA-TL00%201.0.0.184%28C01%29&request_time=1626862321&resolution=720x1356&rom_version=DUA-TL00%201.0.0.184%28C01%29&s_ad=e6NplMcA3HQU%3DhtvPTSd_9xgtT-dnR367e3H7Ikcdv4Ga2&sim=2&sm_device_id=202107211724221f133be548668534609d224904018977011850bb09f25f78&storage=11.18&subv=1.2.2&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhY2Nlc3MiOiJXSUZJIiwiYWN0aW9uIjoicmlnaHRfY29ybmVyX3ZpZGVvIiwiYXBwLXZlcnNpb24iOiI4LjEuMiIsImFwcF9uYW1lIjoienFrZF9hcHAiLCJhcHBfdmVyc2lvbiI6IjguMS4yIiwiY2hhbm5lbCI6ImMxMDI1IiwiZGV2aWNlX2JyYW5kIjoiSE9OT1IiLCJkZXZpY2VfaWQiOiI1MTY0NzkwMSIsImRldmljZV9tb2RlbCI6IkRVQS1UTDAwIiwiZGV2aWNlX3BsYXRmb3JtIjoiYW5kcm9pZCIsImRldmljZV90eXBlIjoiYW5kcm9pZCIsImRwaSI6IjM2MCIsImlubmVyX3ZlcnNpb24iOiIyMDIxMDcxOTE3MDIiLCJsYW5ndWFnZSI6InpoLUNOIiwibWVtb3J5IjoiMSIsIm1pIjoiMCIsIm1vYmlsZV90eXBlIjoiMSIsIm5ldF90eXBlIjoiMSIsIm5ldHdvcmtfdHlwZSI6IldJRkkiLCJvcGVudWRpZCI6IjZhYjBlMDgyZWQ2NTM3NzkiLCJvc19hcGkiOiIyNyIsIm9zX3ZlcnNpb24iOiJEVUEtVEwwMCsxLjAuMC4xODQlMjhDMDElMjkiLCJyZXF1ZXN0X3RpbWUiOiIxNjI2ODYyMzIxIiwicmVzb2x1dGlvbiI6IjcyMHgxMzU2Iiwicm9tX3ZlcnNpb24iOiJEVUEtVEwwMCsxLjAuMC4xODQlMjhDMDElMjkiLCJzX2FkIjoiZTZOcGxNY0EzSFFVJTNEaHR2UFRTZF85eGd0VC1kblIzNjdlM0g3SWtjZHY0R2EyIiwic2ltIjoiMiIsInNtX2RldmljZV9pZCI6IjIwMjEwNzIxMTcyNDIyMWYxMzNiZTU0ODY2ODUzNDYwOWQyMjQ5MDQwMTg5NzcwMTE4NTBiYjA5ZjI1Zjc4Iiwic3RvcmFnZSI6IjExLjE4Iiwic3VidiI6IjEuMi4yIiwidWlkIjoiNTQ4NjU5MjYiLCJ2ZXJzaW9uX2NvZGUiOiI4MDAiLCJ6cWtleSI6Ik1EQXdNREF3TURBd01KQ01wTi13MDlXdGc1LUJiMzZlaDZDUHFIdWFsSWVqbDY5MXkyU3h0NS15aGFLcDRMRFB5R2w5b25xa2ozWnFZSmE4WTg5OG5haldzSnVwWkxETmpXMkZvbmJlcjZtbWFwcUdjWFkiLCJ6cWtleV9pZCI6ImEwZDZiOTI5M2NiYWQxNTZiYzhhNmZkYjYzNGRlYzI3In0.242eZbApx5YD-XldC_8s3P1Py1tEOQiQTHaNU-uaRE-f1R6liU-5F0fxoHWlq0HPeqZMrgoQdmybIh1JVs0Lkw&uid=54865926&version_code=800&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Sxt5-yhaKp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjW2Fonber6mmapqGcXY&zqkey_id=a0d6b9293cbad156bc8a6fdb634dec27";

var myurl = {
    method: method,
    headers: headers,
    body: body
};

fetch(url,myurl).then(res=>{

    return res.json()    //这里可以是json，也可以是字符串
    
    }).then(json =>{
        if(json.message != "执行成功"){
            console.log(json.message)
            goon = 2
        } else {
            console.log("看视频得分："+json.items.dialog.score )
        }

    })
}

