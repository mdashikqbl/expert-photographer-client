import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import google from '../../google.svg'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form >
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="Email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    don't have a Account? . <Link className='form-link' to='/signup'>Create New Account</Link> . Forget Password
                </p>
                <div className='or-style'>
                    <div className='first'></div>
                    <div className='or' >or</div>
                    <div className='last'></div>
                </div>
                <div className='google-btn1'>
                    <button className='google-btn' > <img src={google} alt="" /><h4>Continue with Google</h4></button>
                </div>

            </div>
        </div>
    );
};

export default Login;