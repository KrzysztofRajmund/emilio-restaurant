import React, { useEffect, useState } from 'react';
//material ui
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { DataGrid, plPL } from '@material-ui/data-grid';
//axios
import axios from 'axios';
//components
import AlertMessage from '../utils/AlertMessage';
import AddMenu from './AddMenu';
import EditMenu from './EditMenu';

const theme = createMuiTheme(plPL);

export default function MenuAdmin() {
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState([]);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [editItem, setEditItem] = useState({});

  const getMenuItems = async () => {
    await axios('http://localhost:3002/api/menu/get').then((response) => {
      if (response.status !== 200) {
        setStyle('error');
        setOpen(true);
        setMessage('Coś poszło nie tak , spróbuj póżniej!');
        setTimeout(() => {
          setOpen(false);
        }, 3500);
      } else {
        setMenu(response.data.data);
      }
    });
  };

  useEffect(() => {
    getMenuItems();
  }, []);
  const mappedMenu = menu.map((product) => {
    return {
      id: product._id,
      type: product.type,
      category: product.category,
      title: product.title,
      description: product.description,
      price: product.price,
      edit: 'edytuj',
      delete: 'usuń',
    };
  });

  const showModal = (e) => {
    setShowAddMenu(!showAddMenu);
  };

  const showModalEdit = (e) => {
    setShowEditMenu(!showEditMenu);
  };

  const deleteItem = async (e) => {
    await axios
      .delete(`http://localhost:3002/api/menu/delete/${e.currentTarget.id}`)
      .then((response) => {
        if (response.status !== 200) {
          setStyle('error');
          setOpen(true);
          setMessage('Coś poszło nie tak , spróbuj póżniej!');
          setTimeout(() => {
            setOpen(false);
          }, 3500);
        } else {
          setStyle('success');
          setOpen(true);
          setMessage(response.data.message);
          getMenuItems();
          setTimeout(() => {
            setOpen(false);
          }, 3500);
        }
      });
  };

  //EDIT
  const editItemFunc = (e) => {
    const itemId = e.currentTarget.dataset.item;
    const filter = menu.filter((item) => item._id === itemId);
    const editItem = filter[0];
    setEditItem(editItem);
    setShowEditMenu(!showEditMenu);
  };

  const columns = [
    { field: 'type', headerName: 'Typ', width: 100 },
    { field: 'category', headerName: 'Kategoria', width: 180 },
    { field: 'title', headerName: 'Tytuł', width: 180 },
    {
      field: 'description',
      headerName: 'Opis',
      description: 'Tej kolumny nie można sortować',
      sortable: false,
      width: 250,
    },
    {
      field: 'price',
      headerName: 'Cena',
      type: 'number',
      width: 120,
    },
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
    <ThemeProvider theme={theme}>
      <div className='api-container'>
        <AddMenu
          onClose={showModal}
          showAddMenu={showAddMenu}
          getMenuItems={getMenuItems}
        />
        <EditMenu
          onClose={showModalEdit}
          showEditMenu={showEditMenu}
          getMenuItems={getMenuItems}
          editItem={editItem}
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
        <DataGrid rows={mappedMenu} columns={columns} pageSize={10} />
        <AlertMessage style={style} message={message} open={open} />
      </div>
    </ThemeProvider>
  );
}
