const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const apiPort = 3002;
const app = express();
console.log(process.env.USER);
app.use(cors());
app.use(express.json());
app.use('/', router);

//EMAIL
var transport = {
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.get('/', (req, res) => {
  res.send('Hello!');
});

router.post('/send', (req, res, next) => {
  var firstname = req.body.firstname;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${firstname} \n email: ${email} \n message: ${message} `;
  console.log(req.body);
  var mail = {
    from: email,
    to: 'knadlonek@gmail.com', // email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });
    }
  });
});

//port listen
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

//MAILTRAP TEST!!!!
// var transporter = nodemailer.createTransport({
//   host: 'smtp.mailtrap.io',
//   port: 2525,
//   auth: {
//     user: 'e2b41a73479ec6',
//     pass: '38eb5b0a600881',
//   },
// });
//MAILTRAP TEST!!!!

//FUNCTION TEST!!!
// async function run() {
//   let sendResult = await transporter.sendMail({
//     from: 'Krzysztof knadlonek@gmail.com',
//     //from: 'Krzysztof <knadlonek@gmail.com',
//     to: 'knadlonek@gmail.com',
//     subject: 'New Message from Contact Form',
//     text: 'ello',
//   });
//   console.log(sendResult, 'result');
// }

// run();
//FUNCTION TEST!!!
