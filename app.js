console.log('javascript works');

//global variables.
var testProductImagesArray = [];
var displayTestProductImagesArray = [];

var totalImagesDisplayed = 0;
var totalSelectionsMade = 0;

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

/* The renderThreeRandomImages function places three random product images stored
in three variables on the page. First, the function gets an image element with a
certain Id on the html page so that it can be given content.  Second, the function
adds content to that image element by randomly assigning it an image from the
testProductImagesArray.*/

var renderThreeRandomImagesFunction = function(){

/*First, the function gets three image elements with a certain Id on the html page
so that it can be given content. Second, the function adds content to each
image element by randomly assigning it an image from the testProductImagesArray.
It does so by using the generateRandomImagesIndexFunction to get a random number to
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
  randomDisplayImageMiddle.addEventListener('click', function(){
    handleClick(testProductImagesArray[imageIndex1]);
  });

  imageIndex2 = generateRandomImagesIndexFunction();
  while (imageIndex1 === imageIndex2) {
    imageIndex2 = generateRandomImagesIndexFunction();
  }
  randomDisplayImageMiddle.src = testProductImagesArray[imageIndex2].filePath;
  testProductImagesArray[imageIndex2].numberTimesDisplayed ++;
  randomDisplayImageMiddle.addEventListener('click', function(){
    handleClick(testProductImagesArray[imageIndex2]);
  });

  imageIndex3 = generateRandomImagesIndexFunction();
  while (imageIndex1 === imageIndex2 || imageIndex2 === imageIndex3 || imageIndex3 === imageIndex1) {
    imageIndex3 = generateRandomImagesIndexFunction();
  }
  randomDisplayImageRight.src = testProductImagesArray[imageIndex3].filePath;
  testProductImagesArray[imageIndex3].numberTimesDisplayed ++;
  randomDisplayImageRight.addEventListener('click', function(){
    handleClick(testProductImagesArray[imageIndex3]);
    testProductImagesArray[imageIndex3].numberTimesSelected++;
    totalSelectionsMade ++;
  });

};
renderThreeRandomImagesFunction();

/* The function named resultsButtonFunction handles the results buttons.  The
button itself should only be displayed after the user has made 25 selections.
At that time two buttons will appear.  One will allow the participant to see
the results. The other allows the user to make 10 more selections.*/

function makeMoreSelectionsButton() {
  if(totalSelectionsMade < 25) {
    document.getElementById('moreSelectionsButton').style.visibility = 'hidden';
  } else {
    document.getElementById('moreSelectionsButton').style.visibility = 'visible';
    makeMoreSelectionsButton.addEventListener('click', handleButtonClick);
  }
};

function getResultsButton() {
  if(totalSelectionsMade < 25) {
    document.getElementById('seeResultsButton').style.visibility = 'hidden';
  } else {
    document.getElementById('seeResultsButton').style.visibility = 'visible';
    getResultsButton.addEventListener('click', handleButtonClick);
  }
};

function hideImagesSection() {
  if(totalSelectionsMade < 25) {
    document.getElementById('Images-Section').style.display = 'block';
  } else {
    document.getElementById('Images-Section').style.display = 'none';
  }
};
