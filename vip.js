/*
[rewrite_local]
https?:\/\/.*\.mlinkapp\.cc\/v1\/user\/user_session\/authorizations$ url script-response-body https://raw.githubusercontent.com/yaheex/test/main/vip.js

[mitm] 
hostname=*.mlinkapp.cc

***********************************/

var cuttlefish ={"warning":"yahee"};
var yahee = {
  "msg" : "OK",
  "data" : {
    "id" : 1739223278108950528,
    "displayName" : "",
    "expireTime" : 1703759535606,
    "phone" : "",
    "status" : 1,
    "agentNum" : 3,
    "avatar" : "",
    "level" : 3,
    "freeTime" : 666600000,
    "username" : "yahee666",
    "role" : "general",
    "vipType" : "",
    "userNumber" : 2916500,
    "email" : "",
    "eid" : 6980696
  },
  "code" : 0
}
};
$done({body: JSON.stringify(yahee)});
