import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BGImg from '../images/bgImg.png';
import MainGrid from './MainGrid'

const useStyles = makeStyles((theme) => ({
  mainContainer:{
    height: "90vh",
    backgroundColor: "#FAFAFA",
    backgroundImage: `url(${BGImg})`
  }
}));

function MainContainer() {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <MainGrid />
        </div>
    )
}

export default MainContainer
