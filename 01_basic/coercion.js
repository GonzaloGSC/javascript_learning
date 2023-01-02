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
console.log("------------------");

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