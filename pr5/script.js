// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }

// let user_number = +prompt("Enter a number");
// while (user_number < 1 || user_number > 10) {
//     let user_number = +prompt("Error. Enter a number");
//     console.log("error");
// }

// console.log(Number('7'))
// console.log(Number('Hello')) // NaN error (not a number)

// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age < 0 || age >= 100) {  // Number.isNaN() - checks if the value is a number
//     age = +prompt("Error. Enter your age");
// }
// console.log(age);

// const correctPassword = 1234;
// let userPassword = +prompt("Enter your password");
// let attempts = 3;
// while (userPassword !== correctPassword && attemps < 3) {
//     let userPassword = +prompt("Error. Enter your password");
//     attempts++;
// }
// if (userPassword === correctPassword) {
//     console.log("Welcome");
// } else {
//     console.log("The access is denied");
// }

// const correctPassword = 1234;
// let attempts = 3;
// while (attempts <= 3) {
//     let userPassword = +prompt("Enter your password");
//     if (userPassword === correctPassword) {
//         console.log("Welcome");
//         break;
//     } else {
//         console.log("Incorrect password. Try again.");
//         attempts++;
//     }
// }

// let menuChoice;
// do {
//     menuChoice = prompt("What do you want to eat? \n" +
//         "1. Pizza \n" + "2. Burger \n" + "3. Salad \n" + "4. Drinks \n" + "5. Water");
//     if (menuChoice === "1") {
//         console.log("Pizza is ready");
//     } else if (menuChoice === "2") {
//         console.log("Burger is ready");
//     } else if (menuChoice === "3") {
//         console.log("Salad is ready");
//     } else if (menuChoice === "4") {
//         console.log("Drinks are ready");
//     } else if (menuChoice === "5") {
//         console.log("Water is ready");
//     } else {
//         console.log("Wrong order");
//     }
// } while (menuChoice !== "0");

//----------------------------------------------------------------------------------------------------------

// let menuChoice;
// // do {
// //     menuChoice = prompt("What do you want to eat?\n1. Pizza\n2. Burger\n3. Salad\n4. Drinks\n5. Water\n0. Exit");
// //     if (menuChoice === "0" || menuChoice === null) {
// //         console.log("Goodbye!");
// //         break;
// //     }
// //     let dish;
// //     switch (menuChoice) {
// //         case "1": dish = "Pizza is"; break;
// //         case "2": dish = "Burger is"; break;
// //         case "3": dish = "Salad is"; break;
// //         case "4": dish = "Drinks are"; break;
// //         case "5": dish = "Water is"; break;
// //     }
// //     console.log(dish ? `${dish} ready` : "Wrong order"); // Ternary operator: prints status if 'dish' is defined, otherwise prints "Wrong order"
// // } while (true);

//----------------------------------------------------------------------------------------------------------

// let count = 0;
// let sum = 0;
// while (count < 5) {
//     let userGrade = +prompt(`Enter a grade № ${count + 1}`);
//     if (Number.isNaN(userGrade) || userGrade < 0 || userGrade > 12) {
//         alert('Incorrect input. Try again.')
//         continue;
//     }
//     sum += userGrade;
//     count++;
// }
// console.log(sum);
// console.log(sum / count);
//
// let questionsNumber = 1;
// let score = 0;
// while(questionsNumber <= 5) {
//     let questions = "", answers = "";
//     switch (questionsNumber) {
//         case 1:
//             questions = "How to create a variable?";
//             answers = "let";
//             break;
//         case 2:
//             questions = "What id the operator of 'and'?"
//             answers = "&&";
//             break;
//         case 3:
//             questions = "What id the operator of 'or'?";
//             answers = "||";
//             break;
//         case 4:
//             questions = "How to end the cycle?";
//             answers = "break";
//             break;
//         case 5:
//             questions = "How to write increment?";
//             answers = "++";
//             break;
//     }
//     let answer = prompt(`Question №${questionsNumber} out of 5\n${questions}`);
//     if (answer === "") {
//         alert("The answer cannot be blank");
//         continue;
//     }
//     if (answer === answers) {
//         alert("Right answer")
//         score++;
//     }else{
//         alert("Wrong answer")
//     }
//     questionsNumber++;
// }
// if (score === 5){
//     alert("Excellent score")
// }else if(score >= 3){
//     alert("Good score")
// }else{
//     alert("Loser")
// }

let age = +prompt("Enter your age:");
while (Number.isNaN(age) || age < 12 || age > 90) {
    age = +prompt("Invalid age. Enter your age (12-90):");
}
const correctPassword = 4321;
let password = +prompt("Enter a valid password:");
let attempt = 1;

while (attempt < 3 && password !== correctPassword) {
    password = +prompt("Enter a valid password:");
    attempt++;
}
if (password === correctPassword) {
    console.log("Access allowed");
    let menu;
    do {
        menu = +prompt(
            `Choose action:
1 - Personal Account
2 - Messages
3 - Settings
0 - Exit`
        );

        switch (menu) {
            case 1:
                alert("Opening Personal Account");
                break;
            case 2:
                alert("Opening Messages");
                break;
            case 3:
                alert("Opening Settings");
                break;
            case 0:
                alert("Exiting...");
                break;
            default:
                alert("Invalid option");
                break;
        }
    } while (menu !== 0);
} else {
    console.log("Access forbidden");
}