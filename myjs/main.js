/*
function myFunction(){
	alert('JS file reached!');
}
*/

$('#cntus').hide();

$(document).ready(() => 
{ 
	const $contactHide = $('#cntus');
	$contactHide.hide();
});


const myform = document.getElementById('shift');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phonenum = document.getElementById('phonenum');
const showError = document.getElementsByClassName('red-error');


myform.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phonenum.value.trim();
	
	
	
	if(fnameValue === '') {
		setErrorFor(fname, 'First name cannot be blank');
	} else {
		setSuccessFor(fname);
	}
	
	if(lnameValue === '') {
		setErrorFor(lname, 'Last name cannot be blank');
	} else {
		setSuccessFor(lname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(phoneValue === '') {
		setErrorFor(phonenum, 'Phone number cannot be blank');
	} else {
		setSuccessFor(phonenum);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input;
	formControl.className = 'error';
	/*small.innerText = message;*/
}

function setSuccessFor(input) {
	const formControl = input;
	formControl.className = 'success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}