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

const theme = createMuiTheme({
  plPL,
});

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

  const mappedImages = imagesItems.map((item) => {
    return {
      id: item.ETag,
      url: `https://emilio-gallery.s3.eu-central-1.amazonaws.com/${item.Key}`,
      title: item.Key,
      edit: 'edytuj',
      delete: 'usuń',
    };
  });

  const showModal = (e) => {
    setShowAddProduct(!showAddProduct);
  };
  const handleDelete = (id) => {
    axios
      .get(`https://emilio-restaurant-server.herokuapp.com/deleteObject/${id}`)
      .then((response) => {
        const image = response.data;
        getImagesBucket();
      });
  };

  //COLUMNS
  const columns = [
    {
      field: 'url',
      headerName: 'Image',
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        console.log(params);
        return <Avatar variant='square' alt='image' src='' />;
      },
    },
    { field: 'title', headerName: 'Tytuł', width: 100 },
    {
      field: 'edit',
      headerName: 'Edytuj',
      sortable: false,
      description: 'Edytuj produkt',
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Button
            size='small'
            variant='contained'
            color='primary'
            data-item={params.row.id}
            onClick={(e) => editItemFunc(e)}
          >
            Edytuj
          </Button>
        );
      },
      width: 100,
    },
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
            id={params.row.id}
            onClick={(e) => {
              deleteItem(e);
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
    <div className='api-container'>
      <AddImage
        onClose={showModal}
        showAddProduct={showAddProduct}
        getImagesBucket={getImagesBucket}
      />
      <button className='api-container__button--add' onClick={showModal}>
        Dodaj
      </button>
      <table>
        <tr>
          <th>Image</th>
          <th>Album(sort)</th>
          <th></th>
        </tr>

        {imagesItems &&
          imagesItems.map((item) => {
            return (
              <tr key={item.ETag}>
                <td>
                  <img
                    src={`https://emilio-gallery.s3.eu-central-1.amazonaws.com/${item.Key}`}
                    alt='image'
                  ></img>
                </td>
                <td>{item.Key}</td>
                <td>
                  <button>edit</button>
                  <button onClick={() => handleDelete(item.Key)}>usuń</button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
