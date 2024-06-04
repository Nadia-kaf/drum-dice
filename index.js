var randomNumber1 =Math.floor(Math.random()*6)+ 1;

var diceRandom= "dice" + randomNumber1 +".png";

var randomImg= "/images/"+ diceRandom
document.querySelectorAll("img")[0].setAttribute("src", randomImg);

var randomNumber2=Math.floor(Math.random()*6)+ 1;

var dice2Random= "dice" + randomNumber2 +".png";

var randomImg2= "/images/"+ dice2Random
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins"
} else if(randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML="Draw!"  
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins"
}