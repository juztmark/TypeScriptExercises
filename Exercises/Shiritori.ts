export class Shiritori {
    words: string[] = [];
    gameOver: boolean;

    runGame(words: string[]): void {
        for(let word of words) {
            word = word.trim();
            if(this.gameOver || /[^a-zA-Z]/.test(word)) {
                console.log(this.endGame()); return; 
            }
            console.log(this.play(word));
        }
    }
    endGame(): string {
        this.gameOver = true;
        return "GameOver";    
    }

    play(word: string): string {
        return this.canAdd(word) ? this.correctWord(word) : this.endGame();
    }

    correctWord(word: string): string {
        this.words.push(word);
        return "Correct word. Used words: " + this.getWords();
    }

    getWords(): string[] {
        return [...this.words];
    }

    canAdd(word: string): boolean {
        if(this.words === undefined || this.words.length == 0) return true;
        if(this.words.indexOf(word) > -1) return false;
        let lastWord = this.words[this.words.length - 1].toLowerCase();
        return word.toLowerCase().charAt(0) === lastWord.charAt(lastWord.length - 1);
    }

    restart(): string {
        this.words = [];
        this.gameOver = false;
        return "Game restarted";
    }
}