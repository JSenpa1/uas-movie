import React from 'react';
import OurCards from '../components/OurCards';
import contacts from '../components/contacts';
import NavBar from '../components/NavBar';
import './aboutuspages.css'

function AboutUsPage() {
  return (
    <div className='container-about-us'>
        <NavBar />
        {contacts.map(OurCards)}
    </div>
  )
}

export default AboutUsPage