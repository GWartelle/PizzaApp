const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];

// #1 exercise
function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

// #2 exercise
// My first answer
// function placeOrder(pizzaName) {
//   for (pizza in menu) {
//     if (pizza[name] === pizzaName) {
//       cashInRegister += pizza[price];
//       const orderObj = {
//         pizza: pizza,
//         status: "ordered",
//       };
//       orderQueue.push(orderObj);
//       return orderObj;
//     }
//   }
// }

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = { pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder;
}
