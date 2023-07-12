// let texto= "Hola mi nombre es Sebas Pachon";

// const hablar= (text)=>{
//     speechSynthesis.speak(new SpeechSynthesisUtterance(text));
// }

// hablar(texto);


/*
 * DOM - Document Object Model ----------------------
 */

// console.log("=======Objetos del Documeto====");

// console.log(window.document);7
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.charset);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);

// /* Te devuelve lo que esta selecionado */
// setTimeout(()=>{
//     console.log(document.getSelection().toString());
// },3000);

// document.write("<h2>Hola Mundo desde el Dom</h2>");

//___________________________________________________

/**
 * Nodo elemetos y selectores---------------------------
 */

// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
// console.log(document.getElementById("menu"));

/* Reemplazados con la siguiente clase. nota: Mas lento por validar el tipo de selector pasado */

/* Este solo devuelve uno. */
// console.log(document.querySelector("#menu"));
/* Este query envia todos los elementos que encuentra */
// console.log(document.querySelectorAll("a").length);

// document.querySelectorAll("a").forEach(el => console.log(el));

/* Selecion un Elemento Especifico */
// console.log(document.querySelectorAll("a")[2]);

/* Obtencion de atributos */

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.documentElement.querySelector(".link-dom").href);

// document.documentElement.lang="en";
// console.log(document.documentElement.lang);

// document.documentElement.setAttribute("lang","es-CO");
// console.log(document.documentElement.lang);

/* En la buena practica es declarar variables con $ cuando se refiere a objetos del DOM */
// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("target","_blank");

// $linkDOM.setAttribute("rel","noopener");

// $linkDOM.setAttribute("href","https://google.com");

// console.log($linkDOM.hasAttribute("rel"));

/* Quita atributos del objeto DOM */

// $linkDOM.removeAttribute("rel");

// console.log($linkDOM.hasAttribute("rel"));

/*----- Data-Attributes ----- */

/* Obteniendo data */
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
/* Atributo especifico */
// console.log($linkDOM.dataset.description);
// console.log($linkDOM.dataset.id);

// $linkDOM.setAttribute("data-description","Modelo de objeto del Documento");
// console.log($linkDOM.dataset);

// $linkDOM.dataset.description = "Descripcion de link";

/** Seccion CSS **/


// const $linkDOM = document.querySelector(".link-dom");

// console.log($linkDOM.style);

// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);

/* Algo que destacar: me da el valor por defecto de los atributos style */

// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration","none");
// $linkDOM.style.setProperty("display","block");

/* Otra manera de asignar valores a los atributos */

// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginLeft= "auto";
// $linkDOM.style.marginRight= "auto";
// $linkDOM.style.padding= "1rem";
// $linkDOM.style.borderRadius= ".5rem";


// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));

/** Variables CSS - Custom Properties CSS **/
// const $html = document.documentElement,
    // $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    // varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor , varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

/*Cambia Valores de variables del html desde js*/
// $html.style.setProperty("--dark-color","pink");

/*Obtiene el valor de las propiedades*/
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

/*Establece propiedades CSS desde el js*/
// $body.style.setProperty("background-color",varDarkColor);

/** ---- Clases CSS ---- **/

// const $card = document.querySelector(".card");

// console.log($card);

/* Aqui le da un DoomTokenList parece un arreglo*/
// console.log($card.classList);

/* Aqui el metodo Contains esta preguntado si tiene esa clase el elemento */
// console.log($card.classList.contains("rotate-45"));

/* Agregando clases a los elementos */
// $card.classList.add("rotate-45");

/* Quita la clase de la lista*/
// $card.classList.remove("rotate-45");

/* Si tiene la clas se la quita de lo contrario se la agrega */
// $card.classList.toggle("rotate-45");

/* Reemplazo de clases  */
// $card.classList.replace("rotate-45", "rotate-135");

/* Agregando multiples clases */
// $card.classList.add("opacity-80","sepia");


/** --- Texto y HTML --- **/

// const $whatIsDOM = document.getElementById("que-es");

// let text = `
//     <p>
//     El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un
// API para documentos HTML y XML.
//     </p>
//     <p>
//     Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//     </p>
//     <p>
//         <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>`;


//$whatIsDOM.innerText = text;
// $whatIsDOM.textContent = text;
// $whatIsDOM.innerHTML = text;
// $whatIsDOM.outerHTML = text;

/** DOM Traversing => Recorriendo el DOM **/

// const $cards = document.querySelector(".cards");

/* Devuel una Colecion de Hijos del elemento */
// console.log($cards.children);

/* En este lo que se haces al ser una colecion de objetos */
// console.log($cards.children[2]);

