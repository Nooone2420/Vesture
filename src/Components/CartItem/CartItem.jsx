import React, { useContext, useState } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import dropdown from '../Assets/dropdown_icon.png';
import delet from '../Assets/delete.png';
import heart from '../Assets/heart.png';
import safety from '../Assets/safety.png';

const CartItem = () => {
    const { demo, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    const [showPopup, setShowPopup] = useState(false);
    const [renderid, setRenderid] = useState('')

    const [selectedSizes, setSelectedSizes] = useState(['S']);
    const [selectedQty, setSelectedQty] = useState(1);

    const[ppactive, setPpactive] = useState(false)

    const renderProduct = demo.Products.filter((item)=>item.id===renderid)
    console.log(renderProduct)
    
    const cartvalues = getTotalCartAmount();
    const carttotal = cartvalues[2] + 29 + 40;
    const totalPrdctPrice = renderProduct.map((item)=>item.price) * selectedQty

    const togglePopup = () => {
        setShowPopup(!showPopup); 
    };

    const displaySizeQty = (id) => {
        setRenderid(id)
        togglePopup();
    };

    const updateSize = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter((item) => item !== size));
            setPpactive(true)
        } else {
            setSelectedSizes(size);
        }
    }; 

    const updateQuantity = (quantity) => {
        setSelectedQty(quantity);
    };

    const handleDone = () => {
        togglePopup();
    };


    return (
        <div>
            <p className="title">My Bag</p>
            <div className="cart">
                <div className="left">
                    {demo.Products.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <div className='cartitem'>
                                    <img src={e.img} alt="" className='cartimg'/>
                                    <div className="cartitem2">
                                        <p className="carttitle">{e.title}</p>
                                        <p className="brand">Brand: <span className='brandname'>{e.brand}</span></p>
                                        <p className="pricediv">
                                            <p className="price">Rs {totalPrdctPrice}</p>
                                            <p className="mrp">Rs {e.MRP}</p>
                                            <p className="discount">({e.discount}%OFF)</p>
                                        </p>
                                        <div className="buttondiv">
                                            <div className="btndiv" onClick={() => displaySizeQty(e.id)}>
                                                <div className="left">
                                                    <p className="btntxt">Size</p>
                                                    <p className="btnqty">{selectedSizes}</p>
                                                </div>
                                                <img src={dropdown} alt="" className='dropdownicon' />
                                            </div>
                                           
                                            <div className="btndiv" onClick={() => displaySizeQty(e.id)}>
                                                <div className="left">
                                                    <p className="btntxt">Qty</p>
                                                    <p className="btnqty">{selectedQty}</p>
                                                </div>
                                                <img src={dropdown} alt="" className='dropdownicon' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cartitem3">
                                        <button className='icon'><img src={heart} alt="" className='delwishicon'/></button>
                                        <button className='icon' id ="remove" onClick={() => removeFromCart(e.id)}><img src={delet} alt="" className='delwishicon'/></button>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>

                <div className="right">
                    <div className="safety">
                        <img src={safety} alt=""/>
                        <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
                    </div>
                    <div className="cartsummary">
                        <div className="cs">
                            <p className="csdesc">Bag Total :</p>
                            <p className="csvalue">Rs {cartvalues[0]}</p>
                        </div>
                        <div className="cs">
                            <p className="csdesc">Product Discount :</p>
                            <p className="csvalue">Rs {cartvalues[1]}</p>
                        </div>
                        <div className="cs">
                            <p className="csdesc">Bag Subtotal :</p>
                            <p className="csvalue">Rs {cartvalues[2]}</p>
                        </div>
                        <div className="cs">
                            <p className="csdesc">Processing fee :</p>
                            <p className="csvalue">Rs 29.00</p>
                        </div>
                        <div className="cs">
                            <p className="csdesc">Shipping Charges :</p>
                            <p className="csvalue">Rs 40.00</p>
                        </div>
                        <hr className='csline'/>
                        <div className="carttotal">
                            <div className="carttotalleft">
                                <p className='csttl'>Total :</p>
                                <p className='csttlvl'>{carttotal}</p>
                            </div>
                            <button className='proceed'></button>
                            
                        </div>
                    </div>
                    
                </div>
            </div>

            {showPopup && (
                <div className="popupbg">
                    <div className="popup">
                        <div className="sizediv">
                            <p className="pptitle">Select Size:</p>
                            <div className="ppvalues">
                            {renderProduct.map((product) => (
                                product.size.map((sizeOption) => (
                                    <div
                                        key={`${product.id}-${sizeOption}`}
                                        className={`sizes ${selectedSizes.includes(sizeOption) ? 'selected' : ''}`}
                                        onClick={() => updateSize(sizeOption)}
                                    >
                                        {sizeOption}
                                    </div>
                                ))
                            ))}
                            </div>
                            
                        </div>
                        <div className="qtydiv">
                            <p className="pptitle">Select Quantity:</p>
                            <div className="ppvalues">
                                <div className="sizes" onClick={() => updateQuantity('1')}>
                                    1
                                </div>
                                <div className="sizes" onClick={() => updateQuantity('2')}>
                                    2
                                </div>
                                <div className="sizes" onClick={() => updateQuantity('3')}>
                                    3
                                </div>
                                <div className="sizes" onClick={() => updateQuantity('4')}>
                                    4
                                </div>
                                <div className="sizes" onClick={() => updateQuantity('5')}>
                                    5
                                </div>
                                <div className="sizes" onClick={() => updateQuantity('6')}>
                                    6
                                </div>
                            </div>
                        </div>
                        <div className="popupbtndiv">
                            <button className='ppbtn' onClick={handleDone}>Done</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartItem;






















// import React, { useContext, useState } from 'react';
// import './CartItem.css';
// import { ShopContext } from '../../Context/ShopContext';
// import dropdown from '../Assets/dropdown_icon.png';
// import delet from '../Assets/delete.png';
// import heart from '../Assets/heart.png';
// import safety from '../Assets/safety.png';

// const CartItem = () => {
//     const { demo, cartItems, removeFromCart, getTotalCartAmount, setCartItems } = useContext(ShopContext);

//     const [showPopup, setShowPopup] = useState(false);
//     const [renderid, setRenderid] = useState('')

//     const [selectedSizes, setSelectedSizes] = useState(['S']);
//     const [selectedQty, setSelectedQty] = useState(1);

//     const[ppactive, setPpactive] = useState(false)

//     const renderProduct = demo.Products.filter((item)=>item.id===renderid)
//     console.log(renderProduct)
    
//     const cartvalues = getTotalCartAmount();
//     const carttotal = cartvalues[2] + 29 + 40;
//     const totalPrdctPrice = renderProduct.map((item)=>item.price) * selectedQty

//     const togglePopup = () => {
//         setShowPopup(!showPopup); 
//     };

//     const displaySizeQty = (id) => {
//         setRenderid(id)
//         togglePopup();
//     };

//     const updateSize = (itemId, size) => {
//         setCartItems(prevCartItems => prevCartItems.map(item =>
//             item.id === itemId ? { ...item, size: size } : item
//         ));
//     };

//     const updateQuantity = (itemId, quantity) => {
//         setCartItems(prevCartItems => prevCartItems.map(item =>
//             item.id === itemId ? { ...item, quantity: quantity } : item
//         ));
//     };

//     const handleDone = () => {
//         togglePopup();
//     };

//     const cartItemId = cartItems.filter((item)=>item.id)
//     console.log("jsfkasnf",cartItemId)

//     return (
        // <div>
        //     <p className="title">My Bag</p>
        //     <div className="cart">
        //         <div className="left">
        //             {demo.Products.map((e) => {
        //                 if (cartItems[e.id] > 0) {
        //                     return (
        //                         <div className='cartitem'>
        //                             <img src={e.img} alt="" className='cartimg'/>
        //                             <div className="cartitem2">
        //                                 <p className="carttitle">{e.title}</p>
        //                                 <p className="brand">Brand: <span className='brandname'>{e.brand}</span></p>
        //                                 <p className="pricediv">
        //                                     <p className="price">Rs {totalPrdctPrice}</p>
        //                                     <p className="mrp">Rs {e.MRP}</p>
        //                                     <p className="discount">({e.discount}%OFF)</p>
        //                                 </p>
        //                                 <div className="buttondiv">
        //                                     <div className="btndiv" onClick={() => displaySizeQty(e.id)}>
        //                                         <div className="left">
        //                                             <p className="btntxt">Size</p>
        //                                             <p className="btnqty">{selectedSizes}</p>
        //                                         </div>
        //                                         <img src={dropdown} alt="" className='dropdownicon' />
        //                                     </div>
                                           
        //                                     <div className="btndiv" onClick={() => displaySizeQty(e.id)}>
        //                                         <div className="left">
        //                                             <p className="btntxt">Qty</p>
        //                                             <p className="btnqty">{selectedQty}</p>
        //                                         </div>
        //                                         <img src={dropdown} alt="" className='dropdownicon' />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="cartitem3">
        //                                 <button className='icon'><img src={heart} alt="" className='delwishicon'/></button>
        //                                 <button className='icon' id ="remove" onClick={() => removeFromCart(e.id)}><img src={delet} alt="" className='delwishicon'/></button>
        //                             </div>
        //                         </div>
        //                     );
        //                 } else {
        //                     return null;
        //                 }
        //             })}
        //         </div>

        //         <div className="right">
        //             <div className="safety">
        //                 <img src={safety} alt=""/>
        //                 <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
        //             </div>
        //             <div className="cartsummary">
        //                 <div className="cs">
        //                     <p className="csdesc">Bag Total</p>
        //                     <p className="csvalue">Rs {cartvalues[0]}</p>
        //                 </div>
        //                 <div className="cs">
        //                     <p className="csdesc">Product Discount</p>
        //                     <p className="csvalue">Rs {cartvalues[1]}</p>
        //                 </div>
        //                 <div className="cs">
        //                     <p className="csdesc">Bag Subtotal</p>
        //                     <p className="csvalue">Rs {cartvalues[2]}</p>
        //                 </div>
        //                 <div className="cs">
        //                     <p className="csdesc">Processing fee</p>
        //                     <p className="csvalue">Rs 29.00</p>
        //                 </div>
        //                 <div className="cs">
        //                     <p className="csdesc">Shipping Charges</p>
        //                     <p className="csvalue">Rs 40.00</p>
        //                 </div>
        //             </div>
        //             <p>cart total : {carttotal}</p>
        //         </div>
        //     </div>

        //     {showPopup && (
        //         <div className="popupbg">
        //             <div className="popup">
        //                 <div className="sizediv">
        //                     <p className="pptitle">Select Size:</p>
        //                     <div className="ppvalues">
        //                     {renderProduct.map((product) => (
        //                         product.size.map((sizeOption) => (
        //                             <div
        //                                 key={`${product.id}-${sizeOption}`}
        //                                 className={`sizes ${selectedSizes.includes(sizeOption) ? 'selected' : ''}`}
        //                                 onClick={() => updateSize(sizeOption)}
        //                             >
        //                                 {sizeOption}
        //                             </div>
        //                         ))
        //                     ))}
        //                     </div>
                            
        //                 </div>
        //                 <div className="qtydiv">
        //                     <p className="pptitle">Select Quantity:</p>
        //                     <div className="ppvalues">
        //                         <div className="sizes" onClick={() => updateQuantity('1')}>
        //                             1
        //                         </div>
        //                         <div className="sizes" onClick={() => updateQuantity('2')}>
        //                             2
        //                         </div>
        //                         <div className="sizes" onClick={() => updateQuantity('3')}>
        //                             3
        //                         </div>
        //                         <div className="sizes" onClick={() => updateQuantity('4')}>
        //                             4
        //                         </div>
        //                         <div className="sizes" onClick={() => updateQuantity('5')}>
        //                             5
        //                         </div>
        //                         <div className="sizes" onClick={() => updateQuantity('6')}>
        //                             6
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="popupbtndiv">
        //                     <button className='ppbtn' onClick={handleDone}>Done</button>
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        // </div>

//         <div>
//             {
//                 demo.Products.filter
//             }
//         </div>
//     );
// };

// export default CartItem;


