class Person {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

    }

}
const heroPerson = new Person ('Hero ', 'Balam' , 2000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Kalam', 25000);
console.log(friendlyPerson);

function Person (firstName, lastName, salary ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;


}
const oldPerson = new Person('Grand', 'papa', 1220);
console.log(oldPerson)