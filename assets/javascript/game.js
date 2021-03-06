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
    	var imageCrystal = $("<img>");
    	imageCrystal.addClass("crystal-image");
    	imageCrystal.attr("src", crystImg[i]);
    	imageCrystal.attr("data-crystalvalue", crystValues[i]);
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
	$("#userScore").text(userTotal);
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
	$("#userScore").text(userTotal);
	crystValues = [];
	console.log(crystValues);
	theGame();
}

// Updates the Goal
function updateGoal(goal) {
	$("#numberGoal").text(goal);
}

// Updates the user's current total
function updateTotal(total) {
	$("#userScore").text(userTotal);
}
// This is the game
function theGame() {
	for(i = 0; crystValues.length < 4; i++) {
		makeCrystalValue();
	}
	makeCrystals();
	var goal = randomNum(19, 120);
	updateGoal(goal);
	updateTotal(userTotal);
	console.log(crystValues);

	$(".crystal-image").on("click", function() {
    	var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	userTotal += crystalValue;
    	updateTotal(userTotal);
    	
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


// And away we go.

theGame();