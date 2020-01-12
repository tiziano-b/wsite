import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import imageApp from '../../assets/projects/forecasting_button.png'
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

function StockForecastingComponent(props) {
  const classes = useStyles();
  const classesGlobal = useStylesGlobal();

  return (
    <div className={classes.Page}>
      <h1 className={classesGlobal.TextTitle}>Stock Price trend forecasting</h1>
      <p className={classesGlobal.Text}>	Forecasts based on historical prices are studied applying Linear Regression, Polynomial Regression, and Neural Network Backpropagation aimed to identify Elliott wave and Fibonacci ratios. <br/>
      People sentiment, as a factor of stock price fluctuation is studied analysing messages published on Twitter using a Naïve Bayes approach.
        <br /><br />
      </p>
      <div >
        <img className={classesGlobal.ImageLogo} src={imageApp} alt="screenshots"/>
      </div>
      <ColoredLine color='black' />
      <div>...</div>
      <p className={classesGlobal.Text}>
        <b className={classesGlobal.TextSubTitle}>Main Functionalities</b><br /><br/>
        - daily automatic update of the data<br/>
			  - daily and intraday stock price data covered<br/>
			  - 6 ML forecasting algorithms implemented from scratch, including Neural Network and Natural Language Processing<br/>
			  - controller algorithm to identify the best algorithm to use for each stock<br/>
			  - detailed accuracy information of the forecasting algorithm executed<br/>
        <br /><br />
        <b className={classesGlobal.TextSubTitle}>Key Components used</b><br/><br/>
			  - Flask microframework<br/>
        - Python backend<br/>
			  - HTML/JS/CSS interface<br/>
        - MySQL database<br/>
			  - Docker<br/>
      </p>
    </div>
  )
}
 
export default StockForecastingComponent;
