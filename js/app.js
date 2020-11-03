var randomOne = Math.floor(Math.random()*6)+1;
var randomTwo = Math.floor(Math.random()*6)+1;
var playerOneSrc = document.querySelectorAll('img')[0].setAttribute('src','img/dice-'+randomOne+'.png');
var playerTwoSrc = document.querySelectorAll('img')[1].setAttribute('src','img/dice-'+randomTwo+'.png');


var textEnd = document.querySelector('h3');

if(randomOne > randomTwo){
    textEnd.innerHTML = 'Player ONE is OWN. 😊';
}else if(randomOne < randomTwo){
    textEnd.innerHTML = 'Player TWO is OWN. 😊';
}else{
    textEnd.innerHTML = 'The match is DRAW! ';
}