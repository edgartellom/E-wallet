// const express = require('express');
// const app = express();
// const port = 3000;

// //ruta del frontend
// app.use('/', express.static('client/dist'))

// app.get('/api', (req,res)=>{
//     res.send('Hola desde el Backend');
// })


// app.listen(port,()=>{
//     console.log('server start');
// })

const server = require('./src/app');
const { conn } = require('./src/db');
const { getPhones } = require('./src/controllers/phoneController')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log('%s listening at 3001'); // eslint-disable-line no-console
        getPhones();
    });
});