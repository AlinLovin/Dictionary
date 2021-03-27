var str = [];

function addText() {
	var textVal = document.getElementById('textList').value,
		listNode = document.getElementById('list'),
		liNode = document.createElement("LI"),
		textNode = document.createTextNode(textVal);

	liNode.appendChild(textNode);
	listNode.appendChild(liNode); 
		
	str.push(textVal);
}

function findWord(word) {
	return word == document.getElementById("findText").value;
}

function checkWord() {
 	var checkWord = str.find(findWord);
 	var word = document.getElementById("findText").value;
 	if (checkWord != null) {
 		document.getElementById("demo").innerHTML = 'The word "' + word + '" exists in the dictionary!';
 	} else {
 		document.getElementById("demo").innerHTML = 'The word "' + word + '" does not exist in the dictionary!';
 	}
}