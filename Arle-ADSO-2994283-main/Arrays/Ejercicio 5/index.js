// Definición de productos
const productos = [
    { id: 1, nombre: "Camiseta", precio: 20, stock: 50 },
    { id: 2, nombre: "Pantalón", precio: 40, stock: 30 },
    { id: 3, nombre: "Zapatos", precio: 60, stock: 20 },
  ];
  
  // Carrito de compras
  let carrito = [];
  
  // Función para agregar producto al carrito
  function agregarAlCarrito(idProducto, cantidad) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto && producto.stock >= cantidad) {
      const itemEnCarrito = carrito.find(item => item.id === idProducto);
      if (itemEnCarrito) {
        itemEnCarrito.cantidad += cantidad;
      } else {
        carrito.push({ ...producto, cantidad });
      }
      producto.stock -= cantidad;
      console.log(`${cantidad} ${producto.nombre}(s) agregado(s) al carrito.`);
    } else {
      console.log("Producto no disponible o stock insuficiente.");
    }
  }
  
  // Función para mostrar el carrito
  function mostrarCarrito() {
    console.log("Carrito de Compras:");
    carrito.forEach(item => {
      console.log(`${item.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${item.precio * item.cantidad}`);
    });
  }
  
  // Función para calcular el total de la compra usando map y reduce
  function calcularTotal() {
    const total = carrito
      .map(item => item.precio * item.cantidad)
      .reduce((acc, subtotal) => acc + subtotal, 0);
    console.log(`Total de la compra: $${total}`);
  }
  
  // Ejemplo de uso
  agregarAlCarrito(1, 2);  // Agregar 2 camisetas
  agregarAlCarrito(2, 1);  // Agregar 1 pantalón
  agregarAlCarrito(3, 1);  // Agregar 1 par de zapatos
  
  mostrarCarrito();
  calcularTotal();
// class Producto {
//     constructor(nombre, precio, stock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }
// }

// class CarritoCompras {
//     constructor() {
//         this.items = [];
//     }

//     agregarProducto(producto, cantidad) {
//         if (cantidad > producto.stock) {
//             alert(`Lo siento, solo hay ${producto.stock} unidades disponibles de ${producto.nombre}.`);
//             return;
//         }
        
//         const itemExistente = this.items.find(item => item.producto.nombre === producto.nombre);
//         if (itemExistente) {
//             itemExistente.cantidad += cantidad;
//         } else {
//             this.items.push({ producto, cantidad });
//         }
        
//         producto.stock -= cantidad;
//         alert(`Se agregaron ${cantidad} ${producto.nombre} al carrito.`);
//     }

//     mostrarCarrito() {
//         if (this.items.length === 0) {
//             alert("El carrito está vacío.");
//             return;
//         }

//         let mensaje = "Carrito de Compras:\n\n";
//         this.items.forEach((item, index) => {
//             const subtotal = item.producto.precio * item.cantidad;
//             mensaje += `${index + 1}. ${item.producto.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${subtotal.toFixed(2)}\n`;
//         });
//         mensaje += `\nTotal: $${this.calcularTotal().toFixed(2)}`;

//         alert(mensaje);
//     }

//     calcularTotal() {
//         return this.items.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
//     }
// }


// const productos = [
//     new Producto("Camiseta", 20, 50),
//     new Producto("Pantalón", 40, 30),
//     new Producto("Zapatos", 60, 20),
//     new Producto("Gorra", 15, 40)
// ];


// const carrito = new CarritoCompras();


// function main() {
//     while (true) {
//         const opcion = prompt(
//             "Seleccione una opción:\n" +
//             "1. Ver productos disponibles\n" +
//             "2. Agregar producto al carrito\n" +
//             "3. Ver carrito\n" +
//             "4. Finalizar compra\n" +
//             "5. Salir"
//         );

//         switch (opcion) {
//             case "1":
//                 mostrarProductos();
//                 break;
//             case "2":
//                 agregarAlCarrito();
//                 break;
//             case "3":
//                 carrito.mostrarCarrito();
//                 break;
//             case "4":
//                 finalizarCompra();
//                 break;
//             case "5":
//                 alert("Gracias por usar nuestra tienda. ¡Hasta pronto!");
//                 return;
//             default:
//                 alert("Opción no válida. Por favor, intente de nuevo.");
//         }
//     }
// }

// function mostrarProductos() {
//     let mensaje = "Productos disponibles:\n\n";
//     productos.forEach((producto, index) => {
//         mensaje += `${index + 1}. ${producto.nombre} - Precio: $${producto.precio.toFixed(2)} - Stock: ${producto.stock}\n`;
//     });
//     alert(mensaje);
// }

// function agregarAlCarrito() {
//     const indiceProducto = parseInt(prompt("Ingrese el número del producto que desea agregar:")) - 1;
//     if (indiceProducto < 0 || indiceProducto >= productos.length) {
//         alert("Número de producto no válido.");
//         return;
//     }

//     const cantidad = parseInt(prompt("Ingrese la cantidad que desea agregar:"));
//     if (isNaN(cantidad) || cantidad <= 0) {
//         alert("Cantidad no válida.");
//         return;
//     }

//     carrito.agregarProducto(productos[indiceProducto], cantidad);
// }

// function finalizarCompra() {
//     carrito.mostrarCarrito();
//     const confirmar = confirm("¿Desea confirmar su compra?");
//     if (confirmar) {
//         alert(`Compra finalizada. Total pagado: $${carrito.calcularTotal().toFixed(2)}`);
//         carrito.items = [];
//     }
// }


// main();