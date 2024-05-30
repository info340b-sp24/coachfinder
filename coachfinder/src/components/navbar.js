import React, { useState } from "react";
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

// export function NavBar(props) {
//     const [isCollapsed, setIsCollapsed] = useState(true);

//     const toggleNavbar = () => {
//         setIsCollapsed(!isCollapsed);
//     };

//     return (
//         <section id="all-nav" className="all-nav">
//             <nav className="navbar navbar-expand-lg navbar-dark bg-orange nav-border">
//                 <div className="container-fluid">
//                     <a className="navbar-brand text-Kaushan mx-3" href="home.html">Coach Finder</a>
//                     <button 
//                         className="navbar-toggler" 
//                         type="button" 
//                         onClick={toggleNavbar}
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className={`${isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item mx-2 nav-item-equalspace">
//                                 <a className="nav-link text-white nav-col-border" href="searchpage.html"> Search</a>
//                             </li>
//                             <li className="nav-item mx-2 nav-item-equalspace">
//                                 <a className="nav-link text-white nav-col-border" href="traineeprofile.html"> Profile</a>
//                             </li>
//                             <li className="nav-item mx-2 nav-item-equalspace">
//                                 <a className="nav-link text-white nav-col-border" href="appointmentscreen.html"> Appointments</a>
//                             </li>
//                             <li className="nav-item mx-2 nav-item-equalspace">
//                                 <a className="nav-link text-white nav-col-border" href="message.html"> Messages</a>
//                             </li>
//                             <li className="nav-item mx-2 nav-item-equalspace">
//                                 <a className="nav-link text-white nav-col-border" href="login.html">Login</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </section>
//     )
// }

export function NavBar(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
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
                                <NavLink className="nav-link text-white nav-col-border" to="/coach"> Profile</NavLink>
                            </li>
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <NavLink className="nav-link text-white nav-col-border" to="/appointment"> Appointments</NavLink>
                            </li>
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <NavLink className="nav-link text-white nav-col-border" to="/message"> Messages</NavLink>
                            </li>
                            <li className="nav-item mx-2 nav-item-equalspace">
                                <NavLink className="nav-link text-white nav-col-border" to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}