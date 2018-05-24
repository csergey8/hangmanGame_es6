class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    get puzzle() {
        let puzzle = '';

        this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
        });

        return puzzle
    }
    makeGuesse(guesse) {
        guesse = guesse.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guesse);
        const isBadGuess = !this.word.includes(guesse);
    
        if (this.status !== 'playing') {
            return 
        }
    
        if (isUnique) {
            this.guessedLetters.push(guesse)
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses--;
        }
    
        this.changeStatus();
    }
    changeStatus() {
        let finished = true;

        this.word.forEach((letter) => {
            this.guessedLetters.includes(letter) || letter === ' ' ? null : finished = false;
        });
        
    
        if(this.remainingGuesses < 1) {
            this.status = 'failed';
        } else if (finished) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
    }
    get statusMsg() {
        if(this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try. The word was "${this.word.join('')}".`
        } else {
            return `Good work! You guessed the word`
        }
    }
}