/* Este toma el primer objeto que encuentra */
// console.log($cards.firstChild);

/* Este si toma el elemento Html del Documento */
// console.log($cards.firstElementChild);

/* Retorna el elemento Padre */
// console.log($cards.parentElement);

/* Retorna el Padre pero como nodo*/
// console.log($cards.parentNode);


/* Elementos Hermanos */
// console.log($cards.previousSibling);
// console.log($cards.previousElementSibling);
// console.log($cards.nextSibling);
// console.log($cards.nextElementSibling);

/* Closest => busca el ancestro del tipo de selector*/
// console.log($cards.closest("div"));
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section"));



/* Creando Elementos y Fragmentos */

// const div = document.createElement("div");
// const span = document.createElement("span");
// const img = document.createElement("img");

// const coment = document.createComment("Comentario creado en javascript");

// const $figure = document.createElement("figure");
// const $img = document.createElement("img");
// const $figcaption = document.createElement("figcaption");
// const $figcaptionTet = document.createTextNode("Animals");
// const $cards = document.querySelector(".cards");

// $figcaption.appendChild($figcaptionTet);
// $img.src = "https://placeimg.com/200/200/animals";
// $figure.setAttribute("class" , "card");

// $figure.appendChild($img);
// $figure.appendChild($figcaption);

// $cards.appendChild($figure);

// const elemento = ["1","2","3","4"],
//     $ul = document.createElement("ul");

// document.write("<h3>Numeros del 1 al 4 </h3>");
// document.body.appendChild($ul);

// elemento.forEach(el => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $ul.appendChild($li); 
// });

// const continentes = ["Africa","America","Aisa","Europa","Oceania"],
//     $ul2 = document.createElement("ul");
// document.write("<h3>Continentes del Mundo</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML="";
// continentes.forEach(el => ($ul2.innerHTML += `<li>${el}</li>`));

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
// ],
//     $ul3 = document.createDocumentFragment("ul");
//     $fragment = document.createDocumentFragment();

// meses.forEach(el => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $fragment.appendChild($li);
// });

// document.write("<h3>Meses del Año</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

/* Templates HTML */

// const $cards = document.querySelector(".cards"),
//     $template = document.getElementById("template-card").content,
//     $fragment = document.createDocumentFragment(),
//     cardContent = [
//         {
//             title:"Tecnologia",
//             img:"https://placeimg.com/200/200/tech",
//         },

//         {
//             title:"Animales",
//             img:"https://placeimg.com/200/200/animals",
//         },

//         {
//             title:"Arquitectura",
//             img:"https://placeimg.com/200/200/arch",
//         },

//         {
//             title:"Gente",
//             img:"https://placeimg.com/200/200/people",
//         },

//         {
//             title:"Naturaleza",
//             img:"https://placeimg.com/200/200/nature",
//         }
//     ];

// cardContent.forEach(el => {
    /* Asignando los atributos y contenidos */
//     $template.querySelector("img").setAttribute("src",el.img);
//     $template.querySelector("img").setAttribute("alt",el.title);
//     $template.querySelector("figcaption").textContent= el.title;

//     let $clone = document.importNode($template,true);
//     $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);


/* --- Modificando Elementos (Old Style) --- */

// const $cads  = document.querySelector(".cards"),
//     $newCard = document.createElement("figure"),
//     $cloneCards = $cads.cloneNode(true);

// $newCard.innerHTML=`
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
// `;

// $newCard.classList.add("card");

    /* Inserta remplazando el nodo nuevo por el que se quiere */
// $cads.replaceChild($newCard,$cads.children[3]);

    /* Agrega antes del nodo selecionado */
// $cads.insertBefore($newCard,$cads.firstElementChild);

    /* Elimnar el objeto o nodo */
// $cads.removeChild($cads.lastChild);

// document.body.appendChild($cloneCards);


/* --- Modificando Elementos (Cool Style) --- */

    /* 
    .insertAdjacent...
        .insertAdjacentElement(position,el)
        .insertAdjacentHTML(position,html)
        .insertAdjacentText(position,text)

    posiciones:
        beforebegin (hermano anterior)
        afterbegin (primer hijo)
        beforeend (ultimo hijo)
        afterend  (hermano siguiente)
    */

// const $cards  = document.querySelector(".cards"),
//     $newCard = document.createElement("figure"),
//     $cloneCards = $cards.cloneNode(true);
    
// let $contenCard=`
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption></figcaption>
// `;
    
// $newCard.classList.add("card");

// $cards.insertAdjacentElement("beforebegin",$newCard);
// $cards.insertAdjacentElement("afterbegin",$newCard);
// $cards.insertAdjacentElement("beforeend",$newCard);
// $cards.insertAdjacentElement("afterend",$newCard);

