import React, { Component } from 'react'; 
import MapContainer from './Map'
import Graph from './Graph'

     var dataToday = new Date();
     var day = dataToday.getDate();
     var month = dataToday.getMonth();
     var year = dataToday.getFullYear(); 

 class List extends Component { 
    constructor() {
        super();
            this.state = {
                 list: [{
                    updated: 0,
                    country: "string",
                    countryInfo: {
                      _id: 0,
                      iso2: "string",
                      iso3: "string",
                      lat: 0,
                      long: 0,
                      flag: "string"
                     },
                     cases: 0,
                     todayCases: 0,
                     deaths: 0,
                     todayDeaths: 0
                   },
                   {
                    updated: 0,
                    country: "string",
                    countryInfo: {
                      _id: 0,
                      iso2: "string",
                      iso3: "string",
                      lat: 0,
                      long: 0,
                      flag: "string"
                     },
                     cases: 0,
                     todayCases: 0,
                     deaths: 0,
                     todayDeaths: 0
                   },
                   {
                    updated: 0,
                    country: "string",
                    countryInfo: {
                      _id: 0,
                      iso2: "string",
                      iso3: "string",
                      lat: 0,
                      long: 0,
                      flag: "string"
                     },
                     cases: 0,
                     todayCases: 0,
                     deaths: 0,
                     todayDeaths: 0
                   },
                   {
                    updated: 0,
                    country: "string",
                    countryInfo: {
                      _id: 0,
                      iso2: "string",
                      iso3: "string",
                      lat: 0,
                      long: 0,
                      flag: "string"
                     },
                     cases: 0,
                     todayCases: 0,
                     deaths: 0,
                     todayDeaths: 0
                   },
                   {
                    updated: 0,
                    country: "string",
                    countryInfo: {
                      _id: 0,
                      iso2: "string",
                      iso3: "string",
                      lat: 0,
                      long: 0,
                      flag: "string"
                     },
                     cases: 0,
                     todayCases: 0,
                     deaths: 0,
                     todayDeaths: 0
                   },
                 ]
               }
            }
    componentDidMount () {
                fetch(`https://disease.sh/v3/covid-19/countries?yesterday=${day}%2F${month}%2F${year}&sort=cases&allowNull=0`)
                .then(results => results.json())
                .then(results => this.setState({list: results}))
               }
   render() { 
      return ( 
              <div>
                <div style={{width:'50%', marginLeft: 10}}>
                <MapContainer 
                casesZero={this.state.list[0].cases}  countryZero={this.state.list[0].country}  latZero={this.state.list[0].countryInfo.lat}  longZero={this.state.list[0].countryInfo.long}
                casesOne={this.state.list[1].cases}   countryOne={this.state.list[1].country}   latOne={this.state.list[1].countryInfo.lat}   longOne={this.state.list[1].countryInfo.long}
                casesTwo={this.state.list[2].cases}   countryTwo={this.state.list[2].country}   latTwo={this.state.list[2].countryInfo.lat}   longTwo={this.state.list[2].countryInfo.long}
                casesThree={this.state.list[3].cases} countryThree={this.state.list[3].country} latThree={this.state.list[3].countryInfo.lat} longThree={this.state.list[3].countryInfo.long}
                casesFour={this.state.list[4].cases}  countryFour={this.state.list[4].country}  latFour={this.state.list[4].countryInfo.lat}  longFour={this.state.list[4].countryInfo.long}
                />
                </div><br></br>
                <div style={{width:'50%', marginLeft: 10, marginTop:250}}>
                <h2 style={{fontFamily:'Arial Black', textAlign:'center'}}>Casos e mortes por COVID-19 registrados hoje:</h2>
                <Graph 
                deathsZero={this.state.list[0].todayDeaths}   casesZero={this.state.list[0].todayCases}   countryZero={this.state.list[0].country}
                deathsOne={this.state.list[1].todayDeaths}    casesOne={this.state.list[1].todayCases}    countryOne={this.state.list[1].country}
                deathsTwo={this.state.list[2].todayDeaths}    casesTwo={this.state.list[2].todayCases}    countryTwo={this.state.list[2].country}
                deathsThree={this.state.list[3].todayDeaths}  casesThree={this.state.list[3].todayCases}  countryThree={this.state.list[3].country}
                deathsFour={this.state.list[4].todayDeaths}   casesFour={this.state.list[4].todayCases}   countryFour={this.state.list[4].country} 
                />
                </div>
              </div>  
             ); 
          }; 
        } 
    
    

export default List;