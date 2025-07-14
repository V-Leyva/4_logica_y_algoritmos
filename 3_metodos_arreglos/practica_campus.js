//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// Usa filter() para obtener los productos que cuesten menos de $100.
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log(`Los productos que cuestan menos de $100 son:`);
productosBaratos.forEach(e => {
    console.log(`El producto ${e.nombre} cuesta tan solo $${e.precio}, lo encuentras en la categoria ${e.categoria}`)
});
// Usa sort() para ordenar esos productos alfabéticamente por su nombre.
const productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(`Los productos que cuestan menos de $100 Ordenados alfabéticamente son:`);
productosOrdenados.forEach(e => {
    console.log(`El producto ${e.nombre} cuesta tan solo $${e.precio}, lo encuentras en la categoria ${e.categoria}`)
});
// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nombresProductos = productos.map(producto => producto.nombre);
console.log(`Los nombres de los productos son:`);
nombresProductos.forEach(e => {
    console.log(`${e}`)
});
// (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.
// Usa reduce() para calcular el precio total de todos los productos.
const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(`El precio total de todos los productos es: $${precioTotal}`);