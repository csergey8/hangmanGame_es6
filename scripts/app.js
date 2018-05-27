const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const reset = document.querySelector('#reset');
let game1;

const render = () => {
    puzzleEl.innerHTML = '';
    const puzzle = game1.puzzle.split('');
    puzzle.forEach(letter => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    });
    
    guessesEl.textContent = game1.statusMsg;
}

const startGame = async () => {
    const puzzle = await getPuzzle(2);
    console.log(puzzle);
    game1 = new Hangman(puzzle, 5);
    render();
}

reset.addEventListener('click', startGame);

startGame();

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuesse(guess);
    render();
});

// getPuzzle(5)
//     .then((puzzle) => {
//         console.log(puzzle);
//     })
//     .catch((err) => {
//         console.log(err);
//     })



// getLocation().then((data) => {
//     return getCountry(data.country) 
// }).then((country) => {
//     console.log(country)
// })

// getCurrentCountry().then((country) => {
//     console.log(country);
// })


