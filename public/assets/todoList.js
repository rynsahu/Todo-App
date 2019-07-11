$(document).ready(() => {

  //Ajax request while sybmitting a form
  $('#todo-form').submit((e)=>{
    e.preventDefault();

    var item = $('[name=addToList]').val();
    var todo = {item: item};

    $.ajax({
      type: 'POST',
      url: '/',
      data: todo,
      success: (data)=>{
        location.reload();
      }
    });

  });

  //Delete todo item
  $('.todo-item').on('click', (e)=>{
    var currentTodoItem = e.currentTarget.innerText;

    $.ajax({
      type: 'DELETE',
      url: '/' + currentTodoItem,
      success: (data)=>{
        location.reload();
      }
    });

  });

});
