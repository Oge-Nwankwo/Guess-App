'use strict';


let number = Math.trunc(Math.random()*20)+1;
let score= 20;
let highscore= 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent= message;

}

 document.querySelector('.btn').addEventListener('click', function(){
const guess= Number(document.querySelector('.guess').value);

if(!guess){
    displayMessage('⛔ No Number!');

}else if(guess === number){
    displayMessage('🥇Correct Number!');
    document.querySelector('.num').textContent= number;
    
   document.querySelector('body').style.backgroundColor= "#0f4d7f";

   document.querySelector('.num').style.width= "100px";
   document.querySelector('.num').style.padding= "10px";

   if(score > highscore){
       highscore = score
    document.querySelector('.highscore').textContent = highscore;

   }

}else if(guess !== number){
    if(score > 1 ){

        document.querySelector('.message').textContent = guess > number ? '📉 Too high!!' :'📈 Too low!!';

        score--
       document.querySelector('.score').textContent=score;
    }else{
      displayMessage('😢 You lost the game!');
        document.querySelector('.score').textContent=0;

    }
}

 
})

document.querySelector('.btnn').addEventListener('click', function(){
    number = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.guess').value= '';
   displayMessage('start guessing...');
    document.querySelector('.score').textContent= score;
    document.querySelector('body').style.backgroundColor= "white";
    document.querySelector('.num').style.width= "70px";
    document.querySelector('.num').style.padding= "5px";
    document.querySelector('.num').textContent= '???';




})











 




