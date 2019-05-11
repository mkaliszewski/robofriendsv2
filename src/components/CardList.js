import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map( ( { id, name, email, phone, key, company, age } ) => {
                    return <Card 
                        key={key} 
                        id={id} 
                        name={name} 
                        email={email}
                        phone={phone}
                        company={company}
                        age={age}
                        />
                })
            }
        </div>
    )
}
 
export default CardList; 