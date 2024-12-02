// for when you call html file.............
// const express = require('express');
// const app = express();
// app.listen(3000);


// app.get('/', (req, res) => {
   
//     res.sendFile('./view/index.html', {root:__dirname});
// })
// app.get('/add', (req, res) => {
//     res.sendFile('./view/add.html',{root:__dirname});
// })
 //......................................................................
  // for ejs file # change all extension .html to .ejs 

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(3000);


app.get('/', (req, res) => {
    const items = [
        { name: 'mobile phone', price: 1000 },
        { name: 'book', price: 30 },
        { name: 'computer', price: 2000 },
    ]
    res.render('index', { items });
})
app.get('/add', (req, res) => {
    res.render('add');
})

app.use((req, res) => {
    res.render('error');
})

