import express, { Application } from 'express'
import bodyParser from 'body-parser'

const app: Application = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-methods', 'GET,POST,PUT,DELETE,OPTIONS')
  next()
})

app.get('/todolist', function (req, res) {

})

app.post('/toggle', function (req, res) {

})

app.post('/remove', function (req, res) {

})

app.post('/add', function (req, res) {

})

app.listen('8080', function () {
  console.log('Welcome to Express');
  console.log('Listening on port 8080...');
})