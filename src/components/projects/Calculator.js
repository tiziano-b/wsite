import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import imageApp from '../../assets/projects/iphone2.png'
import useStylesGlobal from '../style/TextStyles.js'
import ColoredLine from '../style/ColouredLine.js' 



const useStyles = makeStyles(theme => ({


  Page: {
    width: '80%',
    margin: 'auto',
    paddingBottom: '3em',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '95%',
    },
  },

}));
function CalculatorComponent(props) {
  const classes = useStyles();
  const classesGlobal = useStylesGlobal();


  return (
    <div className={classes.Page}>
      <h1 className={classesGlobal.TextTitle}>Unit Converter</h1>
      <p className={classesGlobal.Text}>	The app allows you to convert weights, temperature, volumes, liquid volumes, distance and speed.  <br />
        <br /><br />
      </p>
      <div >
        <img className={classesGlobal.ImageLogo} src={imageApp} alt="screenshots"/>
      </div>
      <ColoredLine color='black' />
      <div>...</div>
      <p className={classesGlobal.Text}>
        <b className={classesGlobal.TextSubTitle}>Main Functionalities</b><br /><br/>
        - Custom Keyboard created from scratch<br />
        - History functionality to review the last 5 conversion maded<br />
        - Most popular units covered<br />
        <br /><br />
        <b className={classesGlobal.TextSubTitle}>Key Components used</b><br/><br/>
        - Scroll Views<br />
        - Core Graphics <br />
        - User Defaults<br />
        - Custom View<br />
        - IBDesignable, IBInspectable<br />
        - Delegate<br />
        - MVC<br />
      </p>
    </div>
  )
}
 
export default CalculatorComponent;