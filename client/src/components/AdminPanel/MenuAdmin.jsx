import { useEffect } from 'react';
//material ui
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { DataGrid, plPL } from '@material-ui/data-grid';
//axios
import axios from 'axios';

const theme = createMuiTheme(
  // {
  //   palette: {
  //     primary: { main: '#1976d2' },
  //   },
  // },
  plPL
);

const columns = [
  { field: 'type', headerName: 'Typ', width: 100 },
  { field: 'category', headerName: 'Kategoria', width: 180 },
  { field: 'title', headerName: 'Tytuł', width: 180 },
  {
    field: 'description',
    headerName: 'Opis',
    description: 'Tej kolumny nie moża sortować',
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
      console.log(params, ' i am clicked');
      return <button>Click</button>;
    },
    width: 100,
  },
  {
    field: 'delete',
    headerName: 'Usuń',
    sortable: false,
    description: 'Usuń produkt',
    width: 90,
  },
];

const rows = [
  {
    id: 1,
    type: 's',
    category: 'antipasti',
    title: 'Bruchetta',
    description: '',
    price: 18,
    edit: 'edytuj',
    delete: 'usuń',
  },
];

export default function MenuAdmin() {
  const fetchData = async () => {
    await axios('http://localhost:3002/api/menu/get').then((response) => {
      console.log(response);
    });
  };

  useEffect(fetchData(), []);
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    </ThemeProvider>
  );
}
