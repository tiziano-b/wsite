import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, Event } from "react-timeline-scribble";
import Fade from 'react-reveal/';

// import Icon from './Icon.js'

const useStyles = makeStyles(theme => ({
    Timelineback: {
        background: "white",
        width: '70%',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
          },
    }
}))

function Timeline_page(props) {
    const classes = useStyles();

    return (
      <Fade>
        <div className={classes.Timelineback}>
    <Timeline>
      <Event interval={"October 2019"} title={"MSc in Advanced Software Engineering"} subtitle={"London | University of Westminster"} className={classes.TextTitle2}>
        Thesis: ”Predicting stock price trend using machine learning techniques” 
      </Event>
      <Event interval={"November 2017"} title={"Agile Scrum Foundation"} subtitle={"Certification"}>
        Agile service management techniques and Scrum development frameworks 
      </Event>
      <Event interval={"July 2015"} title={"BSc in Computer Science"} subtitle={"Milan | University of Bicocca"}>
        Thesis: "Analysis and implementation of an application developed in cross-platform: the Xamarin case"
      </Event>
    </Timeline>
        </div>
        </Fade>
    )
}

export default Timeline_page;