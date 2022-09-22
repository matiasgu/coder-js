const productos = [
    {
        id: 1,
        nombre: 'GRINGA',
        cantidad: 1,
        descripcion:'Pan artesanal, Doble medallon de carne caseros, Queso Cheddar, Panceta, Salsa barbacoa, PAPAS FRITAS',
        precio: 800,
        imagen: './imagen/hambur.png'
    },
    {
        id: 2,
        nombre: 'REGIONAL',
        cantidad: 1,
        descripcion:'Pan artesanal, Doble medallon de carne caseros, Queso Tybo, Huevo frito, mayonesa, PAPAS FRITAS',
        precio: 800,
        imagen: './imagen/hambur.png'
    },
    {
        id: 3,
        nombre: 'CHAMPIGNON',
        cantidad: 1,
        descripcion:'Pan artesanal, Doble medallon de carne caseros, Queso CTybo, Aros de cebolla, Mayonesa, Champignon, PAPAS FRITAS',
        precio: 850,
        imagen: './imagen/hambur.png'
    },
    {
        id: 4,
        nombre: 'AZUL',
        cantidad: 1,
        descripcion:'Pan artesanal, Doble medallon de carne caseros, Queso azul, aros de ceebolla caramelizados, Salsa azul, PAPAS FRITAS',
        precio: 850,
        imagen: './imagen/hambur.png'
    },
    {
        id: 5,
        nombre: 'TRIPLE QUESO',
        cantidad: 1,
        descripcion:'Pan artesanal, Doble medallon de carne caseros, Queso Cheddar, Tybo, Azul, Mayonesa, PAPAS FRITAS',
        precio: 900,
        imagen: './imagen/hambur.png'
    },
    {
        id: 6,
        nombre: 'VEGUI',
        cantidad: 1,
        descripcion:'Pan artesanal, Doble medallon de soja, Queso Tybo, lechuga, tomate, huevo, PAPAS FRITAS',
        precio: 800,
        imagen: './imagen/hambur.png'
    },
    
]

let contenedor = document.getElementById('container')

const contenedorCarrito = document.getElementById('carrito-contenedor')

//const cantidad = document.getElementById('cantidad')

const precioTotal = document.getElementById('precioTotal')

const comprar = document.getElementById('comprar')



let carrito = []



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
    }
)

const ActualizarStronge = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}




const agregarAlcarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe){ 
        const prod = carrito.map (prod => {
            
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = productos.find((prod) => prod.id === prodId)
        
        carrito.push(item)
    }
    
    actualizarCarrito() 
    
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
/*
comprar.addEventListener('click', () => {
    const comprar = () => {
        const total = document.getElementById('precioTotal')[0].innerHTML
        modal.carrito.innerHTML = ''
        const formulario = `<form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Retiro por local</label>
          <label class="form-check-label" for="exampleCheck1">envio domicilio</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>`

      modal.carrito.innerHTML = formulario
    }

    contenedorCarrito.appendChild(comprar)
})
*/