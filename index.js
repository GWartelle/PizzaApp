const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const nextOrderId = 1;
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
//         id: nextOrderId,
//         pizza: pizza,
//         status: "ordered",
//       };
//       nextOrderId++;
//       orderQueue.push(orderObj);
//       return orderObj;
//     }
//   }
// }

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

// #3 exercise
function completeOrder(orderId) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}
