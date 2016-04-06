console.log('javascript works');

//The global variables are identified below.
var testProductImagesArray = [];
var allProductsArray = [];

var totalImagesDisplayed = 0;
var totalSelectionsMade = 0;

var randomDisplayImageLeft;
var randomDisplayImageMiddle;
var randomDisplayImageRight;

/*The object constructor identified as TestProduct creates objects that are instances
of TestProduct and contain the properties of : testProductName, filePath,
numberTimesDisplayed, numberTimesSelected, percentageTimesSelected. The property
testProductImagesArray is an array containing each of the other properties of
the object. The twenty product variables are used as arguments to
create objects with the TestProduct constructor.*/

function TestProduct(testProductName, filePath) {
  this.testProductName = testProductName;
  this.filePath = filePath;
  this.numberTimesDisplayed = 0;
  this.numberTimesSelected = 0;
  testProductImagesArray.push(this);
}

TestProduct.prototype.calculatePercentageSelected = function() {
  return(this.numberTimesSelected / this.numberTimesDisplayed).toFixed(2) * 100;
};

var allProductsArray = [
  new TestProduct('R2D2 Luggage', 'img/bag.jpg'),
  new TestProduct('Banana Slicer', 'img/banana.jpg'),
  new TestProduct('Ipad TP Roll Holder', 'img/bathroom.jpg'),
  new TestProduct('Open Toed Rain Boots', 'img/boots.jpg'),
  new TestProduct('Breakfast Appliance', 'img/breakfast.jpg'),
  new TestProduct('Meatball Bubblegum', 'img/bubblegum.jpg'),
  new TestProduct('Domed Chair', 'img/chair.jpg'),
  new TestProduct('Cthulhu Play Figure', 'img/cthulhu.jpg'),
  new TestProduct('Dog Duck Mask', 'img/dogDuck.jpg'),
  new TestProduct('Dragon Meat', 'img/dragon.jpg'),
  new TestProduct('Utensil Pens', 'img/pen.jpg'),
  new TestProduct('Pet Floor Dusters', 'img/petSweep.jpg'),
  new TestProduct('Pizza Scissors', 'img/scissors.jpg'),
  new TestProduct('Shark Sleeping Bag', 'img/shark.jpg'),
  new TestProduct('Baby Floor Sweeper', 'img/sweep.png'),
  new TestProduct('Dog Sleeping Bag', 'img/tauntaun.jpg'),
  new TestProduct('Unicorn Meat', 'img/unicorn.jpg'),
  new TestProduct('Tentacle USB', 'img/usb.gif'),
  new TestProduct('Watering Can', 'img/waterCan.jpg'),
  new TestProduct('Blown Wine Glass', 'img/wineGlass.jpg'),
];

console.log(allProductsArray);

/* This allow the click data to be preserved in local storage. */

var testProductData = localStorage.getItem('dataPersist');
if (testProductData) {
  allProductsArray = JSON.parse(testProductData);
  console.log('Local Storage Has Data');
} else {
  console.log('Local Storage is Empty and is Initializing.');
  localStorage.setItem('dataPersist', JSON.stringify(allProductsArray));
}

/*The generateRandomImagesFunction is used to access the testProductImagesArray
and select three random images to be displayed on the page and stored in three
variables. The renderThreeRandomImagesFunction adds content to that image element
by randomly assigning it an image from the testProductImagesArray. In addition,
the number of times the image is displayed is also stored back in the object
property numberTimesDisplayed. The total images displayed and the total images
selected are also kept track of. The images are made clickable with an
addEventListener. The while statements insure that there are not
duplicate pictures on the display.*/

generateRandomImagesIndexFunction = function() {
  return Math.floor(Math.random() * testProductImagesArray.length);
};

