const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hola desde web 1');
});

app.listen(80,()=> console.log('Servidor corriendo desde el puerto 80'));