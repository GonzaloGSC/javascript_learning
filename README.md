# <span style="color: #98ED7B; font-weight: bold;">Javascript Learning</span>
Repositorio enfocado a almacenar el conocimiento adquirido durante diversos cursos de JavaScript.
# <span style="color: #98ED7B; font-weight: bold;">Índice</span>
- [Javascript Learning](#javascript-learning)
- [Índice](#índice)
- [Información del lenguaje](#información-del-lenguaje)
  - [Scope](#scope)
  - [Hoisting](#hoisting)
  - [Coerción](#coerción)
  - [Truthy and Falsy](#truthy-and-falsy)
  - [Some array methods](#some-array-methods)
    - [pop](#pop)
    - [unshift](#unshift)
    - [shift](#shift)
    - [push](#push)
    - [spread operator](#spread-operator)
    - [filter](#filter)
    - [map](#map)
    - [find](#find)
    - [forEach](#foreach)
    - [some](#some)
  - [Loops](#loops)
    - [for](#for)
    - [for/in](#forin)
    - [for/of](#forof)
    - [while](#while)
    - [do/while](#dowhile)
        
# <span style="color: #98ED7B; font-weight: bold;">Información del lenguaje</span>
## <span style="color: #7FC767; font-weight: bold;">Scope</span>
El scope es el espacio de ejecucion de un codigo, puede ser local o global:
```javascript
var cosa = "cosa global";

console.log("Antes de scope global: ", cosa);

function other_scope(){
    console.log("Antes de scope local: ", cosa);
    var cosa = "cosa local";
    console.log("Despues de scope local: ", cosa);
};

other_scope();

console.log("Despues de scope global: ", cosa);
```
Retorna:
```
Antes de scope global:  cosa global
Antes de scope local:  undefined
Despues de scope local:  cosa local
Despues de scope global:  cosa global
```
[Volver al Índice 🔝](#índice)
## <span style="color: #7FC767; font-weight: bold;">Hoisting</span>
Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.:
```javascript
console.log("Hoisting 1: ", cosa);

do_something();

function do_something(){
    console.log("Hoisting 2: ", cosa);
};

var cosa = "Texto asignado";
```
Retorna:
```
Hoisting 1:  undefined
Hoisting 2:  undefined
```
[Volver al Índice 🔝](#índice)
## <span style="color: #7FC767; font-weight: bold;">Coerción</span>
Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción: <br>
- Coerción implícita = Es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
    ``` javascript
    // Coerción implícita
    var cosa_1 = 1 + "";
    var cosa_2 = 1 + "0";
    var cosa_3 = 1 + "1";
    var cosa_4 = 1 + "2";
    var cosa_5 = 1 + "3";

    console.log("Implícita, Caso 1: ", cosa_1);
    console.log("Implícita, Caso 2: ", cosa_2);
    console.log("Implícita, Caso 3: ", cosa_3);
    console.log("Implícita, Caso 4: ", cosa_4);
    console.log("Implícita, Caso 5: ", cosa_5);
    ```
    Retorna:
    ```
    Implícita, Caso 1:  1
    Implícita, Caso 2:  10
    Implícita, Caso 3:  11
    Implícita, Caso 4:  12
    Implícita, Caso 5:  13
    ```
- Coerción explicita = Es cuando obligamos a que cambie el tipo de valor.
    ```javascript
    // Coerción explicita

    var cosa_1 = 1 + Number("");
    var cosa_2 = String(1) + "0";
    var cosa_3 = 1 + Number("1");
    var cosa_4 = 1 + Number("2");
    var cosa_5 = 1 + Number("3");

    console.log("Explicita, Caso 1: ", cosa_1);
    console.log("Explicita, Caso 2: ", cosa_2);
    console.log("Explicita, Caso 3: ", cosa_3);
    console.log("Explicita, Caso 4: ", cosa_4);
    console.log("Explicita, Caso 5: ", cosa_5);
    ```
    Retorna:
    ```
    Explicita, Caso 1:  1
    Explicita, Caso 2:  10
    Explicita, Caso 3:  2
    Explicita, Caso 4:  3
    Explicita, Caso 5:  4
    ```
[Volver al Índice 🔝](#índice)
## <span style="color: #7FC767; font-weight: bold;">Truthy and Falsy</span>
Valores que por default son falsos o verdaderos.
- Ejemplos en los que Boolean devuelve Falso:
    ```javascript
    Boolean(0); //false
    Boolean(null); //false
    Boolean(NaN); //false
    Boolean(undefined); //false
    Boolean(false); //false
    Boolean(""); //false
    ```

- Ejemplos en los que Boolean devuelve verdadero:
    ```javascript
    Boolean(1); //true para 1 o cualquier número diferente de cero (0)
    Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
    Boolean([]); //true aunque el array esté vacío
    Boolean({}); //true aunque el objeto esté vacío
    Boolean(function(){}); //Cualquier función es verdadera también
    ```
[Volver al Índice 🔝](#índice)
## <span style="color: #7FC767; font-weight: bold;">Some array methods</span>
### <span style="color: #67A154; font-weight: bold;">pop</span>
Elimina el último elemento de un array y lo devuelve. Si el array está vacío, se devuelve undefined y no se modifica.
```javascript
let example_array_1 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
console.log("Array: ", example_array_1);
let element_1 = example_array_1.pop();
console.log("Array pop(): ", example_array_1);
console.log("Element: ", element_1);
```
Retorna:
```
Array:  [ 'Doom', 'Stalker', 'Half-Life', 'Oblivion', 'Fallout' ]
Array pop():  [ 'Doom', 'Stalker', 'Half-Life', 'Oblivion' ]
Element:  Fallout
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">unshift</span>
Inserta nuevos elementos al comienzo de un array y devuelve la nueva longitud del array.
```javascript
let example_array_2 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
console.log("Array: ", example_array_2);
let element_2 = example_array_2.unshift("Rust");
console.log("Array unshift('Rust'): ", example_array_2);
console.log("Element: ", element_2);
```
Retorna:
```
Array:  [ 'Doom', 'Stalker', 'Half-Life', 'Oblivion', 'Fallout' ]
Array unshift('Rust'):  [ 'Rust', 'Doom', 'Stalker', 'Half-Life', 'Oblivion', 'Fallout' ]
Element:  6
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">shift</span>
Elimina el primer elemento de un array y lo devuelve. Si el array está vacío, se devuelve undefined y no se modifica.
```javascript
let example_array_3 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
console.log("Array: ", example_array_3);
let element_3 = example_array_3.shift();
console.log("Array shift(): ", example_array_3);
console.log("Element: ", element_3);
```
Retorna:
```
Array:  [ 'Doom', 'Stalker', 'Half-Life', 'Oblivion', 'Fallout' ]
Array shift():  [ 'Stalker', 'Half-Life', 'Oblivion', 'Fallout' ]
Element:  Doom
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">push</span>
Agrega nuevos elementos al final de un array y devuelve la nueva longitud del array.
```javascript
let example_array_4 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
console.log("Array: ", example_array_4);
let element_4 = example_array_4.push("Factorio");
console.log("Array push('Factorio')): ", example_array_4);
console.log("Element: ", element_4);
```
Retorna:
```
Array:  [ 'Doom', 'Stalker', 'Half-Life', 'Oblivion', 'Fallout' ]
Array push('Factorio')):  [ 'Doom', 'Stalker', 'Half-Life', 'Oblivion', 'Fallout', 'Factorio' ]
Element:  6
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">spread operator</span>
La sintaxis spread ( ...) permite que un iterable, como un array o cadena, se expanda en lugares donde se esperan cero o más argumentos (para llamadas a funciones) o elementos (para literales de array). En un objeto literal, la sintaxis extendida enumera las propiedades de un objeto y agrega los pares clave-valor al objeto que se está creando.
```javascript
let example_array_5 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
console.log("Array: ", example_array_5);
let new_example_array_5 = ["Starcraft", ...example_array_5, "Warcraft"]
console.log("Array (...): ", new_example_array_5);
console.log("Array: ", example_array_5);
```
Retorna:
```
Array:  [ 'Doom', 'Stalker', 'Half-Life', 'Oblivion', 'Fallout' ]
Array (...):  [
  'Starcraft',
  'Doom',
  'Stalker',
  'Half-Life',
  'Oblivion',
  'Fallout',
  'Warcraft'
]
Array:  [ 'Doom', 'Stalker', 'Half-Life', 'Oblivion', 'Fallout' ]
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">filter</span>
Devuelve los elementos de un array que cumplen la condición especificada en una función de devolución de llamada.
```javascript
let videogames = [
    { nombre: "The Legend of Zelda: Breath of the Wild", precio: 59.99 },
    { nombre: "Super Mario Odyssey", precio: 49.99 },
    { nombre: "Red Dead Redemption 2", precio: 59.99 },
    { nombre: "God of War", precio: 49.99 },
    { nombre: "Uncharted 4: A Thief's End", precio: 39.99 },
    { nombre: "Overwatch", precio: 39.99 },
    { nombre: "Fortnite", precio: 0 },
    { nombre: "Minecraft", precio: 26.95 },
    { nombre: "Grand Theft Auto V", precio: 29.99 },
    { nombre: "The Witcher 3: Wild Hunt", precio: 19.99 },
    { nombre: "Call of Duty: Modern Warfare", precio: 59.99 },
    { nombre: "Tom Clancy's Rainbow Six Siege", precio: 19.99 },
    { nombre: "Destiny 2", precio: 0 },
    { nombre: "Fallout 76", precio: 39.99 },
    { nombre: "Battlefield 1", precio: 19.99 }
];
let videogames_filtered = videogames.filter(element => element.nombre.toLowerCase().includes("u"));
console.log("Array Filtered: ", videogames_filtered);
```
Retorna:
```
Array Filtered:  [
  { nombre: 'Super Mario Odyssey', precio: 49.99 },
  { nombre: "Uncharted 4: A Thief's End", precio: 39.99 },
  { nombre: 'Grand Theft Auto V', precio: 29.99 },
  { nombre: 'The Witcher 3: Wild Hunt', precio: 19.99 },
  { nombre: 'Call of Duty: Modern Warfare', precio: 59.99 },
  { nombre: 'Fallout 76', precio: 39.99 }
]
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">map</span>
Llama a una función de devolución de llamada definida en cada elemento de un array y devuelve otro array que contiene los resultados.
```javascript
let videogames_mapped = videogames.map(element => element.nombre.toLowerCase().includes("u"));
console.log("Array Mapped: ", videogames_mapped);
```
Retorna:
```
Array Mapped:  [
  false, true,  false,
  false, true,  false,
  false, false, true,
  true,  true,  false,
  false, true,  false
]
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">find</span>
Devuelve el valor del primer elemento del array donde el predicado es verdadero y undefined en caso contrario.
```javascript
let videogame_find = videogames.find(element => element.nombre.toLowerCase().includes("u"));
console.log("Array Find: ", videogame_find);
```
Retorna:
```
Array Find:  { nombre: 'Super Mario Odyssey', precio: 49.99 }
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">forEach</span>
Realiza la acción especificada para cada elemento del array.
```javascript
let videogames_new = [];
videogames.forEach(function(element){
    if (element.nombre.toLowerCase().includes("u")) {
        videogames_new = [...videogames_new, element];
    }
});
console.log("Array forEach: ", videogames_new);
```
Retorna:
```
Array forEach:  [
  { nombre: 'Super Mario Odyssey', precio: 49.99 },
  { nombre: "Uncharted 4: A Thief's End", precio: 39.99 },
  { nombre: 'Grand Theft Auto V', precio: 29.99 },
  { nombre: 'The Witcher 3: Wild Hunt', precio: 19.99 },
  { nombre: 'Call of Duty: Modern Warfare', precio: 59.99 },
  { nombre: 'Fallout 76', precio: 39.99 }
]
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">some</span>
Determina si la función de devolución de llamada especificada devuelve verdadero para cualquier elemento del array.
```javascript
let videogames_some = videogames.some(e => e.nombre.toLowerCase().includes("u"));
console.log("Array Filtered: ", videogames_some);
```
Retorna:
```
Array some:  true
```
[Volver al Índice 🔝](#índice)
## <span style="color: #7FC767; font-weight: bold;">Loops</span>
### <span style="color: #67A154; font-weight: bold;">for</span>
Recorre un bloque de código varias veces:
```javascript
let example_array_1 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
for (let i = 0; i < example_array_1.length; i++) {
    console.log(`for ${i}: ${example_array_1[i]}`);
};
```
Retorna:
```
for 0: Doom
for 1: Stalker
for 2: Half-Life
for 3: Oblivion
for 4: Fallout
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">for/in</span>
Recorre las propiedades de un objeto:
```javascript
let example_array_2 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
for (let property in example_array_2) {
    console.log(`for in: ${property}`);
};
```
Retorna:
```
for in: 0
for in: 1
for in: 2
for in: 3
for in: 4
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">for/of</span>
Recorre los valores de un objeto iterable:
```javascript
let example_array_3 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
for (let element of example_array_3) {
    console.log(`for of: ${element}`);
};
```
Retorna:
```
for of: Doom
for of: Stalker
for of: Half-Life
for of: Oblivion
for of: Fallout
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">while</span>
Recorre un bloque de código mientras se cumple una condición específica:
```javascript
let example_array_4 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
let count_1 = 0;
while (count_1 < example_array_4.length) {
    console.log(`while ${count_1}: ${example_array_4[count_1]}`);
    count_1++;
};
```
Retorna:
```
while 0: Doom
while 1: Stalker
while 2: Half-Life
while 3: Oblivion
while 4: Fallout
```
[Volver al Índice 🔝](#índice)
### <span style="color: #67A154; font-weight: bold;">do/while</span>
Recorre un bloque de código mientras se cumple una condición específica:
```javascript
let example_array_5 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
let count_2 = 0;
do {
    console.log(`do while ${count_2}: ${example_array_5[count_2]}`);
    count_2++;
}
while (count_2 < example_array_5.length);
```
Retorna:
```
do while 0: Doom
do while 1: Stalker
do while 2: Half-Life
do while 3: Oblivion
do while 4: Fallout
```
[Volver al Índice 🔝](#índice)


