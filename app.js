// inclutd packages and define server related variables
const express = require('express')
const exphds = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphds({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routs
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const trashTalk = generateTrashTalk(req.body)
  res.render('index', { trashTalk: trashTalk })
})

// stars the express server and listening for connections
app.listen(port, () => {
  console.log(`Exprss app listening on port ${port}.`)
})