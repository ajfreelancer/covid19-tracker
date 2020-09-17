import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "45px 0",
        textAlign: 'center',
        fontSize: "19px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        color: "#fafafa",
        borderRadius: "15px"
    },
    stats: {
        fontSize: "36px",
        marginTop: "1px"
    }
  }));

function GlobalStatusPaper({ color, status, data }) {
    
    const classes = useStyles();
    
    if(status === "loading"){
        return (
            <div>
                <Paper elevation={0} className={classes.paper} style={{backgroundColor: color}}>
                    <div>
                        TOTAL CASES
                    </div>
                    <div className={classes.stats}>
                        Loading...
                    </div>
                </Paper>
            </div>
        )
    }

    return (
        <div>
            <Paper elevation={0} className={classes.paper} style={{backgroundColor: color}}>
                <div>
                    TOTAL CASES
                </div>
                <div className={classes.stats}>
                    {data}
                </div>
            </Paper>
        </div>
    )
}

export default GlobalStatusPaper
