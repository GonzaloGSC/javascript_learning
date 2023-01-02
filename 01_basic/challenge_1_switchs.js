var options = ["Papel", "Piedra", "Tijera"];
var wins = [0, 0, 0]; // wins[0] -> Jugador, wins[1] -> Empates, wins[2] -> Maquina,

function random_number(min, max) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
};

function play(option = 0) {
    let selected_option = random_number(0, options.length);
    // console.log("selected_option: ", selected_option)
    let cpu_option = options[selected_option];
    let player_option = options[option];
    console.log("***************************");
    console.log("Jugador: ", player_option);
    console.log("Maquina: ", cpu_option);
    switch (true) {
        case (player_option == cpu_option):
            console.log("Empatas con la maquina... 😪");
            wins[1]++;
            break;
        case (player_option == "Papel" && cpu_option == "Piedra"):
            console.log("Le ganas a la maquina! 😁");
            wins[0]++;
            break;
        case (player_option == "Papel" && cpu_option == "Tijera"):
            console.log("Te gané! 💻✌");
            wins[2]++;
            break;
        case (player_option == "Piedra" && cpu_option == "Papel"):
            console.log("Te gané! 💻✌");
            wins[2]++;
            break;
        case (player_option == "Piedra" && cpu_option == "Tijera"):
            console.log("Le ganas a la maquina! 😁");
            wins[0]++;
            break;
        case (player_option == "Tijera" && cpu_option == "Papel"):
            console.log("Le ganas a la maquina! 😁");
            wins[0]++;
            break;
        case (player_option == "Tijera" && cpu_option == "Piedra"):
            console.log("Te gané! 💻✌");
            wins[2]++;
            break;
        default:
            console.log("Si haces trampas yo tambien! 🤬");
            wins[2] = 9000000000;
            break;
    };
};

function end_game() {
    console.log("\n******** RESULTADO ********");
    console.log("Ganadas Jugador: ", wins[0]);
    console.log("Ganadas Maquina: ", wins[2]);
    console.log("Empates: ", wins[1]);
    switch (true) {
        case (wins[0] > wins[2]):
            console.log("HAS GANADO EL JUEGO!  Toma -> 🍺");
            break;
        case (wins[0] < wins[2]):
            console.log("TE GANÉ EL JUEGO! JAJA 💻😈");
            break;
        default:
            console.log("Es un empate... 💻🤡");
            break;
    };
    console.log("***************************");
};

play(0);
play(1);
play(2);
play(2);
play(0);
play(2);
play(1);
end_game();
