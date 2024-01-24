/*  Las funciones son una manera de encapsular una funcionalidad 
 *  que quieres reutilizar, de manera que puedes llamar esa función
 *  con un solo nombre, y no tendrás que escribir el código entero 
 *  cada vez que la utilices. 
 *  
 *  Ya has visto algunas funciones más arriba, por ejemplo:
 *  - alert('hola');
 */

function multiplica(num1, num2) {
    return num1 * num2;
}

console.log('Funcion multiplica(): ' + multiplica(2,3))