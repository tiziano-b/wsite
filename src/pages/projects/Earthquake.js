import React from "react"
import EarthquakeComponent from '../../components/projects/Earthquake.js'


class Earthquake extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <div>
      <EarthquakeComponent></EarthquakeComponent>
    </div>
    );
  }
}

 
export default Earthquake;