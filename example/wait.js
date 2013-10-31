var requestControl = require('..');

var req = requestControl(10, 1);
var cnt = 0;
for(var i = 0; i<100; ++i) req(function(){
    console.log(++cnt);
});
