import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BorderSelect from './BorderSelect';
import LocalStatusPaper from './LocalStatusPaper';
import Chart from './Chart'

const useStyles = makeStyles((theme) => ({
    countrySelect:{
      width: "400px",
    },
    sectionTwo:{
      margin: "15px 23px"
    },
    leftContainer:{
      width: 410,
    },
    rightContainer:{
        width: 750,
        margin: 0
    },
    timeLineText:{
        textAlign: "center",
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "23px",
        color: "#F23847",
      },
    graph:{
        marginLeft: 10,
    }
  }));
function SectionTwo() {
    const classes = useStyles();
    let [localStats, setLocalStats] = useState("");
    let [isFetchingData, setIsFetchingData] = useState(true);
    let [GraphData, setGraphData] = useState("");
    let [countryData, setCountryData] = useState([
        { color: "#2F80ED", title: "TOTAL CASES" },
        { color: "#00D232", title: "RECOVERED" },
        { color: "#F7A912", title: "ACTIVE" },
        { color: "#F23847", title: "DEATHS" },
    ])

    useEffect(() => {
        async function fetchData(){
            setIsFetchingData(true);
            let rawdata = await fetch("https://api.covid19api.com/summary");
            let data = await rawdata.json();
            setLocalStats(data);
            setIsFetchingData(false);
        }
        fetchData();
    }, [])

    async function get30DaysData(country){
        let rawdata = await fetch(`https://api.covid19api.com/live/country/${country.toLowerCase().replace(" ", "-")}/status/confirmed/date/2020-03-01T21:22:07Z`);
        let data = await rawdata.json();
        setGraphData(data);
    }

    function UpdateLocalData(countryClicked){
        if(!(countryClicked === "Select a Country")){
            let countryInfo = localStats.Countries.filter((country) => country.Country===countryClicked)[0];
            let info = [
                { color: "#2F80ED", data: countryInfo.TotalConfirmed, title: "TOTAL CASES" },
                { color: "#00D232", data: countryInfo.TotalRecovered, title: "RECOVERED" },
                { color: "#F7A912", data: countryInfo.TotalConfirmed-countryInfo.TotalRecovered-countryInfo.TotalDeaths, title: "ACTIVE" },
                { color: "#F23847", data: countryInfo.TotalDeaths, title: "DEATHS" },
            ]
            setCountryData(info);
            get30DaysData(countryClicked);
        }else{
            let info = [
                { color: "#2F80ED", title: "TOTAL CASES" },
                { color: "#00D232", title: "RECOVERED" },
                { color: "#F7A912", title: "ACTIVE" },
                { color: "#F23847", title: "DEATHS" },
            ]
            setCountryData(info)
        }
        
    }

    return (
        <Grid container className={classes.sectionTwo} justify="center">
          <Grid container direction="column" spacing={1} className={classes.leftContainer}>
            <Grid item style={{width: "100%"}}>
                <BorderSelect className={classes.countrySelect} data={localStats.Countries} eventForChange={UpdateLocalData}/>
            </Grid>
            {
                countryData.map( (v, i) => {
                    return(
                        <Grid key={i} item>
                            <LocalStatusPaper color={v.color} statName={v.title} data={v.data} />
                        </Grid>
                    )
                })
            }
            
          </Grid>
          <Grid container direction="column" spacing={1} className={classes.rightContainer}>
            <Grid item className={classes.timeLineText}>
                TIMELINE
            </Grid>
            <Grid item className={classes.graph}>
                <Chart data={GraphData} />
            </Grid>
          </Grid>
        </Grid>
    )
}

export default SectionTwo
