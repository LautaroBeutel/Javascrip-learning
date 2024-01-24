/*  Otro tipo de array distinto son los array asociativos,
 *  este tipo de variable contiene varios elementos asociados a una
 *  clave, son similares a los diccionarios en python.
 * 
 *  myArray = {
 *      clave1: 'valor1',
 *      clave2: 'valor2',
 *      clave3: 'valor3,
 *      ...
 *  }
 */

function crearLista(lista){
    let resultado = `<ul>`

    for (let index = 0; index < lista.length; index++) {
        resultado += `<li>${lista[index]}</li>`;
    }

    resultado += `</ul>`;

    return resultado;
}

let verduleria = {
    dueño: 'Fernando',
    empleados: ['Mario', 'Claudio', 'Gimena'],
    productos: {
        frutas: ['Manzana', 'Banana', 'Pera'],
        verduras: ['Lechuga', 'Tomate', 'Zanahoria']
    }
};

let resultado = `<h2>Verduleria</h2><br>
<span><b>Dueño:</b> ${verduleria.dueño}</span><br 
<span><b>Empleados:</b> ${crearLista(verduleria.empleados)}</span><br>
<span><b>Frutas:</b> ${crearLista(verduleria.productos.frutas)}</span><br>
<span><b>Verduras:</b> ${crearLista(verduleria.productos.verduras)}</span><br>
`

document.write(resultado);