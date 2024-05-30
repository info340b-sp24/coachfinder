import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './navbar';
import { FooterComponent } from './footer'
import { ProfileInfo } from './CoachProfileInfo'

export default function CoachProfile() {
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Bungee+Spice" rel="stylesheet" />
      <NavBar />
      <div className="other-main container-fluid bg-profile" id="other-main">
        <ProfileInfo />
      </div>
      <FooterComponent />
    </div>
  )
}

