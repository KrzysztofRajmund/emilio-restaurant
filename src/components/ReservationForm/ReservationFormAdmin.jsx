import React, { useState } from 'react';
//components
import HeaderJumbotron from '../Home/HeaderJumbotron';
//material-ui
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  const [selectedDate, setSelectedDate] = useState(new Date());
  //   const [firstname, setFirstname] = useState('');
  //   const [lastname, setLastname] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [phone, setPhone] = useState('');
  //   const [people, setPeople] = useState('');
  //   const [message, setMessage] = useState('');
  const [booking, setBooking] = useState({
    firstname: '',
    // lastname: '',
    email: '',
    // phone: '',
    // date: selectedDate,
    // people: '',
    message: '',
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT CLICKED !!!!!!!!!!!!!!!', booking);
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
          alert('Message sent');
          //   resetForm();
        } else if (response.status == 'fail') {
          alert('Message failed to send');
        }
      });
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  //   const resetForm = () => {
  //     setBooking({
  //       firstname: '',
  //       lastname: '',
  //       email: '',
  //       phone: '',
  //       date: selectedDate,
  //       people: '',
  //       message: '',
  //     });
  //   };

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
              {/* <Grid item xs={6}>
                <TextField
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
              </Grid> */}
              <Grid item xs={12}>
                <TextField
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
              {/* <Grid item xs={12}>
                <TextField
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
              </Grid> */}
              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={6}>
                  <KeyboardDatePicker
                    name='selectedDate'
                    value={selectedDate}
                    onChange={handleDateChange}
                    margin='normal'
                    id='date-picker-dialog'
                    label='Data'
                    format='dd/MM/yyyy'
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    InputProps={{
                      className: classes.input,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <KeyboardTimePicker
                    name='selectedDate'
                    value={selectedDate}
                    onChange={handleDateChange}
                    margin='normal'
                    id='time-picker'
                    label='Godzina'
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                    InputProps={{
                      className: classes.input,
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider> */}
              {/* <Grid item xs={12}>
                <TextField
                  name='selectedDate'
                  value={selectedDate}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='Data'
                  variant='filled'
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid> */}

              {/* <Grid item xs={12}>
                <TextField
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
              </Grid> */}
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
            </Grid>
            <button type='submit'>Wyślij</button>
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
