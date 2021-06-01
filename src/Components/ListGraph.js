import React, { Component } from 'react'; 
import Graph from './Graph'

 class ListGraph extends Component { 
    constructor() {
        super();
            this.state = {
                 list: [
                    {
                      country: "string",
                      province: [
                        "string"
                      ],
                      timeline: {
                        cases: {
                          date: 0
                        },
                        deaths: {
                          date: 0
                        },
                        recovered: {
                          date: 0
                        }
                      }
                    },
                    {
                        country: "string",
                        province: [
                          "string"
                        ],
                        timeline: {
                          cases: {
                            date: 0
                          },
                          deaths: {
                            date: 0
                          },
                          recovered: {
                            date: 0
                          }
                        }
                      },{
                        country: "string",
                        province: [
                          "string"
                        ],
                        timeline: {
                          cases: {
                            date: 0
                          },
                          deaths: {
                            date: 0
                          },
                          recovered: {
                            date: 0
                          }
                        }
                      },{
                        country: "string",
                        province: [
                          "string"
                        ],
                        timeline: {
                          cases: {
                            date: 0
                          },
                          deaths: {
                            date: 0
                          },
                          recovered: {
                            date: 0
                          }
                        }
                      },{
                        country: "string",
                        province: [
                          "string"
                        ],
                        timeline: {
                          cases: {
                            date: 0
                          },
                          deaths: {
                            date: 0
                          },
                          recovered: {
                            date: 0
                          }
                        }
                      }
                    ]
                  }
                }
                componentDidMount () {
                    fetch(`https://disease.sh/v3/covid-19/historical/USA%2CINDM%2CBRA%2CFRA%2CTUR?lastdays=5`)
                    .then(results => results.json())
                    .then(results => this.setState({list: results}, console.log(results[0].timeline[0])))
                   }
       render() { 
          return ( 
                  <div>
                  <Graph
                  dayZero={this.state.list[0].timeline.cases.date} 
                  />
                  </div>  
                  ); 
               }; 
             } 
         
         
     
     export default ListGraph;