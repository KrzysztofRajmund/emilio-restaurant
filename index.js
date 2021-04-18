const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const users = require('./server/routes/api/users');

//env
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
//---------------------------------------------------------------------
// DATABASE !!!
//DB config
const dbURI = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.slv2r.mongodb.net/emilioDatabase?retryWrites=true&w=majority`;
// Connect to MongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require('./server/passport')(passport);
// Routes
app.use('/api/users', users);

//---------------------------------------------------------------------
//EMAIL !!!
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
    console.log('Server is ready to take emails');
  }
});

router.get('/', (req, res) => {
  res.send('Hello!');
});

router.post('/send', (req, res, next) => {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var phone = req.body.phone;
  var day = req.body.date.day;
  var time = req.body.date.time;
  var people = req.body.people;
  var message = req.body.message;
  // var content = `name: ${firstname} \n email: ${email} \n message: ${message} `;
  //reservation
  const outputReservation = `
    <h3>Nowa rezerwacja ${day}, godz.${time}</h3>
    <ul>  
      <li><strong>Imię:</strong> ${firstname}</li>
      <li><strong>Nazwisko:</strong> ${lastname}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Telefon:</strong> ${phone}</li>
      <li><strong>Ilość osób:</strong> ${people}</li>
    </ul>
    <h3>Wiadomość:</h3>
    <p>${message}</p>
  `;

  var mailReservation = {
    from: email,
    to: 'knadlonek@gmail.com', // email address that you want to receive messages on
    subject: `Nowa rezerwacja na dzień: ${day}, godz.${time}`,
    // text: content,
    html: outputReservation,
  };

  transporter.sendMail(mailReservation, (err, data) => {
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

  //confirmation
  const outputConfirmation = `
    <h3>Twoja rezerwacja na dzień ${day}, o godz.${time}, będzie wkrótce potwierdzona przez restaurację Emilio.</h3>
    <ul>  
      <li><strong>Imię:</strong> ${firstname}</li>
      <li><strong>Nazwisko:</strong> ${lastname}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Telefon:</strong> ${phone}</li>
      <li><strong>Ilość osób:</strong> ${people}</li>
    </ul>
    <h3>Wiadomość:</h3>
    <p>${message}</p>
  `;
  var mailConfirmation = {
    from: 'knadlonek@gmail.com',
    to: email, // email address klienta
    subject: `Twoja rezerwacja: ${day}, godz.${time}`,
    html: outputConfirmation,
  };
  transporter.sendMail(mailConfirmation);
});
const port = process.env.PORT || 3002; // process.env.port(Heroku's port)
//port listen
app.listen(port, () => console.log(`Server running on port ${port}`));
