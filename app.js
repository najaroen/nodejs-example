const express = require('express');
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars'); 
const path = require('path');

const { authUser, authRole } = require('./middleware/auth')

const adminRoute = require('./routes/admin');
const shopRote = require('./routes/shop');
const productRoute = require('./routes/product');

const app = express();

app.engine('hbs', expressHbs(
    {layoutsDir:'views/layouts/', 
    defaultLayout:'main-layout', extname:'hbs'}
    ));
// app.set('view engine', 'pug');
app.set('view engine', 'hbs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(authUser)
app.use(authRole)



app.use('/admin',adminRoute)
app.use('/shop',shopRote)
app.use('/product',productRoute)

app.use((req, res, next) => {
    res.render('404', {title:'He'})
});

app.listen(3000, () => {
    console.log(`running at port 3000`)
})