console.log('javascript works');

/*The object constructor identified as SalesItem creates objects that are instances
of salesItem and contain the properties of : name, imageSource, numberTimesDisplayed, numberTimesSelected, percentageTimesSelected.*/

function SalesItem(name) {
  this.name = name;
  this.imageSource = imageSource;
  this.numberTimesDisplayed = numberTimesDisplayed;
  this.numberTimesSelected = numberTimesSelected;
  this.percentageTimesSelected = percentageTimesSelected;
}

/*The object constructor SalesItem is given a method that takes an image found in
a file and places that image on a web page. The variable imageElement imgEl is
created.  The variable is given content.  The element is placed on the page.

*/
SalesItem.prototype.renderToPage = function(){
  imgEl = document.createElement("img");
  imgEl.setAttribute(imageSource, this.imageSource);
  document.appendChild();
  // place image on the page
};


var percentageTimesSelected = function percentage(numberTimesSelected, numberTimesDisplayed){
  Math.round(numberTimesSelected / numberTimesDisplayed * 100);
};

function handleImageClick(event){
  console.log('event.target: ', event.target);
  console.log('hello from handleImageClick event handler.');
}

var trackImages = document.getElementsByClassName('track-images');

for (var i = 0; i < trackImages.length; i++){
  trackImages[i].addEventListener('click', handleImageClick);
}
