//乘客
var passengers = [{name: "peter", paid: true, ticket: "firstclass"},
    {name: "Dr Tom", paid: true, ticket: "coach"},
    {name: "joss", paid: false, ticket: "firstclass"},
    {name: "wang", paid: true, ticket: "coach"}];

//process function
function processPassengers(passengers, testFunctions) {
    for (let i = 0; i < passengers.length; i++) {
        const passenger = passengers[i];
        if (testFunctions(passenger)) {
            console.log(passenger.name + "can flying or not paid.");
        }
    }
    return true;
}

function checkNonFlyList(passenger) {
    return passenger.name == "Dr Tom";
}

function checkNonPaid(passenger) {
    return !passenger.paid;
}


processPassengers(passengers, checkNonFlyList);
processPassengers(passengers, checkNonPaid);

function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket == "firstclass") {
        orderFunction = function () {
            console.log("Would you like a cocktail or wine?");
        };
    } else {
        orderFunction = function () {
            console.log("you choices is cola or water.");
        };
    }
    return orderFunction;
}

function serverCustomer(passenger) {
    var getDrinkOrder = createDrinkOrder(passenger);
    getDrinkOrder();
}

serverCustomer(passengers[0]);
serverCustomer(passengers[1]);
//
// function fun(echo) {
//     console.log(echo);
// }
//
// console.log(fun);