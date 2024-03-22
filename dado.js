//Creamos la duncion que generara el numero al azar entre 1 y 6, incluyendo 6
function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//DEfinimos variables de opcion de usuario y resultado  
var usuario;
var resultado = false;
//Estas variables demuestran los resultados de los dados
var dado1 = getRandomIntInclusive(1,6);
var dado2 = getRandomIntInclusive(1,6);
console.log(dado1);
console.log(dado2);
//Le mostramos el proposito del juego al usuario 
alert("Bienvenido al Juego de Dados, donde tienes que adivinar si el número del primer dado es igual al número del segundo dado");
//Le mostramos el valor del primer dado al usuario
alert("El primer dado es " + dado1);
//Le solicitamos al usuario que indique si el numero del Segundo Dado es igual mayor o menor que el Primer Dado y al mismo tiempo le damos el valos a la variable de usuario
usuario = prompt("¿El numero del segundo dado es: igual, mayor o menor que " + dado1 + "?");
//Iniciamos el ciclo de validacion para comparar si el usuario aqdivino
if (dado2 > dado1 && usuario === "mayor") {
    resultado = true;    
} else if (dado2 < dado1 && usuario === "menor") {
    resultado = true;
} else if (dado2 === dado1 && usuario === "igual") {
    resultado = true;
}
//Mostramos al usuario si adivino o no
if (resultado) {
    alert("El Segundo Dado es: " + dado2 + " ¡Adivinaste!");
}   else {
    alert("El Segundo Dado es: " + dado2 + " ¡No Adivinaste!");
}




