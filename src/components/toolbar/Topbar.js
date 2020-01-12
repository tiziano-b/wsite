import React from 'react';
import '../../App.css';

import { Route, Link } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Projects from '../../pages/projects/Projects.js'; 
import Aboutme from '../../pages/Aboutme/Aboutme.js'; 

import ActivityTracker from '../../pages/projects/ActivityTracker.js'; 
import Calculator from '../../pages/projects/Converter.js'; 
import StockForecasting from '../../pages/projects/StockForecasting.js'; 
import Earthquake from '../../pages/projects/Earthquake.js'; 

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Colours from '../../components/style/Colours.js'
import useStylesGlobal from '../style/TextStyles.js'

const DefinedColours = new Colours();

const useStyles = makeStyles(theme => ({
  menuButton: {
    width: '100px',
    backgroundColor: "#FFF",
    fontSize: '1em',
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#FFF",
    },
    [theme.breakpoints.down('sm')]: {
      height: 30,
      // fontSize: 10,
    },
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  title: {
    width: '100px',
  },
  title_left: {
    marginLeft: 'auto',
    marginRight: '5px',
    width: '100px',
  },
  title_right: {
    marginRight: 'auto',
    width: '100px',
    color: 'black',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transition: '0.3s',
      // paddingBottom: '0.5em',
      fontSize: '3em',
      color: DefinedColours.color2,
    }
  },
  menuButtonLeft: {
    marginLeft: 'auto',
    marginRight: '5px',
    width: '100px',
    backgroundColor: "#FFF",
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#FFF",
    },
    [theme.breakpoints.down('sm')]: {
      height: 30,
      fontSize: 10,

    },
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  menuButtonRight: {
    marginRight: 'auto',
    width: '100px',
    backgroundColor: "#FFF",
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#FFF",
    },
    [theme.breakpoints.down('sm')]: {
      height: 30,
      fontSize: 10,
    },
  },

  appbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'white',
      height: 50,
      boxShadow: "1px 3px 1px #9E9E9E",
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
}));


  function Topbar (props){
      const classes = useStyles();
      const classesGlobal = useStylesGlobal();

    return(
        <div className="navigation">
          <AppBar position="sticky" className={classes.appbar}>
              <Toolbar>
                {/* <Typography variant="h6" className={classes.title_right}> <Link to="/" className={classes.appbarLinks}>Magic</Link> </Typography> */}
                <a href="mailto:tiziano.bissola.uk@gmail.com" color={'black'}><MailOutlineIcon className={classes.title_right}></MailOutlineIcon></a>
                <Typography variant="h6" className={classes.title_left}> <Link to="/" className={classesGlobal.appbarLinks}>About Me</Link> </Typography>
                <Typography variant="h6" className={classes.title}> <Link to="/Projects" className={classesGlobal.appbarLinks}>Projects</Link> </Typography>
              </Toolbar>
            </AppBar>
            {/* routing --> */}
            <Route path="/Projects" component={Projects} /> 
            <Route exact path="/" component={Aboutme}/>
            <Route path="/ActivityTracker" component={ActivityTracker} /> 
            <Route path="/Earthquake" component={Earthquake} /> 
            <Route path="/Calculator" component={Calculator} /> 
            <Route path="/StockForecasting" component={StockForecasting} /> 

          </div>
    )
  }


  export default Topbar;