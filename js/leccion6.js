/* Symbol */

// let id= Symbol("id");
// let id2=Symbol("id2");

// console.log(id===id2);
// console.log(id,id2);
// console.log(typeof id, typeof id2);

// const NOMBRE= Symbol("Nombre");
// const SALUDAR = Symbol("Saludar");

// const persona={
//     [NOMBRE] : "Pachon"
// };

// persona.NOMBRE="Johan Pachon";
// console.log(persona);
// console.log(persona[NOMBRE]);

// persona[SALUDAR] = function (){
//     console.log("Hola");

// }

// console.log(persona);

// persona[SALUDAR]();

// //Recorriendo

// for(let propiedad in persona){
//     console.log(propiedad);
//     console.log(persona.propiedad);
// }

// console.log(Object.getOwnPropertySymbols(persona));


/* Sets */

// const set = new Set([1,2,3,3,3,1,2,false,false,true,true,false,"hola","HOLA",{},{}]);

// console.log(set);
// console.log(set.size);

// const set2= new Set();

// set2.add(1);
// set2.add(2);
// set2.add(2);
// set2.add(3);
// set2.add(true);
// set2.add(true);
// set2.add(false);
// set2.add({});

// console.log(set2);

// console.log("Recorriendo set");
// for (item of set) {
//     console.log(item);
// }

// console.log("Recorriendo set2");

// set2.forEach(item => console.log((item)));

// /* Pasandolo a Arreglo */

// let arr = Array.from(set);
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[8]);

// set.delete("HOLA")

// console.log(set);

// console.log(set.has("hola"));
// console.log(set.has(19));

// set2.clear();

// console.log(set2);

/* Map */

// const mapa = new Map();

// mapa.set("nombre","Johan");
// mapa.set("apellido","Pachon");
// mapa.set("edad",19);

// console.log(mapa);
// console.log(mapa.size);
// console.log(mapa.has("correo"));
// console.log(mapa.has("nombre"));
// console.log(mapa.get("nombre"));

// mapa.set("nombre","Johan Sebastian");
// console.log(mapa.get("nombre"));

// mapa.delete("apellido");
// console.log(mapa);

// mapa.set(19,"diecinueve");
// mapa.set(false,"falso");
// mapa.set({},{});

// //Recorrido


// for(let [key,value] of mapa){
//     console.log(`Llave: ${key}, Valor: ${value}`);
// }

// const  mapa2= new Map([
//     ["nombre","Mini"],
//     ["edad",7],
//     ["Animal","gato"],
//     [null,"Nulo"]
// ]);

// console.log(mapa2);

// const llavesMap2=[...mapa2.keys()];
// const valoresMap2=[...mapa2.values()];

// console.log(llavesMap2);
// console.log(valoresMap2);

/* Weak Set */

// const ws = new WeakSet();

// let valor1= {"valor1":1};
// let valor2= {"valor2":2};
// let valor3= {"valor3":3};

// ws.add(valor1);
// ws.add(valor2);

// console.log(ws);

// console.log(ws.has(valor1));
// console.log(ws.has(valor3));

// ws.add(valor3);

// setInterval(() =>console.log(ws),1000);

// setTimeout(()=>{
//     valor1=null;
//     valor2=null;
//     valor3=null;
// },2000);

/**
 * Weak Map
 */

// const wm = new WeakMap();
// let llave1= {};
// let llave2= {};
// let llave3= {};

// wm.set(llave1,1);
// wm.set(llave2,2);

// console.log(wm);

// console.log(wm.has(llave1));
// console.log(wm.has(llave3));

// console.log(wm.get(llave1));
// console.log(wm.get(llave2));
// console.log(wm.get(llave3));

// setInterval(() => console.log(wm), 1000);

// setTimeout(() => {
//     llave1=null;
//     llave2=null;
//     llave3=null;
// }, 5000);

// const iterable=[1,2,3,4,5];

// Acedemos al iterador de la varible iterable
// const iterador = iterable[Symbol.iterator]();

// console.log(iterable);
// console.log(iterador);

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// let next = iterador.next();

// while(!next.done){
//     console.log(next.value);
//     next= iterador.next();
// }

// function* iterable(){
//     yield "hola";
//     console.log("Hola");
//     yield "hola 2";
//     console.log("Mas consoloe.log");
//     yield "hola 3";
//     yield "hola 4";
// }

// let iterador = iterable();

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());}

// for (let y of iterador) {
//     console.log(y);
// }

// const arr = [...iterable()];
// console.log(arr);

