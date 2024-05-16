import React from 'react';
import { HomeMain } from './homeMain';
import { NavBar } from './navbar';
import { FooterComponent } from './footer';
import demoWhole from '../data/demo.json'

import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

// const EXAMPLE_ITEM = [
//     { "id": "1", "src": "default-profile-pic.jpg", "alt": "Coach Profile Picture", "name": "John Doe", "specialty": "Powerlifting", "price": "$30"},
//     { "id": "1", "src": "default-profile-pic.jpg", "alt": "Coach Profile Picture", "name": "John Doe", "specialty": "Powerlifting", "price": "$30"},
//     { "id": "1", "src": "default-profile-pic.jpg", "alt": "Coach Profile Picture", "name": "John Doe", "specialty": "Powerlifting", "price": "$30"}
// ]


function HomeComponent(props)
{
    return (
        <html>
            <head>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
                <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Bungee+Spice" rel="stylesheet" />
            </head>
            <body className="bg-other">
                <main className="blur-effect">
                    <NavBar />

                    <header id="home-header" className="container-fluid text-white bg-white py-5"> 
                        <div className="container">
                            <h1>Coach Appointment System</h1>
                        </div>
                    </header>

                    <HomeMain demoList={demoWhole} key={demoWhole.id} />

                </main>
            </body>

            <FooterComponent />
        </html>
    )
}

export default HomeComponent;