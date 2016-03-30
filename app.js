console.log('javascript works');

//global variables to name the images array and set counters to zero.
var randomImage = new SalesItem();
var productImagesArray = [];
var numberTimesDisplayed = 0;
var numberTimesSelected = 0;
var percentageTimeSelected = 0;

//variables and functions for chart.
/*var barChart;
var data = {
  labels: [],
  datasets: [
    {
      label: 'Total Times Selected',
      fillColor: 'rgba(220,220,0.2,)',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointHighLightFill: '#fff',
      pointHighLightStroke: 'rgba(220,220,220,1)'
    }
  ]
};
*/
//function calculating percentageTimesSelected
var percentageTimesSelected = function percentageCalculator(numberTimesSelected, numberTimesDisplayed){
  Math.round(numberTimesSelected / numberTimesDisplayed * 100);
};

//function used to randomly select imageSource by generating a random integer
//between two numbers low inclusive and high inclusive.
function getRandomIntegerInclusive(min,max){
  return Mathfloor (Math.random() * (max - min + 1) + min);
}

/*The object constructor identified as SalesItem creates objects that are instances
of salesItem and contain the properties of : name, imageSource, numberTimesDisplayed, numberTimesSelected, percentageTimesSelected.*/

function SalesItem(name, source) {
  this.name = name;
  this.imageSource = imageSource;
  this.numberTimesDisplayed = 0;
  this.numberTimesSelected = 0;
  this.percentageTimesSelected = percentageTimesSelected;
  data.labels.push(name);
  productImagesArray.push(this);
}

//arguments for the creation of SalesItem products using the SalesItem constructor.

var bag = new SalesItem('bag', 'img/bag.jpg');
var banana = new SalesItem('banana', 'img/banana.jpg');
var bathroom = new SalesItem('bathroom', 'img/bathroom.jpg');
var boots = new SalesItem('boots', 'img/boots.jpg');
var breakfast = new SalesItem('breakfast', 'img/breakfast.jpg');

var bubblegum = new SalesItem('bubblegum', 'img/bubblegum.jpg');
var chair = new SalesItem('chair', 'img/chair.jpg');
var cthulhu = new SalesItem('cthulhu', 'img/cthulhu.jpg');
var dogduck = new SalesItem('dogDuck', 'img/dogDuck.jpg');
var dragon = new SalesItem('dragon', 'img/dragon.jpg');

var pen = new SalesItem('pen', 'img/pen.jpg');
var petsweep = new SalesItem('petSweep', 'img/petsweep.jpg');
var scissors = new SalesItem('scissors', 'img/scissors.jpg');
var shark = new SalesItem('shark', 'img/shark.jpg');
var sweep = new SalesItem('sweep', 'img/sweep.jpg');

var tauntaun = new SalesItem('tauntaun', 'img/tauntaun.jpg');
var unicorn = new SalesItem('unicorn', 'img/unicorn.jpg');
var usb = new SalesItem('usb', 'img/usb.jpg');
var watercan = new SalesItem('waterCan', 'img/waterCan.jpg');
var wineglass = new SalesItem('wineGlass', 'img/wineGlass.jpg');

/* The counter function is the point of the whole program. It needs to surround
the placement/replacement of the images. */

var counter = {
  leftImage: null,
  middleImage: null,
  rightImage: null,
  totalVotes: 0,

  //creation of imageElements that will be given content and placed on the page.
  leftImageElement: document.getElementById('image1'),
  middleImageElement: document.getElementById('image2'),
  rightImageElement: document.getElementById('image3'),
  results: document.getElementById('resultsNumerical'),
  chart: document.getElementById('resultsChart'),
};

/*randomNumber function is used to access the productImagesArray and select three
random images to be displayed on the page.*/
//var item = items[Math.floor(Math.random()*items.length)];

randomNumberFunction = function() {
  return Math.floor(Math.random() * productImagesArray.length);
};

/*to get that random images to display upon the page, a getRandomProductImage
function is used.*/

getRandomProductImageFunction = function () {
  counter.leftImage = productImagesArray[counter.randomNumberFunction()];
  counter.middleImage = productImagesArray[counter.randomNumberFunction()];
  counter.rightImage = productImagesArray[counter.randomNumberFunction()];
};

//*reselect a random product image if any of the three pictures are duplicates.
if (counter.leftImage === counter.middleImage || counter.leftImage === counter.rightImage || counter.rightImage === counter.midImage) {
  counter.getRandomImage();
}

/*The image elements have been created above, now they did to be given content
and placed on the page. Their content of the image is a random selection from the
productImagesArray.*/

counter.leftImage.src = counter.leftObj.path;
counter.leftEl.id = counter.leftObj.name;

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
