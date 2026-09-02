// const name = "Alexandra";
// let  age = 16;
// const IsStudent = true;
// console.log(name, age);

// let num1 = +prompt("Enter a number");
// let num2 = +prompt("Enter another number");
// console.log(num1 + num2); //Concatenation without +prompt
//
// let num3 = 13;
// console.log(typeof String(num3));

let ProductName = prompt("Enter a product name");
let ProductPrice = +prompt("Enter a product price");
let ProductCount = +prompt("Enter a product count");
let Delivery = +prompt("Enter a delivery");
let Discount = +prompt("Enter a discount percentage (%)");
let UserMoney = +prompt("Enter your budget / available money");

let TotalPrice = ProductPrice * ProductCount + Delivery;
let FinalPrice = TotalPrice - (TotalPrice * Discount / 100);
let Change = UserMoney - FinalPrice;

console.log(`Product name: ${ProductName} for the total of ${FinalPrice} (Discount applied: ${Discount}%)`);
console.log(`User budget: ${UserMoney}, Change left: ${Change}`);

alert("Product is " + ProductName + "\n" +
    "Total before discount: " + TotalPrice + "\n" +
    "Discount: " + Discount + "%\n" +
    "Final price with discount: " + FinalPrice + "\n\n" +
    "Your money: " + UserMoney + "\n" +
    "Your change: " + Change);
