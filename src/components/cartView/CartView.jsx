import React, { useContext } from 'react'
import './CartView.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, removeItem, cartPriceTotal, clear}= useContext(CartContext)
    return (
<div className="shopping-cart">
    <h2>Tu carrito</h2>
    <div className="cart-items">
        {cart.map((compra) => {
            return (
            <div key={compra.id} className="cart-item">
                <img src={compra.imagen} alt={compra.name} className="cart-item-img" />
                <span className="cart-item-name">{compra.name}</span>
                <span className="cart-item-quantity">Cantidad {compra.quantity}</span>
                <span className="cart-item-price">${compra.price},00</span>
                <span className="cart-item-total">Precio final: ${compra.price * compra.quantity},00</span>
                <button className="btn btn-danger cart-item-remove-button" onClick={() => removeItem(compra.id)}>X</button>
                </div>
                );
                })}
                </div>
<p className="cart-total">Total a pagar: ${cartPriceTotal()},00</p>
<div className="checkout-buttons">
    <button className="btn btn-danger checkout-button-empty" onClick={clear}>Vaciar carrito</button>
    <Link className="btn btn-success checkout-button-proceed" to="/checkout">Finalizar Compra</Link>
    </div>
    </div>
    )
}

export default CartView  