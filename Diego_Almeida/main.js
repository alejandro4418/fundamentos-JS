console.log("======================================");
console.log("Variables");
console.log("======================================");

const nombre_sitio = "Game Jolt";
const nombre_juego = "Five Nights at Freddy's";

let precio_juego = 9.99;
precio_juego = 7.99;

console.log("Sitio:", nombre_sitio);
console.log("Juego:", nombre_juego);
console.log("Precio:", precio_juego);

console.log("======================================");
console.log("Tipos de datos primitivos y compuestos");
console.log("======================================");

// Tipos primitivos
const titulo = "The Bunny Graveyard"; // string
const precio = 6.99;                 // number
const disponible = true;              // boolean
const desarrollador = null;           // null
let puntuacion;                       // undefined
const id_juego = 12345678901234567890n; // bigint
const identificador = Symbol("id");   // symbol

// Tipo compuesto: objeto
const juego = {
    nombre: "The Bunny Graveyard",
    categoria: "Horror",
    precio: 6.99
};

// Tipo compuesto: arreglo
const categorias = ["Horror", "Aventura", "RPG"];

console.log(typeof titulo);
console.log(typeof precio);
console.log(typeof disponible);
console.log(typeof puntuacion);
console.log(typeof juego);
console.log(categorias);

// Nota: typeof null devuelve "object" por una
// particularidad histórica de JavaScript.
console.log(typeof desarrollador);

console.log("======================================");
console.log("Strings")
console.log("======================================");

const nombre_original = "  THE BUNNY GRAVEYARD  ";

// trim(): elimina espacios al inicio y al final.
const nombre_limpio = nombre_original.trim();

// toLowerCase(): convierte el texto a minúsculas.
const nombre_minusculas = nombre_limpio.toLowerCase();

// toUpperCase(): convierte el texto a mayúsculas.
const nombre_mayusculas = nombre_limpio.toUpperCase();

// includes(): comprueba si contiene un texto.
const es_horror = nombre_minusculas.includes("bunny");

// endsWith(): comprueba cómo termina el texto.
const termina_con_d = nombre_minusculas.endsWith("d");

// length: devuelve la cantidad de caracteres.
const longitud_nombre = nombre_limpio.length;

console.log(nombre_limpio);
console.log(nombre_minusculas);
console.log(nombre_mayusculas);
console.log("Contiene bunny:", es_horror);
console.log("Termina en d:", termina_con_d);
console.log("Longitud:", longitud_nombre);

console.log("======================================");
console.log("Template Strings")
console.log("======================================");

// Las comillas invertidas permiten insertar
// variables mediante ${...}.
const mensaje_juego =
    `El juego ${nombre_limpio} cuesta $${precio_juego}.`;

console.log(mensaje_juego);

console.log("======================================");
console.log("numeros: conversión y toFixed");
console.log("======================================");

// Convertimos un precio escrito como texto a número.
const precio_texto = "19.99";
const precio_convertido = Number(precio_texto);

// toFixed(2): devuelve un string con dos decimales.
const precio_formateado = precio_convertido.toFixed(2);

console.log("Precio numérico:", precio_convertido);
console.log("Precio formateado:", precio_formateado);
console.log("Tipo de toFixed:", typeof precio_formateado);

console.log("======================================");
console.log("Booleans y comparaciones");
console.log("======================================");

const es_gratis = true;
const precio_actual = 0;

// Comparación estricta: compara valor y tipo.
console.log(5 === "5"); // false

// Comparación no estricta: puede convertir tipos.
console.log(5 == "5"); // true

// Operadores de comparación.
console.log(precio_actual === 0);
console.log(precio_actual > 0);
console.log(es_gratis !== false);

console.log("======================================");
console.log("Truthy y Falsy");
console.log("======================================");

const nombre_usuario = "";
const precio_descuento = 0;
const juego_encontrado = null;

console.log(Boolean(nombre_usuario));   // false
console.log(Boolean(precio_descuento)); // false
console.log(Boolean(juego_encontrado)); // false
console.log(Boolean("Game Jolt"));      // true
console.log(Boolean(10));               // true

console.log("======================================");
console.log("Nullish coalescing");
console.log("======================================");

// Si el precio es null o undefined, usamos un valor
// alternativo. Un precio de cero se conserva.
const precio_oferta = null;
const precio_final = precio_oferta ?? precio_juego;

console.log("Precio final:", precio_final);

console.log("======================================");
console.log("Condicionales y operador ternario");
console.log("======================================");

if (precio_juego === 0) {
    console.log("El juego es gratis.");
} else if (precio_juego > 0) {
    console.log("El juego es de pago.");
} else {
    console.log("Precio no válido.");
}

// Operador ternario: condición ? resultado1 : resultado2.
const tipo_juego =
    precio_juego === 0 ? "Gratis" : "De pago";

console.log("Tipo:", tipo_juego);

console.log("======================================");
console.log("Función declarada");
console.log("======================================");

function calcular_descuento(precio_original, porcentaje) {
    return precio_original * (porcentaje / 100);
}

const descuento = calcular_descuento(20, 25);

console.log("Descuento:", descuento);

console.log("======================================");
console.log("Función expresada");
console.log("======================================");

const obtener_nombre = function (juego) {
    return juego.nombre;
};

console.log("Nombre:", obtener_nombre(juego));

console.log("======================================");
console.log("Función flecha");
console.log("======================================");

const es_gratis_juego = (precio) => precio === 0;

console.log("¿Es gratis?", es_gratis_juego(0));

console.log("======================================");
console.log("Tipos de retorno");
console.log("======================================");

function obtener_precio() {
    return 9.99; // number
}

function obtener_categoria() {
    return "Horror"; // string
}

function comprobar_disponibilidad() {
    return true; // boolean
}

function mostrar_mensaje() {
    console.log("Consultando catálogo...");
    // No tiene return explícito: devuelve undefined.
}

console.log(typeof obtener_precio());
console.log(typeof obtener_categoria());
console.log(typeof comprobar_disponibilidad());
console.log(mostrar_mensaje());

console.log("======================================");
console.log("Función que retorna otra función");
console.log("======================================");

function crear_multiplicador(factor) {
    return function (precio) {
        return precio * factor;
    };
}

// Creamos una función que calcula el 50 % del precio.
const calcular_mitad = crear_multiplicador(0.5);

console.log("Mitad del precio:", calcular_mitad(20));


