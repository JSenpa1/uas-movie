import React from 'react';
import './OurCards.css'

function OurCards(props) {
  return (
    <div className='card-bungkus'>
        <div className='card'>
            <img src={props.image} alt='pfp'/>
            <h1 className='text-white'>{props.name}</h1>
            <h2>{props.aboutMe}</h2>
        </div>
    </div>
  );
}

export default OurCards;