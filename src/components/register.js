import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './navbar';
import { RegisterForm } from './registerForm';
import { RegisterLoginFooter } from './registerLoginFooter';

function RegisterComponent(props) {
    return (
    <html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Bungee+Spice" rel="stylesheet" />
    </head>

    <body className="register-body">
        <main>
           
        <NavBar />
        <RegisterForm />

        </main>
        </body>
    <RegisterLoginFooter />
    </html>
    );
}

    export default RegisterComponent;