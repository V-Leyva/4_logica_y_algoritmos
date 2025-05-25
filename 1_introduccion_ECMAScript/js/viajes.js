// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
function registrarDestino(destino, fecha, transporte) {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
function calcularCosto(destino, transporte) {
    let costoBase = 0;

    // Costo base por destino
    costoBase = obtenerCostoDestino(destino);

    // Costo adicional por tipo de transporte
    
    costoBase += obtenerCostoTransporte(transporte);

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
function mostrarItinerario() {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}
