const express = require('express');
const { authUser } = require('./middleware/auth')
const app = express();

app.use(authUser)
app.get('/', (req, res, next) => {
    res.send("Hi")
})
app.listen(3000, () => {
    console.log(`running at port 3000`)
})