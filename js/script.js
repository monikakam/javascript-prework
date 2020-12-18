function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

printMessage('Zagralem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');

printMessage('Zagralem ' + 'papier' + '! Jeśli Twój ruch to papier, to remis!');

var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to remis!');

var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);

if (randomNumber == '1' {
	computerMove = 'kamień';
} else {
	computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
