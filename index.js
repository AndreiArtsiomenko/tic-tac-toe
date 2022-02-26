const mainGrid = document.querySelector('.main__grid');
const mainBoxes = document.querySelectorAll('.main__box');
const mainModalWindow = document.querySelector('.main__modal-window')
const resultWin = document.querySelector('.result__win');
const resultMoves = document.querySelector('.result__moves');
const windowModalBtn = document.querySelector('.window-modal__btn');
let playerMove = 0;
let playerWin = '';
const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


mainGrid.addEventListener('click', e => {
    if (e.target.className = 'main__box') {
        if (e.target.innerHTML !== '') return;
        playerMove % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        playerMove++;
        checkResultValidation()
    };
});

function checkResultValidation() {
    for (let i = 0; i < combinations.length; i++) {
        if (mainBoxes[combinations[i][0]].innerHTML === 'X' && mainBoxes[combinations[i][1]].innerHTML === 'X' && mainBoxes[combinations[i][2]].innerHTML === 'X') {
            playerWin = 'X';
            showWinner(playerWin);
            break;
        } else if (mainBoxes[combinations[i][0]].innerHTML === 'O' && mainBoxes[combinations[i][1]].innerHTML === 'O' && mainBoxes[combinations[i][2]].innerHTML === 'O') {
            playerWin = 'O';
            showWinner(playerWin);
            break;
        }
    }
    if (playerMove === 9) {
        showDraw()
    }
}

function showWinner(win) {
    let counter = 0;
    for (let i of mainBoxes) {
        if (i.innerHTML !== '') counter++
    }
    resultWin.innerHTML = `Player ${win} has WON`;
    resultMoves.innerHTML = `Moves: ${counter}`
    mainModalWindow.style.display = 'block'
};

function showDraw() {
    resultWin.innerHTML = 'Game ended in a draw';
    resultMoves.innerHTML = '';
    mainModalWindow.style.display = 'block'
};

function closeWindowModal() {
    mainModalWindow.style.display = 'none';
    location.reload();
}

windowModalBtn.addEventListener('click', closeWindowModal);

console.log('Score 40/60\n\n - Вёрстка +10\n\n - При кликах по игровому полю по очереди отображаются крестики и нолики. Первая фигура всегда крестик +10\n\n - Игра завершается, когда три фигуры выстроились в ряд по вертикали, горизонтали или диагонали +10\n\n - По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения +10\n\n - Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр 0\n\n - Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов 0\n\n - Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения 0')