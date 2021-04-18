import React, { useState } from 'react';
//components
import AlertMessage from '../utils/AlertMessage';
import Admin from '../AdminPanel/Admin';
//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
//axios
import axios from 'axios';
//router
import { useHistory } from 'react-router-dom';

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
    color: 'rgb(0, 0, 0)',
    borderColor: 'rgb(0, 0, 0)',
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
  let history = useHistory();

  //useState hooks
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  //other input change
  const handleInputChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  //reset form
  const resetForm = () => {
    setRegister({
      name: '',
      email: '',
      password: '',
      password2: '',
    });
  };

  //submit button
  const handleSubmit = (e, history) => {
    e.preventDefault();

    axios
      .post('http://localhost:3002/api/users/register', register)
      .then((response) => {
        if (response.status == 200) {
          resetForm();
          history.push('/adminpanel/login');
        }
      })
      .catch((error) => {
        setStyle('error');
        setMessage('Email już jest zarejestrowany!');
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3500);
      });
  };

  return (
    <React.Fragment>
      <div className='form-container admin-signup'>
        <div className='form-container__input'>
          <form
            onSubmit={(e) => handleSubmit(e, history)}
            className={classes.root}
            validate
            autoComplete='off'
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  required
                  type='text'
                  name='name'
                  value={register.name}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='name '
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
                  type='email'
                  name='email'
                  value={register.email}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='email '
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
                  value={register.password}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='hasło'
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
                  name='password2'
                  value={register.password2}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='potwierdź hasło'
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
                Register
              </Button>
              <AlertMessage style={style} message={message} open={open} />
            </Grid>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReservationFormAdmin;
