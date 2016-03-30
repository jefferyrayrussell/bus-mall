console.log('javascript works');

//global variables to name the images array and set counters to zero.
var productImagesArray = [];
var numberTimesDisplayed = 0;
var numberTimesSelected = 0;
var percentageTimeSelected = 0;

//function calculating percentageTimesSelected
var percentageTimesSelected = function percentage(numberTimesSelected, numberTimesDisplayed){
  Math.round(numberTimesSelected / numberTimesDisplayed * 100);
};

//function used to randomly select imageSource by generating a random integer
//between two numbers low inclusive and high inclusive.
function getRandomIntegerInclusive(min,max){
  return Mathfloor (Math.random() * (max - min + 1) + min);
}

/*The object constructor identified as SalesItem creates objects that are instances
of salesItem and contain the properties of : name, imageSource, numberTimesDisplayed, numberTimesSelected, percentageTimesSelected.*/

function SalesItem(name) {
  this.name = name;
  this.imageSource = imageSource;
  this.numberTimesDisplayed = numberTimesDisplayed;
  this.numberTimesSelected = numberTimesSelected;
  this.percentageTimesSelected = percentageTimesSelected;
}

/* The object constructor SalesItem is given a method that takes an image found in
a file and places that image on a web page. The variable imageElement imgEl is
created.  The variable is given content.  The element is placed on the page.*/

SalesItem.prototype.renderToPage = function(){
  imgEl = document.createElement('img');
  imgEl.setAttribute(imageSource, this.imageSource);
  document.appendChild();
};

//function to handle image click event

function handleImageClick(event){
  console.log('event.target: ', event.target);
  console.log('hello from handleImageClick event handler.');
}

var trackImages = document.getElementsByClassName('track-images');

for (var i = 0; i < trackImages.length; i++){
  trackImages[i].addEventListener('click', handleImageClick);
}
