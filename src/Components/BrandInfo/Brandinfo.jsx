import React from 'react'
import './Brandinfo.css'
import ship from '../Assets/shipping.png'
import payment from '../Assets/card.png'
import contact from '../Assets/contact.png'

const Brandinfo = () => {
    return (
        <div className="homeInfo">
                <div className="info">
                    <img src={ship} alt="" className='infoimg'/>
                    <div className="inforight">
                        <p className='infoTitle'>Free Shipping</p>
                        <p className='infoDesc'>Free shipping for orders above $100</p>
                    </div>
                </div>

                <div className="info">
                <img src={payment} alt="" className='infoimg'/>
                    <div className="inforight">
                        <p className='infoTitle'>Flexible Payment</p>
                        <p className='infoDesc'>Multiple Secure payment options</p>
                    </div>
                </div>

                <div className="info">
                <img src={contact} alt="" className='infoimg'/>
                    <div className="inforight">
                        <p className='infoTitle'>24x7 Support</p>
                        <p className='infoDesc'>Online support available at all times</p>
                    </div>
                </div>

            </div>
    )
}

export default Brandinfo
