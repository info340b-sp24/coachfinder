import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { SearchCard } from './searchCard';

export function SearchMain(props)
{
    const mainCard = props.mainCard;

    return (
        <div className="other-main container-fluid mt-1" id="other-main">
            <div className="container-fluid">
                <h1 className="text-Kaushan text-white mt-3 mb-5">Search</h1>
                <div className="input-group my-5">
                    <span className="input-group-text" id="search-icon">🔍</span>
                    <input type="text" className="form-control" placeholder="Search for what you need here..." aria-label="Search" aria-describedby="search-icon" />
                </div>
                <h2 className="text-Kaushan text-white mb-5">All available coaches:</h2>

                
                <div className="row">
                    {mainCard.map(card => (
                        <SearchCard cardData={card} key={card.id} />
                    ))}   
                </div>
            </div>
        </div>
    )
}