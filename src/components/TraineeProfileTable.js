import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Availability } from './AvailableTable'

export function TraineeProfileTable() {
  return (
    <form>
        <div className="mb-4">
            <label htmlForfor="age" className="form-label text-Kaushan text-white">Age</label>
            <input type="number" className="form-control" id="age" placeholder="Enter your age" />
        </div>
        <div className="mb-4">
            <label htmlForfor="sport" className="form-label text-Kaushan text-white">Sport / Event / Athletic Specialty</label>
            <input type="text" className="form-control" id="sport" placeholder="Enter your specialty" />
        </div>
        <div className="mb-4">
            <label className="form-label text-Kaushan">Availability</label>
            < Availability />
        </div>

    </form>
  )
}
