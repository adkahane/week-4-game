var crystValues = [];
var crystImg = [];
var wins = 0;
var losses = 0;
var userTotal;

// Functions

function randomNum() {
  // console.log(wordList);
  return ((Math.floor(Math.random()) + 19) * 120);
}

// Checks if the user shas guessed the letter before
function compareUsed(ranNum) {
  for(i = 0; i < crystValues.length; i++) {
    if (ranNum === crystValues[i]) {
      return(true);
    }
  }
}

function makeCrystalValue() {
	var ranNum = randomNum();
	if (compareUsed(ranNum) === true) {
		makeCrystalvalue();
	}	
	else () {
		crystValues.push(ranNum);
	}
}

function makeCrystals() {
	for (var i = 0; i < 4; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", crystalImg[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", crystValues[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}