const Pares= [2, 4, 6, 8, 10]
const Impares= [1, 3, 5, 7, 9]
const Numeros1= Pares.concat(Impares)
const Numeros2= [...Pares, ...Impares]
//console.log(Numeros1, Numeros2)

let Precio= 3.00
const Articulos= {
    Descripcion: "Coca-Cola 3L",
    Precio,
    Stock: 100
}

const Art= {...Articulos}
Art.Id= 1
/* console.log('Articulos', Articulos)
console.log('Art',Art) */

/* x= 4
y= x
X= 5
console.log(x,y) */

/* const Articulos2 = {
    ...Articulos,
    Precio: 2.5,
    ['Stock']: 90
}

console.log(Articulos2) */

const MasDatos = ({Precio, Stock}) => {
    console.log('Faltante:',Precio, Stock)
}

const MostrarArticulos = ({Descripcion, ...props}) => {
    console.log(Descripcion, props)
    MasDatos({...props})
}

MostrarArticulos(Articulos)