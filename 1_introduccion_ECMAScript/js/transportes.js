// Objeto inicial con transportes y costos
const costosPorTransporte = {
    "Avión": 200,
    "Tren": 100
};

// Función para agregar o actualizar un transporte
function agregarTransporte(transporte, costo) {
    if (typeof transporte !== "string" || typeof costo !== "number" || costo < 0) {
        console.error("Datos inválidos. Asegúrate de que el transporte sea texto y el costo un número positivo.");
        return;
    }

    costosPorTransporte[transporte] = costo;
    console.log(`Transporte "${transporte}" agregado/actualizado con costo: ${costo}`);
}

// Función para obtener el costo base de un transporte
function obtenerCostoTransporte(transporte) {
    return costosPorTransporte[transporte] || 0; // Retorna 0 si el transporte no existe
}