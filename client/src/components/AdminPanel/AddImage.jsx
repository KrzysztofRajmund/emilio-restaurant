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

const AddImage = ({ showAddProduct, onClose, getImagesBucket }) => {
  const classes = useStyles();

  //useState hooks
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();

  //other input change
  //   const handleInputChange = (e) => {
  //     setImage({ ...image, [e.target.name]: e.target.value });
  //   };

  //reset form
  //   const resetForm = () => {
  //     setImage({
  //       album: '',
  //     });
  //   };

  //select file
  const handleInputImage = (e) => {
    if (e.target.files[0].size > 1024000) {
      setStyle('error');
      setOpen(true);
      setMessage('Max. rozmiar pliku 1mb');
      setTimeout(() => {
        setOpen(false);
      }, 3500);
    } else {
      setImage(e.target.files[0]);
    }
  };

  //submit file
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      //GET SECURE URL FROM AMAZON S3
      const { url } = await axios(
        'https://emilio-restaurant-server.herokuapp.com/s3PutUrl'
      ).then((response) => response.data);
      //POST IMAGE TO AMAZON S3 DIRECTLY FROM CLIENT
      await axios.put(url, image).then((response) => {
        if (response.status !== 200) {
          setStyle('error');
          setOpen(true);
          setMessage('Wybierz plik jeszce raz');
          setTimeout(() => {
            setOpen(false);
          }, 3500);
        } else {
          setStyle('success');
          setMessage('Zdjęcie zostało dodane');
          setOpen(true);
          setTimeout(() => {
            //close message
            setOpen(false);
            //fetch all items with recent update
            getImagesBucket();
            //close modal
            onClose(e);
          }, 3000);
        }
      });
    }
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
            validate='true'
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
                  onChange={(e) => handleInputImage(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
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
            </Grid>
          </form>
          <AlertMessage style={style} message={message} open={open} />
        </div>
      </div>
    </div>
  );
};

export default AddImage;
