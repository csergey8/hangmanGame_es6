const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

const game1 = new Hangman('word main', 5);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMsg;



window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuesse(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMsg;
});
