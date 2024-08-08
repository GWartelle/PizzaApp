type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId;

const menu: Pizza[] = [
  { id: nextOrderId++, name: "Margherita", price: 8 },
  { id: nextOrderId++, name: "Pepperoni", price: 10 },
  { id: nextOrderId++, name: "Hawaiian", price: 10 },
  { id: nextOrderId++, name: "Veggie", price: 9 },
];

const orderQueue: Order[] = [];

// #1 exercise
function addNewPizza(pizzaObj: Pizza): void {
  menu.push(pizzaObj);
}

// #2 exercise
function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

// #3 exercise
function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(
      `The order number ${orderId} does not exist in the orderQueue`
    );
    return;
  }
  order.status = "completed";
  return order;
}

// #4 exercise
function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      "Parameter 'identifier' must be either a string or a number"
    );
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
