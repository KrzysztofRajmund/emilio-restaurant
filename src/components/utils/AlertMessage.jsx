import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertMessage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Alert severity='success'>This is a success message!</Alert>
    </React.Fragment>
  );
};

export default AlertMessage;
