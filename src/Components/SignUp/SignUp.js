import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../google.svg'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSignUp = event => {
        event.preventDefault();
        const Name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password)
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
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleSignUp} >
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input ref={nameRef} type="input" name="name" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input ref={emailRef} type="email" name="Email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input ref={passwordRef} type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Already have a  Account? . <Link
                        className='form-link' to='/login'>Login</Link>
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

export default SignUp;