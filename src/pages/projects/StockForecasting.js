import React from "react"
import StockForecastingComponent from '../../components/projects/StockForecasting.js'


class StockForecasting extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <div>
      <StockForecastingComponent></StockForecastingComponent>
    </div>
    );
  }
}

 
export default StockForecasting;