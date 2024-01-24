/*  Las Variables son contenedores en los que puedes almacenar 
 *  valores, son un espacio de memoria el cual reservamos para guardar algo.
 *  Primero debes declarar la variable con la palabra
 *  clave var (menos recomendado) o let, seguida del nombre que
 *  le quieras dar. Se recomienda más el uso de let que de var 
 *  (más adelante se profundiza un poco sobre esto): 
 * 
 *  Las variables pueden contener varios tipos de datos:
 *  - String: Es una secuencia de texto. Para indicar que una variable es una cadena, el valor se ecribe entre comillas.
 *  - Numbre: Es un numero, los numeros no tienen comillas.
 *  - Boolean: Una variable booleana puede tomar solo dos valores, o True o False.
 *  - Arrays: Es una estructura que permite almacenar varios valores en una sola referencia
 *  - Object: Todo en JavaScript es un objeto y puede ser almacenado en una variable.
 */

let Cadena = 'Esto es una cadena';
let Numero = 10;
let Booleano = true;
let Array = ['hola', 10, true];

console.log('Esto es una cadena: ' + Cadena);
console.log('Esto es un numero: ' + Numero);
console.log('Esto es un booleano: ' + Booleano)
console.log('Esto es un array: ' + Array)