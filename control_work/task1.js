let age = +prompt("What is your age?");
let day = +prompt("Choose day: 1 - Weekday, 2 - Weekend");
let price = 0;
let netPrice = 0;

switch (day) {
    case 1:
        price = 200;
        break;
    case 2:
        price = 250;
        break;
}

if (age >= 0 && age <= 7) {
    netPrice = 0;
} else if (age >= 8 && age <= 17) {
    netPrice = price * 0.5;
} else if (age >= 18 && age <= 59) {
    netPrice = price;
} else if (age >= 60) {
    netPrice = price * 0.6;
} else {
    console.log("Invalid age");
}

if (age >= 0) {
    console.log(`Age: ${age}\nDay: ${day}\nResult: ${netPrice}`);
}