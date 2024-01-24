/*  Un operador es básicamente un símbolo matemático que puede 
 *  actuar sobre dos valores (o variables) y producir un resultado.
 *  En la lista de abajo aparecen los operadores más simples, con
 *  algunos ejemplos para probarlos en la consola del navegador.
 * 
 *  Operadores:
 *  - Suma/concatena: Se usa para sumar dos numeros o juntar dos cadenas -> '+'.
 *  - Resta/multiplicaicon/division: Hacen las operaciones normales -> '-','*','/'.
 *  - Asignacion: Asigna un valor a una variable -> '='.
 *  - Identidad/igualdad: Comprueba si dos valores son iguales y devuelve un booleano -> '==='.
 *  - Negacion: Al contrario de la identidad comprueba que dos valores sean distintos y devuelve un booleano -> '!=='.
 */

let cadena1 = 'Hola';
let cadena2 = 'mundo';

let numero1 = 1;
let numero2 = 2;

document.write('<ul>');
document.write('<li>operador suma con numeros: ' + (numero1 + numero2) + '</li>');
document.write('<li>operador suma con cadenas: ' + (cadena1 + ' ' + cadena2) + '</li>');
document.write('<li>operador identidad: ' + (cadena1 === cadena2) + '</li>');
document.write('<li>operador negacion: ' + (cadena1 !== cadena2) + '</li>');
document.write('</ul>');