var renderThreeRandomImagesFunction = function(){

  var imagesContainer = document.getElementById('');

  var randomDisplayImageLeft = document.getElementById('left-img');
  var randomDisplayImageMiddle = document.getElementById('middle-img');
  var randomDisplayImageRight = document.getElementById('right-img');

  //imagesContainer.textContent = '';

  imageIndex1 = generateRandomImagesIndexFunction();
  randomDisplayImageLeft.src = testProductImagesArray[imageIndex1].filePath;
  testProductImagesArray[imageIndex1].numberTimesDisplayed ++;
  totalImagesDisplayed ++;
  randomDisplayImageLeft.addEventListener('click', handleClickLeft);

  imageIndex2 = generateRandomImagesIndexFunction();
  while (imageIndex1 === imageIndex2) {
    imageIndex2 = generateRandomImagesIndexFunction();
  }
  randomDisplayImageMiddle.src = testProductImagesArray[imageIndex2].filePath;
  testProductImagesArray[imageIndex2].numberTimesDisplayed ++;
  totalImagesDisplayed ++;
  randomDisplayImageMiddle.addEventListener('click', handleClickMiddle);

  imageIndex3 = generateRandomImagesIndexFunction();
  while (imageIndex1 === imageIndex2 || imageIndex2 === imageIndex3 || imageIndex3 === imageIndex1) {
    imageIndex3 = generateRandomImagesIndexFunction();
  }
  randomDisplayImageRight.src = testProductImagesArray[imageIndex3].filePath;
  testProductImagesArray[imageIndex3].numberTimesDisplayed ++;
  totalImagesDisplayed ++;
  randomDisplayImageRight.addEventListener('click', handleClickRight);
};

renderThreeRandomImagesFunction();

/*The functions, handleClickLeft, handleClickMiddle, and handleClickRight are
triggered when the respective image is clicked. This trigger results in an
increase to the numberTimesSelected as well as calling the
handleUniversalClickFunction. The handleUniversalClickFunction adds to
totalSelectionsMadeas well as calling again the renderThreeRandomImagesFunction.*/

handleUniversalClick = function(){
  totalSelectionsMade ++;
  console.log('The variable totalSelectionsMade equals ' + totalSelectionsMade);
  console.log('The variable totalImagesDisplayed equals ' + totalImagesDisplayed);
  renderThreeRandomImagesFunction();
  localStorage.setItem('dataPersist', JSON.stringify(allProductsArray));
  if(totalSelectionsMade < 25) {
    console.log('Total number of selections: ' + totalSelectionsMade);
    seeResultsButton.style.display = 'none';
    selectMoreButton.style.display = 'none';
  } else if (totalSelectionsMade = 25) {
    seeResultsButton.style.display = 'block';
    selectMoreButton.style.display = 'block';
    console.log('Total number of selections: ' + totalSelectionsMade);
  } else if (totalSelectionsMade < 35) {
    seeResultsButton.style.display = 'block';
    console.log('Total number of selections: ' + totalSelectionsMade);
  } else {
    console.log('Total number of selections: ' + totalSelectionsMade);
    removeImagesFunction();
    seeResultsButton.style.display = 'none';
    selectMoreButton.style.display = 'block';
  }
};

function handleClickLeft(event) {
  testProductImagesArray[imageIndex1].numberTimesSelected++;
  console.log(testProductImagesArray[imageIndex1]);
  handleUniversalClick();
}

function handleClickMiddle(event) {
  testProductImagesArray[imageIndex2].numberTimesSelected++;
  console.log(testProductImagesArray[imageIndex2]);
  handleUniversalClick();
}

function handleClickRight(event) {
  testProductImagesArray[imageIndex3].numberTimesSelected++;
  console.log(testProductImagesArray[imageIndex3]);
  handleUniversalClick();
}

/*After 25 selections two buttons appear.  One button asks the user to see
results and the other button asks to make 10 more selections.*/

removeImagesFunction = function (){
  var parent = document.getElementById(imagesContainer);
  var child = document.getElementById(randomDisplayImageLeft);
  parent.removeChild(randomDisplayImageLeft);
  var child = document.getElementById(randomDisplayImageMiddle);
  parent.removeChild(randomDisplayImageMiddle);
  var child = document.getElementById(randomDisplayImageRight);
  parent.removeChild(randomDisplayImageRight);
};

/* Manage local storage. */

var resetMemoryButton = document.getElementById('reset-memory');

var handleResetMemoryButton = function() {
  console.log('Resetting Local Storage Memory');
  localStorage.clear();
  totalSelectionsMade = 0;
  totalImagesDisplayed = 0;
  selectMoreButton.style.display = 'block';
  seeResultsButton.style.display = 'block';
};

resetMemoryButton.addEventListener('click', handleResetMemoryButton);

/* The conditions when More Selections and See Results buttons are employed.*/

var selectMoreButton = document.getElementById('select-more');
var seeResultsButton = document.getElementById('see-results');

