import React, { useContext } from 'react'
import CartView from '../cartView/CartView'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const {cart}= useContext(CartContext)
    return (
    <div className='cart-container'>
        {!cart.length 
        ? <div className='empty-cart'>
            <h2>Tu carrito esta vacío!</h2>
            <h4>Te invitamos a ver todos nuestros productos 😊</h4>
            <Link className='btn btn-success' to='/'>Ir a comprar! </Link>
            </div>
            :<CartView/>}
    </div>
    )
}

export default Cart