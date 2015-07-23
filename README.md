# JQuery Day 4 Warm-up!


## Instructions:

### 1. Selector Drills

Given the following HTML page:
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery-git.js"></script>
    <title>Fruits</title>
  </head>
  <body>
    <h1>Fruits</h1>    
    <h2 class="div">Orange</h2>
    <div>
      <p>Cherry</p>
      <p id="h2">Banana</p>
    </div>
  </body>
</html>
```
What would be the output of the following jQuery commands?

```javascript
$('h1').text();
```

```javascript
$('h2').text();
```

```javascript
$('#h2').text();
```

```javascript
$('.div').text();
```

```javascript
$('#div').text();
```

```javascript
$(div).text();
```

Make your guesses before running the code. You can check your answers by opening http://jsbin.com, copying the HTML into the HTML tab, and copying the jQuery commands into the Console tab.

### 2. Manipulating the DOM

Given the following HTML page:
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery-git.js"></script>
    <script src="animals-script.js"></script>
    <title>SPIRIT ANIMAL</title>
  </head>
  <body>
    <h1>My spirit animal is a:</h1>
    <div id="favorite">bunny</div>
  </body>
</html>
```

Write JavaScript to do the following:

1. Log the contents of the ```div``` to the console.
2. Change the text content of the ```div``` to be "bear" instead of "bunny"
3. Change the content of the ```div``` to show this picture of a bear instead of text: http://i.imgur.com/SHxgKJv.png

The HTML file and JavaScript stub file are available in this git repository in the directory ```animals```. Fork and clone this repository to access the files and put your JavaScript in ```animals-script.js``` to test your answers.

### 3. Event Handlers
Open the contents of ```cookies/cookies.html``` in Chrome. You should see something like:
![cookie monster lab](http://i.imgur.com/NMHh8mCl.jpg "Cookie Monster Lab")

Modify ```cookies-script.js``` and ```cookies.html``` to accomplish the following:

1. Log a message "Baking a cookie" to the console when the "BAKE a cookie" button is clicked.
2. Implement "BAKE a cookie": Insert an image with source cookie.png into the div with id="plate" when the "BAKE a cookie" button is clicked. You should be able to add multiple cookies into the div.
3. Implement "EAT ALL the cookies": Remove all the cookies from the pink plate when "EAT ALL the cookies" button is clicked.
4. Implement "EAT a cookie": Remove a single cookie from the pink plate when the  "EAT a cookie" button is clicked.

### 5. An Annoying JS Bug

Given the following ```wontwork.html``` page:
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery-git.js"></script>
    <script src="wontwork-script.js"></script>
    <title>Weather Report</title>
  </head>
  <body>
    <h1 id="weather">Rainy :(</h1>
  </body>
</html>
```

And the following ```wontwork-script.js``` file:
```javascript
function magicWand() {
  $('#weather').text('Sunny!');
}
magicWand();
```

Answer the following questions:

1. When you load ```wontwork.html```, what appears in the ```h1```: "Sunny!" or "Rainy :("? Why?
2. Modifying only ```wontwork-script.js```, how do you fix this bug?

The HTML file and JavaScript stub file are available in this git repository in the directory ```wontwork```.
