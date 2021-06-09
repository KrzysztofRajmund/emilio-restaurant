import React, { useState } from 'react';
//components
import AlertMessage from '../utils/AlertMessage';
//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
//router
import { Link } from 'react-router-dom';
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
  buttonLink: {
    fontSize: 'small',
    margin: 'auto 2px',
    color: 'rgb(0, 0, 0)',
    borderColor: 'rgb(0, 0, 0)',
    textAlign: 'center',
    '&:hover': {
      color: 'rgb(0, 0, 0,0.5)',
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
  //route history
  let history = useHistory();

  //useState hooks
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  // const [user, setUser] = useState();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  //other input change
  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  //reset form
  const resetForm = () => {
    setLogin({
      email: '',
      password: '',
    });
  };

  //submit button
  const handleSubmit = (e, history) => {
    e.preventDefault();

    axios
      .post(
        'https://emilio-restaurant-server.herokuapp.com/api/users/login',
        login
      )
      .then((response) => {
        if (response.status == 200) {
          //set token to local storage
          localStorage.setItem('jwtToken', response.data.token);
          // //decode user to get his data
          // const userDecode = jwt_decode(response.data.token);
          // //set user data in variable
          // setUser(userDecode);
          resetForm();
          //push user to dashboard
          history.push('/adminpanel/admin');
        }
      })
      .catch((error) => {
        setStyle('error');
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3500);
        if (error.response.data.emailnotfound) {
          setMessage('Nieznaleziono użytkownika! Wpisz email jeszcze raz.');
        }

        if (error.response.data.passwordincorrect) {
          setMessage('Hasło nieprawidłowe.');
        }
      });
  };
  return (
    <React.Fragment>
      <div className='form-container admin-signup'>
        <div className='form-container__input'>
          <form
            onSubmit={(e) => handleSubmit(e, history)}
            className={classes.root}
            validate='true'
            autoComplete='off'
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  required
                  type='email'
                  name='email'
                  value={login.email}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='email'
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
                Zaloguj
              </Button>
              {/* <Link to='/adminpanel/register' className={classes.buttonLink}>
                Zarejestruj się
              </Link> */}
              <Link to='/' className={classes.buttonLink}>
                Wróć
              </Link>
              <AlertMessage tabStyle={style} message={message} open={open} />
            </Grid>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReservationFormAdmin;
