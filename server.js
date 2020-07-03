


require('dotenv').config();
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: 'agiet@askdoss.com',
    to:'agiett2@gmail.com',
    cc: '',
    subject: 'Tesing from node ap',
    text: 'It works!'
}

transporter.sendMail(mailOptions, (err, data) => {
    if(err) {
        console.log(`Error: ${err}`);
        return
    }
    console.log('Email Sent');

})