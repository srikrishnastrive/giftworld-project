const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./Routes');
const path = require('path');
const  morgan = require( 'morgan');




const { PORT } = require('./config/server.config');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.use('/api', apiRouter);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




app.listen(PORT, async () => {
    console.log(`Server started at PORT : ${PORT}`);

});

app.get('/home', (req, res) => {
    return res.json({ msg: "hi you are at home" });
});
