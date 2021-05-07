import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  snackBar: {
    bottom: '15%',
    position: 'absolute',
    width: '100%',
  },
}));

const AlertMessage = ({ style, message, open }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Snackbar
        className={classes.snackBar}
        open={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert severity={style}>{message}</Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default AlertMessage;
