import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GlobalStatusPaper from './GlobalStatusPaper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 125px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heroText:{
    textAlign: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "28px",
    lineHeight: "55px",
    color: "#333333",
    margin: "5px"
  },
  worldText:{
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#2C46F2"
  },
  awareText:{
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#F21F31" 
  },
  everydayText:{
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#219653"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  let [globalStats, setGlobalStats] = useState("");
  let [isFetchingData, setIsFetchingData] = useState(true);

  async function fetchData(){
      setIsFetchingData(true);
      let rawdata = await fetch("https://api.covid19api.com/summary");
      let data = await rawdata.json();
      setGlobalStats(data);
      setIsFetchingData(false);
  }

  useEffect(() => {
      fetchData();
  }, [])

  if(isFetchingData){
    return(
        <div className={classes.root}>
            <Grid container spacing={3} style={{margin: "0"}}>
            <Grid item xs={12}>
                <div className={classes.heroText}>
                    MAKING THE 
                    <span className={classes.worldText}> WORLD</span> 
                    <span className={classes.awareText}> AWARE</span> 
                    <span className={classes.everydayText}> EVERYDAY</span>
                </div>
            </Grid>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"
            >
                <Grid item xs={3}>
                <GlobalStatusPaper color="#2F80ED" status="loading"/>
                </Grid>
                <Grid item xs={3}>
                <GlobalStatusPaper color="#00D232" status="loading"/>
                </Grid>
                <Grid item xs={3}>
                <GlobalStatusPaper color="#F7A912" status="loading"/>
                </Grid>
                <Grid item xs={3}>
                <GlobalStatusPaper color="#F23847" status="loading"/>
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{margin: "0"}}>
        <Grid item xs={12}>
            <div className={classes.heroText}>
                MAKING THE 
                <span className={classes.worldText}> WORLD</span> 
                <span className={classes.awareText}> AWARE</span> 
                <span className={classes.everydayText}> EVERYDAY</span>
            </div>
        </Grid>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          <Grid item xs={3}>
            <GlobalStatusPaper color="#2F80ED" status="OK" data={globalStats.Global.TotalConfirmed}/>
          </Grid>
          <Grid item xs={3}>
            <GlobalStatusPaper color="#00D232" status="OK" data={globalStats.Global.TotalRecovered}/>
          </Grid>
          <Grid item xs={3}>
            <GlobalStatusPaper color="#F7A912" status="OK" data={globalStats.Global.NewConfirmed}/>
          </Grid>
          <Grid item xs={3}>
            <GlobalStatusPaper color="#F23847" status="OK" data={globalStats.Global.TotalDeaths}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}