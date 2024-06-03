import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Availability } from './AvailableTable';

export function TraineeProfileTable({ formData, handleChange }) {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="nickname" className="form-label text-Kaushan text-white">Nickname</label>
        <input
          type="text"
          className="form-control"
          id="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="Enter your nickname"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="form-label text-Kaushan text-white">Age</label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sport" className="form-label text-Kaushan text-white">Sport / Event / Athletic Specialty</label>
        <input
          type="text"
          className="form-control"
          id="sport"
          value={formData.sport}
          onChange={handleChange}
          placeholder="Enter your specialty"
        />
      </div>
      <div className="mb-4">
        <label className="form-label text-Kaushan text-white">Availability</label>
        <Availability formData={formData} handleChange={handleChange} />
      </div>
    </div>
  );
}
