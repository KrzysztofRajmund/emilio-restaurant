import React, { useState } from 'react';
//components
import AlertMessage from '../utils/AlertMessage';

//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
//axios
import axios from 'axios';

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

const AddProduct = ({ showAddProduct, onClose }) => {
  const classes = useStyles();

  //useState hooks
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({
    album: '',
  });

  //other input change
  const handleInputChange = (e) => {
    setImage({ ...image, [e.target.name]: e.target.value });
  };

  //reset form
  const resetForm = () => {
    setImage({
      album: '',
    });
  };

  //TEST
  const [imageTest, setImageTest] = useState(null);
  const handleImageTest = (e) => {
    setImageTest(e.target.files[0]);
    console.log(e.target.files[0], 'file input');
    //do filsize error
  };

  //submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('need to set up url');
  };

  if (!showAddProduct) {
    return null;
  }
  return (
    <div className='admin-modal__container'>
      <div className='form-container admin-signup'>
        <div className='admin-modal__exit' onClick={(e) => onClose(e)}>
          X
        </div>
        <div className='form-container__input'>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className={classes.root}
            validate
            autoComplete='off'
          >
            <Grid container spacing={1}>
              {/* <Grid item xs={12}>
                <TextField
                  autoFocus
                  required
                  type='text'
                  name='album'
                  value={image.album}
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
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  type='file'
                  accept='image/png,image/jpeg,image/jpg'
                  name='image'
                  onChange={(e) => handleImageTest(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  //   label='email '
                  variant='filled'
                  InputProps={{
                    className: classes.input,
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
                Dodaj
              </Button>
              <AlertMessage style={style} message={message} open={open} />
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
