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
    }
}}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
function share(){
    const url = "https://ant.xunsl.com/v6/article/share/put.json";
    const method = "POST";
    const headers = { 
       "Token": "9e676df6cf6234d831308a7cd7f45a48",
       "Content-Type": "application/x-www-form-urlencoded",
       "Content-Length": "967",
       "Host": "ant.xunsl.com",
       "Connection": "Keep-Alive",
       "Accept-Encoding": "gzip",
       "User-Agent": "okhttp/3.12.2"
    };
    const body = "access=WIFI&app-version=8.1.1&app_name=zqkd_app&app_version=8.1.1&article_id=32956028&carrier=%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8&channel=c1005&device_brand=OPPO&device_id=51643807&device_model=PCAM10&device_platform=android&device_type=android&dpi=480&from=4&inner_version=202107151939&language=zh-CN&memory=3&mi=0&mobile_type=1&net_type=1&network_type=WIFI&oaid=1CF53215846842DC862E6ED6D54FA24Bee79c064503e704efaf511a1a9014ed8&openudid=8e1c32754bfc4ef8&os_api=29&os_version=PCAM10_11_C.16&request_time=1627209797&resolution=1080x2264&rom_version=PCAM10_11_C.16&s_ad=k7jvhIkVyrvg%3DnweZvA7pZv0OcOGaAFhKgG6cD5n7u9eSg&sim=1&sm_device_id=20210213203836663c3df68cecbe244aeb26de607df2c101996432d57c323b&storage=107.53&stype=wx&subv=1.2.2&token=9e676df6cf6234d831308a7cd7f45a48&uid=54861911&version_code=800&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Swt5-xhIyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNl7GEsqDdsLm6apqGcXY&zqkey_id=b368e2a1f60b29b9c14e7fdfff24d822";
    
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
        "Content-Length": "1261",
        "Host": "ant.xunsl.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.12.2"
    };
    const body = "p=EqH-4Ui0XDPM%3DWFJFCIQCB8W5gKiwJCEqlDeq0YjbEsiQIrx0-_VW-1dL_R8OIzxE0-ynasIaNTfEmqFjob2VoOaE0I3ehxwe5XL8w0mVb2W0POcCQqJXJACAJHCUR76_nAAeHIJM3trAJbLijU_vpTPwBUa08es67xjszA3sD7rhmH_3AwogYs995IX82ZwpaFXWWG2y5_4SM8TVnacPy8CsQ6vU_kYclz2iH4NIE031Q5Zjg9k4FJDCEEADGhmqAdl_MMUMDDAgS5IPVvFO3r7UCWtlPVbZMHI9tQR1vxliEklvT87XTA62cyEMMtu2-na0ZuKc22EJ6N-SQuy2IVGEiy8RhbUDaIyGmClWI29T33tyQ239YHQx0jn0XTUq3RWS86qEN4ID60Y0N3ouSWxVFb7cgPCPcaPH1wqAu-SU2F4v_OhWhhHG9ohpG1yLF-eYYn2Mz7QMZ5bwnWrIrZzzGwwBnisUDInoQgO3DNOsZh1t-ECp-z5_g2tJcwbVU4sYqOsjeP6hBQYeDzWBTeWUsTI6IgGaykC9NQuNAkg5GwpsahWCqNea_fwBz4lyv8r8utaLJdLxytlNU4ZU89jWHvj5xbuUIQVs6pFs84CNNALvN0mfJmC2rhNWQZc2u5jSP-3CY4JjN_8mnO2R2SjoL2Z7fw4InkIBMYBBKw46Of2gnz1RT9Yp4fIIAxj_FPu8nrcSX_60qbCv-gUM4ngvuCTUjQvIZ16RE0odGNJnlSVHThkDBwm9kMX63FOxWhsO5N3EGxjM0b-BOBzWHPww0wJgp7orBqHeV2rppibCBwNbN3eoL6J-DGpkhyZwP8H5vRmJm-VPWuArGgzpFuse6oJG0goQlBqL2KYN4t1FrlyNmYUM5YLHRdiMW8oPS0lV1Gs15xKQzVSJq6c06XGDNnvhYZLFkGBUYRfFqXHQ0X-Nf5RKMyZc4JzQyVHxjR_R-1CA3yyRF2PNMPC8dbDUeC7SZbkARKi53UYbyf7ruXX6v5gwc_YLuuov3Q5JtAs_AJOrRqWaY7Ysq4VdkoXnuIGlbMpDYGKtrxpKTCpljTWeZWdwUBbHbx_xUEEtxYIHE5tuRjKnR9y0mHbZDag4OcQ3z75OjdlCg1nloCZH13PY1vaAGbc2xv1MiGB3xWImtbWGdG6i7cDr1MUUPpNxGz9M7YqFyPAU5b7kPJuaLmBiXZKLGCBBFaX5d9AA5TvyXFo0ra3jqZ-VoxC1MCxjcNXadjEwDg%3D%3D";
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
 
