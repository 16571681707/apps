
var fetch = require('node-fetch');


var scores = 0

var jiabeiscore = 0
var num = 1
for(var i = 1 ; i < 5; i ++){
    setTimeout(function(){
        console.log("第"+ num + "次抽奖结果:")
        choujiang()
        num = num+ 1
        if(scores != 0){
            jiabei()
        }
    },10000*i + 800)
}






function choujiang(){

    const url1 = `https://ant.xunsl.com/WebApi/RotaryTable/turnRotary?_\u003d1626701252457`;
    const method1 = `POST`;
    const headers1 = {
        "Host": "ant.xunsl.com",
          "Connection": "keep-alive",
          "Content-Length": "165",
          "Accept": "application/json",
          "Origin": "https://ant.xunsl.com",
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM10 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile Safari/537.36",
          "Sec-Fetch-Mode": "cors",
          "Content-Type": "application/x-www-form-urlencoded",
          "Sec-Fetch-Site": "same-origin",
          "Referer": "https://ant.xunsl.com/html/rotaryTable/index.html?keyword_wyq\u003dwoyaoq.com\u0026access\u003dWIFI\u0026app-version\u003d8.1.1\u0026app_version\u003d8.1.1\u0026carrier\u003d%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8\u0026channel\u003dc1005\u0026cookie\u003dMDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Swt5-xhIyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjWuGjJzers-yapqGcXY\u0026cookie_id\u003dd287ca4190b3ed41763c73efb9ecbdd9\u0026device_brand\u003dOPPO\u0026device_id\u003d8e1c32754bfc4ef8\u0026device_model\u003dPCAM10\u0026device_platform\u003dandroid\u0026device_type\u003dandroid\u0026inner_version\u003d202107151939\u0026mi\u003d0\u0026oaid\u003d1CF53215846842DC862E6ED6D54FA24Bee79c064503e704efaf511a1a9014ed8\u0026openudid\u003d8e1c32754bfc4ef8\u0026os_api\u003d29\u0026os_version\u003dPCAM10_11_C.16\u0026phone_network\u003dWIFI\u0026phone_sim\u003d1\u0026request_time\u003d1626701220\u0026resolution\u003d1080x2264\u0026sim\u003d1\u0026sm_device_id\u003d20210213203836663c3df68cecbe244aeb26de607df2c101996432d57c323b\u0026subv\u003d1.2.2\u0026time\u003d1626701220\u0026uid\u003d54861911\u0026uuid\u003d431f334f01b84c45baa74b9394334c17\u0026version_code\u003d800\u0026version_name\u003d%E6%99%B6%E5%BD%A9%E7%9C%8B%E7%82%B9\u0026zqkey\u003dMDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Swt5-xhIyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjWuGjJzers-yapqGcXY\u0026zqkey_id\u003dd287ca4190b3ed41763c73efb9ecbdd9",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "zh-CN,zh;q\u003d0.9,en-US;q\u003d0.8,en;q\u003d0.7",
          "Cookie": "Hm_lvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626612584; sensorsdata2019jssdkcross\u003d%7B%22distinct_id%22%3A%2254861911%22%2C%22%24device_id%22%3A%2217ab9aa4e98140-009be2e4a9109a-60101e10-280800-17ab9aa4e991b%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%2217ab9aa4e98140-009be2e4a9109a-60101e10-280800-17ab9aa4e991b%22%7D; Hm_lpvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626621722; Hm_lvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626612584; __tins__20089745\u003d%7B%22sid%22%3A%201626695827353%2C%20%22vd%22%3A%201%2C%20%22expires%22%3A%201626697627353%7D; __51cke__\u003d; __51laig__\u003d1; Hm_lvt_268f0a31fc0d047e5253dd69ad3a4775\u003d1626697990; Hm_lpvt_268f0a31fc0d047e5253dd69ad3a4775\u003d1626697990; Hm_lpvt_f30e87a80dba96eae08da96eb1e19ffe\u003d1626701228"
    };
    const body1 = `cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl691y2Swt5-xhIyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDNjWuGjJzers-yapqGcXY&cookie_id=d287ca4190b3ed41763c73efb9ecbdd9`;

    const myurl1 = {
        method: method1,
        headers: headers1,
        body: body1
    };

    fetch(url1,myurl1).then(res=>{

        return res.json()    //这里可以是json，也可以是字符串
        
        }).then(json =>{
        // console.log(json)
        scores = json.data.score
        console.log("抽奖得分:" + scores + "\n")
        })
}
function jiabei(){
    const url1 = `https://ant.xunsl.com/v5/RotaryTable/toTurnDouble.json`;
    const method1 = `POST`;
    const headers1 = {
        "os-version": "PCAM10_11_C.16",
            "device-model": "PCAM10",
            "phone-sim": "1",
            "carrier": "%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8",
            "request_time": "1626699442",
            "access": "WIFI",
            "os-api": "26",
            "device-platform": "android",
            "app-version": "8.1.1",
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": "1202",
            "Host": "ant.xunsl.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/3.12.2"
    };
    const body1 = `p=W7jvhIkVyrvg%3D3ZHO5u_xLN3YWhPACjyR4hFwMQEw8RFiOsW9TYPs2LMjpZ66ggUob_0C92MXEwbrrPqwdzfKV1zMugzC_5wIlTphBQ29qAhNqFyaP7D6VAkTXkRNGxJ_EFe4QIW2hqvVsNFPpgAEJTMEidQrsuc3XC_ONDXEFQhtzDo1eTgSjb0Lm7XFjNMzUaC4pT_OzUF6ewhjvYYhAKKPaTIXpS1oUgNqsk3urlHn4siQUuuTQiqDuQis1CicOJVnD3OlQ4iq0JVkBzBF5B8cbH7A0keMSU5d2dzdquYltP0R86_jMnsTFypQ2P9xC34wUQ5viANJXTtUrc2sIcmyeKqTgSNp3hfvMIDriT7Ygx_lHrvHcUQU4FJY-c9WK8Hc4DX70aA1yn3XymAxdYBSZy19H73FHUHV030ucYCOIi-CHZCIGxtI2MusVb0cn8SONbVITHPOY-8SgzRwbHRWIAh1xkkj8zUSs3wowXZu-zFZSD8t5_Yp_NvxkNhZqSKBOJByeg7mdp574NUGLz-p7dPYgn3XTOenwW7SAr4_xuwNAatlNCc_ivtUeVL9rYshF-pflWaaZ6WwBp9xQQOz1_A9zmts975K3mUB0vh2H2xHYSWgOf3sI9SZsEK8MPKGZ65Gk-AmFmznwagqfIq04Mvq13gJ-qpL07hVwxw1RJcJrJZpPHxbT5reWLkBnp8t1Rc0A7QYSGVVckU_TGQLUm_dAnhzGobC7wzjT_muv9MYALQ9GjfwiQcncKM6ixD89Nn64IjhB2xnvGDONqFHLr0opTdQVMPob5qaYh41Pv4q-cdxSNFNHsMMInk65UBM4e_smBP3khY7cMX_g60VfMeZVXqubYolE6SyN3Z-7SYL2e7MexMj3H1zXTKbHomVxj8UrAPA55CUDiWKRK8L3lOX4Ht00mFmwWwtgkDEiZsnHcpUs-FOEGHxzGdhZMGW7QeQH0zXpvgGqG5hHkYR8rW_-56WQKDOlMb-7i3UvKy3lVyWVTSHa5E1tvBGtUU4a4ItISvoxwcyebsWkBgR97aBmHa7AfXP_rllj2aMXX3OQILJmVVaMUOdO83ZXQo4GpTRmvAfQDPzbwpk0qo73gIvyTwv966impfBlanMde5xCvhg__vwYMbZXHPTozP7s0FSntOrUIpyjPszWG-T5gUlYClvSDhxQWQIyr980`;

    const myurl1 = {
        method: method1,
        headers: headers1,
        body: body1
    };

    fetch(url1,myurl1).then(res=>{

        return res.json()    //这里可以是json，也可以是字符串
        
        }).then(json =>{
        // console.log(json)
        jiabeiscore = json.items.score 
        console.log("加倍分数为：" + jiabeiscore)
        })
}
    

