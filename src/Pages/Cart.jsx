import React, { useEffect } from 'react'
import  './CSS/Cart.css'
import CartItem from '../Components/CartItem/CartItem'
import CheckoutNabar from '../Components/CheckoutNavbar/CheckoutNabar'
    
    const Cart = () => {


        return (
            <div>
                <CheckoutNabar/>
                <CartItem/>
            </div>
        )
    }
    
    export default Cart
    