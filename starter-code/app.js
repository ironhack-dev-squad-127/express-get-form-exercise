// app.js
const express = require('express')
const path = require('path') 
const data = require('./data')

const app = express()

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Route GET /
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => console.log('App listening on port 3000!'))
