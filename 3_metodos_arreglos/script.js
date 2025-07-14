//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];


// Usa filter() para obtener los productos que cuesten menos de $100.

const menosDeCien = productos.filter(producto => producto.precio < 100);

let productosMenosDeCien = '';
for (const producto of menosDeCien) {
    productosMenosDeCien += ` \n Nombre: ${producto.nombre}, Precio: $${producto.precio}`;
}

console.log(`Productos que cuestan menos de $100: ${productosMenosDeCien}`);


// Usa sort() para ordenar esos productos alfabéticamente por su nombre.

const productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
let productosOrdenadosPorNombre = '';
for (const producto of productosOrdenados) {
    productosOrdenadosPorNombre += ` \n Nombre: ${producto.nombre}, Precio: $${producto.precio}`;
}
console.log(`Productos ordenados alfabéticamente por su nombre: ${productosOrdenadosPorNombre}`);



// Usa map() para crear un nuevo arreglo que contenga solo los nombres de los productos.
const nombresDeProductos = productos.map(producto => producto.nombre);
let productosNombre = '';
for (const producto of nombresDeProductos) {
    productosNombre += ` \n Nombre: ${producto}`;
}
console.log(`Solo nombre de productos: ${productosNombre}`);


// Aplicacion de Reduce() para calcular el costo total de los productos.
const nombresConReduce = productos.reduce((acumualador, producto) => {
    return acumualador + producto.precio;
}, 0);
console.log(`Costo total de los productos: ${nombresConReduce}`);


// Usa some() para verificar si hay algún producto de la categoría "Electrónica".
let categoria = 'Electrónica';
const existenProductos = productos.some((producto) => {
    return producto.categoria == categoria;
});

console.log(`¿Hay productos de ${categoria} disponibles?: ${(existenProductos == true ? "Sí" : "No")}`);
