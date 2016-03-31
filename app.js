console.log('javascript works');

//global variables.
var testProductImagesArray = [];
var displayTestProductImagesArray = [];

var totalGlobalNumberDisplayed = 0;
var totalGlobalNumberSelected = 0;

var randomDisplayImageLeft;
var randomDisplayImageMiddle;
var randomDisplayImageRight;

/*The object constructor identified as TestProduct creates objects that are instances
of TestProduct and contain the properties of : testProductName, filePath,
numberTimesDisplayed, numberTimesSelected, percentageTimesSelected. The property
testProductImagesArray is an array containing each of the other properties of
the object.*/

function TestProduct(testProductName, filePath) {
  this.testProductName = testProductName;
  this.filePath = filePath;
  this.numberTimesDisplayed = 0;
  this.numberTimesSelected = 0;
  testProductImagesArray.push(this);
}

/* Twenty TestProduct objects are created using the TestProduct constructor above
and the arguments provided below. Each instance of the constructor is stored in
a variable. */

var bag = new TestProduct('R2D2 Luggage', 'img/bag.jpg');
var banana = new TestProduct('Banana Slicer', 'img/banana.jpg');
var bathroom = new TestProduct('Ipad TP Roll Holder', 'img/bathroom.jpg');
var boots = new TestProduct('Open Toed Rain Boots', 'img/boots.jpg');
var breakfast = new TestProduct('Breakfast Appliance', 'img/breakfast.jpg');

var bubblegum = new TestProduct('Meatball Bubblegum', 'img/bubblegum.jpg');
var chair = new TestProduct('Domed Chair', 'img/chair.jpg');
var cthulhu = new TestProduct('Cthulhu Play Figure', 'img/cthulhu.jpg');
var dogduck = new TestProduct('Dog Duck Mask', 'img/dogDuck.jpg');
var dragon = new TestProduct('Dragon Meat', 'img/dragon.jpg');

var pen = new TestProduct('Utensil Pens', 'img/pen.jpg');
var petsweep = new TestProduct('Pet Floor Dusters', 'img/petsweep.jpg');
var scissors = new TestProduct('Pizza Scissors', 'img/scissors.jpg');
var shark = new TestProduct('Shark Sleeping Bag', 'img/shark.jpg');
var sweep = new TestProduct('Baby Floor Sweeper', 'img/sweep.png');

var tauntaun = new TestProduct('Dog Sleeping Bag', 'img/tauntaun.jpg');
var unicorn = new TestProduct('Unicorn Meat', 'img/unicorn.jpg');
var usb = new TestProduct('Tentacle USB', 'img/usb.gif');
var watercan = new TestProduct('Watering Can', 'img/waterCan.jpg');
var wineglass = new TestProduct('Blown Wine Glass', 'img/wineGlass.jpg');

console.log(testProductImagesArray);

/*The generateRandomImagesFunction is used to access the testProductImagesArray
and select three random images to be displayed on the page.*/

generateRandomImagesIndexFunction = function() {
  return Math.floor(Math.random() * testProductImagesArray.length);
};

/* The renderRandomImages function places three random product images stored in
three variables on the page. First, the function gets an image element with a
certain Id on the html page so that it can be given content.  Second, the function
adds content to that image element by randomly assigning it an image from the
testProductImagesArray.*/

var renderRandomImagesFunction = function(){

/*First, the function gets three image elements with a certain Id on the html page
so that it can be given content. Second, the function adds content to each
image element by randomly assigning it an image from the testProductImagesArray.
It does so by using the generateRandomImagesFunction to get a random number to
place in the array and to randomly call forth an image by means of it's file
path. In addition, the number of times the image is displayed is also stored
back in the object property numberTimesDisplayed. The while statements insure
that there are not duplicate pictures on the display*/

  var randomDisplayImageLeft = document.getElementById('randomDisplayImageLeft');
  var randomDisplayImageMiddle = document.getElementById('randomDisplayImageMiddle');
  var randomDisplayImageRight = document.getElementById('randomDisplayImageRight');

  imageIndex1 = generateRandomImagesIndexFunction();
  randomDisplayImageLeft.src = testProductImagesArray[imageIndex1].filePath;
  testProductImagesArray[imageIndex1].numberTimesDisplayed ++;

  imageIndex2 = generateRandomImagesIndexFunction();
  while (imageIndex1 === imageIndex2) {
    imageIndex2 = generateRandomImagesIndexFunction();
  }
  randomDisplayImageMiddle.src = testProductImagesArray[imageIndex2].filePath;
  testProductImagesArray[imageIndex2].numberTimesDisplayed ++;

  imageIndex3 = generateRandomImagesIndexFunction();
  while (imageIndex1 === imageIndex2 || imageIndex2 === imageIndex3 || imageIndex3 === imageIndex1) {
    imageIndex3 = generateRandomImagesIndexFunction();
  }
  randomDisplayImageRight.src = testProductImagesArray[imageIndex3].filePath;
  testProductImagesArray[imageIndex3].numberTimesDisplayed ++;
};
renderRandomImagesFunction();
/* The object constructor TestProduct is given a method that takes an image found in
a file and places that image on a web page. The variable imageElement imgEl is
created.  The variable is given content.  The element is placed on the page.*/
/*
TestProduct.prototype.renderToPage = function(){
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
*/
