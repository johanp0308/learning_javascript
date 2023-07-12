// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

class Pelicula{
    constructor({id,titulo,director,anio,pais,generos,calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.anio=anio;
        this.pais=pais;
        this.generos=generos;
        this.calificacion=calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        
    }

    validarCadenas(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado NO es una cadena de texto`);

        return true;
    }

    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length >longitud) return console.error(`${propiedad} => "${valor}" ah rebasado la longitud permitida`);

        return true;
    }

    validarNumero(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio `);

        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}"`)
    }

    validarIMDB(id){
        if(this.validarCadenas("IMDB id", id)){
            if(/^([a-z]){2}([0-9]){7}$/.test(id)){
                return console.error(`IMDB id "${id}" no es valido debe tener 9 caracteres, lo 2 primeros letras minusculas
                y lo 7 restantes numeros. `)
            }
        }
    }
    
    validarTitulo(titulo){
        if(this.validarCadenas("Titulo",titulo))
            this.validarLongitudCadena("Titulo",titulo,100);
    }

    validarDirector(director){
        if(this.validarCadenas("Director",director))
            this.validarLongitudCadena("Director",director,50);
    }

    

}

const peli=new Pelicula({
    id:"tt1234567",
    titulo:"Titulo de la Peli",
    director:"Nombre Director",

});