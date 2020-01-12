import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

// import Icon from './Icon.js'

const useStyles = makeStyles(theme => ({
    Text: {
        fontFamily: 'Lato, sans-serif',
        fontSize: '1em',
        textAlign: 'left',
        color: 'black',
        margin: 'auto',
        // paddingBottom: '10px',
        // paddingTop: '10px'
    },
    TextTitle: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '1em',
        textAlign: 'center',
        color: 'black',
        margin: 'auto',
        marginBottom: '1em',
        // paddingBottom: '10px',
        // paddingTop: '10px'
    },
    TextDate: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '1em',
        textAlign: 'left',
        color: 'black',
        margin: 'auto',
        
    },
    TextTitle2: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '14px',
        textAlign: 'center',
        color: 'black',
        paddingTop: '5px',
        paddingBottom: '5px',

    },
    Footer: {
        height: '40px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    Timelineback: {
        background: "white",
    }
}))

function Timeline_page(props) {
    const classes = useStyles();

    return (
        <div className={classes.Timelineback}>
            <Timeline lineColor={'#000'}>
                <TimelineItem
                    key="001"
                    dateText="October 2019"
                    style={{ color: '#e86971' }}
                    className={classes.TextDate}  
                >
                    <h3 className={classes.TextTitle}>MSc in Advanced Software Engineering</h3>
                    <h4 className={classes.TextTitle2}>@ London: University of Westminster</h4>
                    <p className={classes.Text}>
                        Description #1
                    </p>
                    <p className={classes.Text}>
                        Description #2
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="November 2017"
                    // dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    dateInnerStyle={{ background: '#fff', color: '#000', borderColor: '#000',}}
                    className={classes.TextDate}  
                    
                    // bodyContainerStyle={{
                    //     background: '#ddd',
                    //     padding: '20px',
                    //     borderRadius: '8px',
                    //     boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    // }}
                >
                    <h3 className={classes.TextTitle}>Agile Scrum Foundation</h3>
                    {/* <h4 className={classes.TextTitle2}>@ London: University of Westminster</h4> */}
                    <p className={classes.Text}>
                        Description #1
                    </p>
                    <p className={classes.Text}>
                        Description #2
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="001"
                    dateText="July 2015"
                    style={{ color: '#e86971' }}
                    className={classes.TextDate}  

                >
                    <h3 className={classes.TextTitle}>BSc in Computer Science</h3>
                    <h4 className={classes.TextTitle2}>@ Milan: University of Bicocca</h4>
                    <p className={classes.Text}>
                        Description #1
                    </p>
                    <p className={classes.Text}>
                        Description #2
                    </p>
                </TimelineItem>

            </Timeline>
        </div>
    )
}

export default Timeline_page;