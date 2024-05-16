import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './navbar';
import { FooterComponent } from './footer'
import { TraineeProfileInfo } from './TraineeProfileInfo'

export default function TraineeProfile() {
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

