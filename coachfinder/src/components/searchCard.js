import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

export function SearchCard(props)
{
    const cardData = props.cardData;
    const src = cardData.src;
    const alt = cardData.alt;
    const name = cardData.name;
    const specialty = cardData.specialty;
    const price = cardData.price;
    const gender = cardData.gender;

    const priceString = "$" + price + "/session";

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={ src } className="img-fluid profile-photo mt-3" alt= { alt } />
                <div className="card-body">
                    <p><strong>Name:</strong> { name } </p>
                    <p><strong>Gender:</strong> { gender } </p>
                    <p><strong>Specialty:</strong> { specialty } </p>
                    <p><strong>Price:</strong> { priceString } </p>
                    <button className="btn btn-primary"><span>📅</span> Schedule</button>
                </div>
            </div>
        </div>
    )
}