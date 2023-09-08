/* Codigo Sincrono Bloqueante*/

// (()=>{
//     console.log("Codigo Sincrono");
//     console.log("Inicio");

//     function dos() {
//         console.log("Dos");
//     }

//     function uno(){
//         console.log("UNO");
//         dos();
//         console.log("Tres");
//     }

//     uno();
//     console.log("Fin");

// })();

// /* Codigo Asincrono no Bloqueante */

// (()=>{
//     console.log("Condigo");
//     console.log("Inicio");

//     function dos(){
//         setTimeout(function (){
//             console.log("Dos");
//         },1000);
//     }

//     function uno(){
//         setTimeout(function (){
//             console.log("Uno");
//         },0);
//         console.log("Tres");
//     }
//     uno();
//     console.log("Fin");
// })();


// Seccion ====> CallBackas

// function CuadradoCallBack(value,callback){
//     setTimeout(() => {
//         callback(value,value*value);
//     },0|Math.random()*1000);
// }

// CuadradoCallBack(0,(value,result)=>{
//     console.log("Inicia CallBack");
//     console.log(`CallBacka: ${value}, ${result}`);
//     CuadradoCallBack(1,(value,result)=>{
//         console.log(`CallBacka: ${value}, ${result}`);
//     });
//                                                          http://callbackhell.com
// });



 function CuadradoPromise(value,callback){
     return new Promise((resolve,reject)=>{
         setTimeout(() => {
         resolve({
             value,
             result:value*value
         });
         },0| Math.random()*1000);
     });
 }
    
//  CuadradoPromise(0)
//      .then((Obj)=>{
//          // console.log(Obj);
//          console.log("Inicion Promise");
//          console.log(`Promise: ${Obj.value}, ${Obj.result}`);
//          return CuadradoPromise(1);
//      })
//      .then(Obj =>{
//          console.log(`Promise: ${Obj.value}, ${Obj.result}`);
//          return CuadradoPromise(2);
//      })
//      .then(Obj =>{
//          console.log(`Promise: ${Obj.value}, ${Obj.result}`);
//          return CuadradoPromise(3);
//      })
//      .then(Obj =>{
//          console.log(`Promise: ${Obj.value}, ${Obj.result}`);
//          return CuadradoPromise(4);
//      })
//      .then(Obj =>{
//          console.log(`Promise: ${Obj.value}, ${Obj.result}`);
        
//      })
//      .catch();



// Async - Await
// async function funcionAsincornaDeclarada(){
//     try {
//         console.log(`Inicio de Asyn Function`);
//         let obj = await CuadradoPromise(0);
//         console.log(`Async Function: ${obj.value},${obj.result}`);

//         obj = await CuadradoPromise(1);
//         console.log(`Async Function: ${obj.value},${obj.result}`);
//         obj = await CuadradoPromise(2);
//         console.log(`Async Function: ${obj.value},${obj.result}`);
//         obj = await CuadradoPromise(3);
//         console.log(`Async Function: ${obj.value},${obj.result}`);
//         obj = await CuadradoPromise(4);
//         console.log(`Async Function: ${obj.value},${obj.result}`);
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// const funcionAsincornaExpresada = async () =>{
//     try {
//         console.log(`Inicio de Asyn Function`);
//         let obj = await CuadradoPromise(5);
//         console.log(`Async Function: ${obj.value},${obj.result}`);

//         obj = await CuadradoPromise(6);
//         console.log(`Async Function: ${obj.value},${obj.result}`);
//         obj = await CuadradoPromise(7);
//         console.log(`Async Function: ${obj.value},${obj.result}`);
//         obj = await CuadradoPromise(9);
//         console.log(`Async Function: ${obj.value},${obj.result}`);
//         obj = await CuadradoPromise(10);
//         console.log(`Async Function: ${obj.value},${obj.result}`);
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// funcionAsincornaDeclarada();
// funcionAsincornaExpresada();

