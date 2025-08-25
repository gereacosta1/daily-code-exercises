// Paso 1 – Crear un array de objetos
//Un array es una lista. Un objeto es un conjunto de propiedades (clave:valor).

//👉 Pregunta:
//¿Cómo harías una lista (array) de 3 productos, donde cada producto tenga un name (string) y un price (número)?

producto1 = {
    name: "mouse",
    price: 25
}
producto2 = {
    name: "keyboard",
    price: 25

}
producto3 = {
    name: "usb",
    price: 10
}

productos = [producto1, producto2, producto3]

productosBaratos =  productos.filter(p => p.price < 50)

console.log(productosBaratos)