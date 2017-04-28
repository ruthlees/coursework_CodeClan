// var app = function() {
   
  // var element = document.querySelector('#sign-up');
  // var children = element.children;
  // for(var i = 0; i < children.length; i++){
  //   console.log(children[i]);
  // };

  // var tagline = document.getElementById('tagline');
  // tagline.innerText = "New tagline!";
  // tagline.innerHTML = "<h2>New tagline!</h2>";
 
  // var tagline = document.getElementById('tagline');
  // tagline.style.backgroundColor = "yellow";

  // var elements = document.getElementsByClassName('quote');
  // debugger


  // var elements = document.getElementsByTagName('p');
  // debugger;

  // var quotes = document.getElementsByTagName('article');
  // var articleClass = quotes[0].className;
  // quotes[0].className = 'red-quote';

  // var quotes = document.getElementById('quotes'); 
  // quotes.style.backgroundColor = "lightblue";

  // var quotes = document.getElementsByClassName('quote'); 
  //   for (var quote of quotes){
  //     quote.style.backgroundColor = "purple";
  //   }

  // var element = document.getElementById('quote-of-the-day');
  //   debugger


  // qotd.style.display = 'none';
   // qotd.style.visibility = "hidden";


  // var element = document.querySelectorAll('.quote');
  // debugger;

// };

// var app = function() {
//   //1. Create the parent container (article)
//   var quoteArticle = document.createElement('article');
//   quoteArticle.classList.add('quote');

//   // 2. Create the first child (blockquote)
//   var blockquote = document.createElement('blockquote');
//   blockquote.innerText = "Out new quote text - woohoo!";

//   //3. Create the blockquote's child
//   var quotee = document.createElement('cite');
//   quotee.innerText = "Some person named John who tells bad jokes";

//   //4. Appedn the cite to the blockquote
//   blockquote.appendChild(quotee);

//   //5. Append the blockquote to teh article
//   quoteArticle.appendChild(blockquote);

//  //6. Add everything to the quote list
//   var quotes = document.querySelector('#quotes');
//   quotes.appendChild(quoteArticle);

// };

var createQuoteArticle = function(){
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');
  return quoteArticle;
}

var createBlockQuote = function(quote){
 var blockquote = document.createElement('blockquote');
 blockquote.innerText = quote;
 return blockquote;
}

var createCite = function(author){
 var quotee = document.createElement('cite');
  quotee.innerText = author;
  return quotee;
}

var appendElements = function(quotes, quoteArticle, blockquote, cite){
  blockquote.appendChild(cite);
  quoteArticle.appendChild(blockquote);
  quotes.appendChild(quoteArticle);
}

var addQuote = function(author, quote){
  var quoteArticle = createQuoteArticle();
  var blockquote = createBlockQuote(quote);
  var cite = createCite(author);

 var quotes = document.querySelector('#quotes');
 appendElements(quotes, quoteArticle, blockquote, cite);
}

var quotesArray = [
{quote: "Willy Nilly", author: " John"},
{quote: " Jam", author: "  Keir"},
{quote: " AhhhhhhHhhhhH", author: "  close-shave John"},
{quote: "My SPACE!", author: " Colin"}
];

var app = function(){
  for (var quote of quotesArray){
    addQuote(quote.author, quote.quote);
  }
}

window.onload = app;
