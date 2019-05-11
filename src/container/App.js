import React, { Component } from 'react';
import SearchBoxName from'../components/SearchBoxName';
import SearchBoxCompany from'../components/SearchBoxCompany';
import './App.css';
import CardDisplay from '../components/CardDisplay';

class App extends Component {

  constructor(){
    super();
    this.state = {
      robots:[],
      searchfieldName:'',
      searchfieldCompany:''
    };
  }

//ustawienie stanu wyszukiwania nazwy
  onSearchChangeName = (event) =>{
    this.setState( { searchfieldName: event.target.value })
  }

//ustawienie stanu wyszukiwania firmy
  onSearchChangeCompany = (event) =>{
    this.setState( {searchfieldCompany: event.target.value } )
  }


//ustawienie listy robotów
  componentDidMount(){
    fetch('https://jsonstorage.net/api/items/086e9392-608c-445f-bb00-3dc3bca1c37b')
    .then(response => response.json())
    .then(users => this.setState( { robots: users })) 
  }


  render(){
    const { robots, searchfieldName, searchfieldCompany } = this.state;
    const { onSearchChangeName, onSearchChangeCompany } = this;

    const filtredRobots = robots.filter(robot =>{
      if ( searchfieldName.length !== 0 ){
        return robot.name.toLowerCase().includes(searchfieldName.toLowerCase());
      }
      else if ( searchfieldCompany.length !== 0 ){
        return robot.company.toLowerCase().includes(searchfieldCompany.toLowerCase());
      }
       else if ( searchfieldName.length !== 0 || searchfieldCompany.length !== 0){
        return robot.company.toLowerCase().includes(searchfieldCompany.toLowerCase()) || robot.name.toLowerCase().includes(searchfieldName.toLowerCase()) ;
      }

      else {
        return robots;
      }
      });

    if (!robots.length){
      return <span className='loadText'><h1>Loading</h1></span> 
    }
    else
    {
    return(
      <div className="tc">
        <div className="container">
          <span className="header"><h1>RoboFriends</h1></span>
            <div className="searchboxDiv">
                <span className="searchbox searchboxName"><SearchBoxName searchChange = {onSearchChangeName}/></span>
                <span className="searchbox"><h1> OR </h1></span>
                <span className="searchbox searchboxCompany"><SearchBoxCompany searchChange = {onSearchChangeCompany}/></span>
            </div>
        </div>
         <CardDisplay robots={filtredRobots}/>
      </div>
    );
    }
  }
}

export default App;