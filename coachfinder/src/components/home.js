import React from 'react';
import { HomeMain } from './homeMain';
import { NavBar } from './navbar';
import { FooterComponent } from './footer';
import demoWhole from '../data/demo.json'
import { useAuth } from '../contexts/authContext';

import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

function HomeComponent(props)
{
    const { currentUser } = useAuth()
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

                    <header className="home-header container-fluid text-white bg-white py-5"> 
                        <div className="container">
                            <h1>Coach Appointment System For {currentUser.email}</h1>
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