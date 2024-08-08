"use strict";
var cashInRegister = 100;
var nextOrderId = 1;
var nextPizzaId;
var menu = [
    { id: nextOrderId++, name: "Margherita", price: 8 },
    { id: nextOrderId++, name: "Pepperoni", price: 10 },
    { id: nextOrderId++, name: "Hawaiian", price: 10 },
    { id: nextOrderId++, name: "Veggie", price: 9 },
];
var orderQueue = [];
// #1 exercise
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
// #2 exercise
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
// #3 exercise
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("The order number ".concat(orderId, " does not exist in the orderQueue"));
        return;
    }
    order.status = "completed";
    return order;
}
// #4 exercise
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
        throw new TypeError("Parameter 'identifier' must be either a string or a number");
    }
}
addNewPizza({ id: nextOrderId++, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: nextOrderId++, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: nextOrderId++, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
