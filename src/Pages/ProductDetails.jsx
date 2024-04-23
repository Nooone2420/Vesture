import React, { useContext } from 'react'
import './CSS/ProductDetails.css'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const ProductDetails = () => {

    const {demo} = useContext(ShopContext);
    const {productId} = useParams();
    const product = demo.Products.find(product => product.id === Number(productId));

    return (
        <div>
            <ProductDisplay product={product}/>
        </div>
    )
}

export default ProductDetails