// function cuadrado(valor){
//     setTimeout(() =>{
//         return console.log({valor, resultado: valor*valor});
//     },Math.random()*1000);

// }

// function* generado(){
//     console.log("Aqui es el generador");
//     yield cuadrado(0);
//     yield cuadrado(1);
//     yield cuadrado(2);
//     yield cuadrado(3);
//     yield cuadrado(4);
//     yield cuadrado(5);
//     console.log("Termina el generador");
// }

// let gen = generado();

// for (const y of gen) {
//     console.log(y);
// }


/**
 * Proxy -----------------------------------------------------
 */

// const persona={
//     nombre:"",
//     apellido:"",
//     edad:0
// }

// const manejador = {
//     set(obj, prop, valor){
//         if(Object.keys(obj).indexOf(prop)===-1){
//             return console.error(`La Propiedad "${prop} no
//             no existe en el objeto Persona`);
//         }
//         if(
//             (prop==="nombre" || prop === "apellido")&&
//             !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))
//         ){
//             return console.error(`La propiedad ${nombre} acepta solo letras
//              y espacios en blanc`);
//         }
        
        

//         obj[prop]=valor;   
//     }
// }

// const johan = new Proxy(persona, manejador);
// johan.nombre="Johan";
// johan.apellido="Pachon";
// johan.edad= 20;
// johan.twitter="@johanPachon";
// console.log(johan);

// console.log(persona);
//_________________________________________________________________

/**
 * Propiedades Dinamicas de los objetos -------------------------------
 */
// let aletorio=Math.round(Math.random()*100+5)
// const objUser={
//     [`id_${aletorio}`]:"Valor aletorio"
// };

// const usuarios=["Sebas","Kadwdq","Placo","Peny"];

// console.log(objUser);

// usuarios.forEach((usuarios,index) => objUser[`id_${index}`] = usuarios);

// console.log(objUser);

/**
 * ___________________________________________________________
 */


/**
 * This -----------------------------------------------------
 */

// console.log(this);

// console.log(this === window);

// this.nombre="Contexto Global";

// console.log(this.nombre);

// function imprimir(){
//     console.log(this.nombre);
// }

// imprimir();

// const obj={
//     nombre:"Contexto Objeto",
//     imprimir: function(){
//         console.log(this.nombre);
//     }
// }

// obj.imprimir();

// const obj2={
//     nombre: "Contexto Objeto 2",
//     imprimir
// }

// obj2.imprimir();

// const obj3={
//     nombre: "Contexto Objeto 2",
//     imprimir:() =>{
//         console.log(this.nombre);
//     }
// }

// obj3.imprimir();

// function Persona(nombre){
//     const that = this;
//     // this.nombre = nombre;
//     that.nombre=nombre;
//     // return console.log(this.nombre);
//     return function(){
//         console.log(that.nombre);
//     }
//     // return () => console.log(this.nombre,22);
// }  

// let johna= new Persona("Johan Sebastian");
// johna();
//___________________________________________________________

/**
 * CALL, APPLY, BIND ----------------------------------------
 */

// console.log(this);
// this.lugar="Contexto Global";

// function saludar(saludo,aQuien){
//     console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
// }

// saludar("Hola","Papa");

// const obj={
//     lugar:"Contexto Objeto"
// };

// saludar.call(obj,"Hola con Calll","Johan");
// saludar.call(null,"Hola con Calll","Johan");
// saludar.apply(obj,["Adios con Apply ","Pachon"]);
// saludar.apply(null,["Adios con Apply ","Pachon"]);

//_____________________________________________________________

/*
 *  JSON ------------------------------------------------------
 */

const json={

    cadena:"Hola",
    numero:24,
    booleano: true,
    arreglo:[2,3,4,2],
    objeto:{
        email:"Easofa@fwf.coa",
        numero2:12
    },
    nulo:null
}

console.log(JSON);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));

//No sirve porque no acepta el tipo de datos
// console.log(JSON.parse("Hola Mundo"));

console.log(JSON.parse("null"));

//No lo acepta este
// console.log(JSON.parse("undefined"));

/* Stringify */

console.log(JSON.stringify({}));
console.log(JSON.stringify([]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));

//Lo coniverte en un Archivo JSON
console.log(JSON.stringify({
    x:2,
    y:5
}));


//Convierte el objeto en un archivo json:
console.log(JSON.stringify(json));


//Convierte el JSON en un objeto valido para javascript:
console.log(JSON.parse(`{"cadena":"Hola","numero":24,"booleano": true,"arreglo":[2,3,4,2],"objeto":{"email":"Easofa@fwf.coa","numero2":12},"nulo":null}`));



