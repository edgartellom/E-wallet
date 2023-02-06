const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

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
const { getAllPhones } = require('./src/controllers/phoneController');
const { getAllCategories } = require('./src/controllers/categoryController');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log('%s listening at 3001'); // eslint-disable-line no-console
        getAllCategories();
        getAllPhones();
    });
});