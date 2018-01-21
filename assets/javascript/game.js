var crystValues = [];
var crystImg = ["assets/images/bitcoin.png", 
				"assets/images/dogecoin.png", 
				"assets/images/ethereum.png", 
				"assets/images/litecoin.png"];
var wins = 0;
var losses = 0;
var userTotal = 0;

// Functions

// Creates a random number between min and max
function randomNum(min, max) {
  // console.log(wordList);
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

// Creates a random number between 1 and 12

// Checks if the random number has been used for any other crystals
function compareUsed(ranNum) {
  for(i = 0; i < crystValues.length; i++) {
    if (ranNum === crystValues[i]) {
      return(true);
    }
  }
}

// Makes an array of 4 crystal values with values between 1 and 12
function makeCrystalValue() {
	var ranNum = randomNum(1, 12);
	if (compareUsed(ranNum) === true) {
		
	}	
	else {
		crystValues.push(ranNum);
	}
}

// Creates crystal img's assigns a data value and an image source
function makeCrystals() {
	for (var i = 0; i < 4; i++) {
    	// For each iteration, we will create an imageCrystal
    	var imageCrystal = $("<img>");

    	// First each crystal will be given the class ".crystal-image".
    	// This will allow the CSS to take effect.
    	imageCrystal.addClass("crystal-image");

    	// Each imageCrystal will be given a src link to the crystal image
    	imageCrystal.attr("src", crystImg[i]);

    	// Each imageCrystal will be given a data attribute called data-crystalValue.
    	// This data attribute will be set equal to the array value.
    	imageCrystal.attr("data-crystalvalue", crystValues[i]);

    	// Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    	$("#crystals").append(imageCrystal);
	}
}

// Resets the Game and updates stats when you run out of guesses
function youLose() {
	losses++;
	var audio = new Audio('assets/audio/lose_flush.mp3');
	audio.play();
	$("#loseStats").html("<p>Losses : " + losses + "</p>");
	$("#crystals").html("");
	userTotal = 0;
	crystValues = [];
	console.log(crystValues);
	theGame();
}

// Plays audio and updates stats when user wins
function youWin() {
	wins++;
	var audio = new Audio('assets/audio/winclap.mp3');
	audio.play();
	$("#winStats").html("<p>Wins : " + wins + "</p>");
	$("#crystals").html("");
	userTotal = 0;
	crystValues = [];
	console.log(crystValues);
	theGame();
}

// This is the game
function theGame() {
	for(i = 0; crystValues.length < 4; i++) {
		makeCrystalValue();
	}
	makeCrystals();
	var goal = randomNum(19, 120);
	console.log(goal);
	console.log(crystValues);
	$(".crystal-image").on("click", function() {

    	// Determining the crystal's value requires us to extract the value from the data attribute.
    	// Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    	// Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    	// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    	var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);

    	// We then add the crystalValue to the user's "counter" which is a global variable.
    	// Every click, from every crystal adds to the global counter.
    	userTotal += crystalValue;

    	// All of the same game win-lose logic applies. So the rest remains unchanged.
    	alert("New score: " + userTotal);
    	if (userTotal === goal) {
      		alert("You win!");
      		youWin();
    	}

    	else if (userTotal >= goal) {
      		alert("You lose!!");
      		youLose();
    	}

	});
}

theGame();