

function factorial(valor){
    
    valor=(valor===0) ? 1 : valor * factorial(valor-1);
    return valor;
}

console.log(factorial(4));


function factorial2(valor){
    if(valor>0){
        if(valor===0){
            return 1;
        }
        return valor*factorial(valor-1);
    }
}

console.log(factorial2(4));

function factorial3(valor){
    if(valor>0){
        return valor*factorial((valor===0)? 1 : valor);
    }
}

console.log(factorial3(4));
