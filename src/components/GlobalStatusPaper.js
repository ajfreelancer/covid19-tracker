import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "30px 0",
        textAlign: 'center',
        fontSize: "19px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        color: "#ffffff",
        borderRadius: "10px",
        // boxShadow: "0px 0px 5px #BBBBBB",
        width: 273
    },
    stats: {
        fontSize: "36px",
        marginTop: "1px"
    }
  }));

function GlobalStatusPaper({ color, statName, data }) {
    
    const classes = useStyles();
    
    if(!data){
        return (
            <Paper elevation={0} className={`${classes.paper} globalStatsPaper`} style={{backgroundColor: color}}>
                <div>
                    {statName}
                </div>
                <div className={classes.stats}>
                    Loading...
                </div>
            </Paper>        
        )
    }

    return (
            <Paper elevation={0} className={`${classes.paper} globalStatsPaper`} style={{backgroundColor: color}}>
                <div>
                    {statName}
                </div>
                <div className={classes.stats}>
                    {data.toLocaleString()}
                </div>
            </Paper>
    )
}

export default GlobalStatusPaper
