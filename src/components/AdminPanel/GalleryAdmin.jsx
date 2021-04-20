import React, { useState, useEffect } from 'react';
//components
import AddProduct from './AddProduct';
//axios
import axios from 'axios';

const GalleryAdmin = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [imagesItems, setImagesItems] = useState();

  const getImagesBucket = async () => {
    await axios.get('/getObjects').then((response) => {
      const images = response.data;
      setImagesItems(images.Contents);
    });
  };

  useEffect(() => {
    getImagesBucket();
  }, []);
  const showModal = (e) => {
    setShowAddProduct(!showAddProduct);
  };
  const handleDelete = (id) => {
    console.log(id);
  };

  console.log(imagesItems, 'imagesItems');
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

        {imagesItems.map((item) => {
          return (
            <tr key={item.Etag}>
              <td>
                <img
                  src='https://emilio-gallery.s3.eu-central-1.amazonaws.com/1+(1).jpg'
                  alt='image'
                ></img>
              </td>
              <td>{item.Key}</td>
              <td>
                <button>edit</button>
                <button onClick={() => handleDelete(item.Etag)}>usuń</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default GalleryAdmin;
