let userScore=0;
let computerScore=0;
let drawScore=0;

const  statusText=document.getElementById('status');
const userScoreDisplay=document.getElementById('user-score');
const computerScoreDisplay=document.getElementById('computer-score');
const drawScoreDisplay=document.getElementById('draw-score');

const buttons=document.querySelectorAll('#options button');

const resetBtn=document.getElementById('reset');

buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const userMove=btn.getAttribute('data-move');

        playRound(userMove);
    });
});

resetBtn.addEventListener('click', resetGame);


function playRound(userMove){
    const moves=['rock','paper','scissors'];
    const computerMove=moves[Math.floor(Math.random()*3)];

    let result="";

    if(userMove===computerMove){
        drawScore++;
        result="It's a draw!";
        
    }else if(
       (userMove==='rock' && computerMove==='scissors')||
        (userMove==='paper'&& computerMove==='rock')||
        (userMove==='scissors' && computerMove==='paper')
    ){
        userScore++;
        result="You win!";
    }else{
        computerScore++;
        result="Computer Wins!";
    }

    userScoreDisplay.textContent=userScore;
    computerScoreDisplay.textContent=computerScore;
    drawScoreDisplay.textContent=drawScore;

    statusText.textContent=`you: ${userMove} | computer: ${computerMove} => ${result}`;
}

function resetGame(){
    userScore=0;
    computerScore=0;
    drawScore=0;

    userScoreDisplay.textContent=0;
    computerScoreDisplay.textContent=0;
    drawScoreDisplay.textContent=0;

    statusText.textContent="Make your Move";
}