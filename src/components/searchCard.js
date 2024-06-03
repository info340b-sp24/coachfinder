import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

export function SearchCard(props) {
    const { cardData } = props;
    const { src, alt, name, specialty, price, gender } = cardData;
    const priceString = "$" + price + "/session";
    const navigate = useNavigate();

    const [isScheduled, setIsScheduled] = useState(false);

    useEffect(() => {
        const scheduledCards = JSON.parse(localStorage.getItem('scheduledCards')) || [];
        setIsScheduled(scheduledCards.includes(name));
    }, [name]);

    const handleSchedule = () => {
        const scheduledCards = JSON.parse(localStorage.getItem('scheduledCards')) || [];
        scheduledCards.push(name);
        localStorage.setItem('scheduledCards', JSON.stringify(scheduledCards));
        setIsScheduled(true);
        navigate(`/search/${name.replace(/\s+/g, '')}`, { state: { cardData } });
    };

    const handleUnschedule = () => {
        let scheduledCards = JSON.parse(localStorage.getItem('scheduledCards')) || [];
        scheduledCards = scheduledCards.filter(cardName => cardName !== name);
        localStorage.setItem('scheduledCards', JSON.stringify(scheduledCards));
        setIsScheduled(false);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={src} className="img-fluid profile-photo mt-3" alt={alt} />
                <div className="card-body">
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Specialty:</strong> {specialty}</p>
                    <p><strong>Price:</strong> {priceString}</p>
                    <button className="btn btn-primary" onClick={handleSchedule} disabled={isScheduled}>
                        <span>📅</span> {isScheduled ? "Scheduled" : "Schedule"}
                    </button>
                    {isScheduled && (
                        <button className="btn btn-danger" onClick={handleUnschedule}>
                            Unschedule
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
