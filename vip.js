/*
秒链VPN 解锁会员等级 可选路线

***************************
[rewrite_local]
^https?:\/\/api\.mlinkapp\.cc\/(v1\/v2\/user\/v1|v1\/spi/mservice) url script-response-body https://raw.githubusercontent.com/yaheex/test/main/vip.js

[mitm]
hostname = api.mlinkapp.cc
**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const v1 = '/v1/v2/user/v1';
const time = '/v1/spi/mservice';

if (url.indexOf(v1) != -1) {

	obj.data["username"] = "雅熙霸主丶";
	obj.data["level "] = "3";
	obj.data["freeTime "] = "659200000";
	
	body = JSON.stringify(obj);
}
$done({body});
