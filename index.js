var randomNumber1 = Math.floor(Math.random() * 6) + 1; // number from 1- 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //img from dice1 - dice6
var randomImageSource = "images/" + randomDiceImage ;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2 ;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h2").textContent = "Player 1 is the Winner!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h2").textContent = "Player 2 is the Winner!";
}else{
    document.querySelector("h2").textContent = "Draw!";
}