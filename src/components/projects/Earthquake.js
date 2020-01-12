import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import imageApp from '../../assets/projects/earth_button3.png'
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

function EarthquakesComponent(props) {
  const classes = useStyles();
  const classesGlobal = useStylesGlobal();


  return (
    <div className={classes.Page}>
      <h1 className={classesGlobal.TextTitle}>Earthquakes tracker</h1>
      <p className={classesGlobal.Text}>	The application is used to store and visualize earthquakes' information. <br/>
      It allows the final user to view all the specific details of the earthquake, the detail of the closest city affected by the earthquake, the image of the wave recorded by the near Seismometer and if exist, news article related to the specific earthquake. <br/>
      In addition, it extracts and shows from the identified articles the sentences related to death or injuries.
        <br /><br />
      </p>
      <div >
        <img className={classesGlobal.ImageLogo} src={imageApp} alt="screenshots"/>
      </div>
      <ColoredLine color='black' />
      <div>...</div>
      <p className={classesGlobal.Text}>
        <b className={classesGlobal.TextSubTitle}>Main Functionalities</b><br /><br/>
        - custom visualization of the earthquakes on the map based on the magnitude and affected population<br/>
			  - interactive map<br/>
			  - 40+ years covered, from 1980 - today<br/>
			  - earthquake data refreshed daily<br/>
			  - dynamic one-page design for the information display<br/>
        - Machine Learning Naive Bayes classifier<br/>
        - 6 different datasource with semi-structured / unstructured data format<br/>
        <br /><br />
        <b className={classesGlobal.TextSubTitle}>Key Components used</b><br/><br/>
			  - Bash script to query and download periodically earthquake info using the API provided by the USGS<br/>
			  - HDFS | Fault Tolerance, Reliability, Scalability<br/>
			  - Hive | Java UDF<br/>
			  - MRJob | Python  | Map Reduce solutions<br/>
			  - Tableau<br/>
      </p>
    </div>
  )
}
 
export default EarthquakesComponent;