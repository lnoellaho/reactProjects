import React, { Component } from 'react';
import {
  PageHeader,
  Table,
  Image
} from 'react-bootstrap';
import sampleNeo from './sample-neo.js'
import './app.css'

class App extends Component {
    constructor(props){
        super(props)
        let today = new Date()
        this.state = {
            apiKey: "q5jywJskS0EHV97zVkl87gjRUTFhYWBFqJoeLlv8",
            startDate: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`,
            apiUrl: "https://api.nasa.gov/neo/rest/v1/feed",
            rawData : sampleNeo,
            asteroids: []
        }
    }
    componentWillMount(){
        fetch(`${this.state.apiUrl}?start_date=${this.state.startDate}&api_key=${this.state.apiKey}`).then((rawResponse)=>{return rawResponse.json()
        }).then((parsedResponse)=> {
            // curl
            // let neoData = this.state.rawData.near_earth_objects

        let neoData= parsedResponse.near_earth_objects
        let newAsteroids = []
        Object.keys(neoData).forEach((date) =>{
            neoData[date].forEach((asteroid) =>{
            newAsteroids.push({
                id: asteroid.neo_reference_id,
                name: asteroid.name,
                date: asteroid.close_approach_data[0].close_approach_date,
                diameterMin: asteroid.estimated_diameter.feet.estimated_diameter_min.toFixed(0),
                diameterMax: asteroid.estimated_diameter.feet.estimated_diameter_max.toFixed(0),
                closestApproach: asteroid.close_approach_data[0].miss_distance.miles,
                velocity: parseFloat(asteroid.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(0),
                distance: asteroid.close_approach_data[0].miss_distance.miles
                })
            })
        })
        this.setState({asteroids: newAsteroids})
        })
    }

  render() {

    return (

        <div className="container">
            <h1>Near Earth Objects</h1>

            <p className="text-primary">List of all near earth objects pulled from NASAs API.</p>
            
            <Image src="https://c1.staticflickr.com/6/5612/15201149134_36663bd662_b.jpg" responsive />

            <br/>
            <br/>
            <br/>
            <Table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Estimated Diameter (feet)</th>
                  <th scope="col">Date of Closest Approach</th>
                  <th scope="col">Distance (miles)</th>
                  <th scope="col">Velocity (miles/hour)</th>
                </tr>
              </thead>
              <tbody>
                {this.state.asteroids.map((asteroid)=>{
                  return(
                    <tr class="table-dark" key={asteroid.id}>
                      <td>{asteroid.name}</td>
                      <td>{asteroid.diameterMin} - {asteroid.diameterMax}</td>
                      <td>{asteroid.date}</td>
                      <td>{asteroid.distance}</td>
                      <td>{asteroid.velocity}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>

          </div>
    );
  }
}


export default App;
