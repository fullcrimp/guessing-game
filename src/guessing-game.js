class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min
        this.max = max
        this.lastGuess
    }

    guess() {
        this.lastGuess = this.min + Math.ceil((this.max - this.min) / 2)
        return this.lastGuess
    }

    lower() {
        this.max = this.lastGuess
    }

    greater() {
        this.min = this.lastGuess        
    }
}

module.exports = GuessingGame;
