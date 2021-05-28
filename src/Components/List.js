import React, { Component } from 'react'; 
import MapContainer from './Map'


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
                fetch(`https://disease.sh/v3/covid-19/countries?yesterday=28%2F05%2F21&sort=cases&allowNull=0`)
                .then(results => results.json())
                .then(results => this.setState({list: results}))
               }
   render() { 
      return ( 
              <div>
                  <h2 style={{margin: 10, textAlign:'center'}}>Índice dos 5 país com mais casos de COVID-19 registrados até o momento</h2>
                <MapContainer 
                casesZero={this.state.list[0].cases}  countryZero={this.state.list[0].country}  latZero={this.state.list[0].countryInfo.lat}  longZero={this.state.list[0].countryInfo.long}
                casesOne={this.state.list[1].cases}   countryOne={this.state.list[1].country}   latOne={this.state.list[1].countryInfo.lat}   longOne={this.state.list[1].countryInfo.long}
                casesTwo={this.state.list[2].cases}   countryTwo={this.state.list[2].country}   latTwo={this.state.list[2].countryInfo.lat}   longTwo={this.state.list[2].countryInfo.long}
                casesThree={this.state.list[3].cases} countryThree={this.state.list[3].country} latThree={this.state.list[3].countryInfo.lat} longThree={this.state.list[3].countryInfo.long}
                casesFour={this.state.list[4].cases}  countryFour={this.state.list[4].country}  latFour={this.state.list[4].countryInfo.lat}  longFour={this.state.list[4].countryInfo.long}
                />
              </div>  
             ); 
          }; 
        } 
    
    

export default List;