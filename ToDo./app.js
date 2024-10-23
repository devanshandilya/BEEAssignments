const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.get('/todo', (req, res) => {
  res.render('index', { tasks: tasks });
});

app.post('/addTask', (req, res) => {
  const task = req.body.newTask;
  if (task) {
    tasks.push(task);
  }
  res.redirect('/todo');
});

app.listen(3000, (err) => {
  if(err) return console.log('An error occurred: ', err);
  else console.log('Server is listening on port 3000');
});
