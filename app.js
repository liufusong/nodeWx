const express = require('express')
 
const bodyParser =  require('body-parser');
 
const fs = require('fs');
 
const path = require('path')
 
const app = express();

var request = require('request');

/* 微信登陆 */
var AppID = 'wx20397873b70ac874';
var AppSecret = '2435c324feb2cf0272934a4a00ff9711';
 
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/wx_login',(req,res)=>{
    console.log(123)
    // 第一步：用户同意授权，获取code
    var router = 'get_wx_access_token';
    // 这是编码后的地址
    var return_uri = 'http://qq.test666.top/'+router;  
    var scope = 'snsapi_userinfo';
    
    res.redirect('https://open.weixin.qq.com/connect/oauth2/authorize?appid='+AppID+'&redirect_uri='+return_uri+'&response_type=code&scope='+scope+'&state=STATE#wechat_redirect');

})

app.get('/get_wx_access_token',(req,res,next)=>{
    console.log("code_return: "+req.query.code)
})


app.listen(3000,()=>{
console.log('running as http://127.0.0.1:3000')
})
