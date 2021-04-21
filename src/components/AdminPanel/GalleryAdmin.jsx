import React, { useState, useEffect } from 'react';
//components
import AddProduct from './AddProduct';
//axios
import axios from 'axios';

const GalleryAdmin = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [imagesItems, setImagesItems] = useState();

  const getImagesBucket = async () => {
    try {
      await axios.get('/getObjects').then((response) => {
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
  const showModal = (e) => {
    setShowAddProduct(!showAddProduct);
  };
  const handleDelete = (id) => {
    axios.get(`/deleteObject/${id}`).then((response) => {
      const image = response.data;
      getImagesBucket();
    });
  };

  return (
    <div className='api-container'>
      <AddProduct
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
                    src='https://emilio-gallery.s3.eu-central-1.amazonaws.com/1+(1).jpg'
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
};

export default GalleryAdmin;
