import express, { Application } from 'express'
import bodyParser from 'body-parser'
import { fileOperation } from './utils'
import { ITodo } from './typings'

const app: Application = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-methods', 'GET,POST,PUT,DELETE,OPTIONS')
  next()
})

app.get('/todolist', function (req, res) {
  const todoList: string = fileOperation('todo.json') as string
  res.send(todoList)
})

app.post('/toggle', function (req, res) {
  const id: number = JSON.parse(req.body.id)
  fileOperation('todo.json', function (todoList: ITodo[]) {
    return todoList.map((todo: ITodo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  })

  res.send({
    msg: 'ok',
    code: 200
  })
})

app.post('/remove', function (req, res) {
  const id: number = parseInt(req.body.id)
  fileOperation('todo.json', function (todoList: ITodo[]) {
    return todoList.filter((todo: ITodo) => todo.id !== id)
  })
  res.send({
    msg: 'ok',
    code: 200
  })
})

app.post('/add', function (req, res) {
  const todo: ITodo = JSON.parse(req.body.todo)
  fileOperation('todo.json', function (todoList: ITodo[]) {
    const isExist = todoList.find((t: ITodo) =>
      t.content === todo.content
    )
    if (isExist) {
      res.send({
        msg: 'exist',
        code: 100
      })
      return;
    }
    todoList.push(todo)
    res.send({
      msg: 'success',
      code: 200
    })
    return todoList;
  })
})

app.listen('8080', function () {
  console.log('Welcome to Express');
  console.log('Listening on port 8080...');
})