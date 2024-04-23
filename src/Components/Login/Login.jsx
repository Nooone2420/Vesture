import React from 'react'
import './Login.css'
import loginbg from '../Assets/loginbg.jpg'
import loginimg from '../Assets/loginimg.jpg'


const Login = () => {
    return (
        <div className='logindivmain'>
            <img src={loginbg} alt="" className='loginbg'/>
            <div className="logindivcontainer">
                <div className="logindiv">
                    <div className="loginleftdiv">
                        <p className="lgnTitle">Welcome to India's largest Online Fashion Store</p>
                        <p className="lgnDescription">Please login to your account</p>

                        <div className="input">
                            <label htmlFor="" className="lgnInputLabel">Email ID</label><br/>
                            <input type="text" className="lgnInput" placeholder='Enter your email id' /><br/>
                            
                            <label htmlFor="" className="lgnInputLabel">Password</label><br/>
                            <input type="password"  className="lgnInput" placeholder='Enter your password' /><br/>
                        </div>
                        

                        <button className="lgnButton">Login</button>
                    </div>

                    <div className="loginrightdiv">
                        <img src={loginimg} alt="loginimg" className="lgnImage"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
