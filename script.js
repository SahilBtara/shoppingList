var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var but = document.createElement("button");
	but.classList.add("delete");
	but.appendChild(document.createTextNode("Delete"));
	li.appendChild(but);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function done(i){
	if(li[i].classList.contains("done")){
		li[i].classList.remove("done");
	} else {
		li[i].classList.add("done");
	}
}

function deleteList(){
	var l = del.parentElement;
	l.remove();
}

function doneOrDelete(e){
	var tgt = e.target;
	console.log(tgt);
	if(tgt.classList.contains("delete")){
		tgt.parentElement.remove();
	}else{
		if(tgt.classList.contains("done")){
		tgt.classList.remove("done");
		}
		else{
			tgt.classList.add("done");
		}
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", doneOrDelete);
