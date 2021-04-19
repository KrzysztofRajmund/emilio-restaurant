import React, { useState } from 'react';
//components
import AddProduct from './AddProduct';

const GalleryAdmin = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const showModal = (e) => {
    setShowAddProduct(!showAddProduct);
  };
  return (
    <div className='api-container'>
      <AddProduct onClose={showModal} showAddProduct={showAddProduct} />
      <button className='api-container__button--add' onClick={showModal}>
        Dodaj
      </button>
      <table>
        <tr>
          <th>Image</th>
          <th>Album(sort)</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <img src='' alt='image'></img>
          </td>
          <td>rodzinny</td>
          <td>
            <button>edit</button>
            <button>usuń</button>
          </td>
        </tr>
        <tr>
          <td>
            <img src='' alt='image'></img>
          </td>
          <td>rodzinny</td>
          <td>
            <button>edit</button>
            <button>usuń</button>
          </td>
        </tr>
        <tr>
          <td>
            <img src='' alt='image'></img>
          </td>
          <td>rodzinny</td>
          <td>
            <button>edit</button>
            <button>usuń</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default GalleryAdmin;
