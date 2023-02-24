const Employee = require('./employee.js');
class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);
        this.employees = [];

    }
    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {

        let bonus = (this.salary + this._totalSubSalary()) * multiplier;
        return bonus;
    }
    _totalSubSalary() {
        let sum = 0;
        for (let item of this.employees) {

            if (item instanceof Manager) {
                sum += item.salary + item._totalSubSalary();

            } else if (item instanceof Employee) {
                sum += item.salary;
            }

        }
        return sum;
    }
}
module.exports = Manager;