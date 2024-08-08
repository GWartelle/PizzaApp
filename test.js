"use strict";
var myName = "Gaby";
var numberOfWheels = 4;
var isStudent = true;
var ages = [100, 101];
var person1 = {
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
var person2 = {
    name: "Jack",
    age: 68,
    isStudent: false,
};
function displayInfo(person) {
    var _a;
    console.log("".concat(person.name, " lives at ").concat((_a = person.address) === null || _a === void 0 ? void 0 : _a.street));
}
displayInfo(person2);
var people = [person1, person2];
