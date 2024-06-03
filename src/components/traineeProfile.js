import React, { useEffect, useState }from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './navbar';
import { FooterComponent } from './footer'
import { TraineeProfileInfo } from './TraineeProfileInfo'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

export default function TraineeProfile() {
    const navigate = useNavigate();
    const [userChecked, setUserChecked] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) {
                alert('You are not logged in. Please Login first');
                navigate('/login');
            }else {
              setUserChecked(true);
          }
        });

        return () => unsubscribe();
    }, [navigate]);

  return (
    <div className="blur-effect">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Bungee+Spice" rel="stylesheet" />
      <NavBar />
      <div className="container-fluid bg-profile" id="other-main">
        <TraineeProfileInfo />
      </div>
      <FooterComponent />
    </div>
  )
}