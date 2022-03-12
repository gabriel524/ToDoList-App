
function newItem(){
//function dleclearation which eable the newItem when activated with click on the "Add" button (id button)
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("Please write something in the text field below");
  } else {
    $('#list').append(li);
  }
 // Function that strike through items when user clicks on it
  function crossOut() {
		li.toggleClass("strike");
	}
//eventListner (li.on) double click will call the function crossOut and change back (toggle) which is the li class,
	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

// A functiion that delete items from the list when clicking on the deleteButton
  crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
	li.addClass("delete")
	}
  // Statement that Change the given order of items in the List
   $('#list').sortable();
}
