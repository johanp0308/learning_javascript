//Una variable es undefined es cuando no sea inicilizado tambien esta vacio
// let indefinida;
// console.log(indefinida);
// //nulo es que esta vaciado intencionalmente
// let nulo=null;
// console.log(nulo);

// //NaN - Not a Number

// let noEsunNumero;

// //Funciones

// //funciones declaradas

// function estoEsUnaFuncion(){
//     console.log("hola");
// }

// function devolverValor(){
//     return "Retorno de Funcion"
    
// }

// //funciones Expresadas
// //funcion anonima
// const funcionExpresada = () =>{
//     console.log("esto es una funcion Expresada");
// } 

// //invocacion de Funciones
// estoEsUnaFuncion();
// console.log(devolverValor());

// //Arreglosdw
// const a=[];
// const b=[1,true,"Hola",["A","B","C"]];
// console.log(a);
// console.log(b);

// const c= Array.of("X","Y","Z",9,8,7);

// const colores= ["Rojo","Verde","Azul"];
// console.log(colores);

// colores.push("Negro");// agrega al final
// colores.pop(); //Elimina el ultimo

// //Ejecuta una funcion por cada elemento que tenga en el arreglo
// colores.forEach(function (el){
//     console.log(`<li>${el}</li>`);
// });


// /*Objeto En javaScript*/

// let a2= new String("Hola");
// console.log(a2);

// const sebas={
//     nombre: "Johan",
//     apellido: "Pachon",
//     edad: 19,
//     pasatiempos: ["Correr","Hacer ejercicio","Nadar"],
//     soletero: true,
//     contacto:{
//         email: "sindwe@gmail.com",
//         twiter: "aocinwe",
//         movil: "894923"
//     },
//     saludar: function(){
//         console.log("Hola");
//     },
//     decirMiNombre: function(){
//         console.log(`Hola mi nombre: ${this.nombre} ${this.apellido}`);
//     }
// }

// console.log(sebas);
// console.log(sebas["nombre"]);
// console.log(sebas["apellido"]);
// console.log(sebas.edad);
// console.log(sebas.pasatiempos[1]);
// console.log(sebas.contacto.twiter);
// sebas.saludar();
// sebas.decirMiNombre();

// console.log(Object.keys(sebas)); //lista las llaves de un objeto

// console.log(Object.values(sebas)); //Lista los valores

// console.log(sebas.hasOwnProperty("nombre")); //Valida si existe la propiedad pasada

// //Condicional especia
// let edad= 18
// let ereaMayor=(edad>=18)
// ?"Eres Mayor"
// :"Eres Menro";
// console.log(eresMayor);

// //Switch Case:

// let dia= 1;

// switch (dia) {
//     case 0:
//         console.log("Domingo");        
//         break;
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     default:
//         break;
// }

//For in => Para Objetos

// const sebass={
//     nombre: "Seabs",
//     apellido: "PAchon",
//     edad: 35
// }

// for(const propiedad in sebass){
//     console.log(`Key: ${propiedad}, Value: ${sebass[propiedad]}`);   
// }

//For of => Para Arrglos
// const arreglo=[20,20,30,40,50,60,90];
// for (const elemento of arreglo) {
//     console.log(elemento);
// }

//   Manejo de Errores
// try {
//     //Codigo a evaluar
//     console.log("Dentro del try")
// } catch (error) {
//     console.log("Captura de  error en el try{}");
// }finally{
//     console.log("El bloque finally se ejecutara despues del bloque del try-catch");
// }

//Try 2

// try {
//     let numero="hola"
//     if(isNaN(numero)){
//         throw new Error("El caracter introducido no es numero");
//     }
// } catch (error) {
//     console.log(`Se produjo el siguiente Error => ${error}`);
// }


// BReak y Continue

// const numeros=[1,2,3,4,5,6,7,8,9,0];

// for (let i=0 ; i<numeros.length ; i++) {
//     if(i===5){
//         break;
//     }
//     console.log(numeros[i]);    
// }

// for (let i=0 ; i<numeros.length ; i++) {
//     if(i===5){
//         continue;
//     }
//     console.log(numeros[i]);    
// }

// DESTRUCTURACION

// const numero=[1,2,3,4];

// const [one,two,tree] = numero;

// console.log(one,two,three);

// let persona={
//     nombre: "Johann",
//     apellido: "Pachon",
//     edad: 19,
// }

// let {nombre,apellido,edad} = persona;
// console.log(nombre,apellido,edad);

//Objetos Literales 

// let nombre="mini",
//     edad=2;
// const gato ={
//     nombre:nombre,
//     edad: edad,
//     mauyar: function(){
//         console.log("Miauu Miauu!!");
//     }
// }
// console.log(gato);
// gato.mauyar();

// const cat={ //Nueva Forma de Agregar Valores a los objetos
//     nombre,
//     edad,
//     mauyar(){
//         console.log("Miauuu Miaauuu Miau!!!");
//     }
// }

// console.log(cat)
// cat.mauyar();