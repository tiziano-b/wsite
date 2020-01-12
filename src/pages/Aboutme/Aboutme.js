import React from "../../../node_modules/react"
//import local file 
// import './Aboutme.css'
import Welcome from '../../components/welcome/Welcome.js'
import Scrolldown from '../../components/Scrolldown.js'
import Timeline from '../../components/Timeline_page2.js'
import ColoredLine from '../../components/style/ColouredLine.js' 
import IntroMe from '../Aboutme/IntroMe.js'
import AboutMeSkills from '../Aboutme/AboutMeSkills.js'



class Aboutme extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <div >
      <Welcome/>
      <div>next</div>
      <Scrolldown></Scrolldown>
      <ColoredLine color='black' />
      <IntroMe/>
      <Timeline />
      <div Bounce_div>next</div>
      <Scrolldown></Scrolldown>      
      <ColoredLine color='black' />
      <AboutMeSkills/>
    </div>
    );
  }
}

 
// 
export default Aboutme;