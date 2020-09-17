import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Icon } from '@iconify/react';
import virusOutline from '@iconify/icons-mdi/virus-outline';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Montserrat",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mediummontserrat:{
    fontWeight: "500",
  },
  topheader:{
    background: "#F23847",
    boxShadow: "none"
  },
  reducingtbmargin:{
    minHeight: "55px",
  },
  headerfont:{
    fontSize: "24px",
    fontWeight: "800"
  },
  headerContent:{
    display: "flex",
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.topheader}>
        <Toolbar className={classes.reducingtbmargin}>
          <div style={{margin: "auto"}} className={classes.headerContent}>
            <div>
              <Icon icon={virusOutline} style={{color: '#fafafa', fontSize: '28px', marginRight: "4px"}} />
            </div>
            <div style={{margin: "0"}} className={classes.headerfont}>
                COVID<span className={classes.mediummontserrat}>COUNT</span> 
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
