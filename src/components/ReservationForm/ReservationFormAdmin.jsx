// import React from 'react';
// //components
// import HeaderJumbotron from '../Home/HeaderJumbotron';
// //material-ui
// import TextField from '@material-ui/core/TextField';
// import { ThemeProvider } from '@material-ui/styles';
// import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     '& .MuiFormLabel-root': {
//       color: 'rgba(0, 0, 0, 0.24)',
//       textTransform: 'uppercase',
//       fontWeight: '500',
//     },
//     '& .Mui-focused': {
//       color: 'rgba(0, 0, 0, 0.24)',
//     },
//     '& .MuiFilledInput-input': {
//       color: '#1d1d1d',
//     },
//     '& .MuiPickersModal-dialog': {
//       backgroundColor: 'red',
//       color: 'red',
//     },
//   },
//   textField: {
//     margin: 5,
//     color: '#1d1d1d',
//   },
//   input: {
//     color: '#1d1d1d',
//     backgroundColor: '#f5f5f5',
//     '&::after': {
//       borderBottom: '2px solid #dce4e7',
//     },
//   },
//   textFieldFull: {
//     margin: 5,
//     // width: "100ch",
//   },
// }));

// const ReservationForm = () => {
//   const classes = useStyles();
//   const [selectedDate, setSelectedDate] = React.useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
//   return (
//     <React.Fragment>
//       {window.location.pathname === '/rezerwacja' ? <HeaderJumbotron /> : ''}
//       <div className='form-container'>
//         <div className='form-container__input'>
//           <form className={classes.root} noValidate autoComplete='off'>
//             <Grid container spacing={1}>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   className={classes.textField}
//                   id='filled-basic'
//                   label='Imię'
//                   variant='filled'
//                   InputProps={{
//                     className: classes.input,
//                   }}
//                   floatingLabelFocusStyle={{
//                     className: classes.floatingLabelFocusStyle,
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   className={classes.textField}
//                   id='filled-basic'
//                   label='Nazwisko'
//                   variant='filled'
//                   InputProps={{
//                     className: classes.input,
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   className={classes.textField}
//                   id='filled-basic'
//                   label='Email '
//                   variant='filled'
//                   InputProps={{
//                     className: classes.input,
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   className={classes.textField}
//                   id='filled-basic'
//                   label='Telefon '
//                   variant='filled'
//                   InputProps={{
//                     className: classes.input,
//                   }}
//                 />
//               </Grid>
//               <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <Grid item xs={6}>
//                   <KeyboardDatePicker
//                     margin='normal'
//                     id='date-picker-dialog'
//                     label='Data'
//                     format='dd/MM/yyyy'
//                     value={selectedDate}
//                     onChange={handleDateChange}
//                     KeyboardButtonProps={{
//                       'aria-label': 'change date',
//                     }}
//                     InputProps={{
//                       className: classes.input,
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <KeyboardTimePicker
//                     margin='normal'
//                     id='time-picker'
//                     label='Godzina'
//                     value={selectedDate}
//                     onChange={handleDateChange}
//                     KeyboardButtonProps={{
//                       'aria-label': 'change time',
//                     }}
//                     InputProps={{
//                       className: classes.input,
//                     }}
//                   />
//                 </Grid>
//               </MuiPickersUtilsProvider>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   className={classes.textField}
//                   id='filled-basic'
//                   label='Data'
//                   variant='filled'
//                   value={selectedDate}
//                   InputProps={{
//                     className: classes.input,
//                   }}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   className={classes.textField}
//                   id='filled-basic'
//                   label='Ilość osób '
//                   variant='filled'
//                   type='number'
//                   InputProps={{
//                     className: classes.input,
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   id='outlined-full-width'
//                   className={classes.textFieldFull}
//                   label='Wiadomość '
//                   variant='filled'
//                   helperText='Napisz jak możemy pomóc'
//                   multiline
//                   rows={3}
//                   fullWidth
//                   InputProps={{
//                     className: classes.input,
//                   }}
//                 />
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//         <div className='form-container__card'>
//           <div className='form-container__text'>
//             <h1>Rezerwacja</h1>
//             <h5>
//               For parties of six or more, we recommend making reservations at
//               least two weeks in advance. For walk-ins, we only seat parties on
//               a first come, first served basis.
//             </h5>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default ReservationFormAdmin;
