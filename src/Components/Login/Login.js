import React, { useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css'
import google from '../../google.svg'
import auth from '../../firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, loading] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    const emailRef = useRef('')
    const passwordRef = useRef('')


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');

    }

    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error:{error.message}</p>
        </div>

    }

    if (user) {
        navigate(from, { replace: true });
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
                        <ToastContainer />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='link-style'>
                    don't have a Account? . <Link className='form-link' to='/signup'>Create New Account</Link> . <p className='resetpass' onClick={resetPassword}>Forget Password</p>

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