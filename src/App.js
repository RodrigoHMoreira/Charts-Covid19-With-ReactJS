import React, { Component } from 'react'; 
import './App.css';
import List from './Components/List';

 class App extends Component { 
   render() { 
      return ( 
              <div style={{height:'200%', width:'200%'}}>
                <h1 style={{fontFamily: 'Arial Black', padding: 5, textAlign:'center'}}>Índice dos 5 país com mais casos de COVID-19 registrados até o momento</h1>
                <List />
              </div>  
       ); 
    }; 
  } 
    
export default App 