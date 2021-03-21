function addText() {
	var textVal = document.getElementById('textList').value,
		listNode = document.getElementById('list'),
		liNode = document.createElement("LI"),
		textNode = document.createTextNode(textVal);

	liNode.appendChild(textNode);
	listNode.appendChild(liNode);
}