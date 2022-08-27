
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
*/

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

