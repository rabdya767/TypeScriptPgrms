function OptionalParam( n? :number ):void{
    if(n){    
        console.log(`My Id is ${n}`);
    }else{
        console.log(`Id is empty`);
    }
}

OptionalParam(12);
OptionalParam();