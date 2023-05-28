import React from 'react';
import OurCards from '../components/OurCards';
import contacts from '../components/contacts';
import NavBar from '../components/NavBar';

function AboutUsPage() {
  return (
    <div>
        <NavBar />
        {contacts.map(OurCards)}
    </div>
  )
}

export default AboutUsPage