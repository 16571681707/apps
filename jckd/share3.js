var fetch = require('node-fetch');
/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */
test()
async function test(){
    for(var i = 1; i < 6; i++){
        console.log("开始第"+i+"次分享：")
        share()
        await sleep(3000)
        console.log("\n")
        if(i == 5){
            console.log("开始提现0.3")
            await sleep(1000)
            tixian()
            await sleep(2000)
            console.log("开始每日签到")
            sign()
        }
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
function share(){
    const url = "https://ant.xunsl.com/v6/article/share/put.json";
    const method = "POST";
    const headers = { 
       "Token": "afcd1bf10091992b2aa694151605d098",
       "Content-Type": "application/x-www-form-urlencoded",
       "Content-Length": "908",
       "Host": "ant.xunsl.com",
       "Connection": "Keep-Alive",
       "Accept-Encoding": "gzip",
       "User-Agent": "okhttp/3.12.2"
    };
    const body = "access=WIFI&app-version=8.1.2&app_name=zqkd_app&app_version=8.1.2&article_id=37683932&channel=c1005&device_brand=Meizu&device_id=51664249&device_model=MEIZU%20M6&device_platform=android&device_type=android&dpi=320&from=4&inner_version=202107261526&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=5b77edc3a9946245&os_api=24&os_version=Flyme%207.3.0.0A&request_time=1628075724&resolution=720x1280&rom_version=Flyme%207.3.0.0A&s_ad=q1HH-fn083Io%3DtoRoX0YhUVWgGYrEdkkpRNARZT_rm0C8&s_im=o6NplMcA3HQU%3D5KLOvYV7JerdM4NpjLlAqA%3D%3DF&sim=2&sm_device_id=202108041900334327c5d40e64599a31ddb98bfe84f3c301b48b0866e82ec6&storage=10.68&stype=wx&subv=1.2.2&token=afcd1bf10091992b2aa694151605d098&uid=54865926&version_code=810&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Sxt5-yhaKp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNm7CFsoqYrt-iapqGcXY&zqkey_id=fd3e68e1fb547adb89d2f2cc13b21eec";
    
    const myurl = {
       method: method,
       headers: headers,
       body: body
   }
   fetch(url,myurl).then(res=>{

        return res.json()    //这里可以是json，也可以是字符串
        
        }).then(json =>{
        console.log(json.items.share_num)

    })
}

function tixian(){
    const url = "https://ant.xunsl.com/v5/wechat/withdraw2.json";
    const method = "POST";
    const headers = { 
        "os-version": "PCAM10_11_C.16",
        "device-model": "PCAM10",
        "request_time": "1627210230",
        "access": "WIFI",
        "os-api": "26",
        "device-platform": "android",
        "app-version": "8.1.1",
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": "1183",
        "Host": "ant.xunsl.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.12.2"
    };
    const body = "p=1qH-4Ui0XDPM%3DWFJFCIQCB8W5gKiwJCEqlDeq0YjbEsiQIrx0-_VW-1fjFs4zd8DdETLg1r5AXb5Ay2DhpgJFdew8oB00vub_dk46mox0rlUjFwVTv3l3dSHj6wFlUjBp1z4yrvD3DmL7z1mpkUtZXwX5Iaa8_868ywBSaG41jMqYEzTy7cZGYCpZUWZHQTZzCO4Y0nxWyTAYZsm8Uda-Y1nX76aLURyA0_pP2pjofpxqcZNGjunVWp-g11Mu7MDGGJt1eK49CcYpnbRjuizTNfWMYqmYIYI3o20cdIAEsDB4mnedOXwqsbk1q1-6UDU_qyvruGN7BYAiIrcfVZMfIX0B-uyPBRVR5bLhOKHBzRZYWLKPhxXRR2Ve8GVL4hE4QdMCll_AfWeAP9BYmm2_eGyKUmJs6_xFS7YZs6i0rdtnsxTxG-beBdT5iCw3AqMO3JTXyqM60Js0QGfkuo2YW_Jw4JgbN8wmTWXlFlsRGeE_W9vISQYo05LebVK-5G46hTv-TqWCZxcaXyWedIbCjxI_pWPdK1LpgDgahW90cPADiJnsKptFlX_Th3uzDGR7ydpzbT0cKwM4NwOfxRWiGqin9dUAnmAVJD5vnBBrgj3tRBO-RCMK9_Ml81VYO8Ojmi7kcXjRfem0mKNxXKVdfeBIy064svzVg3fq78eTvi4g7Uh0QHvFt3WPDaQRhbEuuW2H0Wgab7VPwgaM5O5l1XVwcahHXGxz1WCIBgLa-7dTum7ZPdJT0atiz8cRflNDCRMGZJoO2HRhUbgS5R6n8MtlB2BVIWmv-Nb4nWqAGVs5D66FxRKCsTgHjprVMUw1uLk7mtu2ZWXUFudaJ1SsjsSdwMWfypiJu8fsAvghReBAliVSf-5a4Khmt0NjDi1jFiFaSjRPHHWQQfTu2mzfdIcV3CBmukLYpNjL8CQ_YgGDXoCVSVEIGLb1il2Bf4-m0apiWguanqz5NXQVMvaRn9U_DITADgvIN7Ex1Gq6jrHWeX-GsV5PCuWiCzT7i37Ohpr-Hpp0izV8haUVgLjYDrEXZ7Gk4vfHbnElM4FlhojEux7ZKCp5WaVIGiNuW1PdVe-vrkrNozGa-leE5KBcPqPnoI3uPiU1z2niVkqIeDp3iobSTdGHbLRgeup6AEBqlw7_7Iivjd01WN7gi8ly_eY%3D";
    const myurl = {
        method: method,
        headers: headers,
        body: body
    }
    
    fetch(url,myurl).then(res=>{

        return res.json()    //这里可以是json，也可以是字符串
        
        }).then(json =>{
        console.log(json.message)

    })
}
function sign(){


    const url = "https://ant.xunsl.com/v5/CommonReward/toGetReward.json";
    const method = "POST";
    const headers = {
        "request_time": "1627566361",
        "os-api": "26",
        "phone-sim": "2",
        "device-model": "vivo+Y66i+A",
        "device-platform": "android",
        "access": "WIFI",
        "os-version": "N2G47H+release-keys",
        "app-version": "8.1.2",
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": "1183",
        "Host": "ant.xunsl.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.12.2"
    };
    const body = "p=LMIr0L3CWXKI%3DdpN6qbhO_JmKPAMpVZC0MB1o4__iXQXnQPelWc9NGdGH2DjF40KrSEGP8hnZ24SqQROAIGkv8X2ZCWYAA1rqHet2V1qqtWn0KfZYXwDxcbuZll7-UIGJOjXGSGsPUSp3YJdfuu3-MPE0cUSb6PPIssmhXejc_YcTNWDp9MhoSaQSjS3wAMSksHtK2eQhc6kpEe6oW4e-CAqPItrV-JDZNH05VPKwAWPXjfEz8BG39gPJJqgZBIg2EF3EvsVTB7xWKTiE61jsdlmm9rlt5DKQ-0I8KHHmU2eql30J6yn2-8b43nXS5eUDPzDu5o0BTn5deRdXJvHULkuL5rIm9p0XnSoupMRtWbqrSTfOXUg6cS4xWYMNDZlfbFzl0Wfh_Qj2kqFhQ9gZX2kxnUiaVWO_Wz97YDdZxK8QOQNVF19lmFnnY6oZapBDEA4JnqdrRfgaQ5GzEA5_7T3vwGSk2zv_01qco_nGhIEUrL8bHn_TRUl3A04M4idjwfa_02fGmotpbIN0lb-ZPhX-CArxiTqima5a8vMIcxlH6RspKrH-KOSjlEEVVwSYe2Ci1yumKNsSSfeps7-YJ1JK9Cdn7cx6OYm54Nh_WBF62X2xtYiEuS-Mul4eCVScfoT0DTqAOaXdev99T3TolO3duSh1kXkOY0LH3JOvKNv-RFoq0gGLven_Ol1mH8UL1yrJYEXhmFyrma49cgpUOxRAY_nfdDts2y5YoXljwN0LXolHqItVLcawzF7edR6ItpLeo07TgE333TUiAHLkqq5qDDFb0P_nXqAJbUbWpLoZJDEyRfLsyY5G3fAWqyLkP3eo25GpT2jrUORmZtA-btiDmrHGe1w22cAa-mlxNhpRdZ7-BNNWuO565ShUboDiNGVI1XmloUF45EeaRSGWs8qxcNJLTFNCcNXBrqV0-IBTsYs89oTXmZKqRNNWcY8inK9ocIVvHeHazHdXPJiD1M8uRRtLA8LWhyFVJ5QYZ1UqjkN-lVEYL3Td5zX2tR2bxuH-XfXYLcVnpDJCXfiCwYVyeX1pDqYGKKljH9x1-bCk-ZaSLke6Zpi8a5zWoGzkaGRv6DaBw7OdHRoHrMoHg2rVgiqBr9vRSW7vijqMN6_yLb8SZf8E4Odp505DiiD5R9BckkHh4dOJA5IrG44jvWg%3D";
    
    const myurl = {
        method: method,
        headers: headers,
        body: body
    }
    fetch(url,myurl).then(res=>{

        return res.json()    //这里可以是json，也可以是字符串
        
        }).then(json =>{
        console.log(json.message)

    })

 
}
