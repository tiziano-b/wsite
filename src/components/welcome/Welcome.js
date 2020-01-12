import React from 'react';
import '../../pages/Aboutme/Aboutme.css'
import useStylesGlobal from '../../components/style/TextStyles.js'
// import ColoredLine from '../../components/style/ColouredLine.js' 
import Fade from 'react-reveal/';

  
  function Welcome(props) {
    const classes = useStylesGlobal();
  
    return (
      <div >
        <div className="Page">
          <h1 className={classes.WelcomeTitle}>Hello!<br/>I'am Tiziano</h1>
          <Fade count={2}>
          <h2 className={classes.WelcomeText}>Software Engineer <b style={{fontSize: '0.7em'}}>⋮</b> IT Business Analyst <b style={{fontSize: '0.7em'}}>⋮</b>   Developer</h2>
          </Fade>

        </div>
    </div>
    )
  }
   
  export default Welcome;