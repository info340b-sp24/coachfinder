// loginForm.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.js';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [emailFeedback, setEmailFeedback] = useState('');
    const [passwordFeedback, setPasswordFeedback] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate(); 

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

    const checkSubmit = (e) => {
        e.preventDefault();
        if (emailValid && passwordValid) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log('User signed in:', userCredential.user);
                    alert("login successful");
                    navigate("/home");
                })
                .catch((error) => {
                    alert("login unsuccessful: please try another account and password!");
                    console.error('Error signing in:', error);
                    setError(error.message);
                    // Clear user input
                    setEmail('');
                    setPassword('');
                    setEmailValid(false);
                    setPasswordValid(false);
                    setEmailFeedback('');
                    setPasswordFeedback('');
                });
        } else {
            console.log('Invalid input');
        }
    };

    return (
        <section className='login'>
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
                    {error && <p className="text-danger mt-3">{error}</p>}
                </div>
            </form>
        </section>
    );
}

export default LoginForm;
