// let price = [1, 12, 54, "lol"];
// const price2 = [1, 12, 54, "lol"];
// console.log(price2[2]);
//
// price2[2] = 30;
// console.log(price2);
// console.log(price.length);
//
// for(let i = 0; i < price.length; i++){
//     console.log(price[i]);
// }
//
// let suma = 0;
// for(let i = 0; i < price.length; i++){
//     suma += price[i];
// }
// console.log(suma);


// function countLimit(prices, limit){
//     let count = 0;
//     for(let i = 0; i < prices.length; i++){
//         if(prices[i] > limit){
//             count++;
//         }
//     }
//     return count;
// }
// let prices = [50, 45, 30, 100, 55];
// let limit = 50;
// console.log(countLimit(prices, limit));


//==================================================================================================
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

let prices = [50, 45, 30, 100, 55];
console.log(calculateAverage(prices));


//==================================================================================================
function getSum() {
    let count = +prompt("How many numbers do you want to input?");
    let numbers = [];

    for (let i = 0; i < count; i++) {
        numbers[i] = +prompt(`Input a number ${i + 1}: `);
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(`Inputted numbers:`, numbers);
    console.log(`Summary: ${sum}`);

    return sum;
}

getSum();