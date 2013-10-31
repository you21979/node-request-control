node-request-control
====================
install                                                                                                                                                                                                                                      
-------                                                                                                                                                                                                                                      
    npm install request-control

usage
-----
    
    var requestControl = require('request-control');
    
    var req = requestControl(10, 1);
    var cnt = 0;
    for(var i = 0; i<100; ++i) req(function(){
        console.log(++cnt);
    });
