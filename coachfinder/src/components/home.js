import React from 'react';
import { homeMain } from './homeMain';
import { navbar } from './navbar';
import { footer } from './footer';
import demoWhole from '../data/demo.json'


import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';


function home(props)
{
    return (
        <div>
            <body id="home-body" class="bg-other">
                <main class="blur-effect">
                    <navbar />

                    <header id="home-header" class="container-fluid text-white bg-white py-5"> 
                        <div class="container">
                            <h1>Coach Appointment System</h1>
                        </div>
                    </header>

                    <homeMain demoList={demoWhole} />
                </main>
            </body>

            <footer />
        </div>
    )
}

export default home;