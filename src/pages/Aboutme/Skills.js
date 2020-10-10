import React from "react"
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useStylesGlobal from '../../components/style/TextStyles.js'
// import ColoredLine from '../../components/style/ColouredLine.js' 
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AppleIcon from '@material-ui/icons/Apple';
import Colours from '../../components/style/Colours.js'


const DefinedColours = new Colours();

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderColor: 'transparent',
        // borderColor: 'black',
        // background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: 'none',
    },
}));

// COLOURS of skills

const StyledRatingCoding = withStyles({
    iconFilled: {
      color: DefinedColours.color1,
    },
  })(Rating);
const StyledRatingMethodology = withStyles({
    iconFilled: {
      color: DefinedColours.color2,
    },
  })(Rating);
const StyledRatingAnalysis = withStyles({
    iconFilled: {
      color: DefinedColours.color3,
    },
  })(Rating);
const StyledRatingDesign = withStyles({
    iconFilled: {
      color: DefinedColours.color5,
    },
  })(Rating);

function Skills(props) {
    const classes = useStyles();
    const classesGlobal = useStylesGlobal();

    return (

        <div>
            <Grid container spacing={2} justify="center">

 
                <Grid item md={6} >  {/* md=4 */}
                    <Paper className={classes.paper} >
                        <h2 className={classesGlobal.TextTitle}>Coding Skills</h2>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Python | C#</p>
                            <StyledRatingCoding icon={<FiberManualRecordIcon fontSize="inherit" />} value={4.5} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Swift</p>
                            <StyledRatingCoding icon={<AppleIcon fontSize="inherit" />}value={4.0} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Java</p>
                            <StyledRatingCoding icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.0} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>C++</p>
                            <StyledRatingCoding icon={<FiberManualRecordIcon fontSize="inherit" />}value={3} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>HTML|CSS</p>
                            <StyledRatingCoding icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.0} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>JS|ReactJS</p>
                            <StyledRatingCoding icon={<FiberManualRecordIcon fontSize="inherit" />}value={2.5} precision={0.5} readOnly />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={6} >  {/* md=4 */}
                    <Paper className={classes.paper}>
                        <h2 className={classesGlobal.TextTitle}>Methodology</h2>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Agile</p>
                            <StyledRatingMethodology icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.5} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Rational Unified Process (RUP)</p>
                            <StyledRatingMethodology icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.5} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Scrum</p>
                            <StyledRatingMethodology icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.5} precision={0.5} readOnly />
                        </Box>
                        {/* <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>MVC</p>
                            <StyledRatingMethodology icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.5} precision={0.5} readOnly />
                        </Box> */}
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Extreme Programming (XP)</p>
                            <StyledRatingMethodology icon={<FiberManualRecordIcon fontSize="inherit" />}value={2.5} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Test Driven</p>
                            <StyledRatingMethodology icon={<FiberManualRecordIcon fontSize="inherit" />}value={2.5} precision={0.5} readOnly />
                        </Box>
                    </Paper>
                </Grid>
                
                <Grid item md={6} >  {/* md=4 */}
                    <Paper className={classes.paper}>
                        <h2 className={classesGlobal.TextTitle}>Analysis</h2>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>UML documentation</p>
                            <StyledRatingAnalysis  icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.5} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Use Cases</p>
                            <StyledRatingAnalysis  icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.5} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Algorithm Design</p>
                            <StyledRatingAnalysis  icon={<FiberManualRecordIcon fontSize="inherit" />}value={4} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Creative Thinking|Problem Solving</p>
                            <StyledRatingAnalysis  icon={<FiberManualRecordIcon fontSize="inherit" />}value={4} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Product Lifecycle</p>
                            <StyledRatingAnalysis  icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.0} precision={0.5} readOnly />
                        </Box>

                    </Paper>
                </Grid>
                <Grid item md={6} >  {/* md=4 */}
                    <Paper className={classes.paper}>
                        <h2 className={classesGlobal.TextTitle}>Design</h2>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Database|SQL</p>
                            <StyledRatingDesign  icon={<FiberManualRecordIcon fontSize="inherit" />}value={4} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Amazon AWS</p>
                            <StyledRatingDesign  icon={<FiberManualRecordIcon fontSize="inherit" />}value={3.0} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Balsamiq Mockup</p>
                            <StyledRatingDesign  icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.5} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>Adobe Suite</p>
                            <StyledRatingDesign  icon={<FiberManualRecordIcon fontSize="inherit" />}value={4.5} precision={0.5} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent" marginTop="-10px" marginBottom="-10px">
                            <p className={classesGlobal.TextSkills}>CSS</p>
                            <StyledRatingDesign  icon={<FiberManualRecordIcon fontSize="inherit" />}value={3.5} precision={0.5} readOnly />
                        </Box>
                    </Paper>
                </Grid>



            </Grid>



        </div>
    )
}

export default Skills;
