import React, { useContext, useEffect, useState } from 'react'
import './ProductDisplay.css'
import staricon from '../Assets/star.png'
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const ItemControl = ({ itemId, addedToCart, onAdd }) => {
    const handleClick = () => {
        if (!addedToCart[itemId]) {
            onAdd(itemId);
            console.log(onAdd)
        }
    };

    return (
        <div className='addtocartdiv'>
            {addedToCart[itemId] ? (
                <Link style={{textDecoration:'none'}} to="/Cart" ><button className='addtobag'>Go to Bag</button></Link>
            ) : (
                <button className='addtobag' onClick={handleClick}>Add to Cart</button>
            )}
        </div>

        
    );
};







const ProductDisplay = ({ product }) => {

    const { cartItems,addToCart, removeFromCart,addedToCart, size, setSize} = useContext(ShopContext);

    useEffect(() => {
        setSize(product.size[0]);
    }, [product.size, setSize]);

    const handleSizeChange = (newSize) => {
        setSize(prevSize => newSize); 
        console.log("Selected size:", newSize);
    };

    return (
        <div className='productdetails'>
            <div className="pdleft">
                <div className="carouselimg">
                    {product.images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index}`} className='pdcarimg'/>
                    ))}
                </div>
                <img src={product.img} alt="" className='pdmainimg'/>    
            </div>
            

            <div className="pdright">
                <p className="pdbrand">Brand: <span className='pdbrandname'>{product.brand}</span></p>
                <p className="pdtitle">{product.title}</p>
                
                <div className="rating">
                    <img src={staricon} className="star" alt="" />
                    <p className='starrating'>{product.rating}</p>
                    <div className="veritcalline"></div>
                    <p className="ratingT">{product.ratingT} rating</p>
                </div>

                <hr className='pdhrline'/>

                <p className="pddesc">Discover the perfect blend of style and functionality with the {product.title}, by the trendiest brand in the market, {product.brand}, crafted from eco-friendly, water-resistant materials for durability and comfort.</p>

                <div className="pdprice">
                    <p className="pdmainprice">Rs {product.price}</p>
                    <p className='pdmrp'>Rs {product.MRP}</p>
                    <p className="pddiscount">({product.discount}%OFF)</p>
                </div>

                <p className="taxes">(Inclusive of all taxes)</p>
                <p className='sizeselect'>SELECT SIZE</p>

                {
                    product.size.map((sizeOption, index) => (
                        <button 
                            className={`sizebutton ${size === sizeOption ? 'active' : ''}`} 
                            key={index} 
                            onClick={() => handleSizeChange(sizeOption)}
                        >
                            {sizeOption}
                        </button>
                    ))
                }

                <p className="sizeguide">View size guide</p>

                <div className="purchasebuttondiv">
                    <div className="addtocartdiv">
                    <ItemControl
                    itemId={product.id}
                    addedToCart={addedToCart}
                    onAdd={(itemId, size) => addToCart(itemId, size)}
/>
                    </div>
                    
                    <button className='wishlist'>Wishlist</button>
                </div>

      
            
        </div>

        </div>
        
     
    )
}


export default ProductDisplay































// import React, { useContext, useEffect, useState } from 'react'
// import './ProductDisplay.css'
// import staricon from '../Assets/star.png'
// import { ShopContext } from '../../Context/ShopContext';
// import { Link } from 'react-router-dom';

// const ItemControl = ({ itemId, addedToCart, onAdd }) => {
//     const handleClick = () => {
//         if (!addedToCart[itemId]) {
//             onAdd(itemId);
//             console.log(onAdd)
//         }
//     };

//     return (
//         <div className='addtocartdiv'>
//             {addedToCart[itemId] ? (
//                 <Link style={{textDecoration:'none'}} to="/Cart" ><button className='addtobag'>Go to Bag</button></Link>
//             ) : (
//                 <button className='addtobag' onClick={handleClick}>Add to Cart</button>
//             )}
//         </div>

        
//     );
// };







// const ProductDisplay = ({ product }) => {

//     const { cartItems, addtocart, removeFromCart,addedToCart, size, setSize} = useContext(ShopContext);

//     useEffect(() => {
//         setSize(product.size[0]);
//     }, [product.size, setSize]);

//     const handleSizeChange = (newSize) => {
//         setSize(prevSize => newSize); 
//         console.log("Selected size:", newSize);
//     };

    

    
//     useEffect(() => {
//         const sizeButtons = document.querySelectorAll('.sizebutton');
//         sizeButtons.forEach(button => {
//             const buttonSize = button.textContent;
//             button.classList.toggle('active', buttonSize === size);
//         });
//     }, [size]);


//     return (
//         <div className='productdetails'>
//             <div className="pdleft">
//                 <div className="carouselimg">
//                     {product.images.map((image, index) => (
//                         <img key={index} src={image} alt={`Image ${index}`} className='pdcarimg'/>
//                     ))}
//                 </div>
//                 <img src={product.img} alt="" className='pdmainimg'/>    
//             </div>
            

//             <div className="pdright">
//                 <p className="pdbrand">Brand: <span className='pdbrandname'>{product.brand}</span></p>
//                 <p className="pdtitle">{product.title}</p>
                
//                 <div className="rating">
//                     <img src={staricon} className="star" alt="" />
//                     <p className='starrating'>{product.rating}</p>
//                     <div className="veritcalline"></div>
//                     <p className="ratingT">{product.ratingT} rating</p>
//                 </div>

//                 <hr className='pdhrline'/>

//                 <p className="pddesc">Discover the perfect blend of style and functionality with the {product.title}, by the trendiest brand in the market, {product.brand}, crafted from eco-friendly, water-resistant materials for durability and comfort.</p>

//                 <div className="pdprice">
//                     <p className="pdmainprice">Rs {product.price}</p>
//                     <p className='pdmrp'>Rs {product.MRP}</p>
//                     <p className="pddiscount">({product.discount}%OFF)</p>
//                 </div>

//                 <p className="taxes">(Inclusive of all taxes)</p>
//                 <p className='sizeselect'>SELECT SIZE</p>
                
//                 {
//                     product.size.map((sizeOption, index) => (
//                         <button 
//                             className={`sizebutton ${size === sizeOption ? 'active' : ''}`} 
//                             key={index} 
//                             onClick={() => handleSizeChange(sizeOption)}
//                         >
//                             {sizeOption}
//                         </button>
//                     ))
//                 }

//                 <p className="sizeguide">View size guide</p>

//                 <div className="purchasebuttondiv">
//                     <div className="addtocartdiv">
//                     <ItemControl
//                     itemId={product.id}
//                     addedToCart={addedToCart}
//                     onAdd={(itemId, size) => addtocart(product.id, size)}
// />
//                     </div>
                    
//                     <button className='wishlist'>Wishlist</button>
//                 </div>

      
            
//         </div>

//         </div>
        
     
//     )               
// }


// export default ProductDisplay



