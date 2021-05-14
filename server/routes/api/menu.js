const express = require('express');
const router = express.Router();

//load user model
const Menu = require('../../models/Menu');

//POST
router.post('/post', (req, res) => {
  //validate request
  if (
    !req.body.type ||
    !req.body.category ||
    !req.body.title ||
    !req.body.price
  ) {
    return res.status(400).send({
      success: false,
      message: 'Proszę o wypełnienie wszystkich pól',
    });
  }
  //create a product
  let menu = new Menu({
    type: req.body.type,
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });
  //save product in database
  menu
    .save()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));

  //   .then((data) => {
  //     res
  //       .send({
  //         success: true,
  //         message: 'Produkt dodany!',
  //         data: data,
  //       })
  //       .catch((err) => {
  //         res.status(500).send({
  //           success: false,
  //           message: err.message || 'Błąd podczas dodawania produktu',
  //         });
  //       });
  //   });
});

//GET ALL
router.get('/get', (req, res) => {
  Menu.find()
    .then((data) => {
      let message = '';
      if (data === undefined || data.length == 0) {
        message = 'Nie znaleziono żadnego produktu';
      } else {
        message = `Znaleziono ${data.length} produktów`;
      }
      res.send({
        success: true,
        message: message,
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: error.message || 'Błąd',
      });
    });
});

module.exports = router;
