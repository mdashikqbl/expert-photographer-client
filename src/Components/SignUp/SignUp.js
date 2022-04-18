import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../google.svg'
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
                <form >
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="Email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" id="" />
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