
/*
let lista = ''

for (let i = 0; i < 6; i++) {
    lista += prompt('ingrese 6 productos supermercado') + '\n'

}
alert(`sus 6 productos son : ${lista}`)

let lista = prompt('ingrese producto')
let producto = ''
while (lista != 'esc') {
    producto += lista + '\n'
    lista = prompt('ingrese producto y finalizar con -esc-')
}
alert(`su lista de producto es : ${producto}`)

let montoPagar = prompt('ingrese monto a pagar')
let formaPago = prompt('ingrese T si para con targeta' + '\n' + 'ingrese E si paga con efectivo')

function descuento(x) {
    return x * 0.15
}

function totalPagar(a, b) {
    return a - b 
}

if (formaPago === 'T') {
    console.log(`monto a pagar es: ${montoPagar}`)
} else if (formaPago === 'E') {
    console.log('monto a pagar con un 15% de descuento por pago en efectivo es:')
    console.log(totalPagar(montoPagar, descuento(montoPagar)))
}
else {
    alert('la opcion ingresada es incorrecta')
}

*/

//ESTO ES CARRITO DE COMPRA CON ARRAY
/*
const productos = [
    {nombre: 'coca cola' , precio: 250},
    {nombre: 'fanta' , precio: 250},
    {nombre: 'fernet branca' , precio: 1300},
    {nombre: 'vino toro' , precio: 200},
    {nombre: 'viña de balbo' , precio: 350},
    {nombre: 'manaos naranja' , precio: 190},
    {nombre: 'vodka' , precio: 800},
    {nombre: 'ginebra' , precio: 1200},
    {nombre: 'wisky' , precio: 4000},
]

let carrito = []
let seleccion= prompt('desa comprar alguno de los productos')

while (seleccion != 'si' && seleccion != 'no') {
    alert('por favor ingrese si o no')
    seleccion = prompt('hola desea comprar algo si o no')
    
}

if (seleccion == 'si') {
    alert('a continuacion nuestra lista de productos')
    let listaDeProdutos = productos.map(
        (producto) => producto.nombre + ' ' + producto.precio + '$'
    )
    alert (listaDeProdutos.join('\n'))
} else if (seleccion == 'no'){
    alert('gracias por venir')
}

while (seleccion != 'no') {
    let producto = prompt('agrega un producto a tu carrito')
    let precio = 0

    if (producto == 'coca cola' || producto == 'fanta' || producto == 'fernet branca' || producto == 'vino toro' || producto == ' viña de balbo' || producto == 'manaos naranja' || producto == 'vodka' || producto == 'ginebra' || producto == 'wisky') {
        switch (producto) {
            case 'coca cola':
                precio = 250
                break;
            case 'fanta':
                precio = 250
                break;    
            case 'fernet branca':
                precio = 1300
                break;
            case 'vino toro':
                precio = 200
                break;
            case 'viña de balbo':
                precio = 350
                break;
            case 'manaos naranja':
                precio = 190
                break;
            case 'vodka':
                precio = 800
                break;
            case 'ginebra':
                precio = 1200
                break;
            case 'wisky':
                precio = 4000
                break;        
            default:
                break;
        }

        let unidades = parseInt(prompt('cuantas unidades desea llevar'))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert('no tenesmos ese producto')
    }

    seleccion = prompt('desea seguir comprando?')

    while (seleccion === 'no') {
        alert('gracias por la compra')
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break
    }
}
*/
const productos = [
    {
        nombre: 'coca cola',
        precio: 250,
        imagen: './imagen/coca.png'
    },
    {
        nombre: 'fanta',
        precio: 250,
        imagen: './imagen/coca.png'
    },
    {
        nombre: 'fernet branca',
        precio: 1300,
        imagen: './imagen/coca.png'
    },
    {
        nombre: 'vino toro',
        precio: 200,
        imagen: './imagen/coca.png'
    },
    {
        nombre: 'viña de balbo',
        precio: 350,
        imagen: './imagen/coca.png'
    },
    {
        nombre: 'manaos naranja',
        precio: 190,
        imagen: './imagen/coca.png'
    },
    {
        nombre: 'vodka',
        precio: 800,
        imagen: './imagen/coca.png'
    },
    {
        nombre: 'ginebra',
        precio: 1200,
        imagen: './imagen/coca.png'
    },
    {
        nombre: 'wisky',
        precio: 4000,
        imagen: './imagen/coca.png'
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
          <p class="card-text">${producto.precio}</p>
          <a href="#" class="btn btn-primary" onClick="agregarAlcarrito()">Agregar al Carrito</a>
        </div>`
        contenedor.appendChild(card)
    })
}
cardPoductos()

const agregarAlcarrito = () => {
    alert('producto agregado al carrito')
}
