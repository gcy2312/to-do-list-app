//create new list item from text input
function newItem(){
  let listItem = $('<li></li>');
  let inputText = $('#input').val();
  listItem.append(inputText);

  if (inputText === ' '){
    alert("You must write a task!!")
  }else {
    $('#list').append(listItem);
  }
//Cross out item on list - listen for dblclick
  function crossOut(){
    listItem.toggleClass("strike");
  }
  listItem.on("dblclick", crossOut)


//create delete btn, append to list item, on click -add class "delete"
  let deleteBtn = $('<deleteButton></deleteButton');
  deleteBtn.append(document.createTextNode('X'));
  listItem.append(deleteBtn);

  function deleteListItem(){
    listItem.addClass("delete");
  }
  deleteBtn.on("click",  deleteListItem)

//make ol id:list sortable (reorder)
  $('#list').sortable();
}
