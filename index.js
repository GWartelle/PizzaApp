const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  for (pizza in menu) {
    if (pizza[name] === pizzaName) {
      cashInRegister += pizza[price];

      const orderObj = {
        pizza: pizza,
        status: "ordered",
      };

      orderQueue.push(orderObj);

      return orderObj;
    }
  }
}
