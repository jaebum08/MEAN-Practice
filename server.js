
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './public/dist/public/')))

require('./server/config/mongoose');
require('./server/config/routes')(app);
app.all('*', (req, res) => res.sendFile(__dirname +'/public/dist/public/'))


app.listen(8000, () => console.log('On port 8000'))