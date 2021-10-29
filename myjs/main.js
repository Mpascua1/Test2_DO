/*
function myFunction(){
	alert('JS file reached!');
}
*/

$(document).ready(() => 
{ 
	const $contactHide = $('#cntus');
	$contactHide.hide();
});

$('#showContact').on('click', () => {
 $('#cntus').show(); 
});

const myform = document.getElementById('shift');
const fnameValue = document.getElementById('fname');
const lnameValue = document.getElementById('lname');
const emailValue = document.getElementById('email');
const phonenumValue = document.getElementById('phonenum');
const showError = document.getElementsByClassName('red-error');


myform.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	//trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phonenum.value.trim();
	
	
	
	if(fnameValue === '') {
		setErrorFor(fname);
	} else {
		setSuccessFor(fname);
	}
	
	if(lnameValue === '') {
		setErrorFor(lname);
	} else {
		setSuccessFor(lname);
	}
	
	if(emailValue === '') {
		setErrorFor(email);
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(phoneValue === '') {
		setErrorFor(phonenum);
	} else {
		setSuccessFor(phonenum);
	}
	
}

function setErrorFor(input) {
	const formControl = input;
	formControl.className = 'error';
}

function setSuccessFor(input) {
	const formControl = input;
	formControl.className = 'success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}