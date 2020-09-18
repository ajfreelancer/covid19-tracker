import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "10px 20px",
        textAlign: 'center',
        fontSize: "19px",
        fontFamily: "Montserrat",
        fontWeight: "600",
        color: "#ffffff",
        borderRadius: "5px",
        // boxShadow: "0px 0px 5px #BBBBBB",
        height: 24,
    },
    stats: {
        fontSize: "36px",
        marginTop: "1px"
    }
  }));

function LocalStatusPaper({ color, statName, data }) {
    
    const classes = useStyles();
    if(!data){
        return (
            <Paper elevation={0} className={classes.paper} style={{backgroundColor: color}}>
                <div>
                    <span style={{float: "left"}}>
                        {statName}
                    </span>
                    <span style={{float: "right"}}>
                        ---
                    </span>
                </div>
            </Paper>        
        )
    }

    return (
        <Paper elevation={0} className={classes.paper} style={{backgroundColor: color}}>
            <div>
                <span style={{float: "left"}}>
                    {statName}
                </span>
                <span style={{float: "right"}}>
                    {data.toLocaleString()}
                </span>
            </div>
        </Paper>        
    )
}

export default LocalStatusPaper
