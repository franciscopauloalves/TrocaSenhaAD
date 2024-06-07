// server.js (Exemplo simples de servidor Node.js)
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
    service: 'gmail', // Use o serviço de email que preferir
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha'
    }
});

app.post('/send-email', (req, res) => {
    const { email, codigo } = req.body;

    let mailOptions = {
        from: 'seuemail@gmail.com',
        to: email,
        subject: 'Seu código de validação',
        text: `Seu código de validação é: ${codigo}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send('Erro ao enviar email');
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).send('Email enviado');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
