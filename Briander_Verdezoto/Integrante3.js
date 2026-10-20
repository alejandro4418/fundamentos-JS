//--------------------------------------------------------------------------
//Datos
//----------------------------------------------------------------
const fangamesFnaf = [
    {
        id: 1,
        titulo: "Oblitus Casa",
        desarrollador: "Radiance Team",
        precio: 0.0,
        gratis: true
    },
    {
        id: 2,
        titulo: "The Return to bloody nights",
        desarrollador: "Kazovsky",
        precio: 0.0,
        gratis: true
    },
    {
        id: 3,
        titulo: "JR's: Enter the flipside",
        desarrollador: "The JRs Team",
        precio: 0.0,
        gratis: true
    },
    {
        id: 4,
        titulo: "FNAF World",
        desarrollador: "Scott Cawthon",
        precio: 5.0,
        gratis: false
    }
]

console.log(fangamesFnaf)
//----------------------------------------------------------------
// Manipulación del DOM
//----------------------------------------------------------------
//El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML, facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar su estructura, estilo y contenido.


//Mostrar el contenido
const contenedor = document.getElementById("lista-juegos");

const parrafo = document.createElement("p");
parrafo.textContent = "Hola desde JavaScript";
contenedor.appendChild(parrafo)

//Tarjeta con titulo y subtitulo.



fangamesFnaf.forEach((juego) => {
    const tarjeta = document.createElement("article");

    const titulo = document.createElement("h3");
    titulo.textContent = juego.titulo;
    
    const desarrollador = document.createElement("p");
    desarrollador.textContent = `Desarrollador: ${juego.desarrollador}`;

    const precio = document.createElement("p");
    precio.textContent = juego.gratis ? "GRATIS" : `$${juego.precio}`
    
    //Dar estilo
    tarjeta.classList.add("tarjeta");
    tarjeta.style.border = "1px solid gray";
    tarjeta.style.padding = "10px";
    tarjeta.style.margin = "10px";

    //click

    tarjeta.addEventListener("click", () => {
        console.log(`Elegiste: ${juego.titulo}`);
        tarjeta.classList.toggle("seleccionado");
      });

    precio.style.color = juego.gratis ? "green" : "blue";

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(desarrollador);
    tarjeta.appendChild(precio)
    contenedor.appendChild(tarjeta);
    
});
//----------------------------------------------------------------
//Asincronico
//----------------------------------------------------------------

//Ver que JavaScript no espera (setTimeout)

console.log("Buscando juegos...");

setTimeout(() => {
    console.log(fangamesFnaf);
}, 2000);

console.log("siguiendo...");

//async  y await
//Manejo de errores try catch

function obtenerJuegos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fangamesFnaf);   // "ya terminé, aquí están los datos"
        }, 2000);
    });
}




async function mostrarJuegos() {
    try {
        console.log("cargando...");
        const resultado = await obtenerJuegos();

        resultado.forEach((juego) => {
            console.log(juego.titulo);
        });
    } catch (error) {

        console.log("hubo un error: ", error)
    }
    
}

mostrarJuegos()

//----------------------------------------------------------------
//API
//----------------------------------------------------------------

async function cargarUsuario() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const datos = await respuesta.json();
        console.log(datos.name);
    } catch (error) {
        console.log("Error:", error);
    }
}

cargarUsuario();

//----------------------------------------------------------------
//Local Storage
//----------------------------------------------------------------

localStorage.setItem("juegosGuardados", JSON.stringify(fangamesFnaf));

const recuperado = JSON.parse(localStorage.getItem("juegosGuardados"));

console.log(recuperado);
console.log(recuperado[0].titulo);

//----------------------------------------------------------------
//Imperativo vs declarativo
//----------------------------------------------------------------

//Imperativo
// Se crea un arreglo vacío, se recorre con un for, se revisa con un if
// si el juego es gratis y se agrega el título con push.
const titulosGratisImperativo = [];

for (let i = 0; i < fangamesFnaf.length; i++) {
    if (fangamesFnaf[i].gratis){
        titulosGratisImperativo.push(fangamesFnaf[i].titulo);
    }
}

console.log("Titulos gratis: ")
console.log(titulosGratisImperativo);


// Declarativo: se indica QUÉ se quiere obtener.
// filter se queda con los juegos gratis y map saca solo el título,
// sin manejar contadores ni arreglos auxiliares.
const titulosGratisDeclarativo =  fangamesFnaf.filter((juego) => juego.gratis).map((juego) => juego.titulo);

console.log(titulosGratisDeclarativo)

//----------------------------------------------------------------
//Modulos
//----------------------------------------------------------------

import { fuente, formatearJuego} from "./modulos.js";

console.log(fuente);
console.log(formatearJuego(fangamesFnaf[0]))

fangamesFnaf.forEach((juego) => {
    console.log(formatearJuego(juego));
});