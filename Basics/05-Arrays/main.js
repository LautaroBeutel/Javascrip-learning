/*  Un array es un tipo especial de variable que puede contener mas
 *  de un valor. Se pueden almacenar distintos valores asociados a 
 *  una variable y acceder a cada uno de esos valores mediante una
 *  indexacion. En javascript los arrays no son un tipo de dato primitivo
 *  sino que se trata ya de un objeto.
 * 
 *  myArray = ['valor1', 'valor2', 'valor3', ...];
 * 
 *  Los arrays pueden contener distintos tipos de variable
 * 
 *  myArray = ['valor1', 2, true, ...];
 */

let frutas = ['Manzana', 'Banana', 'Pera'];

let texto = `<ul>`;

for (let index = 0; index < frutas.length; index++) {
    texto +=  '<li>' + frutas[index] + '</li>'
}
texto += '</ul>'
document.write(texto)