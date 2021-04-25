require('dotenv').config();

// ========== Require Framwork =============\\
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const hdbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');



// ============== =============\\

app.use(express.static(path.join(__dirname,'public')));
app.engine('.hbs',hdbs({
    extname: '.hbs',
    helpers:{ 
        sum:(a,b) => a+b,
    }
}));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.set('view engine','.hbs');
app.set('views',path.join(__dirname, 'resourse','views'));
app.use(methodOverride('_method'));

// =========== Require local file================\\
const Router = require('./routers');
const db= require('./config/db');
db.connect();
Router(app);



app.listen(port, ()=> console.log(`App listent${port}`));

