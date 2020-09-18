import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    width: "100%"
  },
  dropDown: {
    fontWeight: "500",
    border: "2px solid #555555 !important",
    borderRadius: "5px",
  }
}));

export default function CustomizedSelects({ data, eventForChange }) {
  const classes = useStyles();
  const [country, setCountry] = React.useState('Select a Country');
  const handleChange = (event) => {
    setCountry(event.target.value);
    eventForChange(event.target.value);
  };

  if(!data){
    return (
      <div>
        <FormControl className={classes.margin}>
          <NativeSelect
            id="demo-customized-select-native"
            className={classes.dropDown}
            value={country}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <option>Loading</option>
          </NativeSelect>
        </FormControl>
      </div>
    );
  }

  return (
    <div>
      <FormControl className={classes.margin}>
        <NativeSelect
          id="demo-customized-select-native"
          className={classes.dropDown}
          value={country}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value="Select a Country">Select a Country</option>
          {
            data.map( (val, index) => {
              return(
                <option key={index} value={val.Country}>{val.Country}</option>
              )
            })
          }
        </NativeSelect>
      </FormControl>
    </div>
  );
}
