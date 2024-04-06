import React, { useContext, useState } from 'react'
import './checkout.css'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firabase'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail]=useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartPriceTotal, clear} = useContext(CartContext)

    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name || !user.lastname  || !user.email || !user.documentNumber || !user.phone){
            alert('Los campos son obligatorios')
        }else if (user.email !== validateEmail){
            alert('Los mails deben ser iguales')
        }else if (!/^\d+$/.test(user.documentNumber) || !/^\d+$/.test(user.phone)) {
            alert('El número de documento y el teléfono deben ser números');
        }  else{
            let order ={
                user,
                items: cart,
                total:cartPriceTotal(),
                date:serverTimestamp()
            }
            //Coleccion
            const ventas = collection(db, 'orders')
            //Agrego el doc
            addDoc(ventas,order)
            .then((res)=> {
                //Actualizar el stock
                cart.forEach((item)=>{
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
                    })
                })
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }
    return (
    <div className='checkout-container'>
        {orderId !== '' 
        ?<div>
            <h4>Generaste tu orden!</h4>
            <h5>El id es: {orderId}</h5>
            <Link to ='/'>Volver a Home</Link>
            </div>
            :
            <div>
                <h4>Completa con tus datos</h4>
                <form className='checkout-form' onSubmit={finalizarCompra}>
                    <input name='name' placeholder='Ingrese su nombre' type='text' onChange={userData}/>
                    <input name='lastname' placeholder='Ingrese su apellido' type='text' onChange={userData} />
                    <input name="documentNumber" placeholder="Ingrese su D.N.I" type="text" onChange={userData} />
                    <input name='phone' placeholder='Ingrese su telefono' type='tel' onChange={userData}/>
                    <input name='email' placeholder='Ingrese su correo' type='email' onChange={userData}/>
                    <input name='second-email' placeholder='Repita su correo'type='email' onChange={(e)=> setValidateEmail(e.target.value)}/>
                    <button type='submit'>Enviar</button>
                    </form>
                    </div>}
                    </div>
                    )
                }

export default Checkout