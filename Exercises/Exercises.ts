import { Employee } from "./Employee";
import { JobPosition } from "./JobPosition";
import { Person } from "./Person";
import { Student } from "./Student";
import { Triangle } from "./Triangle";
import { Warrior } from "./Warrior";


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
    static student() {
        let student1: Student = new Student("Sam", 2, 123456, "Legionarska 1, 01001 Zilina");
        let student2: Student = new Student("John", 5, 456789, "Legionarska 2, 01001 Zilina");

        console.log(student1.getStudentNumber() + ", " + student1.getPhoneNumber() + ", " + student1.getAddress());
        console.log(student2.getStudentNumber() + ", " + student2.getPhoneNumber() + ", " + student2.getAddress());
    }

    static sumOfBudget(people: Person[]):number {
        let budget: number = 0;        
        people.forEach(person => {
            budget += person.getBudget();
        });
        return budget;
    }

    static getPerimeter(triangle: Triangle): number {
        return triangle.a + triangle.b + triangle.c;
    }

    static getArea(triangle: Triangle): number {
        let s = Exercises.getPerimeter(triangle) / 2;
        return Math.sqrt(s* (s - triangle.a) * (s - triangle.b) * (s - triangle.c));
    }
    
    static employee() {
        let employee: Employee = new Employee("Jozko", "Mrkvicka", 
            new Date(1990, 7, 4), 
            new JobPosition("IT programmer", 2100));

        console.log(employee.getName() + ", " +
        employee.getSurname + ", " +
        employee.getJobPosition().name + ", " +  
        employee.getJobPosition().salary);
    }

    static battle(warrior1: Warrior, warrior2: Warrior): number {
        if(warrior1.getForce() === warrior2.getForce()) {
            warrior1.setLife(warrior1.getLife() - 1);
            warrior2.setLife(warrior2.getLife() - 1);
            return 0;
        }
        if (warrior1.getForce() > warrior2.getForce()) {
            Exercises.finalizeBattle(warrior1, warrior2);
            return 1;
        }
        else {
            Exercises.finalizeBattle(warrior2, warrior1);
            return 2;
        }
    }

    static finalizeBattle(winner: Warrior, loser: Warrior) {
        let items = loser.getItems();
        if (items === undefined || items.length == 0) return;

        let itemValue = Math.max(...items.map(o=>o.value));
        let item = items.find(o => o.value == itemValue);
        loser.setLife(loser.getLife() - 1);

        winner.getItems().push(item);
        let index = items.indexOf(item);
        if (index !== -1) {
            loser.setItems(items.splice(index, 1));
        }        
    }
    
    
}