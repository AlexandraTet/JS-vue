// let Val1, Val2;
//
// Val1 = "1";
// Val2 = 1;
//
// console.log(Val1 == Val2);


// let InputTemp = prompt("Enter a temperature number");
// let TempStatus;
//
// if (InputTemp <= 0) {
//   TempStatus = "cold";
// } else if (InputTemp > 10 && InputTemp <= 10) {
//   TempStatus = "normal";
// } else if (InputTemp > 10) {
//   TempStatus = "hot";
// }
//
// alert(TempStatus);


// let NumVal = prompt("Enter a number");
// let ParityResult;
//
// if (NumVal % 2 === 0) {
//   ParityResult = "even";
// } else if (NumVal % 2 === 1) {
//   ParityResult = "odd";
// }
//
// alert(ParityResult);


// const SysLogin = "admin";
// const SysPassword = "12345";
//
// let EnteredLogin = prompt("Enter username");
// let EnteredPassword = prompt("Enter password");
//
// if (EnteredLogin === SysLogin && EnteredPassword === SysPassword) {
//   alert("Access granted");
// } else {
//   alert("Invalid username or password");
// }


// let DeliveryFee, ShippingOption = prompt("What is the delivery type?");
//
// switch (ShippingOption) {
//   case "courier":
//     DeliveryFee = 200;
//     break;
//   case "post":
//     DeliveryFee = 100;
//     break;
//   case "pickup":
//     DeliveryFee = 0;
//     break;
//   default:
//     DeliveryFee = "n/a";
// }
//
// console.log(DeliveryFee);


// let DayTitle, DayIndex = prompt("What is the day number?");
//
// switch (DayIndex) {
//   case "1":
//     DayTitle = "Monday";
//     break;
//   case "2":
//     DayTitle = "Tuesday";
//     break;
//   case "3":
//     DayTitle = "Wednesday";
//     break;
//   case "4":
//     DayTitle = "Thursday";
//     break;
//   case "5":
//     DayTitle = "Friday";
//     break;
//   case "6":
//     DayTitle = "Saturday";
//     break;
//   case "7":
//     DayTitle = "Sunday";
//     break;
//   default:
//     DayTitle = "n/a";
// }
//
// console.log(DayTitle);


let ItemName = prompt("Enter your product name");
let ItemPrice = prompt("Enter your product price");
let ItemAmount = prompt("Enter your product count");
let HasDiscountCard = confirm("Do you have a discount card?"); // 10%
let ShipFee, ShipMethod = prompt("Enter your delivery type: courier, post, pickup");
let FinalPrice, DiscRate = 0;
FinalPrice = ItemPrice * ItemAmount;

if (FinalPrice > 1000) {
    DiscRate = 0.05;
} else if (FinalPrice > 1000) {
    DiscRate = 0.1;
}

if (HasDiscountCard) {
    FinalPrice = (FinalPrice - (FinalPrice * DiscRate)) - (FinalPrice * 0.1);
} else {
    FinalPrice = (FinalPrice - (FinalPrice * DiscRate));
}

switch (ShipMethod) {
    case "courier":
        ShipFee = 200;
        break;
    case "post":
        ShipFee = 100;
        break;
    case "pickup":
        ShipFee = 0;
        break;
}

FinalPrice = FinalPrice + ShipFee;
alert(ItemName + " " + FinalPrice);