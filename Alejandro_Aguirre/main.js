console.log("\n--- OBJETOS ---");

// Objetos: propiedades y valores clave
let juego = {
  nombre: "Skyfear",
  desarrollador: "Protora Studios",
  estadisticas: {
    vistas: 11800,
    likes: 38
  }
};

// Agregar propiedades
juego.genero = "Acción";
juego.plataforma = "PC";

// Consultar propiedades mediante la notación de punto
console.log("Nombre:", juego.nombre);
console.log("Desarrollador:", juego.desarrollador);

// Eliminar propiedades
delete juego.plataforma;
console.log("Objeto después de eliminar 'plataforma':", juego);

// Encadenamiento opcional (?.)
// Evita que el programa se rompa si una propiedad no existe
console.log("Reseñas (opcional):", juego.estadisticas?.resenas); // undefined, no rompe el código

// Desestructuración de objetos y renombramiento de propiedades
// Extraemos 'nombre' y lo renombramos como 'titulo'
let { nombre: titulo, desarrollador, estadisticas: { vistas } } = juego;
console.log(`El juego ${titulo} fue creado por ${desarrollador} y tiene ${vistas} vistas.`);

// Operador spread (...) para combinar objetos
let infoExtra = { año: 2024, esGratis: true };
let juegoCompleto = { ...juego, ...infoExtra };
console.log("Juego combinado (spread):", juegoCompleto);

// Object.values() e includes()
let valores = Object.values(juegoCompleto);
console.log("¿Contiene el valor 'Skyfear'?", valores.includes("Skyfear")); // true
console.log("¿Contiene el valor 'Nintendo'?", valores.includes("Nintendo")); // false


// --- 2. ARREGLOS ---
console.log("\n--- ARREGLOS ---");

let resenas = [
  "Increíble juego de dragones",
  "Gráficos muy buenos",
  "Necesita más mapas",
  "El multijugador es divertido"
];

// Arreglos y recorrido con forEach() / Funciones callback
// El forEach recibe una función callback que se ejecuta por cada elemento
console.log("Recorriendo el arreglo de reseñas:");
resenas.forEach(function(resena, indice) {
  console.log(`  - Reseña ${indice + 1}: ${resena}`);
});

// Desestructuración de arreglos
let [primeraResena, segundaResena] = resenas;
console.log("Primera reseña:", primeraResena);

// Rest (...) para agrupar elementos
// 'primera' y 'segunda' se extraen, y el resto se agrupa en 'restoResenas'
let [primera, segunda, ...restoResenas] = resenas;
console.log("El resto de reseñas (Rest):", restoResenas);

// Spread para combinar arreglos
let nuevasResenas = ["Recomendado 100%", "Falta optimización"];
let todasResenas = [...resenas, ...nuevasResenas];
console.log("Todas las reseñas combinadas (Spread):", todasResenas);

// Métodos: push(), unshift(), pop() y shift()
let etiquetas = ["Acción", "Fantasía"];
etiquetas.push("Gratis");      
etiquetas.unshift("Dragones");
etiquetas.pop();              
etiquetas.shift();           
console.log("Etiquetas después de push, unshift, pop y shift:", etiquetas);

// Métodos: find(), includes() y filter()
let buscarMapa = resenas.find((r) => r.includes("mapas"));
console.log("Búsqueda con find():", buscarMapa);

console.log("¿Existe la reseña 'Gráficos muy buenos'? (includes):", resenas.includes("Gráficos muy buenos"));

let resenasLargas = resenas.filter((r) => r.length > 20);
console.log("Reseñas con más de 20 caracteres (filter):", resenasLargas);

// Métodos: map() y reduce()
let resenasMayusculas = resenas.map((r) => r.toUpperCase());
console.log("Reseñas transformadas a mayúsculas (map):", resenasMayusculas);

let totalLetras = resenas.reduce((acumulador, resenaActual) => {
  return acumulador + resenaActual.length;
}, 0);
console.log("Suma total de letras en todas las reseñas (reduce):", totalLetras);