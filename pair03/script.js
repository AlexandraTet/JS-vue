// let age = +prompt('Enter your age');
// let access = confirm("Are you registered?")
// if (age >= 18 && access === true) {
//     alert('Welcome')
// } else {
//     alert('Sorry, you are not allowed to enter')
// }

// let access = confirm("Are you a teacher or an admin?")
// if (access === true) {
//     alert('Welcome')
// } else {
//     alert('Sorry, you are not allowed to enter')
// }

// let access = confirm("Are you registered?")
// if (access === true) {
//     let age = +prompt('Enter your age');
//     if (age >= 18) {
//         alert('Welcome');
//     }else{
//         alert('Sorry, you are not allowed to enter');
//         }
// } else {
//     alert('Sorry, you are not allowed to enter');
// }

// let grade = +prompt('Enter your mark');
// if (grade >=90) {
//     alert('You are a genius');
// } else if (grade >= 80) {
//     alert('You are great');
// } else if (grade >= 70) {
//     alert('You are good');
// } else if (grade >= 60) {
//     alert('You have done well');
// } else {
//     alert('You need to study more');
// }

// let role = prompt('Enter your role');
// if (role === 'teacher') {
//     block = confirm('Is your account blocked?');
//     if (block === true) {
//         alert('Your access is denied. Please contact support.');
//     } else {
//         alert('Welcome teacher!');
//     }
// } else if (role === 'student') {
//     block = confirm('Is your account blocked?');
//     if (!block === true) {
//         subscribe = confirm('Do you have a subscribe to a course?');
//         if (subscribe === true) {
//             alert('Welcome student!');
//         } else {
//             alert('You need to subscribe to a course.');
//         }
//     } else {
//         alert('Your access is denied. Please contact support.');
//     }
// } else  {
//     alert('Your role is not recognized.');
// }

// назва товару, кількість товару, вартість товару за шт. магазин дає знижку якщо: 1. користувач зареєстрований 2. сума покупки 1000+ 3. у користувача є промокод або віп статус. 
// промокод: "sale". знижка 10 відсотків і виводимо повну вартість, якщо ні- просто вартіct
const sale = 'sale';
const discount = 0.1;
let sum = 0;
let name = prompt("Enter product name")
let count = prompt("Enter product number")
let price = prompt("Enter product price")
sum = count * price
let access = confirm("Are you registered?")
if (access === true && sum >= 1000 && (prompt("Enter promocode") === sale || confirm("Do you have a vip status?"))) {
    alert("You have a discount: " + (sum - (sum * discount)))}
else {
    alert("Your total price: " + sum)
    }



