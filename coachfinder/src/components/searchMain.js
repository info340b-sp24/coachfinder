import React, { useState, useEffect } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { SearchCard } from './searchCard';

export function SearchMain(props) {
    const [filter, setFilter] = useState({ specialty: '', gender: '', name: '', minPrice: '', maxPrice: '' });
    const [filteredCards, setFilteredCards] = useState(props.mainCard);
    const [error, setError] = useState('');

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilter(prevFilter => ({
            ...prevFilter,
            [name]: value
        }));
    };

    const applyFilter = () => {
        let filtered = props.mainCard.filter(card => {
            let matches = true;
            if (filter.specialty && card.specialty !== filter.specialty) matches = false;
            if (filter.gender && card.gender !== filter.gender) matches = false;
            if (filter.name && !card.name.toLowerCase().includes(filter.name.toLowerCase())) matches = false;
            if (filter.minPrice && card.price < parseFloat(filter.minPrice)) matches = false;
            if (filter.maxPrice && card.price > parseFloat(filter.maxPrice)) matches = false;
            return matches;
        });

        if (filtered.length === 0) {
            setError("No coaches match the selected criteria.");
        } else {
            setError('');
        }

        setFilteredCards(filtered);
    };

    const cardInfo = filteredCards.map(card => (
        <SearchCard cardData={card} key={card.id} />
    ));

    return (
        <div className="other-main container-fluid mt-1" id="other-main">
            <div className="container-fluid">
                <h1 className="text-Kaushan text-white mt-3 mb-5">Search</h1>
                <div className="input-group my-5">
                    <span className="input-group-text" id="search-icon">🔍</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for the name of the coach"
                        aria-label="Search"
                        aria-describedby="search-icon"
                        name="name"
                        value={filter.name}
                        onChange={handleFilterChange}
                    />
                </div>

                {/* Filter Bar */}
                <div className="row mb-5">
                    <div className="col-md-3">
                        <select name="specialty" className="form-select" value={filter.specialty} onChange={handleFilterChange}>
                            <option value="">Select Specialty</option>
                            {props.mainCard.map(card => card.specialty).filter((value, index, self) => self.indexOf(value) === index).map((specialty, index) => (
                                <option key={index} value={specialty}>{specialty}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select name="gender" className="form-select" value={filter.gender} onChange={handleFilterChange}>
                            <option value="">Select Gender</option>
                            {props.mainCard.map(card => card.gender).filter((value, index, self) => self.indexOf(value) === index).map((gender, index) => (
                                <option key={index} value={gender}>{gender}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Min Price"
                            name="minPrice"
                            value={filter.minPrice}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Max Price"
                            name="maxPrice"
                            value={filter.maxPrice}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary" onClick={applyFilter}>Apply Filter</button>
                    </div>
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <h2 className="text-Kaushan text-white mb-5">All available coaches:</h2>

                <div className="row">
                    {cardInfo}
                </div>
            </div>
        </div>
    );
}
