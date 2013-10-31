var requestLimitter = require('request-limitter');

var control = module.exports = function( max, sec ){
    var limitter = requestLimitter( max, sec );
    var req = function( callback ){
        if( limitter() ){
            callback();
        }else{
            setTimeout( function(){
                req( callback )
            }, sec * 1000 );
        }
    }
    return req;
}

