// 1. Crear el array inicial
let productos = ["Mouse", "Teclado", "Monitor", "Audífonos"];

// 2. Mostrar inventario
function mostrarInventario() {
    console.log("--- Inventario Actual ---");
    // Usamos un ciclo para recorrer y enumerar los productos
    for (let i = 0; i < productos.length; i++) {
        console.log(`${i + 1}. ${productos[i]}`);
    }
}
// 3. Agregar producto (con Punto Extra 1: evitar duplicados)
function agregarProducto(producto) {
    if (productos.indexOf(producto) !== -1) {
        console.log(`Ese producto ya existe ❌`);
    } else {
        productos.push(producto);
        console.log(`Producto agregado: ${producto}`);
    }
    mostrarInventario();
}

// 4. Eliminar último producto
function eliminarUltimoProducto() {
    let eliminado = productos.pop();
    console.log(`Producto eliminado: ${eliminado}`);
    mostrarInventario();
}

// 5. Reemplazar producto
function reemplazarProducto(indice, nuevoProducto) {
    if (indice >= 0 && indice < productos.length) {
        productos.splice(indice, 1, nuevoProducto);
        console.log(`Reemplazado en índice ${indice} por: ${nuevoProducto}`);
    } else {
        console.log("Índice no válido.");
    }
    mostrarInventario();
}

// 6. Buscar producto
function buscarProducto(producto) {
    let indice = productos.indexOf(producto);
    if (indice !== -1) {
        console.log(`Producto "${producto}" encontrado en el índice: ${indice}`);
    } else {
        console.log("Ese producto no existe en el inventario.");
    }
}

// 7. Ordenar inventario
function ordenarProductos() {
    productos.sort();
    console.log("Inventario ordenado alfabéticamente.");
    mostrarInventario();
}

// 8. Mostrar cantidad
function mostrarCantidad() {
    console.log(`Cantidad total: ${productos.length} productos.`);
}
mostrarInventario();
agregarProducto("Silla Gamer");
eliminarUltimoProducto(); // Quita Silla Gamer si fue la última
buscarProducto("Teclado");
ordenarProductos();
mostrarCantidad();