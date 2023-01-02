let example_array_1 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
for (let i = 0; i < example_array_1.length; i++) {
    console.log(`for ${i}: ${example_array_1[i]}`);
};
console.log("----------------------------------------");
let example_array_2 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
for (let property in example_array_2) {
    console.log(`for in: ${property}`);
};
console.log("----------------------------------------");
let example_array_3 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
for (let element of example_array_3) {
    console.log(`for of: ${element}`);
};
console.log("----------------------------------------");
let example_array_4 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
let count_1 = 0;
while (count_1 < example_array_4.length) {
    console.log(`while ${count_1}: ${example_array_4[count_1]}`);
    count_1++;
};
console.log("----------------------------------------");
let example_array_5 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
let count_2 = 0;
do {
    console.log(`do while ${count_2}: ${example_array_5[count_2]}`);
    count_2++;
}
while (count_2 < example_array_5.length);
console.log("----------------------------------------");