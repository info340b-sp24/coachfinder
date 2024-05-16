import React from 'react';

export function RegisterForm(props) {
    const checkSubmit = (event) => {
        event.preventDefault();
        
    };

    return (
        <section className="register">
        <form className="container">
            <div className="container-fluid pb-1 mt-5 mb-5 register-div">
            <h1 className="fw-bold">Register</h1>
            <div className="mb-3">
                <label htmlFor="Useremail" className="form-label lead">Email:</label>
                <input className="form-control" type="email" id="Useremail" name="Useremail" placeholder="xx@xx.com" required />
                <div className="invalid-feedback">Please enter a valid email</div>
            </div>
            <div className="mb-3">
                <label htmlFor="Userpassword" className="form-label lead">Password:</label>
                <input className="form-control" type="password" id="Userpassword-1" name="Userpassword-1" required minLength={8}/>
                <div className="invalid-feedback">Password must be at least 8 characters</div>
            </div>
            <div className="mb-3">
                <label htmlFor="Userpassword" className="form-label lead">Password:</label>
                <input className="form-control" type="password" id="Userpassword-2" name="Userpassword-2" required minLength={8}/>
                <div className="invalid-feedback">Password must be at least 8 characters</div>
            </div>
            <div className="text-center mt-5">
                <button className="w-50 btn btn-lg btn-primary btn-orange" type="submit">Confirm</button>
            </div>
            <div className="mt-3 mb-0 text-center">
                <p>Already have an account?  <a href="register.js" className="text-start text-lightorange">Back to Login</a></p>
            </div>
            </div>
        </form>
      </section>
    )
}