// function name(argument){
//     code
// }

// function hello(){
//     alert("hello world");
// }
// hello();

// function showInfo(name, price = 'Not available', count){
//     console.log("Sanya Shop");
//     console.log('Timetable: 08.00 - 21.00')
//     console.log(`Product: ${name}, price: ${price}$`)
//     console.log(`Fee to pay: ${count * price}`)
// }
//
// showInfo('Green tea', 5, 4);

// function calculateFee(price, fee){
//     let total = price * fee, discount, totalFee;
//     if (total >= 150){
//         discount = 0.1;
//     }
//     else {
//         discount = 0;
//     }
//     totalFee = total - (total * discount);
//     return totalFee;
//
// }
//
// let fee = calculateFee(100, 5);
// console.log(fee);

// function showInfo(name, price = 'Not available', count){
//     console.log("Sanya Shop");
//     console.log('Timetable: 08.00 - 21.00')
// }
//
// function getProductTotal(price, count){
//     return price * count;
// }
//
// function getDiscountPercent(total){
//     if (total >= 150){
//         return 15;
//     }
//     else if (total >= 200) {
//         return 20;
//     }
//     else if (total >= 250) {
//         return 25;
//     }
//     else {
//         return 0;
//     }
// }
//
// function getDiscountValue(total, percent){
//     return total * (percent / 100);
// }
//
// function calculateFee(total, discount){
//     return total - discount;
// }
//
// let productName = prompt('Enter product name');
// let productPrice = +prompt('Enter product price');
// let productCount = +prompt('Enter product count');
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discountPercent = getDiscountPercent(productTotal);
// let discountValue = getDiscountValue(productTotal, discountPercent);
// let finalFee = calculateFee(productTotal, discountValue);
//
// showInfo(productName, productPrice, productCount);
// console.log(`Product: ${productName}, price: ${productPrice}$, product count: ${productCount}`);
// console.log(`Fee to pay: ${productTotal}$, discount: ${discountPercent}%`);
// console.log(`Your fee: ${finalFee}$`);

//---------------------------------------------------------------------------------------------------------------------------

// function calculateTickets(price, count) {
//     return price * count;
// }
//
// function getTicketDiscount(total) {
//     if (total >= 1500) {
//         return 15;
//     } else if (total >= 1000) {
//         return 10;
//     } else if (total >= 500) {
//         return 5;
//     } else {
//         return 0;
//     }
// }
//
// function calculateTicketDiscount(total, percent) {
//     return total * (percent / 100);
// }
//
// function calculateTicketFinalPrice(total, discount) {
//     return total - discount;
// }
//
// let ticketPrice = +prompt("Enter ticket price: ");
// let ticketCount = +prompt("Enter number of tickets: ");
//
// let totalAmount = calculateTickets(ticketPrice, ticketCount);
// let discountPercent = getTicketDiscount(totalAmount);
// let discountAmount = calculateTicketDiscount(totalAmount, discountPercent);
// let finalPrice = calculateTicketFinalPrice(totalAmount, discountAmount);
//
// console.log(`Cinema Ticket Order:`);
// console.log(`Price per ticket: ${ticketPrice} UAH, Count: ${ticketCount}`);
// console.log(`Total amount: ${totalAmount} UAH`);
// console.log(`Discount: ${discountPercent}% (${discountAmount} UAH)`);
// console.log(`Final price to pay: ${finalPrice} UAH`);

//---------------------------------------------------------------------------------------------------------------------------

let savedLogin = "";
let savedPassword = "";
let isRegistered = false;

function register() {
    savedLogin = prompt("Create a login:");
    savedPassword = prompt("Create a password:");
    isRegistered = true;
    alert("Registration successful!");
}

function login() {
    if (!isRegistered) {
        alert("No registered user found. Please register first!");
        return;
    }

    let attemptsLeft = 3;

    while (attemptsLeft > 0) {
        let userLogin = prompt("Enter your login:");
        let userPassword = prompt("Enter your password:");

        if (userLogin === savedLogin && userPassword === savedPassword) {
            console.log("Access granted. Welcome!");
            alert("Login successful!");
            break;
        } else {
            attemptsLeft--;
            alert(`Incorrect login or password. Remaining attempts: ${attemptsLeft}`);
        }
    }

    if (attemptsLeft === 0) {
        console.log("Access blocked. Too many failed attempts.");
        alert("Access blocked!");
    }
}

let isRunning = true;

while (isRunning) {
    let action = +prompt("Select an option:\n1 - Register\n2 - Login\n0 - Exit");

    switch (action) {
        case 1:
            register();
            break;
        case 2:
            login();
            break;
        case 0:
            console.log("Program closed.");
            isRunning = false;
            break;
        default:
            alert("Invalid option. Please try again.");
            break;
    }
}