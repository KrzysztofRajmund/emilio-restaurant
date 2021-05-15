import React, { useState, useEffect } from 'react';
//material ui
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { DataGrid, plPL } from '@material-ui/data-grid';
import Avatar from '@material-ui/core/Avatar';
//axios
import axios from 'axios';
//components
import AlertMessage from '../utils/AlertMessage';
import AddImage from './AddImage';

const theme = createMuiTheme(plPL);

export default function GalleryAdmin() {
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [imagesItems, setImagesItems] = useState();

  const getImagesBucket = async () => {
    try {
      await axios
        .get('https://emilio-restaurant-server.herokuapp.com/getObjects')
        .then((response) => {
          const images = response.data;
          setImagesItems(images);
          console.log(response, 'images');
        });
    } catch (err) {
      console.log(err, 'error');
    }
  };

  useEffect(() => {
    getImagesBucket();
  }, []);

  console.log('images99', imagesItems);
  // if (imagesItems) {
  //   const mappedImages = imagesItems.map((item) => {
  //     return {
  //       id: item.ETag,
  //       url: `https://emilio-gallery.s3.eu-central-1.amazonaws.com/${item.Key}`,
  //       title: item.Key,
  //       edit: 'edytuj',
  //       delete: 'usuń',
  //     };
  //   });
  // }

  const showModal = (e) => {
    setShowAddProduct(!showAddProduct);
  };
  const handleDelete = (e) => {
    console.log('deleteing', e.currentTarget.id);
    axios
      .get(
        `https://emilio-restaurant-server.herokuapp.com/deleteObject/${e.currentTarget.id}`
      )
      .then((response) => {
        const image = response.data;
        console.log('deleted', response);
        getImagesBucket();
      });
  };

  //COLUMNS
  const columns = [
    {
      field: 'url',
      headerName: 'Image',
      description: 'Tej kolumny nie można sortować',
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return <Avatar variant='square' alt='image' src={params.row.url} />;
      },
      width: 250,
    },
    { field: 'title', headerName: 'Tytuł', width: 350 },
    // {
    //   field: 'edit',
    //   headerName: 'Edytuj',
    //   sortable: false,
    //   description: 'Edytuj produkt',
    //   disableClickEventBubbling: true,
    //   renderCell: (params) => {
    //     return (
    //       <Button
    //         size='small'
    //         variant='contained'
    //         color='primary'
    //         // data-item={params.row.id}
    //         // onClick={(e) => editItemFunc(e)}
    //       >
    //         Edytuj
    //       </Button>
    //     );
    //   },
    //   width: 100,
    // },
    {
      field: 'delete',
      headerName: 'Usuń',
      sortable: false,
      description: 'Usuń produkt',
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Button
            size='small'
            variant='contained'
            color='secondary'
            id={params.row.title}
            onClick={(e) => {
              console.log('params', params);
              handleDelete(e);
            }}
          >
            Usuń
          </Button>
        );
      },
      width: 90,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className='api-container'>
        <AddImage
          onClose={showModal}
          showAddProduct={showAddProduct}
          getImagesBucket={getImagesBucket}
        />
        <Button
          variant='contained'
          size='small'
          className='api-container__button--add'
          onClick={showModal}
        >
          Dodaj
        </Button>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={
            imagesItems
              ? imagesItems.map((item) => {
                  return {
                    id: item.ETag,
                    url: `https://emilio-gallery.s3.eu-central-1.amazonaws.com/${item.Key}`,
                    title: item.Key,
                    edit: 'edytuj',
                    delete: 'usuń',
                  };
                })
              : []
          }
          columns={columns}
          pageSize={10}
        />
        <AlertMessage style={style} message={message} open={open} />
      </div>
    </ThemeProvider>
  );
}
