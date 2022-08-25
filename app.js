
/*
let lista = ''

for (let i = 0; i < 6; i++) {
    lista += prompt('ingrese 6 productos supermercado') + '\n'

}
alert(`sus 6 productos son : ${lista}`)
*/

let lista = prompt('ingrese producto')
let producto = ''
while (lista != 'esc') {
    producto += lista + '\n'
    lista = prompt('ingrese producto y finalizar con -esc-')
}
alert(`su lista de producto es : ${producto}`)