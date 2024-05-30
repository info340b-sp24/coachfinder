import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Availability } from './AvailableTable'

export function ProfileTable() {
  return (
    <form>

    <div className="mb-4">
        <label htmlFor="age" className="form-label text-Kaushan text-white">Age: </label>
        <input type="number" className="form-control" id="age" placeholder="Enter your age"/>
    </div>
    <div className="mb-4">
        <label htmlFor="phone" className="form-label text-Kaushan text-white">Phone Number: </label>
        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number"/>
    </div>
    <div className="mb-4">
        <label htmlFor="specialty" className="form-label text-Kaushan text-white">Specialty</label>
        <input type="text" className="form-control" id="specialty" placeholder="Enter your specialty"/>
    </div>
    <div className="mb-4">
        <label htmlFor="experience" className="form-label text-Kaushan text-white">Years of Experience</label>
        <input type="number" className="form-control" id="experience" placeholder="Enter years of experience"/>
    </div>
    <div className="mb-4">
        <label htmlFor="rate" className="form-label text-Kaushan text-white">Rate (per session)</label>
        <input type="number" className="form-control" id="rate" placeholder="Enter your rate per session"/>
    </div>
    <div className="mb-4">
        <label className="form-label text-Kaushan text-white">Availability</label>
        < Availability />
    </div>

    </form>
  )
}
