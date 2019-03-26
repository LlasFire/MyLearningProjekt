var testCheck = document.getElementById('checkOne');
testCheck.addEventListener('change', chValue);

function chValue(){
	var check = document.getElementById('checkOne');

	if (check.checked) {
		alert('Yahoo !');
	}
	else{
		alert('Oh, really?!');
	}
}

var checkRadio = document.getElementById('go');
checkRadio.addEventListener('click', radioChange);

function radioChange() {
	var rad = document.getElementsByName('rad');

	for (var i = 0; i< rad.length; i++){

		if (rad[i].checked) {
			alert('You check ' + (i + 1) + ' element');
		}
	}
}

