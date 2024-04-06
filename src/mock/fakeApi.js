const productos = [
    {
        id:'1',
        name: 'Puerta Barmetal',
        stock: 10,
        price: 292.356,
        description: 'Moderno diseño de 1 tablero con líneas horizontales. Inyectado con poliuretano expandido lo que brinda aislación térmica y acústica.',
        imagen:'../images/puerta01.jpg',
        category: 'puertas'
},
{
    id:'2',
    name: 'Puerta Deluxe',
    stock: 13,
    price: 372.981,
    description: 'Detalles en aluminio anodizado y cerradura de seguridad con cilindro europerfil.Inyectado con poliuretano expandido lo que brinda aislación térmica y acústica.su pintura es permanente y no necesita repintado ni cuidado estético posterior.',
    imagen:'../images/puerta02.jpg',
    category: 'puertas'
},
{
    id:'3',
    name: 'Ventana de Aluminio',
    stock: 12,
    price: 150.752,
    description: 'Las hojas se deslizan de forma horizontal, esto hace que no ocupe espacio adicional al abrirse. Con vidrio entero colocado.',
    imagen:'../images/ventana01.jpg',
    category: 'ventanas'
},
{
    id:'4',
    name: 'Aireador de Aluminio',
    stock: 15,
    price: 32.244,
    description: 'Aireador óptimo para el ingreso de luz y renovación de aire. Libre de mantenimiento y fácilmente lavables. Con vidrio stipolite de 4mm, mosquitero y reja.',
    imagen:'../images/ventana02.jpg',
    category: 'ventanas'
},
{
    id:'5',
    name: 'Portón Barmetal',
    stock: 5,
    price: 863.305,
    description: 'Moderno diseño de 3 tableros con líneas horizontales. Inyectado con poliuretano expandido lo que brinda aislación térmica y acústica.',
    imagen:'../images/porton01.jpg',
    category: 'portones'
},
{
    id:'6',
    name: 'Grifería Allegro',
    stock: 26,
    price: 128.189,
    description: 'Con cierre tradicional, tiene una pieza de goma (cuerito) que al girar la llave se comprime contra el paso del agua permitiendo mayor o menor caudal.',
    imagen:'../images/griferia01.jpg',
    category: 'griferia'
},
{
    id:'7',
    name: 'Lavatorio Pico Bajo Lever',
    stock: 25,
    price: 163.867,
    description: 'Con cierre cerámico (1/4 de vuelta) presenta una tecnología avanzada de discos cerámicos que permiten movimientos de apertura y cierre suaves y precisos. No requiere mantenimiento y evita que la grifería gotee.',
    imagen:'../images/griferia02.jpg',
    category: 'griferia'
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