// Aplicación de Carrito de Compras

// Clase para representar un producto
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

// Clase para manejar el carrito de compras
class CarritoCompras {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto, cantidad) {
        if (cantidad > producto.stock) {
            alert(`Lo siento, solo hay ${producto.stock} unidades disponibles de ${producto.nombre}.`);
            return;
        }
        
        const itemExistente = this.items.find(item => item.producto.nombre === producto.nombre);
        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            this.items.push({ producto, cantidad });
        }
        
        producto.stock -= cantidad;
        alert(`Se agregaron ${cantidad} ${producto.nombre} al carrito.`);
    }

    mostrarCarrito() {
        if (this.items.length === 0) {
            alert("El carrito está vacío.");
            return;
        }

        let mensaje = "Carrito de Compras:\n\n";
        this.items.forEach((item, index) => {
            const subtotal = item.producto.precio * item.cantidad;
            mensaje += `${index + 1}. ${item.producto.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${subtotal.toFixed(2)}\n`;
        });
        mensaje += `\nTotal: $${this.calcularTotal().toFixed(2)}`;

        alert(mensaje);
    }

    calcularTotal() {
        return this.items.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
    }
}

// Crear algunos productos de ejemplo
const productos = [
    new Producto("Camiseta", 20, 50),
    new Producto("Pantalón", 40, 30),
    new Producto("Zapatos", 60, 20),
    new Producto("Gorra", 15, 40)
];

// Crear el carrito de compras
const carrito = new CarritoCompras();

// Función principal para interactuar con el usuario
function main() {
    while (true) {
        const opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Ver productos disponibles\n" +
            "2. Agregar producto al carrito\n" +
            "3. Ver carrito\n" +
            "4. Finalizar compra\n" +
            "5. Salir"
        );

        switch (opcion) {
            case "1":
                mostrarProductos();
                break;
            case "2":
                agregarAlCarrito();
                break;
            case "3":
                carrito.mostrarCarrito();
                break;
            case "4":
                finalizarCompra();
                break;
            case "5":
                alert("Gracias por usar nuestra tienda. ¡Hasta pronto!");
                return;
            default:
                alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
}

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - Precio: $${producto.precio.toFixed(2)} - Stock: ${producto.stock}\n`;
    });
    alert(mensaje);
}

function agregarAlCarrito() {
    const indiceProducto = parseInt(prompt("Ingrese el número del producto que desea agregar:")) - 1;
    if (indiceProducto < 0 || indiceProducto >= productos.length) {
        alert("Número de producto no válido.");
        return;
    }

    const cantidad = parseInt(prompt("Ingrese la cantidad que desea agregar:"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad no válida.");
        return;
    }

    carrito.agregarProducto(productos[indiceProducto], cantidad);
}

function finalizarCompra() {
    carrito.mostrarCarrito();
    const confirmar = confirm("¿Desea confirmar su compra?");
    if (confirmar) {
        alert(`Compra finalizada. Total pagado: $${carrito.calcularTotal().toFixed(2)}`);
        carrito.items = []; // Vaciar el carrito
    }
}

// Ejecutar el programa
main();