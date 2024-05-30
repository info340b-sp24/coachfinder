import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';

export function LoginForm() {
    const { userLoggedIn } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [emailFeedback, setEmailFeedback] = useState('');
    const [passwordFeedback, setPasswordFeedback] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email) {
            setEmailFeedback("Email is required");
            return false;
        } else if (!emailRegex.test(email)) {
            setEmailFeedback("Please enter a valid email address");
            return false;
        } else {
            setEmailFeedback("Email looks good!");
            return true;
        }
    };

    const validatePassword = (password) => {
        const minLength = 8;
        if (!password) {
            setPasswordFeedback("Password is required");
            return false;
        } else if (password.length < minLength) {
            setPasswordFeedback(`Password must be at least ${minLength} characters long`);
            return false;
        } else if (!/\d/.test(password)) {
            setPasswordFeedback("Password must include at least one number");
            return false;
        } else if (!/[A-Z]/.test(password)) {
            setPasswordFeedback("Password must include at least one uppercase letter");
            return false;
        } else {
            setPasswordFeedback("Password is strong");
            return true;
        }
    };

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setEmailValid(validateEmail(val));
    };

    const handlePasswordChange = (e) => {
        const val = e.target.value;
        setPassword(val);
        setPasswordValid(validatePassword(val));
    };

    const checkSubmit = async (e) => {
        e.preventDefault();
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }

    return (
        <section className='login'>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
        <form onSubmit={checkSubmit} noValidate className="form container">
            <div className="container-fluid pb-1 mt-5 mb-5 login-div">
                <h1 className="fw-bold">System Login</h1>
                <div className="mb-3">
                    <label htmlFor="Useremail" className="form-label lead">Email:</label>
                    <input
                        type="email"
                        className={`form-control ${emailValid ? 'is-valid' : 'is-invalid'}`}
                        id="Useremail"
                        name="Useremail"
                        placeholder="xx@xx.com"
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <div className={`${emailValid ? 'valid-feedback' : 'invalid-feedback'}`}>
                        {emailFeedback}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="Userpassword" className="form-label lead">Password:</label>
                    <input
                        type="password"
                        className={`form-control ${passwordValid ? 'is-valid' : 'is-invalid'}`}
                        id="Userpassword"
                        name="Userpassword"
                        required
                        minLength={8}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div className={`${passwordValid ? 'valid-feedback' : 'invalid-feedback'}`}>
                        {passwordFeedback}
                    </div>
                </div>
                <div className="text-center mt-5">
                    <button
                        className="w-50 btn btn-lg btn-primary btn-orange"
                        type="submit"
                        disabled={!emailValid || !passwordValid} 
                    >
                        Log in
                    </button>
                </div>
                <div className="mt-3 mb-0 text-center">
                    <p>Don't have an account? <NavLink to="/register" className="text-start text-lightorange">Register</NavLink></p>
                </div>
            </div>
        </form>
        </section>
    );
}
}

export default LoginForm;
