import React, { useState } from 'react';
//components
import MenuSeasonalAdmin from './MenuSeasonalAdmin';
import GalleryAdmin from './GalleryAdmin';
//material-ui
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
//assets
import MenuSeasonalImage from '../../assets/dinner-image.jpg';
import GalleryImage from '../../assets/jumbotron-onas.jpg';

const images = [
  {
    url: MenuSeasonalImage,
    title: 'Menu Sezonowe',
    width: '50%',
  },
  {
    url: GalleryImage,
    title: 'Galeria',
    width: '50%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: '100px',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Buttons() {
  const classes = useStyles();

  const [show, setShow] = useState(true);

  const handleShow = (title) => {
    if (title === 'Menu Sezonowe') {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            onClick={() => handleShow(image.title)}
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component='span'
                variant='subtitle1'
                color='inherit'
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
      {show ? <MenuSeasonalAdmin /> : <GalleryAdmin />}
    </React.Fragment>
  );
}