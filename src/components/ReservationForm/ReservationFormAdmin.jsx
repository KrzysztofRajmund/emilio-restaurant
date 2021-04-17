import React, { useState } from 'react';
//components
import HeaderJumbotron from '../Home/HeaderJumbotron';
import AlertMessage from '../utils/AlertMessage';
//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

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
    // width: "100ch",
  },
}));

const ReservationFormAdmin = () => {
  const classes = useStyles();
  //useState hooks
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [booking, setBooking] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    date: {
      day: '',
      time: '',
    },
    people: '',
    message: '',
  });

  //date change
  const handleDateChange = (e) => {
    setBooking({
      ...booking,
      date: {
        ...booking.date,
        [e.target.name]: e.target.value,
      },
    });
  };
  //other input change
  const handleInputChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  //submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(booking, 'booking date');
    //post booking details
    fetch('http://localhost:3002/send', {
      method: 'POST',
      body: JSON.stringify(booking),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'success') {
          setStyle('success');
          setMessage('Prośba o rezerwację została pomyślnie wysłana');
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 3500);
          resetForm();
        } else if (response.status === 'fail') {
          setStyle('error');
          setMessage('Prosze uzupełnić wymagane pola!');
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 3500);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const resetForm = () => {
    setBooking({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      date: {
        day: '',
        time: '',
      },
      people: '',
      message: '',
    });
  };

  return (
    <React.Fragment>
      {window.location.pathname === '/rezerwacja' ? <HeaderJumbotron /> : ''}
      <div className='form-container'>
        <div className='form-container__input'>
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete='off'
          >
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  required
                  name='firstname'
                  onChange={(e) => handleInputChange(e)}
                  value={booking.firstname}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='Imię'
                  variant='filled'
                  InputProps={{
                    className: classes.input,
                  }}
                  floatingLabelFocusStyle={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  name='lastname'
                  value={booking.lastname}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='Nazwisko'
                  variant='filled'
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name='email'
                  value={booking.email}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='Email '
                  variant='filled'
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name='phone'
                  value={booking.phone}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='Telefon '
                  variant='filled'
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id='date'
                  label='Dzień'
                  type='date'
                  name='day'
                  value={booking.date.day}
                  onChange={(e) => handleDateChange(e)}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  required
                  id='time'
                  label='Godz.'
                  type='time'
                  name='time'
                  value={booking.date.time}
                  onChange={(e) => handleDateChange(e)}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  name='people'
                  value={booking.people}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='Ilość osób '
                  variant='filled'
                  type='number'
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='message'
                  value={booking.message}
                  onChange={(e) => handleInputChange(e)}
                  id='outlined-full-width'
                  className={classes.textFieldFull}
                  label='Wiadomość '
                  variant='filled'
                  helperText='Napisz jak możemy pomóc'
                  multiline
                  rows={3}
                  fullWidth
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Button
                variant='outlined'
                // color='action'
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
                Wyślij
              </Button>
              <AlertMessage style={style} message={message} open={open} />
            </Grid>
          </form>
        </div>
        <div className='form-container__card'>
          <div className='form-container__text'>
            <h1>Rezerwacja</h1>
            <h5>
              For parties of six or more, we recommend making reservations at
              least two weeks in advance. For walk-ins, we only seat parties on
              a first come, first served basis.
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReservationFormAdmin;
