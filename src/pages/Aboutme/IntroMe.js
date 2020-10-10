import React from "../../../node_modules/react"
//import local file 
// import './Aboutme.css'
import { makeStyles } from '@material-ui/core/styles';
import useStylesGlobal from '../../components/style/TextStyles.js'
import imageMe from '../../assets/me_face.png'
import Slide from 'react-reveal/Slide';




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
    height: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('ml')]: {
      height: '850px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '1000px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      width: '95%',
      height: '1050px',
      marginBottom: '1em',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  }

))



function IntroMe(props) {
  const classes = useStyles();
  const classesGlobal = useStylesGlobal();



  return (
    <div >
      <div className={classes.PageAboutme}>


      <Slide left>

        <div>
        <img className={classesGlobal.ImageMyFace} src={imageMe} alt="screenshots"/>
        </div>
        </Slide>
        <Slide right>       
         <div className={classes.TextAboutMe}>
        <h1 className={classesGlobal.TextTitle}>About me</h1>
        <p className={classesGlobal.Text}>Milan. Born | 2011. Toronto | 2018. Vancouver | 2018. London | 2020. Zurich</p>
        <p className={classesGlobal.Text}>I'm a lifelong traveler who lived in Milan, Vancouver, Toronto, and London, always looking for new challenges.
Technology and computers have been in my life since I was a kid.</p>
<p className={classesGlobal.Text}>I started to code and design stuff at a very young age.
I have always loved everything related to arts, solution design, creative thinking, and pixels.</p>
      <p className={classesGlobal.Text}>I love playing music, photography, mountains and skiing.</p>
      <p className={classesGlobal.Text}><i>"Talk is cheap. Show me the code."</i> - Linus Torvalds</p>
        </div>
        </Slide>
    </div>
    </div>

  )
}
 
export default IntroMe;