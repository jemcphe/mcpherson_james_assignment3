alert("JavaScript works!");

var playerInfo = function (json) {
	for( var i = 0; i < json.players.length; i++){
		var player = json.players[i];
		console.log("Player: " + player.name + ", Position: " + player.position + ", Number: " + player.number);
	};
};

playerInfo(json);
