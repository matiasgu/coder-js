
let contenedor = document.getElementById('container')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const precioTotal = document.getElementById('precioTotal')

const comprar = document.getElementById('comprar')

let carrito = []

fetch('/data.json')

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

const eliminarDelCarrito = (indice) =>{

    carrito.splice(indice, 1)
    actualizarCarrito()

}



const actualizarCarrito = () => {
    contenedorCarrito.className = "carritoCompra"
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod, indice) => {

        const div = document.createElement('div')

        div.className = ('productoEnCarrito')

        div.innerHTML = `<div class="productoElegido">
        <img src="${prod.imagen}" alt="" class="imgSelec">
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${indice})" class="btn btn-primary">Eliminar</button> 
        </div>        
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    const botoncomprar = document.createElement("div")
    botoncomprar.innerHTML=`<div class="botonFormulario">
        <button onclick="agregarFormulario()" class="btn btn-primary">COMPRAR</button>
        </div>`

    contenedorCarrito.appendChild(botoncomprar)

    console.log(carrito)

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}



const agregarFormulario = () => {

    contenedorCarrito.innerHTML = ""

    const formulario = document.createElement('div')

    formulario.className = ('formulario')

    formulario.innerHTML = `<div class="divFor">
        <form>
        
        <label  class="form-label">NOMBRE</label>
        <input  class="form-control" id="nombre" >

        <label for="exampleInputEmail1" class="form-label">DIRECCION DE ENVIO</label>
        <input class="form-control" id="domicilio" aria-describedby="emailHelp">

        <label for="exampleInputEmail1" class="form-label">TELEFONO DE CONTACTO</label>
        <input class="form-control" id="telefono" aria-describedby="emailHelp">          
        
        </form>
        </div>
        <div class="botonFinalizar">
        <button onclick="captura()" class="btn btn-primary">FINALIZAR COMPRAR</button>   
        </div>     
        `

    contenedorCarrito.appendChild(formulario)

    localStorage.setItem('carrito', JSON.stringify(carrito))

}



const captura = ()=>{

    const nombreCliente = document.getElementById("nombre").value
    const direccion = document.getElementById('domicilio').value
    const telefono = document.getElementById('telefono').value
    const precioTotal = document.getElementById('precioTotal').innerHTML


    Swal.fire({
        title: `Gracias por tu compra  <b>${nombreCliente} </b> <br>Tu pedido sera enviado a  <b>${direccion} </b>
        <br>Recibiras un msj al numero  <b>${telefono} </b> cuando nuestro cadete este en camino.
        <br>El total es <b> $ ${precioTotal} </b>` ,        
        icon: 'success',
        grow:'fullscreen',
        confirmButtonText: 'GRACIAS POE TU COMPRA',
        
    })   
    
}

