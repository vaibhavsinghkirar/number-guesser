'use strict';
//
//document.querySelector('.guess').value = 23;
let again = document.querySelector('.again');

let number = Math.trunc(Math.random()*20)+1;
let score = 10;
let highscore = 0;
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = '😒 NO CONTENT';
    }
    else if(guess===number){
        document.querySelector('.message').innerText='👍 correct number';
        document.querySelector('body').style.backgroundColor  = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent=number;
        if(score>highscore){
            document.querySelector('.highscore').textContent = score;
        }

    }
    else if(guess>number){
        if(score>1){
        document.querySelector('.message').textContent='😡 Too high';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent='😂 You Lose The Game';
            document.querySelector('.score').textContent = 0;
        }
    }
    else{
        if(score>1){
        document.querySelector('.message').textContent='🤬 Too low';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent='😂 You Lose The Game';
            document.querySelector('.score').textContent = 0;
        }
    }

});
again.addEventListener('click',function(){
    score = 10;
    document.querySelector('.score').textContent = score;
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent  = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor  = '#222';
    document.querySelector('.number').style.width = '15rem';
})
