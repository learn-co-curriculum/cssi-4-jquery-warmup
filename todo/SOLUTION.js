$(document).ready(function() {
  // 1. Log the contents of the text input when the "Add" button is clicked.
  // Hint: Check out the code from the deli counter lab's index.html and app.js
  // files to see how to get the contents of the text input!
  // https://github.com/learn-co-students/js-deli-counter-google-cssi-test-2015/blob/master/index.html
  $('#add-button').click(function() {
    var text = $('#todo-textbox').val();
    console.log(text);
  });

  // 2. Implement "Add": Insert the contents of the text input at the end of 
  // the ol list when the "Add" button is clicked. Clear the contents of the
  // text input when this happens.
  $('#add-button').click(function() {
    var text = $('#todo-textbox').val();
    $('#todo-textbox').val('');
    $('#todo-list').append('<li>' + text + '</li>');
  });

  // 3. Implement "Submit on enter": Pressing enter while focused on the text
  // box should trigger the same behavior as clicking the "Add" button.
  $('#todo-textbox').keypress(function (e) {
    var key = e.which;
    if (key == 13) {
      $('#add-button').click();
      return false;
    }
  });   

  // 4. Implement "Cross off": Clicking each list item should cross the item
  // off the list by making it appear with a strike through it.
  $('#add-button').off('click');
  $('#add-button').click(function() {
    var text = $('#todo-textbox').val();
    $('#todo-textbox').val('');
    // Note: It's tricky in jQuery to add click handlers to dynamically
    // generated elements, so I'm using raw JavaScript here to create a new
    // li element and append a click handler on it. Then I can wrap that
    // reference in $() to take advantage of jQuery when it's beneficial, i.e.
    // for css and appending the item to the list.
    var item = document.createElement('li');
    item.innerHTML = text;
    item.addEventListener('click', function() {
      $(item).css('text-decoration', 'line-through');
    });
    $('#todo-list').append($(item));
  });

  // 5. Implement "Delete": Add a "Delete" button next to every item of the
  // list. Clicking this button should remove the item from the list.
  $('#add-button').off('click');
  $('#add-button').click(function() {
    var text = $('#todo-textbox').val();
    $('#todo-textbox').val('');

    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', function() {
      // Yup, we can use item here even though we declare it further down
      // in the function. That's because JavaScript has something called
      // "function-level" scope (vs block-level scope that e.g. Java has).
      $(item).remove();
    });

    var item = document.createElement('li');
    item.innerHTML = text;
    item.appendChild(deleteBtn);
    item.addEventListener('click', function() {
      $(item).css('text-decoration', 'line-through');
    });

    $('#todo-list').append($(item));
  });
});

