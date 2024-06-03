import React, { useEffect, useState } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TraineeProfileTable } from './TraineeProfileTable';
import { db } from '../firebase/firebase';
import { ref, onValue, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';


export function TraineeProfileInfo() {
  const [formData, setFormData] = useState({
    nickname: '',
    age: '',
    sport: '',
    availability: {}
  });

  const user = getAuth().currentUser;

  useEffect(() => {
    if (user) {
      const userRef = ref(db, `users/${user.uid}`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setFormData(data);
        }
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const saveData = (data, isImageUpload = false) => {
    if (user) {
      const userRef = ref(db, `users/${user.uid}`);
      set(userRef, data)
        .then(() => {
          if (!isImageUpload) {
            alert('User info successfully updated');
          }
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(formData);
  };

  return (
    <div className="container-fluid border-white profile-div">
      <h1 className="mt-3 text-Kaushan text-white">Update Trainee Profile</h1>
      <form onSubmit={handleSubmit}>
        <TraineeProfileTable formData={formData} handleChange={handleChange} />
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-orange btn-lg">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}