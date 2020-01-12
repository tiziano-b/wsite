import React from "react"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import pic1 from '../../assets/img1.jpg'
import pic2 from '../../assets/img2.jpg'
import pic3 from '../../assets/img3.jpg'
import pic4 from '../../assets/img4.jpg'
import pic5 from '../../assets/img5.jpg'
import pic6 from '../../assets/img6.jpg'
import pic7 from '../../assets/img7.jpg'
import pic8 from '../../assets/img8.jpg'
import useStylesGlobal from '../../components/style/TextStyles.js'
import { makeStyles } from '@material-ui/core/styles';
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';

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




function Photography(props) {
    const classes = useStyles();
    const globalclasses = useStylesGlobal();
    return (
        <div className={classes.Page}>
            <Swing duration={3000} forever={true}>
            <h1 className={globalclasses.TextTitle}>Hobbies</h1>
            </Swing>
            
            <p className={globalclasses.Text}><b className={classes.BackgroundHighlight1}>Piano / Guitar </b>- I started to learn music at 7 yo and I've never stopped!</p>
            <p className={globalclasses.Text}><b className={classes.BackgroundHighlight1}>Photography</b> - I love shooting with prime lens, <b className={classes.BackgroundHighlight2}>35 and 75mm</b> to capture life. </p>
            <p className={globalclasses.Text}><i>“The best thing about a picture is that it never changes, even when the people in it do.”</i> — Andy Warhol</p>
            <Fade>
            <AwesomeSlider className={classes.Photos}>
                <div data-src={pic1} />
                <div data-src={pic4} />
                <div data-src={pic5} />
                <div data-src={pic6} />
                <div data-src={pic8} />
            </AwesomeSlider>
            </Fade>
        </div>
    )
}

export default Photography;
