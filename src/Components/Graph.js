import React, { Component } from 'react'; 
import { Chart } from "react-google-charts";

export class Graph extends Component {

    render() {
      return (
       <div>
       <Chart
         style={{width: '100%', height:200}}
         chartType="LineChart"
         loader={<div>Loading Chart</div>}
         data={[
          ['x', 'Casos', 'Mortes'],
          [this.props.countryZero,  this.props.casesZero,  this.props.deathsZero],
          [this.props.countryOne,   this.props.casesOne,   this.props.deathsOne],
          [this.props.countryTwo,   this.props.casesTwo,   this.props.deathsTwo],
          [this.props.countryThree, this.props.casesThree, this.props.deathsThree],
          [this.props.countryFour,  this.props.casesFour,  this.props.deathsFour],
       ]}
        rootProps={{'data-testid': '1'}}
     />
       </div>
      )
    }
}

export default Graph;