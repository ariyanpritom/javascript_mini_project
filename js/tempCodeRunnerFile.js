var textEnd = document.querySelector('h3');

textEnd.style.backgroundColor = 'orange';

if(playerOneSrc > playerTwoSrc){
    textEnd.innerHTML('Player one is OWN');
}else if(playerOneSrc < playerTwoSrc){
    textEnd.innerHTML('Player two is OWN');
}else{
    textEnd.innerHTML('The game is Draw');
}