// /*Parametros REST en funciones
// */
// function sumar(a,b, ...c){
//     let resultado=a+b;

//     c.forEach(function(n){
//         resultado+=n;
//     });

//     return resultado;
// }

// console.log(sumar(1,2));
// console.log(sumar(1,2,3));
// console.log(sumar(1,2,3,4));
// console.log(sumar(1,2,3,4,5));


// const arr1=[1,2,3,4,5],
//       arr2=[6,7,8,9,0];
// console.log(arr1,arr2);

// //Operador de propagacion =>Operator Spread
// const arr3 = [ ...arr1 , ...arr2 ];
// console.log(arr3);


/* ARROW FUNCTIONS */

// const saludar = () => console.log("Hola");

// const saludar = nombre => console.log(`Hola ${nombre}`);
// saludar("Pachon");

//  const sumar2 = function(a,b){
//      return a+b;
//  }

// const sumar = (a,b) => a+b;

// console.log(sumar(9,9));

// const funcionDeVariasLineas = () =>{
//     console.log("Uno");
// }

// funcionDeVariasLineas();

// const numeros =[1,2,3,4];

// numeros.forEach( (el,index)=> {console.log(`${el} esta en ${index}`)} );

// function Perro() {
//     console.log(this);  Aqui el this tomara el DOM = Window
// }

// perro();

// const perro ={
//     nombre: "Mateo",
//     ladrar:()=>{
//         console.log(this) => Al ejecutar eso con las arr Function lo que hace es devolver el contexto donde se encuentra
//     }
// }

//Mejor esto 

// const perro={
//     nombre: "Kenia",
//     ladrar(){
//         console.log(this);
//     }
// }


//Prototipos

//Funcion constructora

//En los casos cuya funcion sea igual y tengamos muchos objetos intanciados lo mejor por conveniencia es sacarla de ahi se le asigna
//Como prototype a la funcion

// function Animal( nombre , genero ){
//     this.nombre=nombre;
//     this.genero=genero;

// }
// Animal.prototype.sonar= function(){
//     console.log("Hola Amigo")
// }

// const snoopy= new Animal("Pachon","Machote");

// console.log(snoopy.sonar);

// /*
//     Herencia Prototipica
// */

// function Perro(nombre,genero,tamanio){
//     this.super = Animal;
//     this.super(nombre,genero);
//     this.tamanio=tamanio
// }

// Perro.prototype.sonar= function(){
//     console.log("Guau guau");
// }
// //Aqui esta heredando de animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor=Perro;

/* 
    Clases y Herencia
*/

// class Animal{
//     // El constructor se ejecuta en el momentod de intanciar la clase.
//     constructor(nombre,genero){
//         this.nombre=nombre;
//         this.genero=genero;
//     }

//     sonar(){
//         console.log("Estoy haciendo un sonido");
//     }
// }

// class Perro extends Animal{
//     constructor(nombre,genero,tamanio){
//         /* Con el Metod Super se manda a llamar la clase padre*/
//         super(nombre,genero);
//         this.tamanio = tamanio;
//         this.raza=null;
//     }

//     ladrar(){
//         console.log("Guau guau!!!");
//     }
//     static info(){
//         console.log("Informacion")
//     }
//     /* Metodos Setter y Getters */

//     getRaza(){
//         return this.raza;
//     }

//     setRaza(raza){
//         this.raza= raza
//     }
// }

// const mimi = new Animal("Mimi","Hembra");
// const scooby = new Perro("Scooby","Macho","Gigante");

// scooby.ladrar();

// Perro.info();

// console.log(mimi);
// console.log(scooby);

// scooby.setRaza="Gran Danes";
// console.log(scooby.getRaza);


/* Objeto Consolew  */

// console.log(console);
// console.error("Esto es un error")
// console.warn("Esto es una advertencia");
// console.info("Esto es un infromacion");

// console.log(window);
// console.log(document);
// console.dir(window);
// /* Para usar como objeto y mostrarlo en pantalla uasr dir */
// console.dir(document);
// console.clear() //Limpia la Consola

// /* Console Group */
// console.group("Holas mensajes");
// console.log("Hola nene");
// console.log("Que haces nene");
// console.groupEnd();

// /*Console Table*/
// console.table(Object.entries(console).sort());

// /* Otros Metodos*/

// const numeros=[1,2,3,4,5],
//     vocales=["a","e","i","O","u"];

// console.table(vocales);
// console.table(numeros);
// console.clear();
// /* Console Time*/

// console.time("Cuanto tarde mi codigo");

// const arreglo=Array(1000000);

// for(let i=0;i<arreglo.length;i++){
//     arreglo[i]=i;
// }

// console.timeEnd("Cuanto tarde mi codigo");

// console.count();

// console.clear();

// /* Console de prueba*/

// let x=1,
// y=2,
// pruebaxy="Se espera que X siempre sea menor que y";

// console.assert(x<y,{x,y,pruebaxy});

// /* object Date */

// let fecha=new Date();
// console.log(fecha);

// // Dia del Mes
// console.log(fecha.getDate());

// console.log(fecha.getDay());

// console.log(fecha.getMonth());

// console.log(fecha.getFullYear());

// console.log(fecha.getHours());

// console.log(fecha.getMinutes());

// console.log(fecha.getSeconds());

// console.log(fecha.getMilliseconds());

// console.log(fecha.toString());

// console.log(fecha.toDateString());

// console.log(fecha.toLocaleString());

// console.log(fecha.toLocaleTimeString());

// console.log(fecha.getTimezoneOffset());

// console.log(fecha.getUTCDate());

// console.log(fecha.getUTCHours());

// console.log(Date.now());

/* Para el manejo de comparaciones de fechas se recomendaria usar la libreria de moment.js */

/* Objeto Math*/

// console.log(Math);

/* Alert, Confirm y Prompt */

// window.alert("Esto es una Alerta");

// window.confirm("Esto es una confirmacion");

// window.prompt("Hola esto es un prompt ingrese algo:");

/* Expresiones Regulares*/

// let lorem="Qui aute eu sit occaecat sunt incididunt nostrud. Ullamco excepteur laborum enim quis pariatur est dolore minim voluptate. Commodo excepteur fugiat ad anim labore enim culpa consequat sit ipsum. Exercitation laborum elit esse eiusmod non excepteur eiusmod ullamco sunt nostrud nulla adipisicing cupidatat laborum. Duis consectetur ea magna sint non. Eiusmod mollit eu pariatur esse Lorem ad enim id do Lorem sit sit. Mollit non tempor Lorem incididunt dolore in est tempor."

// let exp= new RegExp("nostrud","ig");
// let exp2=/notrud/ig;

// console.log(exp.test(lorem));
// console.log(exp.exec(lorem));
// console.log(exp2.test(lorem));
// console.log(exp2.exec(lorem));

/* Funciones Anonimas Autoejecutable*/
//Estas al final se le pone ;

// (function (){
//     console.log("Mi primera Funciones Anonimas Autoejecutable")
// })();

// (function (d,w,c){
//     console.log("Mi segunda Funciones Anonimas Autoejecutable")
// })(document,window,console); 

// //Version CrockFord

// ((function(c){
//     c.log("Version Crockford")
// })(console));

// //Version Unaria

// +function(c){
//     c.log("Version Unaria")
// }(console);

// //Versiion Facebook
// !function(c){
//     c.log("Version Facebook")
// }(console);

