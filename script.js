let fields = [];
let gameOver = false;
let currentShape = 'cross';
let winner;


function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('inactive'); // mit diesr Zeilen fügen wir und entfernen wir ein CSS Style!!!
            document.getElementById('player-1').classList.add('inactive'); // mit diesr Zeilen fügen wir und entfernen wir ein CSS Style!!!
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('inactive'); // mit diesr Zeilen fügen wir und entfernen wir ein CSS Style!!!
            document.getElementById('player-2').classList.add('inactive'); // mit diesr Zeilen fügen wir und entfernen wir ein CSS Style!!!
        }

        fields[id] = currentShape;
        draw();
        checkForWin();

    }
}



//**Draw Function */
function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none'); // mit der Zeile wird der Kreisel beim Klicken angezeigt!
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none'); // Mit der Zeile wird der Kreuz beim Klicken angezeigt!


        }
        if (noWinner()) {
            gameOver = true;
            setTimeout(function() {
                document.getElementById('game-over').classList.remove('d-none');
            }, 1000);

        }
    }
}

//**No Winner Function */
function noWinner() {
    return GameDrow = (fields.filter(String).length == 9) ? true : false;
}

//**Winner Function */
function checkForWin() {


    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[7]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';

    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1)';
    }


    if (!!winner) {
        gameOver = true;
        setTimeout(function() {
            document.getElementById('game-over').classList.remove('d-none');
        }, 1000);

    }

}

//**Restart Function */
function restart() {
    fullRest = document.getElementById('restart-btn');
    location.reload();
}