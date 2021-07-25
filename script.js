function onClickDoneButton(event) {
	let target = getEventTarget(event);
	let li = target.closest("li");
	li.classList.toggle("checked");
}

function onClickDeleteButton(event) {
	let target = getEventTarget(event);
	let li = target.closest("li"); // get reference by using closest
	let ul = li.closest("ul");
	let nodes = Array.from(li.closest("ul").children); // get array
	let index = nodes.indexOf(li);

	ul.removeChild(li);

	arrlist = JSON.parse(localStorage.getItem("myTodo"));
	if (arrlist == null) {
		arrlist = [];
	}
	arrlist.splice(arrlist.length - index - 1, 1);
	localStorage.setItem("myTodo", JSON.stringify(arrlist));
}

function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

var arrlist = JSON.parse(localStorage.getItem("myTodo"));
if (arrlist == null) {
	arrlist = [];
}

for (let i = 0; i < arrlist.length; i++) {
	var list = document.createElement("Li");
	var text = document.createTextNode(arrlist[i]);
	list.appendChild(text);

	var myList = document.getElementById("myList");
	myList.insertBefore(list, myList.childNodes[0]);

	//Create a "done" button
	var doneButton = document.createElement("BUTTON");
	doneButton.textContent = "DONE";
	doneButton.className = "donebutton";

	// Create a "close" button
	var deleteButton = document.createElement("BUTTON");
	deleteButton.textContent = "DEL";
	deleteButton.className = "deletebutton";

	doneButton.onclick = function (event) {
		onClickDoneButton();
	};

	deleteButton.onclick = function (event) {
		onClickDeleteButton();
	};
	list.appendChild(doneButton);
	doneButton.style.visibility = "hidden";
	list.appendChild(deleteButton);
	deleteButton.style.visibility = "hidden";
	list.onmouseenter = function (event) {
		var list0 = event.target;
		var children = list0.childNodes;
		for (var i = 0, len = children.length; i < len; i++) {
			//alert('i=' + i + ' ' + children[i]);
			if (i > 0) {
				children[i].style.visibility = "visible";
			}
		}
	};
	list.onmouseleave = function (event) {
		var list0 = event.target;
		var children = list0.childNodes;
		for (var i = 0, len = children.length; i < len; i++) {
			//alert('i=' + i + ' ' + children[i]);
			if (i > 0) {
				children[i].style.visibility = "hidden";
			}
		}
	};
}
var input = document.getElementById("myTodo");
input.addEventListener("keyup", function (event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		myOnClick();
	}
});

//addtolist
function myOnClick() {
	var inputValue = document.getElementById("myTodo").value;
	document.getElementById("myTodo").value = "";
	if (inputValue === "") {
		alert("Task cannot be empty");
	} else {
		var list = document.createElement("Li");
		var text = document.createTextNode(inputValue);
		list.appendChild(text);

		var myList = document.getElementById("myList");
		myList.insertBefore(list, myList.childNodes[0]);

		arrlist.push(inputValue);

		//Create a "done" button
		var doneButton = document.createElement("BUTTON");
		doneButton.textContent = "DONE";
		doneButton.className = "donebutton";

		// Create a "close" button
		var deleteButton = document.createElement("BUTTON");
		deleteButton.textContent = "DEL";
		deleteButton.className = "deletebutton";

		doneButton.onclick = function (event) {
			onClickDoneButton();
		};

		deleteButton.onclick = function (event) {
			onClickDeleteButton();
		};
		list.appendChild(doneButton);
		doneButton.style.visibility = "hidden";
		list.appendChild(deleteButton);
		deleteButton.style.visibility = "hidden";
		list.onmouseenter = function (event) {
			var list0 = event.target;
			var children = list0.childNodes;
			for (var i = 0, len = children.length; i < len; i++) {
				//alert('i=' + i + ' ' + children[i]);
				if (i > 0) {
					children[i].style.visibility = "visible";
				}
			}
		};
		list.onmouseleave = function (event) {
			var list0 = event.target;
			var children = list0.childNodes;
			for (var i = 0, len = children.length; i < len; i++) {
				//alert('i=' + i + ' ' + children[i]);
				if (i > 0) {
					children[i].style.visibility = "hidden";
				}
			}
		};
	}
	localStorage.setItem("myTodo", JSON.stringify(arrlist));
}
