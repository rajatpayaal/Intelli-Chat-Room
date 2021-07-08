const express = require('express');
const app = express();
app.listen(3000);


app.get('/', (req, res) => {
   
    res.sendFile('./view/index.html', {root:__dirname});
})
app.get('/add', (req, res) => {
    res.sendFile('./view/add.html',{root:__dirname});
})


