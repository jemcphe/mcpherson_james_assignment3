alert("JavaScript works!");
// Global Variables
var 	friendNames = ["Margherita", " Nick", " Mac", " or Justin."],
		game1 = {
			day : "Thursday",
			homeTeam: "Oklahoma City Thunder",
			awayTeam : "Dallas Mavericks"
		},
		game2 = {
			day: "Friday",
			homeTeam: "Oklahoma City Thunder",
			awayTeam: "Miami Heat"
		},
		me = { 
			name: "James",
			favoriteTeam: "Oklahoma City Thunder.",
			getGameInfo : function(object) {
				var headline = console.log( object.day + "'s game is between the " + object.homeTeam + " and the " + object.awayTeam + "!");
				return headline;
			},
			getVoiceLeft: function(volume) {
				do {
				var voiceRemaining = console.log("I can't help but get loud at a Thunder game. I have " + volume + " % of my voice left.");
				volume -= 10;
				} while (volume > 20); 
				return voiceRemaining;
			},
			getBelongings: function(array) {
				
			}
		},
		guest = {
			name : "",
			listGuestOptions : function (friendNames) {
				console.log("Here are the friends I have to choose from: ");
				var names = console.log("" + friendNames);
				return names;
			},
			getGuestByName: function (name) {
				myGuest = console.log("I have decided to take " + name + " to the Thunder game!");
				return myGuest;
			},
			easilyInfluenced : function(team) {
				var myFavTeam = console.log('"I think the ' + team + ' just became my favorite team!"');
				return team;
			}
		};

// Procedure using JSON  Data
var playerData = function (json) {
	for( var i = 0; i < json.players.length; i++){
		var player = json.players[i];
		console.log("Player: " + player.name + ", Position: " + player.position + ", Number: " + player.number);
	};
};

var getStarter = function(haveProgram) {
	if(haveProgram === "yes") {
		console.log("The starting players for the game tonight are: ");
		for(var i = 0; i < json.players.length; i++) {
		var player = json.players[i];
		var name = player.name;
			if(player.starter == true) {
				console.log("" + name);
			} 
		};
		return name;
	} else {
		var noClue = console.log("I have no clue who is starting tonight");
		return noClue;
	}
};
	
me.getGameInfo(game1);
guest.listGuestOptions(friendNames);
guest.getGuestByName("Nick");
console.log("My favorite team, by far, is the " + me.favoriteTeam);
console.log("The active roster for the Oklahoma City Thunder looks like this: ")
playerData(json);
getStarter("yes");
me.getVoiceLeft(100);
console.log("I should save the rest of my voice for the drive home.");
console.log("After the Thunder won the game,  I heard my guest say,");
guest.easilyInfluenced("Oklahoma City Thunder");




