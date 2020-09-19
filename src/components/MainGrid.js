import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GlobalStatusPaper from './GlobalStatusPaper'
import SectionTwo from './SectionTwo';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: `0 ${window.innerWidth<510?30:75}px`
  },
  heroText:{
    textAlign: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "28px",
    lineHeight: "55px",
    color: "#333333",
    margin: "5px 0"
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
  },
  heroGrid:{
    padding: "10px 0px"
  },
  statsGrid:{
    width: "100%",
    margin: "-12px 0 0 0"
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  let [globalStats, setGlobalStats] = useState([
    { color: "#2F80ED", title: "TOTAL CASES" },
    { color: "#00D232", title: "RECOVERED" },
    { color: "#F7A912", title: "ACTIVE" },
    { color: "#F23847", title: "DEATHS" },
  ]);
  let [isFetchingData, setIsFetchingData] = useState(true);

  async function fetchData(){
      setIsFetchingData(true);
      let rawdata = await fetch("https://api.covid19api.com/summary");
      let data = await rawdata.json();
      let info = [
        { color: "#2F80ED", data: data.Global.TotalConfirmed, title: "TOTAL CASES" },
        { color: "#00D232", data: data.Global.TotalRecovered, title: "RECOVERED" },
        { color: "#F7A912", data: data.Global.NewRecovered, title: "ACTIVE" },
        { color: "#F23847", data: data.Global.TotalDeaths, title: "DEATHS" },
      ]
      setGlobalStats(info);
      setIsFetchingData(false);
  }

  useEffect(() => {
      fetchData();
  }, [])

  if(isFetchingData){
    return(
      <>
        <div className={classes.root}>
            <Grid container spacing={3} style={{margin: "0"}}>
            <Grid item xs={12}>
                <div className={classes.heroText}>
                    <div style={{display: "inline"}}>KEEPING</div>
                    <span className={classes.worldText}> WORLD</span> 
                    <span className={classes.awareText}> AWARE</span> 
                    <span className={classes.everydayText}> EVERYDAY</span>
                </div>
            </Grid>
            <Grid container justify="center" spacing={3} className={classes.statsGrid}>
              { globalStats.map( (val, index) => {
                return(
                  <Grid key={index} item className="globalStatusPaperGridItem">
                    <GlobalStatusPaper color={val.color} statName={val.title}/>
                  </Grid>
                )
              }) }
            </Grid>
            </Grid>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <div className={classes.root}>
      <Grid container className={classes.topLevelContainer}>
        <Grid item xs={12} className={classes.heroGrid}>
            <div className={classes.heroText}>
                <div style={{display: "inline"}}>KEEPING</div>
                <span className={classes.worldText}> WORLD</span> 
                <span className={classes.awareText}> AWARE</span> 
                <span className={classes.everydayText}> EVERYDAY</span>
            </div>
        </Grid>
        <Grid container justify="center" spacing={3} className={classes.statsGrid}>
          { 
            globalStats.map( (val, index) => {
            return(
              <Grid key={index} item className="globalStatusPaperGridItem">
                <GlobalStatusPaper color={val.color} statName={val.title} data={val.data}/>
              </Grid>
            )
            }) 
          }
        </Grid>
        <SectionTwo />
      </Grid>
    </div>
      <Footer />
    </>
  );
}