import React, { useContext } from 'react'
import './CSS/ProductListing.css'
import { ShopContext } from '../Context/ShopContext'
import list from '../Components/Assets/list.png'
import Item from '../Components/Item/Item'

const ProductListing = (props) => {

    const {demo} = useContext(ShopContext);
    
    return (
        <div>
            <div className="infobanner">
                <img src={props.banner} className="infobannerimg" alt="" />
                <div className='infobannerContent'>
                    <p className='infoBnrTitle'>Womens</p>
                    <p className='infoBnrBreadcrumb'>Home / {props.category}</p>
                </div>
            </div>

            <div className="productlisting">
                <div className="leftfilter">
                    <div className="lfdiv1">
                        <div className="lfdiv1left">
                            <img src={list} alt="" className='filtericon'/>
                            <p className='lfdiv1txt'>FILTERS</p>    
                        </div>
                        <div className="lfdiv1right">
                            <p className="reset">Reset all</p>
                        </div>
                        
                    </div>

                    <hr className="leftfilterhr"/>
            
                    <div className="checklist">
                        <p className='filtertitle'>CATEGORIES</p>

                        <div className="filteremts">
                            <label className='filterElements'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>Tops
                            </label>
                        </div>                 
                        <div className="filteremts">
                            <label className='filterElements'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>Dressess
                            </label>
                        </div>                 
                        <div className="filteremts">
                            <label className='filterElements'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>Trousers
                            </label>
                        </div>                 
                        <div className="filteremts">
                            <label className='filterElements'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>Ethnic wear
                            </label>
                        </div>                 
                        <div className="filteremts">
                            <label className='filterElements'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>Personal care
                            </label>
                        </div>                 
                    </div>

                    <hr className="leftfilterhr"/>

                    <div className="checklist">
                        <p className='filtertitle'>PRICE RANGE</p>

                        <div className="filteremts">
                            <label className='filterElements'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>Rs. 199 to Rs.499
                            </label>
                        </div>         
                        <div className="filteremts">
                            <label className='filterElements'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>Rs. 500 to Rs.999
                            </label>
                        </div>         
                        <div className="filteremts">
                            <label className='filterElements'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>Rs. 1000 to Rs.1499
                            </label>
                        </div>         
                        <div className="filteremts">
                            <label className='filterElements'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>Rs. 1500 to Rs.1999
                            </label>
                        </div>         
                        <div className="filteremts">
                            <label className='filterElements'>
                                <input type='checkbox'/>
                                <span className='checkmark'></span>Rs. 2000 and above
                            </label>
                        </div>         
                    
                    </div>

                    <hr className="leftfilterhr"/>               
                
                </div>

                <div className="prdctlistingright">
                    {demo.Products.map((item,i)=>{
                    if (props.category===item.type){
                        return(
                            
                                <Item key={i} id={item.id} img={item.img} title={item.title} brand={item.brand} price={item.price} MRP={item.MRP} discount={item.discount} />     
                        )    
                    }else{
                        return null;
                    }
                    })}
                </div>
            </div>
        
        </div>
    )
}

export default ProductListing
