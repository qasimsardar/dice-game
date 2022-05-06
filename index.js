function diceScore() {

    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");

    

    dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2){
        var winner = "Player 1 Wins 🚩";
    }
    else if(randomNumber1 < randomNumber2){
        var winner = "🚩 Player 2 Wins";
    }
    else{
        var winner = "Draw!";
    }

    document.getElementById("results").innerHTML = winner;
    
    
}

diceScore();