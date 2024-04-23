import React, { createContext, useState } from "react";
import demo from "../Components/Assets/demo";
import CartItem from "../Components/CartItem/CartItem";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    demo.Products.forEach((product, index) => {
        cart[product.id] = 0;
    });
    return cart;
}

const ShopContextProvider = (props) => {  
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [itemAdded, setItemAdded] = useState(false)

    const [size, setSize] = useState('')
    const [addedToCart, setAddedToCart] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        setAddedToCart((prev) => ({ ...prev, [itemId]: true })); 
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            if (prev[itemId] > 1) {
                return {...prev, [itemId]: prev[itemId] - 1 };
            } else {
                const newCart = {...prev};
                delete newCart[itemId];
                return newCart;
            }
        });

        setAddedToCart((prev) => {
            const updatedAddedToCart = { ...prev };
            delete updatedAddedToCart[itemId];
            return updatedAddedToCart;
        });
    };

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        let totalMRP = 0;
        let totalDiscount = 0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = demo.Products.find((product)=>product.id===Number(item));
                totalAmount+=itemInfo.price*cartItems[item];
                totalMRP+=itemInfo.MRP*cartItems[item]
            }   
        }
    
        totalDiscount = totalMRP-totalAmount;
        
        return [totalMRP, totalDiscount, totalAmount  ]
    }

    

    const contextValue = { demo, cartItems, addToCart, removeFromCart, addedToCart, getTotalCartAmount, size, setSize};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;


























// import React, { createContext, useEffect, useState } from "react";
// import demo from "../Components/Assets/demo";


// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     return [];
// }

// const ShopContextProvider = (props) => {  
//     const [cartItems, setCartItems] = useState(getDefaultCart());
//     const [itemAdded, setItemAdded] = useState(false)


//     const [addedToCart, setAddedToCart] = useState({});

    // const addToCart = (itemId, size) => {
    //     setCartItems(prevCartItems => [
    //         ...prevCartItems,
    //         { id: itemId, size: size, quantity: 1 } // Assuming initial quantity is 1
    //     ]);
        // setAddedToCart(prevAddedToCart => ({
        //     ...prevAddedToCart,
        //     [itemId]: true
        // }));
    // };
    
//     const [size, setSize] = useState('')

//     useEffect(() => {
//         console.log("Size:", cartItems[size]);
//     }, [size]);


//     const addtocart = (itemId, ssize) => {
//         setCartItems(prevCartItems => [
//             ...prevCartItems,
//             {id:itemId, Itmsize: ssize, quantity: 1}
//         ]);
//         setAddedToCart(prevAddedToCart => ({
//             ...prevAddedToCart,
//             [itemId]: true
//         }));
//     }
//     useEffect(() => {
//         console.log(cartItems);
//     }, [cartItems]);

//     const removeFromCart = (itemId) => {
//         setCartItems(prev => {
//             if (prev[itemId] > 1) {
//                 return {...prev, [itemId]: prev[itemId] - 1 };
//             } else {
//                 const newCart = {...prev};
//                 delete newCart[itemId];
//                 return newCart;
//             }
//         });

//         setAddedToCart((prev) => {
//             const updatedAddedToCart = { ...prev };
//             delete updatedAddedToCart[itemId];
//             return updatedAddedToCart;
//         });
//     };

//     const getTotalCartAmount = () =>{
//         let totalAmount = 0;
//         let totalMRP = 0;
//         let totalDiscount = 0
//         for(const item in cartItems){
//             if(cartItems[item]>0){
//                 let itemInfo = demo.Products.find((product)=>product.id===Number(item));
//                 totalAmount+=itemInfo.price*cartItems[item];
//                 totalMRP+=itemInfo.MRP*cartItems[item]
//             }   
//         }
    
//         totalDiscount = totalMRP-totalAmount;
        
//         return [totalMRP, totalDiscount, totalAmount  ]
//     }

    

//     const contextValue = { demo, cartItems, addtocart, removeFromCart, addedToCart, getTotalCartAmount, size, setSize};

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// }

// export default ShopContextProvider;
