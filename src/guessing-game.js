class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.currentG = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.currentG = Math.round((this.min + this.max) / 2);
        if (this.max - this.min <= 1) {
            if (this.currentG < this.max){
                return this.max;
            } else if (this.currentG > this.min) {
                return this.min;
            }
        }
        return this.currentG;
    }

    lower() {
        this.max = this.currentG;
    }

    greater() {
        this.min = this.currentG;
    }
}

module.exports = GuessingGame;
