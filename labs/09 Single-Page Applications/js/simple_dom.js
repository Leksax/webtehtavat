//console.log('page loaded');

console.log(document);

document.querySelector('#userForm input[type="email"]').onkeyup = (e) => {
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

document.querySelector('#userForm input[type="text"]').onkeyup = (e) => {
	var email = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = email;
};

document.querySelector('#userForm input[type="password"]').onkeyup = (e) => {
	var email = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary p[name="p"]').innerHTML = email;
};


function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}