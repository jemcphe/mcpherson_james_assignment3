alert("JavaScript works!");
// Global Variables
var playerName = json.players.name;
var starter = json.players.starter;
var 

// Procedure using JSON  Data
var playerInfo = function () {
	for( var i = 0; i < json.players.length; i++){
		var player = json.players[i];
		console.log("Player: " + player.name + ", Position: " + player.position + ", Number: " + player.number);
	};
};

var getStarter = function(haveProgram) {
	if(haveProgram === "yes") {
		for(var i = 0; i < json.players.length; i++) {
		var player = json.players[i];
			if(player.starter == true) {
				var name = player.name;
				console.log("" + name);
			} 
		};
	} else {
		var noClue = console.log("I have no clue who is starting tonight");
		return noClue;
	}
};
	

playerInfo();
console.log("The starting players for the game tonight are: ");
getStarter("yes");




