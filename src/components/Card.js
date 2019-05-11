import React from 'react';
import './Card.css';

const Card = ({ id, name, email, phone, company, age }) =>{

  // const { name, email, id } = props;
  // wtedy w nawiasie przy funkcji wpisujemy props i jest rozłożone
  //ale lepiej zrobić to tak jak tutaj
  return (
    
    <div className='bg-light-green dib br3 pa3 ma4 tc bw2 shadow-5 card'>
      <div className="front tc">
      <img src={`https://robohash.org/${id}`} alt="Robofriend"/>
      <span className="nameMargin f3 shadow-5"><h3>{name}</h3></span>
      </div>

      <div className="back tc">
      <h3>Company:<p><a href={`https://www.google.com/search?q=${company.toLowerCase().toString()}`} target="_blank">{company}</a></p></h3>
      <h3>Age:<p>{age}</p></h3>
      <h3>Email adress:<p><a href={`mailto:${name.toLowerCase().toString()}@${company.toLowerCase().toString()}.com`} target="_top">{email}</a></p></h3>
      <h3>Phone number:<p><a href={`tel:${phone}`}>{phone}</a></p></h3>
     </div>
    </div>
    
    )
}

export default Card;  
