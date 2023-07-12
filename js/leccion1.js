// Declaraciones de Variables correctamente

//Iniciar Variables

// No usar Numero ni Caracteres Especiales
var $Variables = 2 // Se inicia con un $
var _Variable = "Var" // Se inicia con un guion Bajo
var variables = 24.21 // Tambien con letras


// No redundar un variables y un metodo
var Goro= 4

function Goro(){
}


// Para las constantes Ponerlas en Mayusculas
const GRAVEDAD= 9.8
const PI = 3.14

//Usar el UpperCamelCase en:
//Clases
class ArbolDeLimon{
    constructor(fruto,altura){
        this.fruto=fruto;
        this.altura=altura
    }

    miNombreEs(){
        return `Mi Nombre es ${this.fruto}`
    }
}

//Usar el lowerCamelCase en:
//Objetos:
const unObjeto={
    nombre: 'Johan',
    email: 'Johan@hotmail.com'
}

// Valores primitivos

let unaCadena= "Hola mundo", unNumero=19, unBooleano=true

//Cadenas de texto

let nombre = "Pachon";
let apellido= "Mojica";
let saludi= new String("hola Mundo");
let lorem= "          Dolore cillum officia officia labore duis.           ";
let lorem2= "Dolore cillum officia officia labore duis.";

console.log(nombre, apellido, saludi);

console.log(
    nombre.length,
    apellido.length,
    saludi.length,
    nombre.toUpperCase(),
    apellido.toLowerCase(),
    lorem.includes("officia"),
    lorem,
    lorem.trim(), // QUITA LOS ESPACIO DE LOS LADOS DE L TEXTO
    lorem2.split(" "),
    lorem2.split("o") // divide una cadena de texto en el paramatro pasado lo convierte en un arreglo

);



