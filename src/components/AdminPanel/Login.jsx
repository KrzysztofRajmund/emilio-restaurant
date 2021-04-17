import React, { useState, useEffect } from 'react';
//components
import AlertMessage from '../utils/AlertMessage';
import Admin from '../AdminPanel/Admin';
//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

// material-ui styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    '& .MuiFormLabel-root': {
      color: 'rgba(0, 0, 0, 0.24)',
      textTransform: 'uppercase',
      fontWeight: '500',
    },
    '& .Mui-focused': {
      color: 'rgba(0, 0, 0, 0.24)',
    },
    '& .MuiFilledInput-input': {
      color: '#1d1d1d',
    },
    '& .MuiPickersModal-dialog': {
      backgroundColor: 'red',
      color: 'red',
    },
  },
  button: {
    margin: theme.spacing(1),
    color: 'rgb(112, 0, 0)',
    borderColor: 'rgb(112, 0, 0)',
    '&:hover': {
      backgroundColor: 'rgb(112, 0, 0, 0.1)',
    },
  },

  textField: {
    margin: 5,
    color: '#1d1d1d',
  },
  input: {
    color: '#1d1d1d',
    backgroundColor: '#f5f5f5',
    '&::after': {
      borderBottom: '2px solid #dce4e7',
    },
  },
  textFieldFull: {
    margin: 5,
  },
}));

const ReservationFormAdmin = () => {
  const classes = useStyles();

  //useState hooks
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  //other input change
  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  //reset form
  const resetForm = () => {
    setLogin({
      username: '',
      password: '',
    });
  };

  //submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      login.username === 'emilio@gmail.com' &&
      login.password === 'emilio2021'
    ) {
      setAuth(true);
      resetForm();
    } else {
      setAuth(false);
      setStyle('error');
      setMessage(
        'Username lub hasło jest nieprawidłowe, wpisz ponownie lub skontaktuj się z działem IT'
      );
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    }
  };

  return (
    <React.Fragment>
      {!auth ? (
        <div className='form-container'>
          <div className='form-container__input'>
            <form
              onSubmit={handleSubmit}
              className={classes.root}
              validate
              autoComplete='off'
            >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    required
                    type='email'
                    name='username'
                    value={login.username}
                    onChange={(e) => handleInputChange(e)}
                    fullWidth
                    className={classes.textField}
                    id='filled-basic'
                    label='username '
                    variant='filled'
                    InputProps={{
                      className: classes.input,
                    }}
                    inputProps={{
                      minLength: 4,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    type='password'
                    name='password'
                    value={login.password}
                    onChange={(e) => handleInputChange(e)}
                    fullWidth
                    className={classes.textField}
                    id='filled-basic'
                    label='password'
                    variant='filled'
                    InputProps={{
                      className: classes.input,
                    }}
                    inputProps={{
                      minLength: 4,
                    }}
                  />
                </Grid>
                <Button
                  variant='outlined'
                  className={classes.button}
                  endIcon={
                    <Icon
                    // style={{ color: 'green' }}
                    >
                      send
                    </Icon>
                  }
                  type='submit'
                >
                  Login
                </Button>
                <AlertMessage style={style} message={message} open={open} />
              </Grid>
            </form>
          </div>
        </div>
      ) : (
        <Admin auth={auth} />
      )}
    </React.Fragment>
  );
};

export default ReservationFormAdmin;
