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
       "Token": "6b14ff0e77aa73ecdd29c73c40375e3a",
       "Content-Type": "application/x-www-form-urlencoded",
       "Content-Length": "916",
       "Host": "ant.xunsl.com",
       "Connection": "Keep-Alive",
       "Accept-Encoding": "gzip",
       "User-Agent": "okhttp/3.12.2"
    };
    const body = "access=WIFI&app-version=8.1.2&app_name=zqkd_app&app_version=8.1.2&article_id=37683419&channel=c1025&device_brand=vivo&device_id=51647940&device_model=vivo%20Y66i%20A&device_platform=android&device_type=android&dpi=320&from=4&inner_version=202107191702&language=zh-CN&memory=2&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=9666676b9796fff&os_api=25&os_version=N2G47H%20release-keys&request_time=1627566049&resolution=720x1280&rom_version=N2G47H%20release-keys&s_ad=VMIr0L3CWXKI%3D33wZx70NTyI8pRc54DesBg%3D%3D&s_im=jMIr0L3CWXKI%3DWTi75HDK-4EdrxNU448liQ%3D%3D&sim=2&sm_device_id=20210606132859b1d8aafbb5177ddc8dddfb44d03deaec0109edab11c1d101&storage=22.95&stype=wx&subv=1.2.2&token=6b14ff0e77aa73ecdd29c73c40375e3a&uid=54865966&version_code=800&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Sxt59rhaKp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNl2qFoo7drrnIapqGcXY&zqkey_id=201743bf4969c9d1d9c078aeccd10d9c";
    
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
        "phone-sim": "1",
        "carrier": "%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8",
        "request_time": "1627210230",
        "access": "WIFI",
        "os-api": "26",
        "device-platform": "android",
        "app-version": "8.1.1",
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": "1201",
        "Host": "ant.xunsl.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.12.2"
    };
    const body = "p=nWRHEiWXZdUk%3Dy_MwkRLXKJIfw9-wp2M1qG4Tpr8WWIjbgDQJ3zUVJ9QKE5MSc67cKx2O7M-SMaq6ymv9-UoQqnSZquvrFGnd7apth_TRoMwvlSDgrNr7TKM2ch_LZdzJm7tLReSSTj4Wp65hOXFSSFLLO_sxPRBsM8PXW7if1InNZPn0jazJsCQ0KlnkZ7Tf6IiXdgKBLCHqlNMLu8ziTiaI9a_UHrwNMATd9gFTkObOGsA_C0mLN0GfkRGI85fxVQlXnH7PrYOAruxJ7UHeyZoKl0z5TgljTpdg-u5ReDAhFFmy78wA9hmUGc7fqSSHQaQO85YD4BgPveya9-cWpsCj2Jn1OMaqw7lD68ypoIF5Co_Vk4qGYaaZVCAEsf7xv4fo1s3HLg_bvYtCIW68Txy9928g56MPIOcURg0wl4lQiXy3tJ7SNUz3PbHtByTd1oSoKqqfO5gNYOok_3dVecJjE5TyrIXbu_y_FN89GI_udVZDAsA3jvkBnoro61Be9A_d83BHyaolLTtrmH9MEo6dhc1KUz9JlVIz7B0P95wC9flX8eSoIdb1NzHzYEivw2QqeENsoJwDqpZeZc8YTejsxvikfrsMhS6gouC7mwo4SRzfI66oSGD89YTGu_w939SVIuM8WFVMz1FEp65406Nn783z-iazoL031LMxbZngeEosbxXFGwWo4C90vBMOVvDZXnIe2yvAfdzCduAuPdyUmZEiHdALexjuam25NasYpUPJinXKcnZiP6sx8Oy6aw4xMPJc_eQjumETMgu8Vi_5Cg2qY1hUh4sQvWs-UiLvAFYjP4_GV1JEJFDdve8YI3Sxhf1iBy1xlWu-gDEH2_AlyeXjA3vU7E7M7rFQ0Y3JZGsnQytk4Dm_kq2GA-_-445-QNdF7yTVr4TCgipimg8NqGUhlCpquZ9-lJ5zrini-kDTk2h8bEj4AeK3IvuMAh2jOwbrUFar8szW_T-NcJQV8Z0f6QPqkto8TnvQ-69enbyxDIcbYE4CSbXjPqeHBjYPJGR_0AFwFfyrkNay_6PDsdKNIkOjBuWDNgKjeQINXM-PcmaKHRB7AvEnDcWj_gtJ7-xN4iFPUumK0n6kPdsswJ40K4LTc-zfH4JQh4dJqIqg-gC_0QezfuMXjNXt_3Niu9O_tuhRbZY8dL90toAs_-GDdSrjXoRNPoC4VZXZ";
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
        "Content-Length": "1197",
        "Host": "ant.xunsl.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.12.2"
    };
    const body = "p=wqH-4Ui0XDPM%3D6jRj7RIpVBFs7-CHdoJPTAmkPl1JFa10FYkyRG9kcx96to5uqmv9RctvkeVB0-Jixhfp2-rIMN5OEoF0WO9KhIy7YXMqoMYQkz-jyRhadEU0edk4aHtEyXX6oKaQaw-f84nyYX6fBYkTqmj30wXm9NbEsW_PNZEuyeGRcYqgHcCvl91VmisHnt1n0RxVeySlts7_6q0Nt7BNTZ-qjg5FK9IURvYumPEpxSzX-uNzZxaBsW5Bwyz2R0eCe6xz7hByQatAvPFEK3o-kznWteDNBowriarcXLVlLf4EJKc_FyihZWuVgbVMnyEC41DhXbwV4YgA0VoSfHt9mJFuVDowg11FPl0_k_QbqjWB5zlT5eWfy9BwGr1PO6yyxmylgtQCpZP7jgLxC_mJInZy2gwciGALaomfaZalT8MYqStmjxLQIVBzYiTM-UZNTvBirkQrxa6I71GkI5hpGw8Xl_XzU_BPkQRdCufBkmu3_R14ztOlAssI7yYo29QWqREE-1qTgrq7SOKsaqxN8B_99w6iJBtPnbisWM1wMshxiRD7hkEkl8WhCFrBz5_FR0WIaghGXGQ5eGBQuf9EvXDAtmoElocF66Jf5MJj1EV8yG-HRfPBcx9czlMR_wgI635E_sQoDZIeTxftaDBXBOIxXlEx_A4IemgBGfPQlP_T4xE_MJltTAxCWqvP18rmJV4tXPsZ8yGzLiPSvZbYw9WNkBm-MOL42_j_yfckGjFeqCZ-ySTsos95iwr6S4_ZII2t-kq0-JKwrEMh8WA7AY0NZCZxa94oTVEd4SVpax5bVReqL6CXaU11bv-DB9zJhKqq3rs072qnPiLX2SZpr_pQpT2qEGQEcIoMiefwB65K8C-grRGDAckrWbc72hfVeMHLgDob0vD6wMkiHgsZTatt2RZSahJ9pZ6qx6rwzYyU0_TgD-UyNDOtkLs41MbFZvX9VTNnHnz9pI11K4HXpNz1sLGYyfHavMOUrd_TXV7L4H8UWlBh2ksku5ZmDQfaYHPtpOkOLHDmUOnBvQWDtENQWYEqAzhizQz5gSNhKTQjKHr9-hvdON5HTOjikAGdCwfFvi8vcHLDSYgu5xVKKl7F2E5JjNL8c8tPCoDPYk5NWEjDFp35ln3O3b_TpAI_ZtIfSR14uPjLmN77kRiN1m5CZdGa_Q%3D%3D";
    
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
