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

### 3. Find the bug

Given the following ```bug.html``` page:
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery-git.js"></script>
    <script src="bug-script.js"></script>
    <title>Weather Report</title>
  </head>
  <body>
    <h1 id="weather">Rainy :(</h1>
  </body>
</html>
```

And the following ```bug-script.js``` file:
```javascript
function magicWand() {
  $('#weather').text('Sunny!');
}
magicWand();
```

Answer the following questions:
1. When you load ```bug.html```, what appears in the ```h1```: "Sunny!" or "Rainy :("? Why?
2. Modifying only ```bug-script.js```, how do you fix this bug?

The HTML file and JavaScript stub file are available in this git repository in the directory ```bug```.



