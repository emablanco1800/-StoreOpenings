const productos = [
    {
        id:'1',
        name: 'Puerta Barmetal',
        Stock: 10,
        price: 1000,
        description: 'loremasdasdkjash kjaskdha',
        imagen:'../images/puerta01.jpg',
        categoria: 'Puertas'
},
{
    id:'2',
    name: 'Puerta Deluxe',
    Stock: 13,
    price: 1500,
    description: 'loremasdasdkjash kjaskdha',
    imagen:'../images/puerta02.jpg',
    categoria: 'Puertas'
},
{
    id:'3',
    name: 'Ventana de Aluminio',
    Stock: 12,
    price: 2000,
    description: 'loremasdasdkjash kjaskdha',
    imagen:'../images/ventana01.jpg',
    categoria: 'Ventanas'
},
{
    id:'4',
    name: 'Aireador de Aluminio',
    Stock: 15,
    price: 50,
    description: 'loremasdasdkjash kjaskdha',
    imagen:'../images/ventana02.jpg',
    categoria: 'Ventanas'
},
{
    id:'5',
    name: 'Portón Barmetal',
    Stock: 5,
    price: 4000,
    description: 'loremasdasdkjash kjaskdha',
    imagen:'../images/porton01.jpg',
    categoria: 'Portones'
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
        }, 5000)
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