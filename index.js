const express = require('express');
const app = express();
const port = 3000;

//ruta del frontend
app.use('/', express.static('client/dist'))

app.get('/api', (req,res)=>{
    res.send('Hola desde el Backend');
})


app.listen(port,()=>{
    console.log('server start');
})