/* --- Manejando Eventos --- */

// function HolaMundo(){
//     alert("Hola Mundo");
//     console.log(event);
// }

// function saludar(nombre = (nombre==null) ? "Deconocido" : nombre){
//     alert(`Hola ${nombre}`);
// }

// const $eventoSemantico= document.getElementById("evento-semantico"),
//     $evetoMultiple =  document.getElementById("evento-multiple"),
//     $eventoRemover =  document.getElementById("evento-remover");

// $eventoSemantico.onclick = HolaMundo;
// $eventoSemantico.onclick = 
//     function (){
//         alert("Hola Mundo Manejador de Eventos Semantico");
//         console.log(e);
//         console.log(event);
//     };

// $evetoMultiple.addEventListener("click",HolaMundo);
// $evetoMultiple.addEventListener("click",(e) => {
//     alert("Hola Mundo Manejador Multiple");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// });


// $evetoMultiple.addEventListener("click",() => saludar("Pachon"));

// const removerDobleClick = (e) =>{
//     alert(`Removiendo el evento de tipo ${e}`);
//     console.log(e);
//     $eventoRemover.removeEventListener("dblclick",removerDobleClick );
//     $eventoRemover.disabled = true;
// }

// $eventoRemover.addEventListener("dblclick", removerDobleClick);


/* --- Flujo de eventos --- */


// const $divEventos = document.querySelectorAll(".eventos-flujo div"),
//     $linkEventos = document.querySelector(".eventos-flujo a");

// function flujoEventos(e){
//     console.log(`Hola te saluda ${this.className}, el click lo origino  ${e.target.className}`);
//     e.stopPropagation();
// }

// $divEventos.forEach(div => {
    //Fase de Burbuja
    // div.addEventListener("click",flujoEventos);

    //Fase de Captura
    // div.addEventListener("click",flujoEventos,{
        // capture: true,
        //  once: true  Hace que el evento se ejecute una vez en true
    // });

// });

// $linkEventos.addEventListener("click",(e)=>{
//     alert("Hola link-Evento");
//     e.preventDefault();
//     e.stopPropagation();
// })

/* --- Delegacion de Eventos */
// function flujoEventos(e){
//     console.log(`Hola te saluda ${this.className}, el click lo origino  ${e.target.className}`);
//     e.stopPropagation();
// }

// document.addEventListener("click",(e)=>{
//     console.log("Click en ", e.target);
    
//     if(e.target.matches(".eventos-flujo a")){
//         alert("Hola Link evento");
//         e.preventDefault();
//     }
//     if(e.target.matches(".eventos-flujo div")){
//         flujoEventos(e);
//     }
// });

// console.log(window.document);

/* ----- Manejo del BOM ----- */

// window.addEventListener("resize",(e) =>{
//     console.clear();
//     console.log("*****Evento Resize******");
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
//     console.log(window.outerWidth);
//     console.log(window.outerHeight);
//     console.log(e);
// })

// window.addEventListener("scroll",(e) =>{
//     console.clear();
//     console.log("*****Evento Scroll******");
//     console.log(window.scrollX);
//     console.log(window.scrollY);
//     console.log(e);
// });

// window.addEventListener("load",(e) =>{
//     console.log("*****Evento Load******");
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e);
// });

// document.addEventListener("DOMContentLoaded",e=>{
//     console.log("*****Evento DOMContaneid******");
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e);
// })

/* ------ Metodos BOM ----- */

// window.alert("Alert");
// window.confirm("Confirmacion");

// alert("Alert sin window");

// const $btnAbri = document.getElementById("abrir-ventana"),
//     $btnCerrar = document.getElementById("cerrar-ventana"),
//     $btnImprimir = document.getElementById("imprimir-ventana");
// let ventana;
// $btnAbri.addEventListener("click",e=>{
//     ventana = window.open("https://jonmircha.com");
// });
// $btnCerrar.addEventListener("click",e=>{
//     ventana.close();
// });
// $btnImprimir.addEventListener("click",e=>{
//     window.print();
// });

/* ------- URL Historial y Navegador */

    /* LOCATION */
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search)
// console.log(location.pathname);

// location.reload(); recarga en bucle la pagina

    /* HISTORIAL */

// console.log(history);
// console.log(history.length);
// console.log(history.back());      //regresa a la anterior de pagina consultada como deloverse
// console.log(history.forward());   //si regreso te devuele hacia adelante
// console.log(history.go());        //te mueve en pasos hacia adelante o atras con numero negativos


    /* NAVIGATOR */
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);

