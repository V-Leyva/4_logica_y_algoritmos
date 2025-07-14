/* Objetivo
Usar el algoritmo de los dos punteros para identificar rápidamente el primer par de invitados cuyos nombres comienzan con la misma letra.

Problema: Encuentra los Invitados que Pueden Sentarse Juntos
Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas
 cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.

Instrucciones para resolver el problema:
Usa un puntero al inicio del arreglo y otro al siguiente elemento.
Compara las iniciales de los nombres en las posiciones de ambos punteros.
Si coinciden, detén la búsqueda y devuelve los nombres.
Si no coinciden, avanza ambos punteros y repite.
Detén la búsqueda si recorres toda la lista sin encontrar un par. */

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        // Si coinciden, devuelve el par
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        }

        // TODO: Avanza los punteros si no coinciden
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]