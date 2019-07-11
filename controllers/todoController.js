const bodyParsar = require('body-parser');
var urlencodedParser = bodyParsar.urlencoded({extended: false});
var todo = [];

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('todo', {todos: todo});
  });

  app.post('/', urlencodedParser, (req, res) => {
    todo.push(req.body);
    res.json(todo);
  });

  app.delete('/:currentTodoItem', (req, res) => {
    const crntTodoItem = req.params.currentTodoItem;

    todo = todo.filter((value)=>{
      return value.item !== crntTodoItem;
    });

    res.json(todo);
  });

};
