var currentGame;
var index;

function wordValue(term, defn, examples) {
	this.term=term;
	this.defn=defn;
	this.examples=examples;
}

var Dictionary1 = new Array (
	new wordValue('Abate', 'to reduce in amount, degree, or severity'),
	new wordValue('Abscond', 'to leave secretly'),
	new wordValue('Abstain', 'to choose not to do something'),
	new wordValue('Abyss', 'an extreamly deep hole'),
	new wordValue('Adulterate', 'to make impure'),
	new wordValue('Advocate', 'to speak in favor of'),
	new wordValue('Aeshetic', 'concerning the appreciation of beauty'),
	new wordValue('Aggrandize', 'to increase in power'),
	new wordValue('Alleviate', 'to make more bearable'),
	new wordValue('Amalgamate', 'to combine; to mix together'),
	new wordValue('Ambiguous', 'doubtful or uncertain'),
	new wordValue('Ameliorate', 'to make better; to improve'),
	new wordValue('Anachronism', 'something out of place in time'),
	new wordValue('Analogous', 'similar or alike in some way; equivalent to'),
	new wordValue('Anomaly', 'deviation form what is normal'),
	new wordValue('Antagonize', 'to annoy or provoke to anger'),
	new wordValue('Antipathy', 'extreme dislike'),
	new wordValue('Apathy', 'lack of interest or emotion'),
	new wordValue('Arbitrate', 'to judge a dispur betweeen two opposing parties'),
	new wordValue('Archaic', 'ancient; old-fashion'),
	new wordValue('Ardor', 'intense and passionate feeling'),
	new wordValue('Articulate', 'able to speak clearly and expressively'),
	new wordValue('Assuage', 'to make something unpleasant less severe'),
	new wordValue('Attenuate' , 'to reduce  in force or degree; to weaken'),
	new wordValue('Audacious', 'fearless and daring'),
	new wordValue('Austere', 'severe or stern in appearance; undecorated'),
	);

var Dictionary2 = new Array (
	new wordValue('A / An', 'not, without'),		
	new wordValue('Ab', 'off, away from, apart, down'),
  new wordValue('Able / Ible', 'capable of, worthy of'),	
  new wordValue('Ac / Acr','sharp, bitter, sour'),
  new wordValue('Act / Ag','to do, to drive, to force, to lead'),
  new wordValue('Acou','hearing'),	
  new wordValue('Ad','to, toward, nead'),
  new wordValue('Al / Ali / Alter','other, another'),
  new wordValue('Am','love'),			
  new wordValue('Ambi / Amphi','both, on both sides, around'),
  new wordValue('Ambl / Ambul','to go, to walk'),				
  new wordValue('Anim','to the life, mind, soul, breath'),
  new wordValue('Annui / Enni','year'),
  new wordValue('Ant / Ante','before'),
new wordValue('Anthro / Andr','man, human'),					    
new wordValue('Anti','against, opposite'),
  new wordValue('Apo','away'),		
  new wordValue('Aqua / Aque','water'),
new wordValue('Arch / Archi / Archy','chief, principal, ruler'),	
new wordValue('Ard','to burn'),	
  new wordValue('Auto','self'),				
);

function showOptions() {
	document.getElementById("startRoot").style.display="inline-block";
	document.getElementById("startDictionary").style.display="inline-block";
}

function begin() {

	index = getIndex();
	
	showButtons = function() {
		document.getElementById("startRoot").style.display="none";
		document.getElementById("startDictionary").style.display="none";
		document.getElementById('remain').style.display="inline-block";
		document.getElementById("reveal").style.display="inline";
		document.getElementById("keep").style.display="inline";
		document.getElementById("remove").style.display="inline";
	}
	showButtons();
	displayTotalRoots();
	document.getElementById('display').innerHTML = currentGame[index].term;
}

function getIndex() {
		return Math.floor(Math.random() * (currentGame.length)); 
}

function displayTotalRoots() {
	document.getElementById('remain').innerHTML = 'Remaining Terms: ' + currentGame.length;
}

function flip() {
	var current = document.getElementById('display').innerHTML;
	current = current === currentGame[index].term ?
		currentGame[index].defn : currentGame[index].term;
	document.getElementById('display').innerHTML = current;
}

function decrement() {
	currentGame.splice(index, 1);
	displayTotalRoots();
	if (currentGame.length === 0) {
		alert('no more cards!');
		return;
	}
	next();
}
function next() {
	index = getIndex();
	document.getElementById('display').innerHTML = currentGame[index].term;
}