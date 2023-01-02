console.log("Hoisting 1: ", cosa);

do_something();

function do_something(){
    console.log("Hoisting 2: ", cosa);
};

var cosa = "Texto asignado";
