$(document).ready(function() {
  // 1. Log a message "Baking a cookie" to the console when the "BAKE a cookie"
  // button is clicked.
  // Hint: You may need to modify cookies.html as well!
  $('#bake-button').click(function() {
    console.log('Baking a cookie');
  });


  // 2. Implement "BAKE a cookie": Insert an image with source cookie.png into
  // the div with id="plate" when the "BAKE a cookie" button is clicked.
  // You should be able to add multiple cookies into the div.
  $('#bake-button').click(function() {
    $('#plate').append('<img src="cookie.png">');
  });

  // 3. Implement "EAT ALL the cookies": Remove all the cookies from the pink
  // plate when "EAT ALL the cookies" button is clicked.
  // Hint: You may need to modify cookies.html as well!
  $('#eat-all-button').click(function() {
    $('#plate').empty();
  });

  // 4. Implement "EAT a cookie": Remove a single cookie from the pink plate
  // when the  "EAT a cookie" button is clicked.
  // Hint: You may need to modify cookies.html as well!
  $('#eat-button').click(function() {
    $('#plate').children(':first').remove();
  });
});
