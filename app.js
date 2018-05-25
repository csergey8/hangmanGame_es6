const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

const game1 = new Hangman('word main', 5);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMsg;



window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuesse(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMsg;
});

getPuzzle(1)
    .then((puzzle) => {
        console.log(puzzle);
    })
    .catch((err) => {
        console.log(err);
    })

const code = 'UA';

getCountry(code)
    .then((data) => {
        console.log(data.name);
    })
    .catch((err) => {
        console.log(err);
    })


const createTipper = (tip) => {
    return (amount) => {
        return amount * (tip / 100);
    }
}


