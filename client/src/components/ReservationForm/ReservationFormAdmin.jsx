import React, { useState, useEffect } from 'react';
//components
import HeaderJumbotron from '../Home/HeaderJumbotron';
import AlertMessage from '../utils/AlertMessage';
import SeoHelmet from './../utils/SeoHelmet';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

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
  rodoButton: {
    margin: theme.spacing(1),
    color: 'rgb(112, 0, 0)',
    border: 'none',
    fontSize: '0.5rem',
    margin: '0',
    '&:hover': {
      color: 'rgb(0, 0, 0)',
      border: 'none',
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
  typography: {
    padding: theme.spacing(2),
    fontSize: '0.6rem',
  },
}));

const ReservationFormAdmin = () => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 2000,
    });
  }, []);

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

  //reset form
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

  //submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    //post booking details
    fetch('https://emilio-restaurant-server.herokuapp.com/send', {
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

  //rodo
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openRodo = Boolean(anchorEl);
  const id = openRodo ? 'simple-popover' : undefined;

  return (
    <React.Fragment>
      <SeoHelmet
        title='Kuchnia Włoska'
        description='Restauracja Szczecin, kuchnia włoska. Restauracja, restauracja szczecin, włoskie smaki.'
        imageUrl='http://www.emiliorestauracja.com/1%20(16).jpg'
        imageAlt='Restauracja Emilio'
      />
      {window.location.pathname === '/rezerwacja' ? <HeaderJumbotron /> : ''}
      <div className='form-container' id='rezerwacja'>
        <div
          className='form-container__input'
          data-aos={window.innerWidth < 770 ? 'flip-left' : 'zoom-in-right'}
        >
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            validate
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
                  inputProps={{
                    minLength: 3,
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
                  inputProps={{
                    minLength: 3,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type='email'
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
                  inputProps={{
                    minLength: 3,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type='number'
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
                  inputProps={{
                    minLength: 8,
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
                  type='number'
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
              <Grid item xs={12}>
                <Checkbox
                  required
                  color='default'
                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
                <Button
                  aria-describedby={id}
                  color='primary'
                  onClick={handleClick}
                  variant='outlined'
                  className={classes.rodoButton}
                >
                  Wyrażam zgodę na przetwarzanie moich danych osobowych...
                </Button>
                <Popover
                  id={id}
                  open={openRodo}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Typography className={classes.typography}>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych,
                    podanych w powyższym formularzu, wyłącznie w celu udzielenia
                    odpowiedzi na wysłaną przeze mnie wiadomość. Podane w
                    formularzu dane osobowe mogą być przetwarzane przez
                    administratora zgodnie z obowiązującymi w tym zakresie
                    przepisami RODO oraz Polityką Prywatności. Podanie danych
                    jest dobrowolne. Administrator umożliwia m.in. wgląd do
                    danych osobowych i zapewnia prawo ich poprawiania, jak i
                    usunięcia.
                  </Typography>
                </Popover>
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
                Wyślij
              </Button>
              <AlertMessage style={style} message={message} open={open} />
            </Grid>
          </form>
        </div>
        <div
          className='form-container__card'
          data-aos={window.innerWidth < 770 ? 'zoom-in' : 'zoom-in-left'}
        >
          <div className='form-container__text'>
            <h1>Rezerwacja</h1>
            <h5>
              W przypadku spotkań powyżej sześciu osób rekomendujemy dokonać
              rezerwacji z przynajmniej tygodniowym wyprzedzeniem.
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReservationFormAdmin;
