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

const coolDude = {
    firstName : "Sarfaraz",
    lastName : "Islam",
    salary : 10000
}
const worseDude = {
    firstName : "Ashik",
    lastName : "Banaya",
    salary : 10000
}

// const heroChargeBill = personName.salaryBill.bind(coolDude);
// heroChargeBill (2000);
// heroChargeBill(1500);
// console.log(coolDude.salary);
// console.log(personName.salary);


normalPerson.chargeBill.call(heroPerson, 900); 
console.log(heroPerson.salary);