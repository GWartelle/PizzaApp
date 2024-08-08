let myName: string = "Gaby";
let numberOfWheels: number = 4;
let isStudent: boolean = true;

let ages: number[] = [100, 101];

type Address = {
  number: number;
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    number: 12,
    street: "Mainstreet",
    city: "Cityville",
    country: "USA",
  },
};

let person2: Person = {
  name: "Jack",
  age: 68,
  isStudent: false,
};

function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person2);

let people: Person[] = [person1, person2];
