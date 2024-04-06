import React from 'react'
import {useState, useEffect} from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firabase'
function ItemListContainer({greeting}) {
  const [productos, setProductos]=useState([])
  const  [loading, setLoading] = useState(false)
  const {categoryId} = useParams()

  useEffect(()=>{
    setLoading(true)
    //Conectar collection
    const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
    //Pido los documentos
    getDocs(productsCollection)
    .then((res)=>{
      const list = res.docs.map((product)=>{
        return{
          id:product.id,
          ...product.data()
        }
      })
      setProductos(list)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[categoryId])
  
  if(loading){
    return(
    <Loader/>
    )
  }

  return (
    <div>
      {
      categoryId 
      ?<h1 className='fst-italic text-danger-emphasis'>{greeting} <span style={{color:'black'}}>{categoryId}</span></h1>
      :<h1 className='fst-italic text-danger-emphasis'>{greeting}</h1>
      }
      <ItemList productos={productos}/>
      </div>
      )
    }

export default ItemListContainer