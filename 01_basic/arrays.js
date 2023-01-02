let example_array_1 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
console.log("Array: ", example_array_1);
let element_1 = example_array_1.pop();
console.log("Array pop(): ", example_array_1);
console.log("Element: ", element_1);
console.log("----------------------------------------");
let example_array_2 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
console.log("Array: ", example_array_2);
let element_2 = example_array_2.unshift("Rust");
console.log("Array unshift('Rust'): ", example_array_2);
console.log("Element: ", element_2);
console.log("----------------------------------------");
let example_array_3 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
console.log("Array: ", example_array_3);
let element_3 = example_array_3.shift();
console.log("Array shift(): ", example_array_3);
console.log("Element: ", element_3);
console.log("----------------------------------------");
let example_array_4 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
console.log("Array: ", example_array_4);
let element_4 = example_array_4.push("Factorio");
console.log("Array push('Factorio')): ", example_array_4);
console.log("Element: ", element_4);
console.log("----------------------------------------");
let example_array_5 = ["Doom", "Stalker", "Half-Life", "Oblivion", "Fallout"];
console.log("Array: ", example_array_5);
let new_example_array_5 = ["Starcraft", ...example_array_5, "Warcraft"]
console.log("Array (...): ", new_example_array_5);
console.log("Array: ", example_array_5);
console.log("----------------------------------------");
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
console.log("----------------------------------------");
let videogames_mapped = videogames.map(element => element.nombre.toLowerCase().includes("u"));
console.log("Array Mapped: ", videogames_mapped);
console.log("----------------------------------------");
let videogame_find = videogames.find(element => element.nombre.toLowerCase().includes("u"));
console.log("Array Find: ", videogame_find);
console.log("----------------------------------------");
let videogames_new = [];
videogames.forEach(function(element){
    if (element.nombre.toLowerCase().includes("u")) {
        videogames_new = [...videogames_new, element];
    }
});
console.log("Array forEach: ", videogames_new);
console.log("----------------------------------------");
let videogames_some = videogames.some(e => e.nombre.toLowerCase().includes("u"));
console.log("Array some: ", videogames_some);
console.log("----------------------------------------");

