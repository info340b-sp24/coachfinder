import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

export function Availability({ formData, handleChange }) {
  const times = ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    handleChange({
      target: {
        id: 'availability',
        value: {
          ...formData.availability,
          [name]: checked
        }
      }
    });
  };

  return (
    <table className="table table-overflow table-white availability-table table-radius">
      <thead>
        <tr>
          <th>Time</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
        </tr>
      </thead>
      <tbody>
        {times.map((time, index) => (
          <tr key={index}>
            <td>{time}</td>
            {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => (
              <td key={day}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  name={`${day}-${index}`}
                  checked={formData.availability?.[`${day}-${index}`] || false}
                  onChange={handleCheckboxChange}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
