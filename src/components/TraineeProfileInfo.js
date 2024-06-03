import React, { useEffect, useState } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TraineeProfileTable } from './TraineeProfileTable';
import { db, storage } from '../firebase/firebase';
import { ref, onValue, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const defaultImage = require('../img/coach-example.jpg'); // Update with the actual path to your default image

export function TraineeProfileInfo() {
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(defaultImage);
  const [formData, setFormData] = useState({
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
          if (data.profileImageUrl) {
            setProfileImageUrl(data.profileImageUrl);
          }
        }
      });
    }
  }, [user]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    if (profileImage && user) {
      const storageReference = storageRef(storage, `profileImages/${user.uid}`);
      uploadBytes(storageReference, profileImage).then(() => {
        getDownloadURL(storageReference).then((url) => {
          setProfileImageUrl(url);
          saveData({ ...formData, profileImageUrl: url }, true);
        });
      });
    }
  };

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
      <div className="text-center my-4">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="mb-3">
            <img
              src={profileImageUrl || defaultImage}
              className="img-fluid rounded-circle profile-photo"
              alt="profile photo"
            />
          </div>
          <input type="file" onChange={handleImageChange} style={{ display: 'none' }} id="profileImageInput" />
          <label htmlFor="profileImageInput" className="btn btn-primary ml-5 btn-orange">
            Add Profile Photo
          </label>
          <button className="btn btn-primary ml-5 btn-orange" onClick={handleImageUpload}>
            Upload Photo
          </button>
        </div>
      </div>
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

