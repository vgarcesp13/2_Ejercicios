const Datos= {
    Imagen: 'https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565__480.png',
    Correo: 'vgarcesp@unemi.edu.ec'
}

//console.log(Datos)

const MostrarDatos = (Avatar) => 
    `
    <img src= ${Avatar.Imagen} alt= ${Avatar.Correo}>
    `

const MostrarDatos1 = (Avatar) => {
    const {Imagen, Correo}= Avatar
    return (
        `
        <img src= ${Imagen} alt= ${Correo}></img>
        `
    )
}

const MostrarDatos2 = ({Imagen:Img, Correo}) => 
    `
    <img src= ${Img} alt= ${Correo}>
    `

let img = mostrarDatos (Datos)
const $root= document.getElementById("root")
$root.innerHTML = "<h2>Destructuring</h2>"
$root.innerHTML += MostrarDatos2(Datos)