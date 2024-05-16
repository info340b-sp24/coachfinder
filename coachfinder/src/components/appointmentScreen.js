import React, { useState } from 'react';
import { NavBar } from './navbar';
import { FooterComponent } from './footer';
import '../css/style.css'; // Import custom styles

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
                <NavBar />
                <div className="container-fluid" id="other-main">
                    <div className="container-fluid">
                        <div className="my-4">
                            <h1 className="text-Kaushan text-white">Hello, name!</h1>
                        </div>
                        <div className="appointment-layout">
                            {/* Calendar Section */}
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
                                        {/* Dynamically render calendar rows */}
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="appointment">1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td className="appointment">8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td className="appointment">16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td className="appointment">20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Appointment Details Section */}
                            <div className="appointment-details flex-fill text-white">
                                <h4>Payment Due:</h4>
                                <p>$60</p>

                                <div className="coach-list mt-3 text-white">
                                    <h4>Current Coaches:</h4>
                                    <span className="toggle-link" onClick={() => toggleCoachImage('coach1')}>Coach #1</span>
                                    {coach1ImageVisible && <img className="coach-img" src="coach1_image.jpg" alt="Coach 1 Image" />}

                                    <span className="toggle-link" onClick={() => toggleCoachImage('coach2')}>Coach #2</span>
                                    {coach2ImageVisible && <img className="coach-img" src="coach2_image.jpg" alt="Coach 2 Image" />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <FooterComponent />
        </div>
    );
};

export default AppointmentsScreen;
