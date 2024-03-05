var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var image1 = "dice" + randomNumber1 + ".png";
var image2 = "dice" + randomNumber2 + ".png";
 
var randomImageSource = "images/" + image1;
var randomImageSource2 = "images/" + image2;

var image1 = document.querySelectorAll("img") [0];
var image2 = document.querySelectorAll ("img") [1];

image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

var container = document.getElementsByClassName("container");

if (randomNumber1 > randomNumber2) {
    document.querySelector ("h1").innerHTML = "Player 1 Wins!";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector ("h1").innerHTML = "Player 2 Wins!";
} 
else {
    document.querySelector ("h1").innerHTML = "Draw!";
}
console.log("Player 1:", randomNumber1);
console.log("Player 2:", randomNumber2);
