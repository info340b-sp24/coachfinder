import React, { useState } from 'react';

const AppointmentsScreen = () => {
    const [coach1ImageVisible, setCoach1ImageVisible] = useState(false);
    const [coach2ImageVisible, setCoach2ImageVisible] = useState(false);

    const toggleCoachImage = (coachId) => {
        if (coachId === 'coach1') {
            setCoach1ImageVisible(!coach1ImageVisible);
        } else if (coachId === 'coach2') {
            setCoach2ImageVisible(!coach2ImageVisible);
        }
    };

    return (
        <div className="bg-other">
            <main className="blur-effect">
                <section id="all-nav" className="all-nav">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-orange nav-border">
                        <div className="container-fluid">
                            <a className="navbar-brand text-Kaushan mx-3" href="home.html">Coach Finder</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item mx-2 nav-item-equalspace">
                                        <a className="nav-link text-white nav-col-border" href="searchpage.html"><span className="search-icon">🔍</span> Search</a>
                                    </li>
                                    <li className="nav-item mx-2 nav-item-equalspace">
                                        <a className="nav-link text-white nav-col-border" href="traineeprofile.html"><span className="text-white">⚙️</span> Profile</a>
                                    </li>
                                    <li className="nav-item mx-2 nav-item-equalspace">
                                        <a className="nav-link text-white nav-col-border" href="appointmentscreen.html"><span>📅</span> Appointments</a>
                                    </li>
                                    <li className="nav-item mx-2 nav-item-equalspace">
                                        <a className="nav-link text-white nav-col-border" href="message.html"><span>💬</span> Messages</a>
                                    </li>
                                    <li className="nav-item mx-2 nav-item-equalspace">
                                        <a className="nav-link text-white nav-col-border" href="login.html">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>

                {/* Appointment Page Content */}
                <div className="container-fluid" id="other-main">
                    <div className="container-fluid">
                        {/* Greeting */}
                        <div className="my-4">
                            <h1 className="text-Kaushan text-white">Hello, name!</h1>
                        </div>

                        {/* Appointment Layout */}
                        <div className="appointment-layout">
                            {/* Calendar */}
                            <div className="calendar flex-fill text-white">
                                <h4>April</h4>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Sun</th>
                                            <th>Mon</th>
                                            <th>Tue</th>
                                            <th>Wed</th>
                                            <th>Thu</th>
                                            <th>Fri</th>
                                            <th>Sat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Calendar rows */}
                                        {/* Replace the calendar rows with your dynamic content */}
                                    </tbody>
                                </table>
                            </div>

                            {/* Appointment Details */}
                            <div className="appointment-details flex-fill text-white">
                                <h4>Payment Due:</h4>
                                <p>$60</p>

                                <div className="coach-list mt-3 text-white">
                                    <h4>Current Coaches:</h4>
                                    {/* Coach #1 with toggle link */}
                                    <span className="toggle-link" onClick={() => toggleCoachImage('coach1')}>Coach #1</span>
                                    {coach1ImageVisible && <img className="coach-img" src="coach1_image.jpg" alt="Coach 1 Image" />}

                                    {/* Coach #2 with toggle link */}
                                    <span className="toggle-link" onClick={() => toggleCoachImage('coach2')}>Coach #2</span>
                                    {coach2ImageVisible && <img className="coach-img" src="coach2_image.jpg" alt="Coach 2 Image" />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer id="profile-footer" className="appointment-footer">
                <div className="container text-white">
                    <p className="text-center mt-0 mb-0">This website was created by ...</p>
                    <address className="text-center mt-0 mb-0">
                        Contact us at <a href="mailto:me@here.com">me@here.com</a>, or at <a href="tel:555-123-4567">(555) 123-4567</a>.
                    </address>
                    <p className="text-center mt-0 mb-0">&copy; 2024 The Author.</p>
                </div>
            </footer>
        </div>
    );
};

export default AppointmentsScreen;
