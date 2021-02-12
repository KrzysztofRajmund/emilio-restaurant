// import React from 'react';
// //assets
// import MenuShortImage1 from '../../assets/1 (35-1).jpg';
// import MenuShortImage2 from '../../assets/1 (43-1).jpg';
// import MenuShortImage3 from '../../assets/1 (47-1).jpg';
// //font-awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
// //material ui
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: '#f5f5f5',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     backgroundColor: 'transparent',
//     borderRadius: 'none',
//   },
// }));

// const MenuShort = () => {
//   const classes = useStyles();

//   return (
//     <div className='menu-short-container'>
//       <div className={classes.root}>
//         <Grid container spacing={0}>
//           <Grid item sm={12} md={4}>
//             <Paper className={classes.paper} square elevation={0}>
//               <a href='/menu' className='menu-short-container__card'>
//                 <div className='menu-short-container__title'>
//                   <h1>Dania Główne</h1>
//                 </div>
//                 <div className='menu-short-container__image'>
//                   <img
//                     src={MenuShortImage1}
//                     alt='image-makarony'
//                     width='180px'
//                     height='180px'
//                   />
//                 </div>
//                 <div className='menu-short-container__subtitle'>
//                   <h5>Dania najlepsze w Szczecinie</h5>
//                   <span>
//                     Menu <FontAwesomeIcon icon={faAngleDoubleRight} />
//                   </span>
//                 </div>
//               </a>
//             </Paper>
//           </Grid>
//           <Grid item sm={12} md={4}>
//             <Paper className={classes.paper} square elevation={0}>
//               <a href='/menu' className='menu-short-container__card'>
//                 <div className='menu-short-container__title'>
//                   <h1>Desery</h1>
//                 </div>
//                 <div className='menu-short-container__image'>
//                   <img
//                     src={MenuShortImage2}
//                     alt='image-makarony'
//                     width='180px'
//                     height='180px'
//                   />
//                 </div>
//                 <div className='menu-short-container__subtitle'>
//                   <h5>Włoski styl desrów</h5>
//                   <span>
//                     Menu <FontAwesomeIcon icon={faAngleDoubleRight} />
//                   </span>
//                 </div>
//               </a>
//             </Paper>
//           </Grid>
//           <Grid item sm={12} md={4}>
//             <Paper className={classes.paper} square elevation={0}>
//               <a href='/menu' className='menu-short-container__card'>
//                 <div className='menu-short-container__title'>
//                   <h1>Wina</h1>
//                 </div>
//                 <div className='menu-short-container__image'>
//                   <img
//                     src={MenuShortImage3}
//                     alt='image-makarony'
//                     width='180px'
//                     height='180px'
//                   />
//                 </div>
//                 <div className='menu-short-container__subtitle'>
//                   <h5>Dobór najlepszych win</h5>
//                   <span>
//                     Menu <FontAwesomeIcon icon={faAngleDoubleRight} />
//                   </span>
//                 </div>
//               </a>
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default MenuShort;
