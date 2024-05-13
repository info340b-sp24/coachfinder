import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export function navbar(props)
{
    return (
        <section id="all-nav" class="all-nav">
            <nav class="navbar navbar-expand-lg navbar-dark bg-orange nav-border">
                <div class="container-fluid">
                    <a class="navbar-brand text-Kaushan mx-3" href="home.html">Coach Finder</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item mx-2 nav-item-equalspace">
                                <a class="nav-link text-white nav-col-border" href="searchpage.html"><span class="search-icon">🔍</span> Search</a>
                            </li>
                            <li class="nav-item mx-2 nav-item-equalspace">
                                <a class="nav-link text-white nav-col-border" href="traineeprofile.html"><span class="text-white">⚙️</span> Profile</a>
                            </li>
                            <li class="nav-item mx-2 nav-item-equalspace">
                                <a class="nav-link text-white nav-col-border" href="appointmentscreen.html"><span>📅</span> Appointments</a>
                            </li>
                            <li class="nav-item mx-2 nav-item-equalspace">
                                <a class="nav-link text-white nav-col-border" href="message.html"><span>💬</span> Messages</a>
                            </li>
                            <li class="nav-item mx-2 nav-item-equalspace">
                                <a class="nav-link text-white nav-col-border" href="login.html">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}