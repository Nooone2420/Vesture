import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Login from './Components/Login/Login';
import ProductListing from './Pages/ProductListing';
import listingBg from './Components/Assets/listing_bg.jpg'
import { useEffect, useState } from 'react';

function App() {

   const location = useLocation();
   const [isNavbarVisible, setNavbarVisible] = useState(true);

   useEffect(() => {
      if (location.pathname === '/Cart') {
      setNavbarVisible(false);
      } else {
      setNavbarVisible(true);
      }
   }, [location]);



   return (
      <>
      <Navbar isVisible={isNavbarVisible} />


      
      <Routes>
         <Route path = "/" element={<Home/>}/>
         <Route path = "/Shop" element={<Shop/>}/>
         <Route path = "/Mens" element={<ProductListing banner={listingBg} category="Men"/>}/>
         <Route path = "/Kids" element={<ProductListing banner={listingBg} category="Kids"/>}/>
         <Route path = "/Womens" element={<ProductListing banner={listingBg} category="Women"/>}/>
         <Route path = "/AboutUs" element={<Aboutus/>}/>
         <Route path = "/ContactUs" element={<Contactus/>}/>
         <Route path = "/Product_details" element={<ProductDetails/>}>
            <Route path = ':productId' element={<ProductDetails/>}/>
         </Route>
         <Route path = "/Cart" element={<Cart/>}/>
         <Route path = "/Wishlist" element={<Wishlist/>}/>
         <Route path = "/Login" element={<Login/>}/>
      </Routes>
      </>
   );
}

export default App;
