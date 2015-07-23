$(document).ready(function() {
  // 1. Log the contents of the div to the console.
  console.log($('#favorite').text());

  // 2. Change the text content of the div to be "bear" instead of "bunny".
  $('#favorite').text("bear");

  // 3. Change the content of the div to show this picture of a bear
  //  instead of text: http://i.imgur.com/SHxgKJv.png
  $('#favorite').empty();
  $('#favorite').append('<img src="http://i.imgur.com/SHxgKJv.png">');
});
