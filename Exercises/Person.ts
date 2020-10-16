export class Person {
    private name: string;
    private age: number;
    private budget: number;

    constructor(name: string, age: number, budget: number) {
        this.name = name;
        this.age = age;
        this.budget = budget;
    }

    public getName() {
        return this.name;
    }
    public getAge() {
        return this.age;
    }
    public getBudget() {
        return this.budget;
    }
}