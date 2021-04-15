var listOfDictionary = [];

function addText() {
	var textValue = document.getElementById('add').value;
	var listNode = document.getElementById('list');
	var liNode = document.createElement("LI");
	var textNode = document.createTextNode(textValue);
	liNode.appendChild(textNode);
	listNode.appendChild(liNode); 
	listOfDictionary.push(textValue);
}

function checkWord() {
	var fieldWord = document.getElementById("findText").value;
	var found = listOfDictionary.find(element => element == fieldWord);
 	if (found != null) {
 		document.getElementById("displayAnswer").innerHTML = 'The word "' + fieldWord + '" exists in the dictionary!';
 	} else {
 		document.getElementById("displayAnswer").innerHTML = 'The word "' + fieldWord + '" does not exist in the dictionary!';
 	}
}