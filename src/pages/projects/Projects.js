import React from "react"
import Personalcoding from '../../components/projects/Personalcoding.js'
import Photography from './Photography.js'
import Scrolldown from '../../components/Scrolldown.js'
import ColoredLine from '../../components/style/ColouredLine.js' 


class Projects extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <div>
      <Personalcoding></Personalcoding>
      <div>next</div>
      <Scrolldown></Scrolldown>
      <ColoredLine color='black' />
      <Photography></Photography>
    </div>
    );
  }
}

 
export default Projects;