if(totalSelectionsMade < 25) {
  console.log('Total number of selections: ' + totalSelectionsMade);
  seeResultsButton.style.display = 'none';
  selectMoreButton.style.display = 'none';
} else if (totalSelectionsMade = 25) {
  seeResultsButton.style.display = 'block';
  selectMoreButton.style.display = 'block';
  console.log('Total number of selections: ' + totalSelectionsMade);
} else if (totalSelectionsMade < 35) {
  seeResultsButton.style.display = 'block';
  console.log('Total number of selections: ' + totalSelectionsMade);
} else {
  console.log('Total number of selections: ' + totalSelectionsMade);
  removeImagesFunction();
  seeResultsButton.style.display = 'none';
  selectMoreButton.style.display = 'block';
}

/* If the handleTenMoreSelectionsButtonSelect is clicked, then the user receives
ten more selections. */

function handleSelectMoreButtonSelect(event){
  selectMoreButton.style.display = 'none';
  renderThreeRandomImagesFunction();
}

function handleSeeResultsButtonSelect(event){
  seeResultsButton.style.display = 'none';
  removeImagesFunction();
  console.log('show me the results now dammit!');
  createTestProductReport();
}

/*
var reportListContainer = document.getElementById('report-list-container');
function createTestProductReport() {
  testProductReport.textContent = '';
  var testProductReport = document.createElement('ul');
  for (var i = 0; i < allProductsArray.length; i++) {
    allProducts[i].calculatePercentageSelected();
    var testProductReport = document.createElement('li');
    testProductReport.textContent = allProducts[i].testProductName + ' has receieved ' + allProducts[i].numberTimesSelected + ' selections after being displayed ' + allProducts[i].numberTimesDisplayed + ' times, for a ' + allProducts[i].calculatePercentageSelected() + '% selection rate';
    testProductReport.appendChild(reportlistContainer);
  }
}
*/
/*
/*result reporting in list and chart*/
/*
var listContainer = document.getElementById('list-container');

function renderList() {
  resultsDisplay.textContent = '';
  //var errorMessage = document.createElement('p');
  //errorMessage.textContent = 'You can click "Display Updated Results" to render this in a chart once //all ' + allProducts.length + ' products have been displayed at least once (you will have to click an //item one last time once your final item appears before updating as well). Thus far, ' + //alreadyDisplayed.length + ' products have been displayed.';
  resultsDisplay.appendChild(listContainer);
  var displayList = document.createElement('ul');
  for (var i = 0; i < allProducts.length; i++) {
    allProducts[i].findPercentClicked();
    var productResults = document.createElement('li');
    productResults.textContent = allProducts[i].productName + ' has receieved ' + allProducts[i].timesClicked + ' clicks after being displayed ' + allProducts[i].timesDisplayed + ' times, for a ' + allProducts[i].findPercentClicked() + '% selection rate';
    displayList.appendChild(productResults);
  }
  resultsDisplay.appendChild(displayList);
}

function createRawClicksChart() {
  var rawBarData = {
    labels : [],
    datasets : [
      {
        fillColor : '#B1FFFF',
        strokeColor : 'black',
        data : []
      },
      {
        fillColor: '#0E00C4',
        strokeColor: 'black',
        data: []
      }
    ]
  };
  for (var i = 0; i < allProducts.length; i++) {
    rawBarData.labels.push(allProducts[i].productName);
    rawBarData.datasets[0].data.push(allProducts[i].timesClicked);
    rawBarData.datasets[1].data.push(allProducts[i].timesDisplayed);
  }
  var rawResults = document.getElementById('rawResultsChart').getContext('2d');
  new Chart(rawResults).Bar(rawBarData);
}
function createPercentClickedChart() {
  var percentBarData = {
    labels: [],
    datasets: [
      {
        fillColor: '#B1FFFF',
        strokeColor: 'black',
        data: []
      },
    ]
  };
  for (var i = 0; i < allProductsArray.length; i ++) {
    percentBarData.labels.push(allProducts[i].textProductName);
    percentBarData.datasets[0].data.push(allProducts[i].findPercentClicked());
  }
  var percentResults = document.getElementById('percentResultsChart').getContext('2d');
  new Chart(percentResults).Bar(percentBarData);
}
function handleButtonClick(event) {
  if (alreadyDisplayed.length < 35) {
    resultsButton.textContent = 'Display Updated Results';
    var resultsDisplay = document.getElementById('resultsDisplay');
    renderList();
  } else {
    resultsButton.textContent = 'Display Updated Results';
    var resultsDisplay = document.getElementById('resultsDisplay');
    resultsDisplay.textContent = 'Left chart displays # of times each item was picked by user AND # of times user was shown each item. Right chart displays the % of the time the user chose each item (times it was clicked/times user was shown item)';
    createRawClicksChart();
    createPercentClickedChart();
  }
}
*/
