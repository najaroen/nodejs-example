const express = require('express');
const bodyParser = require('body-parser')
const { authUser, authRole } = require('./middleware/auth')
const adminRoute = require('./routes/admin')
const shopRote = require('./routes/shop')
const app = express();


app.use(bodyParser.urlencoded({extended:false}))
app.use(authUser)
app.use(authRole)

app.use('/admin',adminRoute)
app.use('/shop',shopRote)

app.use((req, res, next) => {
    res.status(404).send('page not found')
});

app.listen(3000, () => {
    console.log(`running at port 3000`)
})