import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { SearchCard } from './searchCard';
import { FooterComponent } from './footer';

export function ScheduleComponent() {
    const location = useLocation();
    const { cardData } = location.state;
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <html>
            <head>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
                <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Bungee+Spice" rel="stylesheet" />
            </head>
            <body className="bg-other">
                <main className=" blur-effect">
                    <div className="other-main container-fluid mt-1" id="other-main">
                        <div className="container-fluid">
                            <h1 className="text-Kaushan text-white mb-5">Schedule Confirmation</h1>
                            <div className="alert alert-success">
                                You have successfully scheduled the appointment with {cardData.name}
                            </div>
                            <div className="row mb-3">
                                <SearchCard cardData={cardData} />
                            </div>
                            <button className="btn btn-secondary" onClick={handleBack}>Back</button>
                        </div>
                    </div>
                </main>
            </body>
            <FooterComponent />
        </html>
    );
}

