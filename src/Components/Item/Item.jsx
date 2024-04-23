import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div>
            
            <div className='item'>
            <Link to ={`/Product_details/${props.id}`}><img src={props.img} alt={props.title} className='prdctimg'/></Link>
                <p className='prdctitle'>{(props.title.length>22?props.title.substring(0,22)+'...':props.title)}</p>    
                <p className='prdctBrandname'><span className='prdctBrand'>Brand:&nbsp;</span>{props.brand.toUpperCase()}</p>
                <div className="pricesection">
                    <p className='prdctprice'>Rs {props.price}</p>
                    <p className="prdcmrp">Rs {props.MRP}</p>
                    <p className="prdcdiscount">({props.discount}%OFF)</p>
                </div>
            </div>
            
        
        
        </div>
    )
}

export default Item
