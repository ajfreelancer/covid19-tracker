import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MainGrid from './MainGrid'

const useStyles = makeStyles((theme) => ({
  mainContainer:{
      height: "87vh"
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
