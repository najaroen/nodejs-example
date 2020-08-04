const express = require('express');
const { authUser, authRole } = require('./middleware/auth')
const app = express();

app.use(authUser)
app.use(authRole)
app.use('/add-product', (req, res, next) => {
    res.send(`add "Product"`)
})
app.listen(3000, () => {
    console.log(`running at port 3000`)
})