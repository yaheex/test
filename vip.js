/*
[rewrite_local]
https?:\/\/.*\.mlinkapp\.cc\/v1\/user\/authorizations$ url script-response-body https://raw.githubusercontent.com/yaheex/test/main/vip.js

[mitm] 
hostname=*.mlinkapp.cc

***********************************/

var body = $response.body; 
var obj = JSON.parse(body); 
// 修改数据字段

obj.data.username = "雅熙霸主丶";
obj.data.level = "3";
obj.data.freeTime = "659200000";

// 重写响应体
$done({ body: JSON.stringify(obj) });
