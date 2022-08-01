interface IPerson {
    name: string;
    age: number;
    profession: string;
}

class Person implements IPerson {
    name: string;
    age: number;
    profession: string;

    constructor(_name: string, _age: number, _profession: string) {
        this.age = _age;
        this.name = _name;
        this.profession = _profession;
    }

}


const person1 = new Person("Leo", 20, "Dev")
const person2 = new Person("Bruna", 21, "Designer")
const person3 = new Person("Claudenir", 40, "Vendedor")
const person4 = new Person("Carlos", 19, "Padeiro")
