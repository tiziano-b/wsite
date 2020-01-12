import { makeStyles } from '@material-ui/core/styles';
import Colours from '../../components/style/Colours.js'

/*
TEXT STYLE
Poppins:400,600,800|Lato:400,600,800|Raleway:400,600,800|
Roboto:400,500,700,900|Space+Mono:400,700
*/

const WelcomeText = 'Poppins, sans-serif';
const SubtitleWelcomeText = 'Poppins, sans-serif';
const TitleText = 'Space Mono, monospace';
const SubtTitleText = 'Space Mono, monospace';
const Text = 'Roboto, sans-serif';
const TextSkills = 'Roboto, sans-serif';


const DefinedColours = new Colours();

const useStylesGlobal = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    WelcomeTitle: {
        fontFamily: WelcomeText,
        fontWeight: '600',
        fontSize: '8em',
        textAlign: 'center',
        color: DefinedColours.colorBlack,
        margin: 'auto',
        wordSpacing: '9px',
        marginBottom: '30px',
        paddingTop: '30px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '7em',

        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '5em',
            lineHeight: '120px',

        },
    },
    WelcomeText: {
        fontFamily: SubtitleWelcomeText,
        fontWeight: '400',
        textAlign: 'center',
        wordSpacing: '9px',
        color: DefinedColours.colorBlack,
    },
    TextTitle: {
        fontFamily: TitleText,
        fontSize: '2em',
        textAlign: 'center',
        color: DefinedColours.colorBlack,
        margin: 'auto',
        marginBottom: '30px',
        // paddingBottom: '10px',
        paddingTop: '1em'
    },
    // SUBTITLE OF PROJECTS
    TextSubTitle: {
        fontFamily: SubtTitleText,
        fontSize: '1em',
        color: DefinedColours.color4,
        fontWeight: '800',
        margin: 'auto',
        marginBottom: '30px',
        
        // paddingBottom: '10px',
        padding: '1em',
        backgroundColor: DefinedColours.color5,
    },
    Text: {
        fontFamily: Text,
        fontSize: '1.2em',
        textAlign: 'left',
        color: DefinedColours.colorBlack,
        marginTop: '-10px',
        lineHeight: '2',
        paddingBottom: '17px',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',

        },
    },

    TextSkills: {
        fontFamily: TextSkills,
        fontSize: '1em',
        textAlign: 'center',
        color: DefinedColours.colorBlack,
        marginTop: '-2px',
        marginBottom: '-0.5px',

        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',

        },
    },
    appbarLinks: {
        // color: theme_mine.palette.secondary.contrastText
        fontFamily: Text,
        fontSize: '1em',
        textDecoration: 'none',
        color: DefinedColours.color1,
        '&:hover': {
            borderBottom: '3px solid '+DefinedColours.color1+'',
            transition: '0.3s',
            paddingBottom: '0.5em',
            [theme.breakpoints.down('xs')]: {
              borderBottom: '3px solid '+DefinedColours.color2+'',
            },
            
         },
      },

    BackgroundHighlight1: {
        backgroundColor: DefinedColours.color4,
    },
    BackgroundHighlight2:{
        backgroundColor: DefinedColours.color3,
    },
    ImageLogo: {
        width: '50%',
        marginBottom: '3em',
        [theme.breakpoints.down('xs')]: {
            width: '80%',

        },
    },
    ImageMyFace:{
        width: '80%',
        textAlign: 'center',
        paddingTop: '2em',
        // marginBottom: '3em',
        [theme.breakpoints.down('xs')]: {
            width: '60%',

        },
    },
    textLinks: {
        color: 'black',
        fontWeight: '800',
        textDecoration: 'none',
        borderBottom: '3px solid '+DefinedColours.color2+'',
        paddingBottom: '3px',
        // slow down the transition
        transition: 'all .3s ease-in-out',
        '&:hover': {
        //   backgroundImage: 'linear-gradient(to right, '+ DefinedColours.color5+', '+ DefinedColours.color4+')',
        //   color: DefinedColours.color1,
        //   borderBottom: '0px solid black',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1.5em',
          fontWeight: '800',
          wordSpacing: '9px',
          color: DefinedColours.color2,
          borderBottom: '3px solid '+DefinedColours.color1+'',
        //   paddingBottom: '5px',
        //   paddingLeft:'5px',
        //   paddingTop:'5px',
        //   padding: '5px',
          transition: '0.4s'
       },
      },



}));

export default useStylesGlobal;