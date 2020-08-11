const normalPerson ={
    firstName: 'Rahim' ,
    lastName: 'Uddin',
    salary: 150000,
    getFullName: function (){
        console.log(this.firstName, this.lastName);

    },
    chargeBill : function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero' ,
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'Hero' ,
    lastName: 'Alam',
    salary: 25000
}
// normalPerson.chargeBill();

//  const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
//  heroBillCharge(2000);
//  heroBillCharge(5000);
//  console.log(heroPerson.salary);
//  console.log(normalPerson.salary);

//  const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
//  friendlyChargeBill(2323);
// normalPerson.chargeBill.call(heroPerson, 900, 100, 10); 
// normalPerson.chargeBill.call(heroPerson, 5000, 30, 500);
// console.log(heroPerson.salary);  
// normalP 
normalPerson.chargeBill.apply(heroPerson, [ 7000, 400, 600]);
console.log(heroPerson.salary);