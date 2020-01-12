import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'; 
import useStylesGlobal from '../style/TextStyles.js'
// import ColoredLine from '../../components/style/ColouredLine.js' 


const useStyles = makeStyles(theme => ({
    Page: {
        paddingTop: '1em',
        width: '80%',
        margin: 'auto',
        paddingBottom: '3em',
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '95%',
        },
    },
}));

function Personalcoding(props) {
  const classes = useStyles();
  const classesGlobal = useStylesGlobal();

  return (
    <div className={classes.Page}>
      <h1 className={classesGlobal.TextTitle}>Coding</h1>
      <h3 className={classesGlobal.Text}>I have created a few things during the 2019</h3>
      <p></p>
      <p className={classesGlobal.Text}><Link className={classesGlobal.textLinks} to="/ActivityTracker">iOS Activity Tracker</Link> ║ Swift, Core Data, Core Graphics, User Defaults, Custom View, Delegate, MVC</p>
      <p className={classesGlobal.Text}><Link className={classesGlobal.textLinks} to="/Calculator">iOS Unit Converter</Link> ║ Swift, User Defaults, Custom View, IBDesignable, IBInspectable, Sketch </p>
      <p className={classesGlobal.Text}><Link className={classesGlobal.textLinks} to="/StockForecasting">Full Stack Web App ☈ Stock Forecasting</Link> ║ Python, Flask, Docker, Machine Learning Algorithms, MySQL, HTML, JS</p>
      <p className={classesGlobal.Text}><Link className={classesGlobal.textLinks} to="/Earthquake">Big Data solution ☈ Earthquake track and analysis</Link> ║ Hadoop, Spark, MapReduce, Tableau, Unix Script, Python, Java</p>
      <p className={classesGlobal.Text}><Link className={classesGlobal.textLinks}>Website Portfolio</Link>  ║  ReactJS, HTML, JS, CSS</p>

    </div>
    
  )
}
 
export default Personalcoding;