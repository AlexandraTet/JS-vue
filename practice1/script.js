let basePrice = 0;
let processedTickets = 0;
let freeTickets = 0;
let discountTickets = 0;
let fullTickets = 0;
let totalAmount = 0;

let eventType = +prompt(`Select event type: 1 - Movie (150 UAH); 2 - Theater (220 UAH); 3 - Concert (350 UAH)`);

while (eventType < 1 || eventType > 3 || Number.isNaN(eventType)) {
    eventType = +prompt("Invalid choice. Please select event type (1, 2, or 3):");
}
switch (eventType) {
    case 1:
        basePrice = 150;
        break;
    case 2:
        basePrice = 220;
        break;
    case 3:
        basePrice = 350;
        break;
}

let dayType = +prompt(`Select day type: 1 - Weekday; 2 - Weekend (+15% surcharge)`);

while (dayType < 1 || dayType > 2 || Number.isNaN(dayType)) {
    dayType = +prompt("Invalid choice. Please select day type (1 or 2):");
}

if (dayType === 2) {
    basePrice *= 1.15;
}

let ticketAmount = +prompt("Enter number of tickets (1-6):");

while (ticketAmount < 1 || ticketAmount > 6 || Number.isNaN(ticketAmount)) {
    ticketAmount = +prompt("Invalid number. Enter number of tickets (1-6):");
}

for (let i = 1; i <= ticketAmount; i++) {

    let age = +prompt(`Enter age for ticket #${i} (or -1 to cancel):`);

    if (age === -1) {
        break;
    }

    while (age < 0 || age > 100 || Number.isNaN(age)) {
        age = +prompt(`Invalid age. Enter age for ticket #${i} (0-100 or -1 to cancel):`);
        if (age === -1) break;
    }
    if (age === -1) {
        break;
    }

    processedTickets++;
    let currentTicketPrice = basePrice;

    if (age <= 5) {
        freeTickets++;
        continue;
    } else if (age <= 12) {
        currentTicketPrice = basePrice * 0.5;
        discountTickets++;
    } else if (age <= 17) {
        currentTicketPrice = basePrice * 0.8;
        discountTickets++;
    } else if (age >= 18 && age <= 25) {
        let isStudent = confirm("Do you have a student ID?");
        if (isStudent) {
            currentTicketPrice = basePrice * 0.9;
            discountTickets++;
        } else {
            fullTickets++;
        }
    } else if (age <= 59) {
        fullTickets++;
    } else {
        currentTicketPrice = basePrice * 0.75;
        discountTickets++;
    }
    totalAmount += currentTicketPrice;
}

if (totalAmount > 1000) {
    totalAmount *= 0.95;
}

alert(`Processed tickets: ${processedTickets}`);
alert(`Free tickets: ${freeTickets}`);
alert(`Discounted tickets: ${discountTickets}`);
alert(`Full-price tickets: ${fullTickets}`);
alert(`Total price: ${totalAmount.toFixed(2)} UAH`);