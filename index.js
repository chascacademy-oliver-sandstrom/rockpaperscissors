const rock = document.querySelector('.rock');
const scissor = document.querySelector('.scissor');
const paper = document.querySelector('.paper');

const result = document.querySelector('.result');
const score = document.querySelector('.score');
const pcScore = document.querySelector('.pc-score');

let userPick;
let pcPick;

let userTotalScore = 0;
let pcTotalScore = 0;

rock.addEventListener('click', clickRock);
scissor.addEventListener('click', clickScissor);
paper.addEventListener('click', clickPaper);

//rock = 1, scissor = 2, paper = 3. 

function clickRock() {
    userPick = 1;
    pcPick = Math.floor(Math.random() * 3 + 1);
    console.log(pcPick);
    result.innerHTML = '';
    if (userPick == pcPick) {
        console.log('draw');
        result.innerHTML = 'Draw...try again!'
        result.style.color = 'white';
    } else if (pcPick == 2) {
        console.log ('you win');
        userTotalScore++;
        score.innerHTML = userTotalScore;
        result.innerHTML = 'Nice!'
        result.style.color = 'white';
    } else if (pcPick == 3) {
        console.log('you lose');
        pcTotalScore++;
        pcScore.innerHTML = pcTotalScore;
        result.innerHTML = ':('
        result.style.color = 'white';
    }   
    console.log('ett'); 
    checkResult();
}

function clickScissor() {
    userPick = 2;
    pcPick = Math.floor(Math.random() * 3 + 1);
    console.log(pcPick);
    console.log('tva');
    result.innerHTML = '';
    if (userPick == pcPick) {
        console.log('draw');
        result.innerHTML = 'Draw...try again!'
        result.style.color = 'white';
    } else if (pcPick == 3) {
        console.log ('you win');
        userTotalScore++;
        score.innerHTML = userTotalScore;
        result.innerHTML = 'Nice!'
        result.style.color = 'white';
    } else if (pcPick == 1) {
        console.log('you lose');
        pcTotalScore++;
        pcScore.innerHTML = pcTotalScore;
        result.innerHTML = ':('
        result.style.color = 'white';
    } 
    checkResult();
}

function clickPaper() {
    userPick = 3;
    pcPick = Math.floor(Math.random() * 3 + 1);
    console.log(pcPick);
    console.log('tre');
    result.innerHTML = '';
    if (userPick == pcPick) {
        console.log('draw');
        result.innerHTML = 'Draw...try again!'
        result.style.color = 'white';
    } else if (pcPick == 1) {
        console.log ('you win');
        userTotalScore++;
        score.innerHTML = userTotalScore;
        result.innerHTML = 'Nice!'
        result.style.color = 'white';
    } else if (pcPick == 2) {
        console.log('you lose');
        pcTotalScore++;
        pcScore.innerHTML = pcTotalScore;
        result.innerHTML = ':('
        result.style.color = 'white';
    } 
    checkResult();
}

function checkResult() {
    if (userTotalScore == 5) {
        console.log('WIN');
        result.innerHTML = 'You won';
        result.style.color = 'green';
        pcTotalScore = 0;
        userTotalScore = 0;
        pcScore.innerHTML = pcTotalScore;
        score.innerHTML = userTotalScore;
    } else if (pcTotalScore == 5) {
        console.log('LOST');
        result.innerHTML = 'You lost'
        result.style.color = 'red';
        pcTotalScore = 0;
        userTotalScore = 0;
        pcScore.innerHTML = pcTotalScore;
        score.innerHTML = userTotalScore;
    }
}






