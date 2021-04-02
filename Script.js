var listOfDictionary = [];

function addText() {
	var textValue = document.getElementById('textList').value;
	var listNode = document.getElementById('list');
	var liNode = document.createElement("LI");
	var textNode = document.createTextNode(textValue);
	liNode.appendChild(textNode);
	listNode.appendChild(liNode); 
	listOfDictionary.push(textValue);
}

function findWord(word) {
	return word == document.getElementById("findText").value;
}

function checkWord() {
 	var checkWord = listOfDictionary.find(findWord);
 	var word = document.getElementById("findText").value;
 	if (checkWord != null) {
 		document.getElementById("displayAnswer").innerHTML = 'The word "' + word + '" exists in the dictionary!';
 	} else {
 		document.getElementById("displayAnswer").innerHTML = 'The word "' + word + '" does not exist in the dictionary!';
 	}
}