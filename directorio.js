//Creamos la clase Elemento
class Elemento{
  constructor(nombre, año, sinopsis){
    this.nombre = nombre;
    this.año = año;
    this.sinopsis = sinopsis;
  }

//Creamos una funcion para poder mostrar la informacion de cada pelicula
  mostrarInfo(){
  alert(`Pelicula: ${this.nombre}`);
  alert(`Año de estreno: ${this.año}`);
  alert(`Sinopsis: ${this.sinopsis}`);
  }
}
//Definimos la variables
var opcion = 0;
//Definimos los 5 elementos como constante
const elementos = [
  new Elemento("El secreto de sus ojos", 2009, "Benjamín Espósito es un oficial de un Juzgado de Instrucción de Buenos Aires que acaba de jubilarse. Su sueño es escribir una novela y, para ello, intentará dar solución a un caso abierto desde hace varias décadas, del cual fue testigo y protagonista. Reviviendo el caso, vuelve también a su memoria el recuerdo de una mujer, a quien ha amado en silencio durante todos esos años."),
  new Elemento("Relatos salvajes", 2014, "Un viaje en avión, el encuentro con alguien del pasado, un pinchazo en una carretera, una multa, un atropello o una boda; historias independientes con un denominador común: la violencia sin control ni causa aparente, que impulsa a perder el control. En seis episodios diferentes los personajes se verán empujados a situaciones al borde del abismo, perdiendo el control de sus vidas."),
  new Elemento("Nueve Reinas", 2000, "Juan y Marcos son dos estafadores que casualmente se ven involucrados en un asunto que los puede convertir en millonarios: tienen menos de un día para llevar a cabo un engaño que no puede fallar."),
  new Elemento("El Hijo de la Novia", 2001, "Rafael Belvedere piensa que las cosas deberían irle mejor. Dedica las veinticuatro horas del día al restaurante fundado por su padre, carga con un divorcio, no se ha tomado el tiempo suficiente para ver crecer a su hija, no tiene amigos y prefiere eludir un mayor compromiso con su novia. Además, hace más de un año que no visita a su madre, que sufre el mal de Alzheimer y está internada en un geriátrico.Por si fuera poco, su padre le anuncia que quiere casarse."),
  new Elemento("Truman", 2015, "Dos amigos de la infancia, Julián y Tomás, se reúnen después de muchos años. Julián es un actor argentino exiliado que vive en Madrid y está pasando una mala época. Tomás, por su parte, es un matemático que trabaja en la Universidad en Canadá. Ambos, junto a Truman, su perro fiel, viven unos días maravillosos recordando los viejos tiempos. Pero esta reunión será también el último adiós de ambos.")
];
//Definimos una funcion para mostrar el menu y gestionar las opciones
function mostrarDirectorio(){
  alert("Bienvenidos, este es el directorio de peliculas de Ricardo Darín" + "\n" + "1. El Secreto de sus ojos" + "\n" + "2. Relatos Salvajes" + "\n" + "3. Nueve Reinas" + "\n" + "4. El Hijo de la Novia" + "\n" + "5. Truman" + "\n" + "6. Salir");
//Mostramos mensaje solicitando seleccione una de las opciones de 1 a 6
var opcion = Number(prompt("Seleccione una opcion del 1 al 6"));
//Iniciamos ciclo con las 6 opciones con la opcion de switch case
  switch (opcion) {
    case 1:
      elementos[0].mostrarInfo();    
      break;
    case 2:
      elementos[1].mostrarInfo();
      break;
    case 3:
        elementos[2].mostrarInfo();
        break;
    case 4:
        elementos[3].mostrarInfo();
        break;
    case 5:
        elementos[4].mostrarInfo();
        break;
    case 6:
        alert("Adios");
        console.log("Fin de programa")
        return;
    default:
  }
  mostrarDirectorio();
}
mostrarDirectorio();
