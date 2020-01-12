import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import imageApp from '../../assets/projects/iphone1.png'
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

function ActivityTrackerComponent(props) {
  const classes = useStyles();
  const styleGlobal = useStylesGlobal();

  return (
    <div className={classes.Page}>
      <h1 className={styleGlobal.TextTitle}>Activity Tracker</h1>
      <p className={styleGlobal.Text}>	Plan your activities with an easy-to-use interface. <br />
        Intuitive charts, calendar and feedbacks to help you track your activities. <br />
        Analyse progress and celebrate your goals!<br />
        <br /><br />
      </p>
      <div >
        <img className={styleGlobal.ImageLogo} src={imageApp} alt="screenshots"/>
      </div>
      <ColoredLine color='black' />
      <div>...</div>
      <p className={styleGlobal.Text}>
        <b className={styleGlobal.TextSubTitle}>Main Functionalities</b><br /><br/>
        - Manage Activities, with recursion and time of the day <br />
        - View Activities on Calendar<br />
        - Manage Category for Activity<br />
        - Set Goal for Category<br />
        - Set User Personal Information<br />
        - Coaching functionality - conflicts, recommendations based on Activities and Personal Information <br />
        <br /><br />
        <b className={styleGlobal.TextSubTitle}>Key Components used</b><br/><br/>
        - Core Data<br />
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

export default ActivityTrackerComponent;