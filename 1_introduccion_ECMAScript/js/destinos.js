// Objeto inicial con destinos y costos
const costosPorDestino = {
    "Paris": 500,
    "Londres": 400,
    "New York": 600
};

// Función para agregar o actualizar un destino
function agregarDestino(destino, costo) {
    if (typeof destino !== "string" || typeof costo !== "number" || costo < 0) {
        console.error("Datos inválidos. Asegúrate de que el destino sea texto y el costo un número positivo.");
        return;
    }

    costosPorDestino[destino] = costo;
    console.log(`Destino "${destino}" agregado/actualizado con costo: ${costo}`);
}

// Función para obtener el costo base de un destino
function obtenerCostoDestino(destino) {
    return costosPorDestino[destino] || 0; // Retorna 0 si el destino no existe
}