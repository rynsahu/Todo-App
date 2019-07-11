const express = require('express');
const todoController = require('./controllers/todoController')

const app = express();

//Port & localhost
const port = 3000;
const host = 'localhost';

//view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fire controllers
todoController(app);

//listen to port
app.listen(port, host, () => {
  console.log(`Listening port ${port}..`);
});
