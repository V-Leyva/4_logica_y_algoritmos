/* 
- Crea un arreglo vacío llamado listaDeCompras.
- Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
- Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
- Implementa una función mostrarLista() que imprima todos los productos de la lista.
- Asegúrate de que no haya productos duplicados en la lista.
- Puedes usar arrow functions para la funcionalidad solicitada así como otras características del estandar ECMAScript.
*/

// Crear arreglo vacío
let listaDeCompras = [];

// Función para agregar un producto sin duplicados
const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`Producto "${producto}" agregado a la lista.`);
  } else {
    console.log(`El producto "${producto}" ya está en la lista.`);
  }
};

// Función para eliminar un producto
const eliminarProducto = (producto) => {
  const indice = listaDeCompras.indexOf(producto);
  if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    console.log(`Producto "${producto}" eliminado de la lista.`);
  } else {
    console.log(`El producto "${producto}" no se encuentra en la lista.`);
  }
};

// Función para mostrar la lista
const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
  } else {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto}`);
    });
  }
};

// Ejemplo de uso
agregarProducto("Pan");
agregarProducto("Leche");
agregarProducto("Pan"); // Producto duplicado
mostrarLista();
eliminarProducto("Leche");
mostrarLista();