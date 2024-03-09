import React from 'react'
// import hook
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'

function ItemListContainer({greeting}) {
    const [productos, setProductos]=useState([])

    
    useEffect(() =>{
        getProducts()
        .then((res) => setProductos(res))
        .catch((error) => console.log(error, ' todo mal'))
    },[])
    
    
    return (
    <div>
        <h1>{greeting}</h1>
        {/* {
            productos.map((producto) => <p key={producto.id}>{producto.price}</p>)
        } */}
        <ItemList productos={productos}/>
    </div>
    )
}

export default ItemListContainer
