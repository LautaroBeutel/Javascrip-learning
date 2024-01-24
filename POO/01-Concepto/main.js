/*  La programacion orientada a objetos es un nuevo paradigma de programacion
 *  en donde el programa se basa en la instanciacion de clases las cuales dichas
 *  instancias seran llamadas objetos de una clase.
 * 
 *  Una clase es un tipo de estructura de datos definida por el programador
 *  en donde se puede definir atributos y metodos de la clase.
 * 
 *  Esta clase es la receta la cual se utilizara para crear un objeto,
 *  el objeto va a tener los atributos y metodos que se definieron en la clase.
*/

// La clase Perro es un template con los atributos y metodos que va a tener el futuro objeto
class Perro {
    constructor(nombre, raza, color, fechaNacimiento) {
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
        this.fechaNacimiento = fechaNacimiento;
    }

    ladrar() {
        return('Woof');
    }
}

perro1 = new Perro('juan', 'cruza', 'rojo', '01-01-01');    // perro1 es una instancia de la clase Perro
document.write(perro1.ladrar());