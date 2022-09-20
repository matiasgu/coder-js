const productos = [
    {
        id: 1,
        nombre: 'GRINGA',
        descripcion:'Pan artesanal, Doble medallon de carne caseros, Queso Cheddar, Panceta, Salsa barbacoa, PAPAS FRITAS',
        precio: 800,
        imagen: './imagen/hambur.png'
    },
    {
        id: 2,
        nombre: 'REGIONAL',
        descripcion:'Pan artesanal, Doble medallon de carne caseros, Queso Tybo, Huevo frito, mayonesa, PAPAS FRITAS',
        precio: 800,
        imagen: './imagen/hambur.png'
    },
    {
        id: 3,
        nombre: 'CHAMPIGNON',
        descripcion:'Pan artesanal, Doble medallon de carne caseros, Queso CTybo, Aros de cebolla, Mayonesa, Champignon, PAPAS FRITAS',
        precio: 850,
        imagen: './imagen/hambur.png'
    },
    {
        id: 4,
        nombre: 'AZUL',
        descripcion:'Pan artesanal, Doble medallon de carne caseros, Queso azul, aros de ceebolla caramelizados, Salsa azul, PAPAS FRITAS',
        precio: 850,
        imagen: './imagen/hambur.png'
    },
    {
        id: 5,
        nombre: 'TRIPLE QUESO',
        descripcion:'Pan artesanal, Doble medallon de carne caseros, Queso Cheddar, Tybo, Azul, Mayonesa, PAPAS FRITAS',
        precio: 900,
        imagen: './imagen/hambur.png'
    },
    {
        id: 6,
        nombre: 'VEGUI',
        descripcion:'Pan artesanal, Doble medallon de soja, Queso Tybo, lechuga, tomate, huevo, PAPAS FRITAS',
        precio: 800,
        imagen: './imagen/hambur.png'
    },
    
]

const cardPoductos = () => {
    let contenedor = document.getElementById('container')
    productos.forEach((producto, indice) => {
        let card = document.createElement('div')
        card.classList.add('card', 'col-sm-12', 'col-lg-3', 'text-center')
        card.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">${producto.precio}$</p>
          <a href="#" class="btn btn-primary" onClick="agregarAlcarrito(${indice})">Agregar al Carrito</a>
        </div>`
        contenedor.appendChild(card)
    })
}
cardPoductos()

let carrito = []
let divCarrito = document.getElementById("carrito")

const agregarAlcarrito = (indice) => {
    const indiceCarrito = carrito.findIndex((producto)=>{
        producto.id === productos[indice].id 
    })
    if (indiceCarrito === -1) {
        const productoAgregar = productos[indice]
        productoAgregar.cantidad = 1
        carrito.push(productoAgregar)
        dibujarCarrito()
    } else {
        carrito[indiceCarrito].cantidad +=1
        dibujarCarrito()
    }
}

let total = 0

const dibujarCarrito = ()=>{
    divCarrito.className = "carrito"
    divCarrito.innerHTML = ""
    if(carrito.length > 0){
        carrito.forEach((producto, indice) => {
            total = total + producto.precio * producto.cantidad
            const carritoContainer = document.createElement("div")
            carritoContainer.className = "producto-carrito"
            carritoContainer.innerHTML = `
            <img class="car-img" src="${producto.imagen}">
            <div class="producto-details">${producto.nombre}</div>
            <div class="producto-details">Catindad: ${producto.cantidad}</div>
            <div class="producto-details">Precio: ${producto.precio}</div>
            <div class="producto-details">Sub Tolal: ${producto.precio * producto.cantidad}</div>
            <button class="btn btn-primary" id="remove-product" onclick="removeProduct(${indice})">Eliminar</button>`

            divCarrito.appendChild(carritoContainer)
        });
        
        const totalContainer = document.createElement("div")
        totalContainer.className = "total-carrito"
        totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>
        <button class= "btn btn-primary finalizar" id= "finalizar" onClick= "finalizarCompra()"> FINALIZAR </button>
        `
        divCarrito.appendChild(totalContainer)

    } else {
        divCarrito.classList.remove("carrito")
    }
}

const removeProduct = ()=>{
    carrito.splice(indice, 1)
    dibujarCarrito()
}