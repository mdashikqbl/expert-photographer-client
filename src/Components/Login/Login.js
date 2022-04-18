import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import google from '../../google.svg'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }
    if (user) {
        navigate('/');
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleSubmit} >
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input ref={emailRef} type="email" name="Email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input ref={passwordRef} type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='link-style'>
                    don't have a Account? . <Link className='form-link' to='/signup'>Create New Account</Link> . Forget Password
                </p>
                <div className='or-style'>
                    <div className='first'></div>
                    <div className='or' >or</div>
                    <div className='last'></div>
                </div>
                {errorElement}
                <div className='google-btn1'>
                    <button onClick={() => signInWithGoogle()} className='google-btn' > <img src={google} alt="" /><h4>Continue with Google</h4></button>
                </div>

            </div>
        </div>
    );
};

export default Login;