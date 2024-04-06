import React, { useContext, useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
const ItemDetail = ({producto}) => {
const [compra, setCompra] = useState(false)
const {addItem} = useContext(CartContext)

  const onAdd = (cantidad) =>{
    addItem(producto,cantidad)

    setCompra(true)
  }

  return (
          <div className='product-details-container'>
              <h3 className={producto.stock < 6 ? 'low-stock' : ''}>Detalle de: {producto.name} </h3>
              <img className='product-image' alt={producto.name} src={producto.imagen}/>
              <p className='product-description'>{producto.description}</p>
              <p className='product-price'>${producto.price},00</p>
              {compra && <p>Ya agregaste {producto.name} en el carrito! 🙌 </p>}
              {producto.stock < 6  && <p>¡Apúrate! ¡Solo quedan pocas unidades en stock! 😱</p>}
              { compra ? <Link to='/cart' className='btn btn-success'>Ir al carrito</Link> : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
              </div>
              )
            }
export default ItemDetail