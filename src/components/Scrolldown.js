import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "../../node_modules/react"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    icon:{
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}));

function Scrolldown(props) {
    const classes = useStyles();

    return (
        <div>
            <ExpandMoreIcon className={classes.icon}></ExpandMoreIcon>
        </div>
    )
}

export default Scrolldown;