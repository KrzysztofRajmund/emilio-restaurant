import React, { useState, useEffect } from 'react';
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

const EditMenu = ({ showEditMenu, onClose, getMenuItems, editItem }) => {
  const classes = useStyles();

  console.log(editItem, 'editItem');
  //useState hooks
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState({});

  //reset form
  const resetForm = () => {
    setMenu({
      id: '',
      type: '',
      category: '',
      title: '',
      description: '',
      price: null,
    });
  };

  useEffect(() => {
    setMenu({
      id: editItem._id,
      type: editItem.type,
      category: editItem.category,
      title: editItem.title,
      description: editItem.description,
      price: editItem.price,
    });
  }, [editItem]);
  // const [menu, setMenu] = useState({
  //   type: 'editItem.type',
  //   category: 'editItem.category',
  //   title: 'editItem.title',
  //   description: 'editItem.description',
  //   price: 'editItem.price',
  // });

  //input change
  const handleInputChange = (e) => {
    if (e.target.name === 'price' && e.target.value < 0) {
      console.log(e.target.name);
      setStyle('error');
      setMessage('Cena nie może być mniejsza niż 0');
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3500);
      e.target.value = 0;
      return;
    }

    setMenu({ ...menu, [e.target.name]: e.target.value });
    console.log(menu, 'menu');
  };

  //submit file
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = menu.id;
    let url =
      'https://emilio-restaurant-server.herokuapp.com/api/menu/update/' + id;
    let body = menu;
    console.log(url);
    axios
      .put(url, body)
      .then((response) => {
        setStyle('success');
        setMessage(response.data.message);
        setOpen(true);
        setTimeout(() => {
          //close message
          setOpen(false);
          //fetch all items with recent update
          getMenuItems();
          //close modal
          onClose(e);
        }, 3000);
        resetForm();
      })
      .catch((response, error) => {
        setStyle('error');
        // setMessage(response.data.message || '');
        setMessage('okey');
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3500);
      });
  };

  if (!showEditMenu) {
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
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  required
                  type='text'
                  name='type'
                  value={menu.type}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='typ'
                  variant='filled'
                  InputProps={{
                    className: classes.input,
                  }}
                  inputProps={{
                    minLength: 0,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type='text'
                  name='category'
                  value={menu.category}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='kategoria'
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
                  type='text'
                  name='title'
                  value={menu.title}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='tytuł'
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
                  type='text'
                  name='description'
                  value={menu.description}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='opis'
                  variant='filled'
                  InputProps={{
                    className: classes.input,
                  }}
                  inputProps={{
                    minLength: 0,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type='number'
                  name='price'
                  value={menu.price}
                  onChange={(e) => handleInputChange(e)}
                  fullWidth
                  className={classes.textField}
                  id='filled-basic'
                  label='cena'
                  variant='filled'
                  InputProps={{
                    className: classes.input,
                  }}
                  inputProps={{
                    minLength: 0,
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
                Edytuj
              </Button>
            </Grid>
          </form>
          <AlertMessage style={style} message={message} open={open} />
        </div>
      </div>
    </div>
  );
};

export default EditMenu;
