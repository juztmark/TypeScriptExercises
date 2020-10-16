import { JobPosition } from "./JobPosition";

export class Employee {
    private name: string;
    private surName: string;
    private dateOfBirth: Date;
    private jobPosition: JobPosition;

    constructor(name: string, surName: string, dateOfBirth: Date, jobPosition: JobPosition) {
        this.name = name;
        this.surName = surName;
        this.dateOfBirth = dateOfBirth;
        this.jobPosition = jobPosition;
    }
    
    public getName(){
        return this.name;
    }
    public getSurname(){
        return this.surName;
    }
    public getDateOfBirth(){
        return this.dateOfBirth;
    }
    public getJobPosition(){
        return this.jobPosition;
    }
}