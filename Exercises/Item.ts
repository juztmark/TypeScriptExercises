export class Item {
    name: string;
    value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value; 
    }

    public getName() {
        return this.name;
    }

    public getValue() {
        return this.value;
    }
}