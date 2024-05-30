import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { SearchMain } from './searchMain';
import { NavBar } from './navbar';
import { FooterComponent } from './footer';
import cardWhole from '../data/card.json'

function SearchComponent(props)
{
    return (
        <html>
            <head>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
                <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Bungee+Spice" rel="stylesheet" />
            </head>
            <body className="bg-other">
                <main className=" blur-effect">
                    <NavBar />
                    <SearchMain mainCard={cardWhole} key={cardWhole.id} />
                </main>
            </body>
            <FooterComponent />
        </html>
    )
}

export default SearchComponent;