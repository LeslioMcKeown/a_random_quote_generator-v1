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


var quotes = [
{quote: "The hole in one's heart hets filled by others around you.",
author: " Kakashi Hatake,Naruto shippuden"
},
{
  quote: "We can't waste time worrying about the what-if's.",
  author: " Ichigo Kurosaki, Bleach"
},
{
  quote: "Even your gravest mistakes shouldn't stop you from moving forward.",
  author: " Edward Elric, Fullmetal Alchemist"
},
{
  quote: "It's okay not to be okay as long as you are not giving up.",
  author: " Karen Salmansohn "

},
{
  quote: "The truth will set you free, but first it will make you miserable.",
  author: " James A. Garfield"
    }
  ];

// this code is to add - in the quote referring to whom said it.
function randomQuote (quotes){

  for(var i = 0; i < quotes.length; i +=1){
    var pickQuote = Math.floor(Math.random() * quotes.length);
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
var getRandomQuote = Math.floor(Math.random() * quotes.length);
var spliced_quote = quotes.splice(getRandomQuote, 1)[0];
viewed_quotes.push(spliced_quote);
if (quotes.length === 0){
  quotes = viewed_quotes;
  viewed_quotes = [];
}
  return spliced_quote
};
// this will make the background color change for each quote that was changed
function random_color_genarator(){
var random_color;
red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
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
