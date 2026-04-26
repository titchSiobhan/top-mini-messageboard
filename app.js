const express = require('express');
const app = express();
const path = require('node:path')
const port = process.env.port || 3000;
const newRoute = require('./routes/newRoutes');
const messageRouter =require('./routes/index');
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: false }));
app.use('/new', newRoute);
app.use('/', messageRouter);



const links =  [
    {href: '/', text:'Home'},
    {href:'/new', text:'New Messages'}
]
const messages = [
  
];

app.locals.messages = messages;
app.locals.links = links;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/message/:id', (req, res) => {
    res.render('message', {message})
})


app.listen(port)