class Department {
    name: string

    constructor(name: string) {
        this.name = name;
    }
}


const acctDept = new Department('Accounting')

console.log(acctDept)