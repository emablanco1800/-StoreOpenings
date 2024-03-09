import { useEffect, useState } from "react"
import { getOneProduct, getProducts } from "../../mock/fakeApi"
import ItemDetail from "../itemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    //ejemplo hago una funcion aparte
    // useEffect(() =>{
    //     getOneProduct('2')
    //     .then((res)=> setProducto(res))
    //     .catch((error)=> console.log(error))
    // },[])

    //ejemplo de usar la funcion de ItemListContainer
    useEffect(()=>{
        getProducts()
        .then((res)=> setProducto(res.find((item)=> item.id === '2')))
        .catch ((error)=> console.log(error))
    },[])
    
    return(
        <div>
            <ItemDetail producto = {producto} />
        </div>
    )
}

export default ItemDetailContainer