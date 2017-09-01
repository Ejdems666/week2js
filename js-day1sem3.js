function add(n1, n2) {
    return n1 + n2;
}

function mul(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
};
var cb = function (n1, n2, callback) {
    if (typeof n1 !== "number" || typeof callback !== "function") {
        throw new Error("wrong arguments");
    }
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};
console.log(add(1, 2))     //3
console.log(add)          // function signature, by typing add we pass a reference to the function, a bit like passing a reference to an object in Java
console.log(add(1, 2, 3)); // 3, the last parameter is just ignored
console.log(add(1));	  // Nan because the second parameter is undefined
console.log(cb(3, 3, add)); // Result from the two numbers:3+3=6
console.log(cb(4, 3, sub)); // Result from the two numbers:4+3=1
try {
    console.log(cb(3, 3, add())); // error "callback is not a function" because we don't pass a reference for add but the result of the method, because the parenthesis are present
} catch (e) {
    console.log(e);
}
console.log(cb(3, "hh", add));// Result from the two numbers:3+hh=3hh
console.log(cb(3, "hh", mul));
console.log(cb(3, 1, function (n1, n2) {
    return n1 / n2;
}));

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
console.log(names);
var filteredNames = names.filter(filterLessThenFour);
console.log(filteredNames);

var upNames = names.map(toUpperCase);
console.log(upNames);

function filterLessThenFour(item) {
    return item.length <= 3;
}

function toUpperCase(string) {
    return string.toUpperCase();
}

console.log(createList(names));

function createList(items) {
    return "<ul>" +
        items.map(createListItem).join("\n") +
        "</ul>";
}

function createListItem(item) {
    return "<li>" + item + "</li>";
}


var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 4000}
];

console.log(cars.filter(filterCars));

function filterCars(item) {
    return item.year > 1999 && item.make === "Volvo" && item.price < 5000;
}

console.log(createSQLInsertsForCars(cars));
console.log(createSQLInsertsForCars(cars.filter(filterCars)));

function createSQLInsertsForCars(cars) {
    return cars.map(createSQLInsertForCar).join(";");
}

function createSQLInsertForCar(car) {
    return "INSERT INTO cars (id,year,make,model,price) VALUES (" + car.id + "," + car.year + ",'" + car.make + "','" + car.model + "'," + car.price + ")";
}

// var msgPrinter = function(msg,delay){
//     setTimeout(function(){
//         console.log(msg);
//     },delay);
// };
// console.log("aaaaaaaaaa");
// msgPrinter ("bbbbbbbbbb",2000);
// console.log("dddddddddd");
// msgPrinter ("eeeeeeeeee",1000);
// console.log("ffffffffff");


function Person(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    // setTimeout(function(){
    //     console.log("Hi  "+self.name);  // this doesn't work because the anonymous function is in different scope than the object it is in, the var keyword will fix it because it makes a variable to be accessible anywhere
    // },2000);
    // setTimeout(function(){
    //     console.log("Hi  "+this.name);
    // }.bind(this),2000);
}

Person("Kurt Wonnegut");
console.log("I'm global: " + name);  // We just called the function, we did not create an object with it's own scope so we can access the name variable from global scope


var p = new Person("Kurt Wonnegut2");
console.log("I'm global: " + name);  // No we are not getting the passed value because we created an object and the value is encapsulated inside the object.


var greeter = function () {
    console.log(this.message);
};
var comp1 = {message: "Hello World"};
var comp2 = {message: "Hi"};

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);


var myObj = {id: 1, name: "Adam", age: 20, country: "CZ"};

for (prop in myObj) {
    console.log(prop, myObj[prop]);
}

function Person2(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getInfo = function () {
        return this.firstName+" "+this.lastName+", age: "+this.age;
    }
}

var p = new Person2("Adam","Becvar",20);
console.log(p.getInfo());
