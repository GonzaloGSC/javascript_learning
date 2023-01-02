var cosa = "cosa global";

console.log("Antes de scope global: ", cosa);

function other_scope(){
    console.log("Antes de scope local: ", cosa);
    var cosa = "cosa local";
    console.log("Despues de scope local: ", cosa);
};

other_scope();

console.log("Despues de scope global: ", cosa);