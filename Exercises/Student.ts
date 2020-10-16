export class Student {
    private name: string;
    private studentNumber: number;
    private phoneNumber: number;;
    private address: string;

    constructor(name: string, number: number, phoneNumber: number, address: string) {
        this.studentNumber = number;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
    
    public getName() {
        return this.name;
    }
    public getStudentNumber(){
        return this.studentNumber;
    }
    public getPhoneNumber(){
        return this.phoneNumber;
    }
    public getAddress(){
        return this.address;
    }
}
