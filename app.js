/*const productos = [
    {
        id: 1,
        nombre: 'GRINGA',
        cantidad: 1,
        descripcion: 'Pan artesanal, Doble medallon de carne caseros, Queso Cheddar, Panceta, Salsa barbacoa, PAPAS FRITAS',
        precio: 800,
        imagen: './imagen/hambur.png'
    },
    {
        id: 2,
        nombre: 'REGIONAL',
        cantidad: 1,
        descripcion: 'Pan artesanal, Doble medallon de carne caseros, Queso Tybo, Huevo frito, mayonesa, PAPAS FRITAS',
        precio: 800,
        imagen: './imagen/hambur.png'
    },
    {
        id: 3,
        nombre: 'CHAMPIGNON',
        cantidad: 1,
        descripcion: 'Pan artesanal, Doble medallon de carne caseros, Queso CTybo, Aros de cebolla, Mayonesa, Champignon, PAPAS FRITAS',
        precio: 850,
        imagen: './imagen/hambur.png'
    },
    {
        id: 4,
        nombre: 'AZUL',
        cantidad: 1,
        descripcion: 'Pan artesanal, Doble medallon de carne caseros, Queso azul, aros de ceebolla caramelizados, Salsa azul, PAPAS FRITAS',
        precio: 850,
        imagen: './imagen/hambur.png'
    },
    {
        id: 5,
        nombre: 'TRIPLE QUESO',
        cantidad: 1,
        descripcion: 'Pan artesanal, Doble medallon de carne caseros, Queso Cheddar, Tybo, Azul, Mayonesa, PAPAS FRITAS',
        precio: 900,
        imagen: './imagen/hambur.png'
    },
    {
        id: 6,
        nombre: 'VEGUI',
        cantidad: 1,
        descripcion: 'Pan artesanal, Doble medallon de soja, Queso Tybo, lechuga, tomate, huevo, PAPAS FRITAS',
        precio: 800,
        imagen: './imagen/hambur.png'
    },

]*/

let contenedor = document.getElementById('container')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const precioTotal = document.getElementById('precioTotal')

const comprar = document.getElementById('comprar')



let carrito = []

fetch("/data.json")
    .then((res) => res.json())
    .then((productos) => {
        productos.forEach((producto) => {

            let card = document.createElement('div')

            card.classList.add('card', 'col-sm-12', 'col-lg-3', 'text-center')

            card.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">${producto.precio}$</p>
          <button id="agregar${producto.id}" class="btn btn-primary">Agregar</button>`

            contenedor.appendChild(card)

            const boton = document.getElementById(`agregar${producto.id}`)

            boton.addEventListener('click', () => {

                agregarAlcarrito(producto.id)


            })
        })



        const agregarAlcarrito = (prodId) => {
            const existe = carrito.some(prod => prod.id === prodId)

            if (existe) {
                const prod = carrito.map(prod => {

                    if (prod.id === prodId) {
                        prod.cantidad++
                    }
                })
            } else {
                const item = productos.find((prod) => prod.id === prodId)

                carrito.push(item)
            }

            actualizarCarrito()

        }



    }
)

const ActualizarStronge = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    actualizarCarrito()

    console.log(carrito)


}




const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {

        const div = document.createElement('div')

        div.className = ('productoEnCarrito')

        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="btn btn-primary">Eliminar</button>        
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    console.log(carrito)

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}



const agregarFormulario = () => {

    contenedorCarrito.innerHTML = ""

    const formulario = document.createElement('div')

    formulario.className = ('formulario')

    formulario.innerHTML = `<form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">NOMBRE</label>
          <input  class="form-control" id="nombre" aria-describedby="emailHelp">

          <label for="exampleInputEmail1" class="form-label">DIRECCION DE ENVIO</label>
          <input class="form-control" id="domicilio" aria-describedby="emailHelp">          
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">PAGA CON EFECTIVO</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">TRANSFERENCIA BANCARIA</label>
        </div>

        `

    contenedorCarrito.appendChild(formulario)

}




comprar.addEventListener('click', () => {

    agregarFormulario()

    comprar.innerHTML = "Finalizar Compra"

    comprar.addEventListener('click', () => {
        Swal.fire({
            title: 'perfecto',
            text: 'matias',
            icon: 'success',
            confirmButtonText: 'genial'
        })

    })


})



/*
const enviarMensaje = () => {
   const nombreCliente = document.getElementById("nombre").value
   const domicilioCliente = document.getElementById("domicilio").value
   contenedorCarrito.innerHTML = ""
   let msj = `<div class="msjFinal"> gracias ${nombreCliente} su pedido resa enviado a ${domicilioCliente} recibira un msj cuando salga por whatapp </div>`
   contenedorCarrito.innerHTML = msj

   contenedorCarrito.appendChild(msj)
}*/
