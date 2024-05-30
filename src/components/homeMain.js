import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeDemo } from './homeDemo';
import { auth } from '../firebase/firebase';

import homeImage from '../img/home_main.jpeg';

export function HomeMain(props)
{
    const demoList = props.demoList;
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="home-main container">
            <div className="container-fluid mt-1">
                <div className='word-block'>
                    <p className='main-word'>
                        FIND your most suitable COACH in the easiest way!
                    </p>
                </div>
                <div className="input-group my-3">
                    <span className="input-group-text" id="search-icon">🔍</span>
                    <input type="text" className="form-control" placeholder="Search for what you need here..." aria-label="Search" aria-describedby="search-icon" />
                </div>
                <div>
                    <img className='home-img' src={ homeImage } alt="Picture of the Home Page" />
                </div>
                <div>
                    <div className="text-center">
                        <h2>
                            See some of our coaches
                        </h2>
                    </div>
                    <div className="row">
                        { demoList.map(demo => (
                            <HomeDemo demoData={demo} key={demo.id} />
                        ))}
                        {isAuthenticated ? (<p></p>) : (
                            <p className='demo'>
                            <NavLink className="nav-link text-white nav-col-border" to="/login"> Need More Demo? Please login!</NavLink>
                        </p>)}
                    </div>
                </div>
            </div>
        </div>
    )

}