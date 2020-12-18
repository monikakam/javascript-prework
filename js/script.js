/*function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
*/


/*
printMessage('Zagralem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');

printMessage('Zagralem ' + 'papier' + '! Jeśli Twój ruch to papier, to remis!');

var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to remis!');
*/


var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

if (randomNumber == '1' {
	computerMove = 'kamień';
} else {
	computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

if (randomNumber == '2' {
	computerMove = 'papier';
} else {
	computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

if (randomNumber == '3' {
	computerMove = 'nożyce';
} else {
	computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
	else if {
	if (playerInput == '2') {
		playerMove = 'papier';
	}
	else if {
	if (playerInput == '3') {
		playerMove = 'nożyce';
	}
  	else {
  	playerMove = 'nieznany ruch';
	}
}
printMessage('Twój ruch: ' + playerMove);



