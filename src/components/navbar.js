import React, { useState, useEffect } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase/firebase';

export function NavBar(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = () => {
        auth.signOut(); 
        alert("You already Logout");
    };


    return (
        <section id="all-nav" className="all-nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-orange nav-border">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-Kaushan mx-3" to="/home">Coach Finder</NavLink>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={toggleNavbar}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <NavLink className="nav-link text-white nav-col-border" to="/search"> Search</NavLink>
                            </li>
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <NavLink className="nav-link text-white nav-col-border" to="/trainee"> Profile</NavLink>
                            </li>
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <NavLink className="nav-link text-white nav-col-border" to="/appointment"> Appointments</NavLink>
                            </li>
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <NavLink className="nav-link text-white nav-col-border" to="/message"> Messages</NavLink>
                            </li>
                            {isAuthenticated ? (
                                <li className="nav-item mx-2 nav-item-equalspace">
                                    <NavLink className="nav-link text-white nav-col-border" to="/" onClick={handleLogout}>Logout</NavLink>
                                </li>
                            ) : (
                                <li className="nav-item mx-2 nav-item-equalspace">
                                    <NavLink className="nav-link text-white nav-col-border" to="/login">Login</NavLink>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}