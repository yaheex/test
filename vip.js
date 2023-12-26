/*
CamScanner 解锁部分高级特权

hostname = api.mlinkapp.cc/v1/user

var body = $response.body; 
var obj = JSON.parse(body); 
// 修改数据字段

obj.data.username = "雅熙霸主丶";
obj.data.level = "3";
obj.data.freeTime = "659200000";

// 重写响应体
$done({ body: JSON.stringify(obj) });
