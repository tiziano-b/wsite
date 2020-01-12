import React from "../../../node_modules/react"
//import local file 
// import './Aboutme.css'
import Welcome from '../../components/welcome/Welcome.js'
import Scrolldown from '../../components/Scrolldown.js'
import Skills from '../Aboutme/Skills.js'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '../../components/Timeline_page2.js'
import useStylesGlobal from '../../components/style/TextStyles.js'
import ColoredLine from '../../components/style/ColouredLine.js' 
import imageMe from '../../assets/me_face.png'




const useStyles = makeStyles(theme => ({
  PageSkills: {
    width: '80%',
    height: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: '1100px',
      width: '95%',

    },
    [theme.breakpoints.down('xs')]: {
      height: '1900px',
      width: '95%',

    },
  },
  PageAboutme: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '80%',
    height: '550px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('ml')]: {
      height: '650px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '750px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      width: '95%',
      height: '850px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  }

))



function Aboutme(props) {
  const classes = useStyles();
  const classesGlobal = useStylesGlobal();



  return (
    <div >
      <Welcome/>
      <div>next</div>
      <Scrolldown></Scrolldown>
      <ColoredLine color='black' />
      <div className={classes.PageAboutme}>
        <div>
        <img className={classesGlobal.ImageMyFace} src={imageMe} alt="screenshots"/>
        </div>
        <div className={classes.TextAboutMe}>
        <h1 className={classesGlobal.TextTitle}>About me</h1>
        <p className={classesGlobal.Text}>Milan based | 2011. Toronto | 2018. Vancouver | 2018. London</p>
        <p className={classesGlobal.Text}>I'm a lifelong traveler who lived in Milan, Vancouver, Toronto, and London, always looking for new challenges.
Technology and computers have been in my life since I was a kid.</p>
<p className={classesGlobal.Text}>I started to code and design stuff at a very young age.
I have always loved everything related to arts, solution design, creative thinking, and pixels.</p>
      <p className={classesGlobal.Text}>I have a passion for music and photography, mountains and skiing.</p>
      <p className={classesGlobal.Text}><i>"Talk is cheap. Show me the code."</i> - Linus Torvalds</p>
        </div>
        
      </div>
      <Timeline />
      <div Bounce_div>next</div>
      <Scrolldown></Scrolldown>      
      <ColoredLine color='black' />
      <div className={classes.PageSkills}>
        <h1 className={classesGlobal.TextTitle}>IT.SKills</h1>
        <Skills></Skills>
      </div>
    </div>
  )
}
 
export default Aboutme;