import { Item } from "./Item";


export class Warrior {
    private name: string;
    private life: number;
    private speed: number;
    private muscle: number;
    private items: Array<Item>;

    constructor(name:string, life:number, speed: number, muscle: number, items: Item[]) {
        this.name = name;
        this.life = life;
        this.speed = speed;
        this.muscle = muscle;
        this.items = items;
    }
    public getForce() {
        return this.life + this.speed + this.muscle;
    }

    public getItems() {
        return this.items;
    }

    public setItems(items: Item[]) {
        this.items = items;
    }

    public getLife() {
        return this.life;
    }

    public setLife(life: number) {
        this.life = life;
    }

}