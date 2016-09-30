/*
Below is a small script which generates random adventures. There are two
problems which are marked below with "TODO". Your assignment is to solve
those TODOs and get this script really up to snuff.
*/

function runGame() {
	var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid"
	];

	var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace"
	];

	var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to"
	];

	var heroGender;
	if (Math.random() < 0.5) {
		heroGender = "heroine";
	} else {
		heroGender = "hero";
	}

	function pickRandomThing(thing) {
		return thing[Math.floor(Math.random() * thing.length)];
	}
	var chosenMonster = pickRandomThing(monsters);
	var chosenWeapon = pickRandomThing(weapons);
	var chosenAction = pickRandomThing(actions);

	var output = "Armed with only their " +
	chosenWeapon +
	" our " +
	heroGender +
	" " +
	chosenAction +
	" the evil " +
	chosenMonster +
	"!";

	document.getElementById("adventure").innerText = output;
}

runGame();

document.getElementById('new_adventure').onclick = runGame;


/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
	*/

/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
	*/
