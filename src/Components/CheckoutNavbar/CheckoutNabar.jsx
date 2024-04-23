import React from 'react'
import { Link } from 'react-router-dom'
import './CheckoutNabar.css'

const CheckoutNabar = () => {
    return (
        <div className='checkoutnav'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <p className='logo'>Vesture</p>
            </Link>

            <div className="checkoutprogress">
                <div className="progressdiv">
                    <div className="progresscircle">1</div>
                    <p className="progresstitle">Bag</p>
                </div>
                <hr className="progressline" />
                <div className="progressdiv">
                    <div className="progresscircle">2</div>
                    <p className="progresstitle">Address</p>
                </div>
                <hr className="progressline" />
                <div className="progressdiv">
                    <div className="progresscircle">3</div>
                    <p className="progresstitle">Payment</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutNabar
