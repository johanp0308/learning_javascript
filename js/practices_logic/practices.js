/* Primo Gemelos */
const isPrimo = function(num){
    for(let i=2 ; i<num ; i++){
        if(num%i == 0){
            return;
        }
    }
    return num;
}

const gemPrimo = function(prim){
    gem = prim + 2
    if(isPrimo(gem) && isPrimo(gem)){
        return [prim,gem];
    }
    return 1;
}

const main = function(){
    let gemePrimo = [];
    for(i=2;i<20;i++){
        gemePrimo.push(gemPrimo(isPrimo(i)));
    }

    let result = gemePrimo.filter((item,index) => gemePrimo.indexOf(item) === index)

    console.log(result);
}
// main();

/* primos palindromos */

const apicuoNumber = function (){

}