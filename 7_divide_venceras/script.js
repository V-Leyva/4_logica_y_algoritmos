/* Problema: Búsqueda del Máximo en un Arreglo con Divide and Conquer
Dado un arreglo de números, implementa una función que utilice el enfoque Divide and Conquer para encontrar el número máximo.

Instrucciones para resolver el problema:
Divide el arreglo en dos mitades.
Resuelve el problema recursivamente para encontrar el máximo en cada mitad.
Combina las soluciones comparando los máximos de ambas mitades.
Devuelve el número máximo encontrado */

function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    const longitud = arr.length;
    const long_1 = (longitud % 2 ? (longitud -1 ) : longitud);
    const mid = long_1 / 2;/* calcular el punto medio */;
    const left = arr.slice(0, mid);/* obtener la primera mitad */;
    const right = arr.slice(mid);/* obtener la segunda mitad */;

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left)/* llamada recursiva */;
    const rightMax = findMax(right)/* llamada recursiva */;

    // TODO: Combinar las soluciones comparando los máximos
    return (leftMax > rightMax ? leftMax : rightMax)/* máximo entre leftMax y rightMax */;
}
// Ejemplo de entrada
const numbers = [33, 8, 2, 10, 15, 7];
console.log(findMax(numbers)); // Salida esperada: 10


/*
                                        [3, 8, 2, 10, 5, 7]

                                   [3, 8, 2]               [10, 5, 7]

                                [3]      [8, 2]       [10, 5 ]      [7]

                             [3]        [8]  [2]    [10]     [5 ]      [7]
                             
*/