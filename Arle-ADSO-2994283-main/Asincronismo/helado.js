// Función para simular un paso del proceso
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Funciones para cada paso de la preparación
  async function prepararBase(sabor) {
    console.log(`Preparando base de ${sabor}...`);
    await esperar(2000);
    console.log(`Base de ${sabor} lista.`);
    return `base de ${sabor}`;
  }
  
  async function mezclarIngredientes(base) {
    console.log(`Mezclando ${base} con leche y azúcar...`);
    await esperar(3000);
    console.log("Ingredientes mezclados.");
    return `mezcla de ${base}`;
  }
  
  async function congelar(mezcla) {
    console.log(`Congelando ${mezcla}...`);
    await esperar(4000);
    console.log("Helado congelado.");
    return `helado de ${mezcla}`;
  }
  
  async function agregarTopping(helado, topping) {
    console.log(`Agregando ${topping} al ${helado}...`);
    await esperar(1000);
    console.log(`${topping} agregado.`);
    return `${helado} con ${topping}`;
  }
  
  // Función principal para preparar el helado
  async function prepararHelado(sabor, topping) {
    try {
      const base = await prepararBase(sabor);
      const mezcla = await mezclarIngredientes(base);
      const helado = await congelar(mezcla);
      const heladoFinal = await agregarTopping(helado, topping);
      console.log(`¡${heladoFinal} está listo para servir!`);
    } catch (error) {
      console.error("Hubo un error en la preparación:", error);
    }
  }
  
  // Usar la función
  prepararHelado("chocolate", "chispas de colores");