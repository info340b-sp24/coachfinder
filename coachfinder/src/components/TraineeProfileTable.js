import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Availability } from './AvailableTable'

export function TraineeProfileTable() {
  return (
    <form>

        <div class="mb-4">
            <label htmlForfor="age" className="form-label text-Kaushan text-white">Age</label>
            <input type="number" class="form-control" id="age" placeholder="Enter your age" />
        </div>
        <div class="mb-4">
            <label htmlForfor="sport" className="form-label text-Kaushan text-white">Sport / Event / Athletic Specialty</label>
            <input type="text" class="form-control" id="sport" placeholder="Enter your specialty" />
        </div>
        <div class="mb-4">
            <label class="form-label text-Kaushan">Availability</label>
            < Availability />
        </div>

    </form>
  )
}
