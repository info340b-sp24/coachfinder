import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

// example demo data objects
// [
//     { id: "1", src: "default-profile-pic.jpg", alt: "Coach Profile Picture", name: "John Doe", specialty: "Powerlifting", price: "$30"}
// ]

export function HomeDemo(props)
{
    const demoData = props.demoData;
    const src = demoData.src;
    const alt = demoData.alt;
    const name = demoData.name;
    const specialty = demoData.specialty;
    const price = demoData.price;

    const priceString = "$" + price + "/session";

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={ src } className="card-img-top" alt= { alt } />
                <div className="card-body">
                    <p><strong>Name:</strong> { name } </p>
                    <p><strong>Specialty:</strong> { specialty } </p>
                    <p><strong>Price:</strong> { priceString } </p>
                </div>
            </div>
        </div>
    )
}