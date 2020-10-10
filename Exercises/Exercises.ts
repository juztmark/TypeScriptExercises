export class Exercises {

    static total_distance(stepH:number, stepL:number, towerH:number) {
        return (towerH / stepH) * (stepH + stepL);
    }

    static equal(a: number, b: number, c:number) {
        if(a == b || a == c) {
            if(b == c) return 3;
            return 2;
        }
        if(b == c) return 2;
        return 0;
    }

    static isTriangle(a: number, b: number, c:number) {
        return a + b > c && b + c > a
                && c + a > b;
    }

    static multiplyByLength(arr: Array<number>) {
        let multiplied = [];
        arr.forEach(i => multiplied.push(i * arr.length));
        return multiplied;
    }

    static equalSlices(slices: number, numOfRec: number, each: number) {
        return (numOfRec * each) <= slices;
    }

    static checkPalindrome(word: string) {
        return word == word.split("").reverse().join("");
    }

    static rps(player1: string, player2: string) {
        let choices: Array<string> = ["rock", "paper", "scissors"];
        if(choices.indexOf(player1) + 1 % 3 == choices.indexOf(player2))
            return "Player 2 wins"; 
        return player1 == player2 ? "TIE" : "Player 1 wins";
        
    }

    static differenceMaxMin(arr: Array<number>) {
        return Math.max(...arr) - Math.min(...arr);
    }

    static warOfNumbers(arr: Array<number>) {
        let even: number = 0;
        let odd: number = 0;

        arr.forEach(function(i) {
            if(i % 2 == 0)
                even += i;
            else odd += i;
        })
        return Math.abs(even - odd);
    }

    static checkEnding(word1: string, word2: string) {
        return word1.endsWith(word2);
    }

    static canCapture(pos1: string, pos2: string) {
        return (pos1[0] == pos2[0] || pos1[1] == pos2[1]);
    }
}