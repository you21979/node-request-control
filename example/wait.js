var requestControl = require('..');

var req = requestControl(5, 1);
for(var i = 0; i<30; ++i) req(function(){
    console.log("ok");
});
