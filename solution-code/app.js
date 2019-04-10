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
   // If the URL is "http://localhost:3000/?nationality=de", then nationality = "de"
  let nationality = req.query.nationality // because we have <select name="nationality">
  let name = req.query.n // because we have <input name="n">

  let students = data.map(s => {
    let flag
    if (s.nationality === "pt") flag =  "🇵🇹"
    if (s.nationality === "br") flag =  "🇧🇷"
    if (s.nationality === "de") flag =  "🇩🇪"
    return {
      name: s.name,
      nationality: s.nationality,
      flag: flag
    }
  })

	if (nationality)
    students = students.filter(student => student.nationality === nationality)

  if (name)
    students = students.filter(s => s.name.toLowerCase().includes(name.toLowerCase()))

  res.render('index', {
    students: students,
    nationality,
    typedName: name
  })
})

app.listen(3000, () => console.log('App listening on port 3000!'))
