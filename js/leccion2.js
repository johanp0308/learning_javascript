
//Concatenacion
let nombre = "Johan";

let apellido = "Pachon";

let saludo = "Hola Mi nombre es: "+nombre+" "+apellido+".";

console.log(saludo);

//Interpolacion de variables
//Template String1
let saludo2=`Hola mi nombre es: ${nombre} ${apellido}.`;

console.log(saludo2);

//Practica con estaciones del año

let ul=`
<ul>
    <li>Primaver</li>
    <li>Invierno</li>
</ul>`

console.log(ul); //Permite que se visualice el identado, cosa que no se permite en "" ,''1

let a =2.4112

console.log(a.toFixed(2)); //Aproxima un valor a la cantidad de numeros ingresados

console.log(parseInt(a)); // Convierte a entero el dato ingresado puede ser String o Numero, decimal

