'use strict'
class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Flat {
    constructor () {
        this.tenants = [];
    } 

    addTenant(person) {
        this.tenants.push(person);
    }
}

class House {
    constructor(maxFlats) {
        this.flats = [];
        this.maxFlats = maxFlats;
    }

    addFlat(flat) {
        if (this.flats.length < this.maxFlats) {
            this.flats.push(flat);
        } else {
            console.log('Досягнуто максимальну кількість квартир у будинку.');
        }
    }
}

const person1 = new Human('Petro', 'male');
const person2 = new Human('Ol\'ga', 'female');
const person3 = new Human('Ivan', 'male');
const person4 = new Human('Yana', 'female');

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();


flat1.addTenant(person1);
flat1.addTenant(person2);
flat2.addTenant(person3);
flat3.addTenant(person4);


const house1 = new House(3);
const house2 = new House(2);

house1.addFlat(flat1);
house1.addFlat(flat2);
house1.addFlat(flat3);

house2.addFlat(flat1);
house2.addFlat(flat2);
house2.addFlat(flat3);

console.log(house1.flats);
console.log(house2.flats);
