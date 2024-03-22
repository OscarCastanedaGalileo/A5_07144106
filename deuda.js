//Definimos las variables
//noprotect
var deuda = 0;
var opcion;
var cuotas;
var cantidad;
//Definimos funcion para la variable deuda y guardarla en un float
function ingreseDeuda() {
    deuda = parseFloat(prompt("Ingrese el total de su deuda, use solo numeros"));
}
//Creamos funciones para calcular cuotas y cantidad
function calculoCuotas() {
    if (deuda === 0) {
        alert("Ingrese la deuda en opcion 1");
        return;
    }
    var cantidad = parseFloat(prompt("Ingrese la cantidad a abonar por cuota"));
    var cuotas = Math.ceil(deuda/cantidad);
    alert(`Debe realizar ${cuotas} pagos de ${cantidad} cada uno`);
}
function calculoCantidad() {
    if (deuda === 0) {
        alert("Ingrese la deuda en opcion 1");
        return;
    }
    var cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas que desea pagar"));    
    var cantidad = Math.ceil(deuda/cuotas);
    alert(`Debe pagar ${cantidad} en cada una de las ${cuotas} cuotas`);
}
//Creamos una funcion para desplegar el menu de opciones incluyendo el ciclo de switch para las 4 opciones
function menu() {
    var opcion;    
    alert("Bienvenido a la calculadora de deuda" + "\n" + "1. Ingresa la cantidad de su deuda" + "\n" + "2. Calcular cuotas: Ingrese la cantidad a pagar mensualmente para calcular numero de cuotas" + "\n" + "3. Calcular Cantidad a pagar: Ingrese numero de cuotas que desea para calcular el pago mensual" + "\n" + "4. Salir");
    opcion = parseInt(prompt("Seleccione una opcion de 1 a 4"));
    switch (opcion) {
        case 1:
            ingreseDeuda();                
            break;
        case 2:
            calculoCuotas();
            break;
        case 3:
            calculoCantidad();
            break;
        case 4:
            alert("Adios");
            return;
        default:
            alert("Opcion invalida, intenta nuevamente")
            return;            
    } 
    menu();
}
menu();