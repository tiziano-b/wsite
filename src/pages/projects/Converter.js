import React from "react"
import ConverterComponent from '../../components/projects/Calculator.js'


class Converter extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <div>
      <ConverterComponent></ConverterComponent>
    </div>
    );
  }
}

 
export default Converter;