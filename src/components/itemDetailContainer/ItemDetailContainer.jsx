import { useEffect, useState } from "react"
import './ItemDetailContainer.css'
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/firabase"
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})
    const [cargando, setCargando]= useState(false)
    const {itemId} = useParams()
        //FIREBASE!!
        useEffect(()=>{
            setCargando(true)
            //coleccion y proyecto
            const collectionProd = collection(db, "productos")
            //crear referencia
            const referenciaDoc = doc(collectionProd, itemId)
            //Traer el doc
            getDoc(referenciaDoc)
            .then((res)=> setProducto({id:res.id, ...res.data()}))
            .catch((error)=> console.log(error))
            .finally(()=> setCargando(false))
        },[itemId])
    return(
        <>
        { cargando ? <h1 className="loading-text">Cargando Producto...</h1> : <ItemDetail producto={producto}/>}
        </>
    )
}

export default ItemDetailContainer