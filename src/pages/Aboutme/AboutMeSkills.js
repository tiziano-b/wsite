import React from "../../../node_modules/react"
//import local file 
// import './Aboutme.css'
import Skills from '../Aboutme/Skills.js'
import { makeStyles } from '@material-ui/core/styles';
import useStylesGlobal from '../../components/style/TextStyles.js'
import Flash from 'react-reveal/Flash';




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
  }

))



function AboutMeSkills(props) {
  const classes = useStyles();
  const classesGlobal = useStylesGlobal();



  return (
    <div >
      <div className={classes.PageSkills}>
        <Flash>
        <h1 className={classesGlobal.TextTitle}>IT.Skills</h1>
        </Flash>
        <Skills></Skills>
      </div>
    </div>
  )
}
 
export default AboutMeSkills;