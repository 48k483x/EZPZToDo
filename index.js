let inputVal = document.getElementById('input');
let list = document.getElementById('task-container');


addTask = () => {
	if (inputVal.value === '') {
		alert('Please enter a task');
	}
	else {
		let li = document.createElement('li');
		li.innerHTML = inputVal.value;
		list.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = "\u00d7";
		li.appendChild(span);
		inputVal.value = '';
		saveData();
	}
}

list.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
		saveData();
	}
	else if (e.target.tagName === 'SPAN') {
		e.target.parentElement.style.display = 'none';
		saveData();
	}
}, false);

saveData = () => {
	localStorage.setItem('data', list.innerHTML);
}

showTasks = () => {
	list.innerHTML = localStorage.getItem('data');
}

showTasks();