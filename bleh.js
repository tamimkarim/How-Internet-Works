const personName = {
    firstName: "Tamim",
    lastName: "Karim",
    salary: 150000,
    
    getFullName : function() {
        console.log(this.firstName, this.lastName);
    },
    salaryBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

personName.salaryBill(3000);
console.log(personName.salary);
