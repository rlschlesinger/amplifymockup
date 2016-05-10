$(document).ready(function(){

  $('#addItem').on('click', addItem);


  function addItem(event){
    var newTodoText = $('#newSupporter').val();
    console.log(newTodoText);
    $('.supporters').append("<li>" + newTodoText + "</li>");
    $('#newSupporter').val("");
  }

  $('#newSupporter').on('keypress', function(e) {

    if(e.which === 13) {
      addItem();
    }

  });


});
