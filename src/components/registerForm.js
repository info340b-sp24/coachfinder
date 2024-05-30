// registerForm.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.js';
import { NavLink, useNavigate } from 'react-router-dom';

export function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
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

    const validatePasswords = (password1, password2) => {
        if (!password1 || !password2) {
            setPasswordFeedback("Both password fields are required");
            return false;
        } else if (password1.length < 8 || password2.length < 8) {
            setPasswordFeedback("Passwords must be at least 8 characters long");
            return false;
        } else if (password1 !== password2) {
            setPasswordFeedback("Passwords do not match");
            return false;
        } else {
            setPasswordFeedback("Passwords match and are valid");
            return true;
        }
    };

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setEmailValid(validateEmail(val));
    };

    const handlePassword1Change = (e) => {
        const val = e.target.value;
        setPassword1(val);
        setPasswordsMatch(validatePasswords(val, password2));
    };

    const handlePassword2Change = (e) => {
        const val = e.target.value;
        setPassword2(val);
        setPasswordsMatch(validatePasswords(password1, val));
    };

    const checkSubmit = (event) => {
        event.preventDefault();
        if (emailValid && passwordsMatch) {
            createUserWithEmailAndPassword(auth, email, password1)
                .then((userCredential) => {
                    console.log('User registered:', userCredential.user);
                    alert("register successful");
                    navigate("login /");
                })
                .catch((error) => {
                    console.error('Error registering:', error);
                    setError(error.message);
                });
        } else {
            console.log('Invalid input');
        }
    };

    return (
        <section className="register">
            <form className="container" onSubmit={checkSubmit}>
                <div className="container-fluid pb-1 mt-5 mb-5 register-div">
                    <h1 className="fw-bold">Register</h1>
                    <div className="mb-3">
                        <label htmlFor="Useremail" className="form-label lead">Email:</label>
                        <input
                            className={`form-control ${emailValid ? 'is-valid' : 'is-invalid'}`}
                            type="email"
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
                        <label htmlFor="Userpassword-1" className="form-label lead">Password:</label>
                        <input
                            className={`form-control ${passwordsMatch ? 'is-valid' : 'is-invalid'}`}
                            type="password"
                            id="Userpassword-1"
                            name="Userpassword-1"
                            required
                            minLength={8}
                            value={password1}
                            onChange={handlePassword1Change}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Userpassword-2" className="form-label lead">Confirm Password:</label>
                        <input
                            className={`form-control ${passwordsMatch ? 'is-valid' : 'is-invalid'}`}
                            type="password"
                            id="Userpassword-2"
                            name="Userpassword-2"
                            required
                            minLength={8}
                            value={password2}
                            onChange={handlePassword2Change}
                        />
                        <div className={`${passwordsMatch ? 'valid-feedback' : 'invalid-feedback'}`}>
                            {passwordFeedback}
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <button
                            className="w-50 btn btn-lg btn-primary btn-orange"
                            type="submit"
                            disabled={!emailValid || !passwordsMatch}
                        >
                            Confirm
                        </button>
                    </div>
                    {error && <p className="text-danger mt-3">{error}</p>}
                    <div className="mt-3 mb-0 text-center">
                        <p>Already have an account? <a href="login.js" className="text-start text-lightorange">Back to Login</a></p>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default RegisterForm;
