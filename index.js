function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function nFunction(){ };
}

function returnsAnAnonymousFunction(){
    return function(){  };
}