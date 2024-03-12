const productos = [
    {
        id:'1',
        name: 'Puerta Barmetal',
        Stock: 10,
        price: 292.356,
        description: 'Moderno diseño de 1 tablero con líneas horizontales. Inyectado con poliuretano expandido lo que brinda aislación térmica y acústica.',
        imagen:'../images/puerta01.jpg',
        category: 'puertas'
},
{
    id:'2',
    name: 'Puerta Deluxe',
    Stock: 13,
    price: 372.981,
    description: 'Detalles en aluminio anodizado y cerradura de seguridad con cilindro europerfil.Inyectado con poliuretano expandido lo que brinda aislación térmica y acústica.su pintura es permanente y no necesita repintado ni cuidado estético posterior.',
    imagen:'../images/puerta02.jpg',
    category: 'puertas'
},
{
    id:'3',
    name: 'Ventana de Aluminio',
    Stock: 12,
    price: 150.752,
    description: 'Las hojas se deslizan de forma horizontal, esto hace que no ocupe espacio adicional al abrirse. Con vidrio entero colocado.',
    imagen:'../images/ventana01.jpg',
    category: 'ventanas'
},
{
    id:'4',
    name: 'Aireador de Aluminio',
    Stock: 15,
    price: 32.244,
    description: 'Aireador óptimo para el ingreso de luz y renovación de aire. Libre de mantenimiento y fácilmente lavables. Con vidrio stipolite de 4mm, mosquitero y reja.',
    imagen:'../images/ventana02.jpg',
    category: 'ventanas'
},
{
    id:'5',
    name: 'Portón Barmetal',
    Stock: 5,
    price: 863.305,
    description: 'Moderno diseño de 3 tableros con líneas horizontales. Inyectado con poliuretano expandido lo que brinda aislación térmica y acústica.',
    imagen:'../images/porton01.jpg',
    category: 'portones'
}
]

export const getProducts =() => {
    let error = false
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema')
            }else{
                let product= productos.find((item)=> item.id  === id)
                resolve(product)
            }
        },5000)
    })
}