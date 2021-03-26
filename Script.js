function addText() {
	var textVal = document.getElementById('textList').value,
		listNode = document.getElementById('list'),
		liNode = document.createElement("LI"),
		textNode = document.createTextNode(textVal);

	liNode.appendChild(textNode);
	listNode.appendChild(liNode);
}

function findWord() {
	var x;
	var y = "";
	listNode = document.getElementById('list');
	for (x in listNode) {
		y += x + "<br>";
	}
	document.getElementById("demo").innerHTML = y;
}