/*
[rewrite_local]
^https?:\/\/.*\.mlinkapp\.cc\/v1\/user\/ url script-response-body https://raw.githubusercontent.com/yaheex/test/main/vip.js

hostname=*.mlinkapp.cc
***********************************/
var body = $response.body; 
var obj = JSON.parse(body); 
// 修改数据字段
obj.data.level = "3";
// 重写响应体
$done({ body: JSON.stringify(obj) });
