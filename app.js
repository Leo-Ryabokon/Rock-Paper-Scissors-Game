let userScore = 0,
    compScore = 0,
    userScore_span = document.querySelector('#user-score'),
    compScore_span = document.querySelector('#comp-score'),
    scoreBoard_div = document.querySelector('.score-board'),
    result_p = document.querySelector('.result > p'),
    rock_div = document.querySelector('#r'),
    paper_div = document.querySelector('#p'),
    scissors_div = document.querySelector('#s');

function getCopmChoice (){
    const choices = ['r', 'p', 's'];
    const randomNumb = Math.floor(Math.random() * 3);
    return choices[randomNumb];
}

function convertToWord (later){
    if (later === 'r')return 'Rock';
    if (later === 'p')return 'Paper';
    return 'Scissors';
}

function win (userChoice, compChoice){
    const smallUserWord = 'user'.fontsize(3).sub(),
          smallCompWord = 'comp'.fontsize(3).sub(),
          userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord} You WIN!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}


function lose (userChoice, compChoice){
    const smallUserWord = 'user'.fontsize(3).sub(),
          smallCompWord = 'comp'.fontsize(3).sub(),
          userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord} You lost...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw (userChoice, compChoice){
    const smallUserWord = 'user'.fontsize(3).sub(),
          smallCompWord = 'comp'.fontsize(3).sub(),
          userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(compChoice)}${smallCompWord} It's a draw.`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice){
    const compChoice = getCopmChoice();
    switch (userChoice + compChoice) {
        case 'rs': 
        case 'pr':
        case 'sp':
            win(userChoice, compChoice);
            break;
        case 'rp': 
        case 'ps':
        case 'sr':
            lose(userChoice, compChoice);
            break;
        case 'rr': 
        case 'pp':
        case 'ss':
            draw(userChoice, compChoice);
            break;
    }
}

function main (){
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));  
}

main();