/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Inheritance
 * Relationships and subclasses between objects can be assigned, 
 * allowing developers to reuse a common logic while still maintaining 
 * a unique hierarchy. 
 * This property of OOP forces a more thorough data analysis, 
 * reduces development time and ensures a higher level of accuracy.
 *  
 * Take a look at this example. 
 * You will NOTE that by extending the  TeslaCompnany 
 * we have inherited all the public attributes 
 * and can call them when we create a new instance of TeslaEmployee. 
 * This can allow us have a base class 
 * and reuse the base class in different subsclasses.
 */

type Department = {
    name: string
}

type Employee = {
    name: string
    age: number
}

class TeslaCompany {
    private static role = "Admin";
    private readonly credentials: string = "";
    private departments: (Department)[] = [];
    private employees: (Employee)[] = [];

    constructor(cred: string) {
        this.credentials = cred;
        console.log(this.credentials,TeslaCompany.role);
    }

    addDepartment(value: Department): void {
        this.departments = [...this.departments, value];
    }

    addEmployee(value: Employee): void {
        this.employees = [...this.employees, value];
    }
}

class TeslaEmployee extends TeslaCompany {
    private new_employee: Employee = { name: "", age: 0 };

    public setName(name: Employee): void {
        this.new_employee = name;
        console.log(this.new_employee);
    }
}

const newTeslaEmployee = new TeslaEmployee("123456");
newTeslaEmployee.setName({ name: "Kevin Odongo", age: 36 });
newTeslaEmployee.addDepartment({ name: "Finance" });
newTeslaEmployee.addEmployee({ name: "Kevin Odongo", age: 36 });
console.log(newTeslaEmployee);
