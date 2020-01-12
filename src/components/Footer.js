import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Colours from '../components/style/Colours.js'

const DefinedColours = new Colours();


const useStyles = makeStyles(theme => ({
    Text: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '600',        
      fontSize: '1em',
        textAlign: 'center',
        color: 'black',
        margin: 'auto',
        paddingBottom: '10px',
        paddingTop: '10px'
    },
    
    Footer: {
        height: '40px',
        // background: 'linear-gradient(45deg, '+ DefinedColours.color4+' 30%, '+ DefinedColours.color3+' 90%)',
        // background: 'linear-gradient(45deg, '+ DefinedColours.color4+' 0, '+ DefinedColours.color4+' 33%, '+ DefinedColours.color3+' 33%, '+ DefinedColours.color3+' 66%, '+ DefinedColours.color4+' 66%, '+ DefinedColours.color4+' 100%)',
        background: 'linear-gradient(to right, '+ DefinedColours.color4+','+ DefinedColours.color3+', '+ DefinedColours.color4+')',

        [theme.breakpoints.down('sm')]: {
          height: '60px',
        },
    }
  }))
  
  function Footer(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.Footer}>
          <h1 className={classes.Text}>© Tiziano Bissola 2019 ∞ Made with 100% recycled pixels.</h1>
    </div>
    )
  }
   
  export default Footer;