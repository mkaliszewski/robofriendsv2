import React from 'react';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import CardList from './CardList';



const CardDisplay = ({robots}) =>{
   return(
        <Scroll>        
          <ErrorBoundry>
            <CardList robots={robots}/>
          </ErrorBoundry>
        </Scroll>
    )
}
export default CardDisplay;