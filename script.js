/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
Name: Leslio McKeown
Date Started: 12/12/2018
Date Finished 12//2018
******************************************/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var red;
var green;
var blue;
var viewed_quotes =[];

function getRandomQuote(){
var quotes = [
{quote: "The hole in one's heart hets filled by others around you. - Kakashi Hatake",
author: "Naruto shippuden"
},
{
  quote: "We can't waste time worrying about the what-if's. - Ichigo Kurosaki",
  author: "Bleach"
},
{
  quote: "Even your gravest mistakes shouldn't stop you from moving forward. - Edward Elric",
  author: "Fullmetal Alchemist"
},
{
  quote: "It's okay not to be okay as long as you are not giving up.",
  author: " - Karen Salmansohn "

},
{
  quote: "The truth will set you free, but first it will make you miserable.",
  author: " - James A. Garfield"
    }
  ];
}

<body>
<h1> Simple Quote Generator</h1>
<div id_"quote_display"> </div>

<button onclick="new_quote()" > new quote </button> /* this will have a button show up
with new quote on it, click and a new quote will appear */

<script src="javascript.js"></script>
</body>

// this code is to add - in the quote referring to whom said it.
function randomQuote (quotes){

  for(var i = 0; i < quotes.length; i +=1){
    var pickQuote = Math.floor(MAth.random() * quotes.length);
    pickQuote += quotes[i].quote + ' - ' + quotes[i].author;
  }
  return pickQuote
}

console.log(randomQuote(quotes));

function printQuote(quote){
var output_div = document.getElementById('quote-box');
output_div.innerHTML = quotes;
}

function getRandomQuote(){
var getRandomQuote = math.floor(Math.random() * quotes.length);
var spliced_quote = quotes.splice(getRandomQuote, 1)[0];
viewed_quotes.push(spliced_quote);
if (quotes.length === 0){
  quotes = viewed_quotes;
  viewed_quotes = [];
}
  return spliced_quote
}
// this will make the background color change for each quote that was changed
function random_color_genarator(){
var random_color;
red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
random_color = 'rgb(' + red + "," + green ',' + blue + ')';
return random_color
}

function printQuote(){
  var quotes = getRandomQuote();
	print(message);
  //Generate random color
  randomColorGenerator();
  //Update background with new random color
   document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}

// Remember to delete the comments that came with this file, and replace them with your own code comments.
