/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
Name: Leslio McKeown
Date Started: 12/12/2018
Date Finished 12/17/2018
******************************************/
var quotes = [
{quote: "The hole in one's heart hets filled by others around you.",
source: " Kakashi Hatake,Naruto shippuden"
},
{
  quote: "We can't waste time worrying about the what-if's.",
  source: " Ichigo Kurosaki, Bleach"
},
{
  quote: "Even your gravest mistakes shouldn't stop you from moving forward.",
  source: " Edward Elric, Fullmetal Alchemist"
},
{
  quote: "It's okay not to be okay as long as you are not giving up.",
  source: " Karen Salmansohn"

},
{
  quote: "The truth will set you free, but first it will make you miserable.",
  source: " James A. Garfield"
    }
  ];
// this function is to generate a random number and then pick a quote that is
// equel to the num it has choosen
  function getRandomQuote() {
  var pickQuote = Math.floor(Math.random()* quotes.length);
  return (quotes[pickQuote]);

}

// this is setting the quote in motion by seperating the
// quote and source in different fonts and seize
//after that it prints it out
  function printQuote() {
  var print = getRandomQuote();
  console.log(print); // this output the given quotes
  var data = '<p class="quote">';
  data += print.quote;
  data += '</p>';
  data += '<p class="source">';
  data += print.source;
  data += '</p>';
  document.getElementById('quote-box').innerHTML = data; // this is how the HTML
  // works with the JS functions and command.
  console.log(data);
  }

// when button is pressed/clicked a new quotes will appear
// depending on the random number
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
