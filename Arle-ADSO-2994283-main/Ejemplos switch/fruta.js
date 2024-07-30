let fruta =  "fresa"
switch (fruta) {
    case "manzana":
    case "pera":
    case "durazno":
        console.log("Es una fruta de árbol");
        break;
    case "fresa":
    case "frambuesa":
        console.log("Es una baya");
        break;
    default:
        console.log("No estoy seguro qué tipo de fruta es");
}