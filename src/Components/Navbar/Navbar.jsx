import React, { useContext, useState } from 'react';
import './Navbar.css';
import bag from '../Assets/bag.png'
import bagB from '../Assets/bag_br.png'
import heart from '../Assets/heart.png';
import heartB from '../Assets/heart_br.png';
import profile from '../Assets/profile.png';
import profileB from '../Assets/profile_br.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = ({ isVisible }) => {

    const {cartItems} = useContext(ShopContext)

    const totalItemsInCart = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);


    const [menu, setMenu] = useState('Home');       
    const [icon, setIcon] = useState('')

    const handleMenuChange = (newMenu) => () => {
        setMenu(newMenu);
    };

    const MouseEnt =(iconb) =>()=>{
        setIcon(iconb)
    }

    const MouseLv =(iconb) =>()=>{
        setIcon(iconb)
    }

    

    return (
        <div className='navbardiv' style={{ display: isVisible ? 'flex' : 'none' }}>
            <Link to='/' style={{ textDecoration: "none" }}>
                <p className='logo'>Vesture</p>
            </Link>

            <div className="navCategories">
                <Link to="/" className={`navcats ${menu === "Home" ? 'activeLink' : ''}`} onClick={handleMenuChange("Home")}>
                  <p className='navcatsP'>Home  <hr className={`navhr ${menu === "Home" ? 'navhractive' : ''}`}/></p>    
                </Link>
                <Link to="Shop" className={`navcats ${menu === "Shop" ? 'activeLink' : ''}`} onClick={handleMenuChange("Shop")}>
                    <p className='navcatsP'>Shop<hr className={`navhr ${menu === "Shop" ? 'navhractive' : ''}`}/></p>
                </Link>
                <Link to="Womens" className={`navcats ${menu === "Womens" ? 'activeLink' : ''}`} onClick={handleMenuChange("Womens")}>
                    <p className='navcatsP'>Womens<hr className={`navhr ${menu === "Womens" ? 'navhractive' : ''}`}/></p>
                </Link>
                <Link to="Mens" className={`navcats ${menu === "Mens" ? 'activeLink' : ''}`} onClick={handleMenuChange("Mens")}>
                    <p className='navcatsP'>Mens<hr className={`navhr ${menu === "Mens" ? 'navhractive' : ''}`}/></p>
                </Link>
                <Link to="Kids" className={`navcats ${menu === "Kids" ? 'activeLink' : ''}`} onClick={handleMenuChange("Kids")}>
                    <p className='navcatsP'>Kids<hr className={`navhr ${menu === "Kids" ? 'navhractive' : ''}`}/></p>
                </Link>
                <Link to="AboutUs" className={`navcats ${menu === "About" ? 'activeLink' : ''}`} onClick={handleMenuChange("About")}>
                    <p className='navcatsP'>About Us<hr className={`navhr ${menu === "About" ? 'navhractive' : ''}`}/></p>
                </Link>
                <Link to="ContactUs" className={`navcats ${menu === "Contact" ? 'activeLink' : ''}`} onClick={handleMenuChange("Contact")}>
                    <p className='navcatsP'>Contact Us<hr className={`navhr ${menu === "Contact" ? 'navhractive' : ''}`}/></p>
                </Link>
            </div>

            <div className="nvbtns">
                <button className='navbtn'>
                    <Link to='Cart' style={{ textDecoration: 'none' }}>
                        <div className="cartdiv" onMouseEnter={MouseEnt("bag")} 
                            onMouseLeave={MouseLv("black")}>
                            <img src={icon==="bag"?bagB:bag} alt="" className='navbtnimg' id="cartimg" 
                            />
                            <p className={`navbtntxt ${icon === "bag" ? 'activenavbtn' : ''}`} >Bag</p>
                        </div>
                        <div className="circle"><p className='cartvalue'>{totalItemsInCart}</p></div>
                    </Link>
                </button>
                <button className='navbtn'>
                    <Link to='Wishlist' style={{ textDecoration: 'none' }} onMouseEnter={MouseEnt("heart")} 
                        onMouseLeave={MouseLv("black")}>
                        <img src={icon==="heart"?heartB:heart} alt="" 
                        className='navbtnimg' /><p className={`navbtntxt ${icon === "heart" ? 'activenavbtn' : ''}`}>Wishlist</p>
                    </Link>
                </button>
                <button className='navbtn'>
                    <Link to='Login' style={{ textDecoration: 'none' }}>
                        <img src={icon==="profile"?profileB:profile} alt="" className='navbtnimg' 
                        onMouseEnter={MouseEnt("profile")} 
                        onMouseLeave={MouseLv("black")}/><p className={`navbtntxt ${icon === "profile" ? 'activenavbtn' : ''}`}>Profile</p>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
