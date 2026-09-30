const maxCars = 7;
let totalPrice = 0;
let maxPrice = 0;
let electroCars = 0;
let totalCars = 0;

for (let i = 1; i <= maxCars; i++) {
    let hours = +prompt("Enter number of parking hours (1-12, or 0 to exit): ");
    if (hours === 0) {
        break;
    }
    if (hours < 0 || hours > 12) {
        i--;
        continue;
    }
    let type = +prompt("Car type:\n1 - Regular\n2 - Electric");
    if (type !== 1 && type !== 2) {
        i--;
        continue;
    }
    let rate = 0;
    switch (type) {
        case 1:
            rate = 40;
            break;
        case 2:
            rate = 30;
            electroCars++;
            break;
    }
    let price = rate * hours;
    if (hours > 5) {
        price *= 0.8;
    }
    if (price > maxPrice) {
        maxPrice = price;
    }
    totalPrice += price;
    totalCars++;
}

console.log(`Processed cars: ${totalCars}\nElectric cars: ${electroCars}\nTotal revenue: ${totalPrice}\nHighest single fee: ${maxPrice}`);