const correctPin = 2026;
let attemptsLeft = 3;

while (attemptsLeft > 0) {
    let userPin = +prompt("Enter PIN code:");

    if (userPin === correctPin) {
        console.log("Access granted");
        break;
    } else {
        attemptsLeft--;
        alert(`Incorrect PIN. Remaining attempts: ${attemptsLeft}`);
    }
}

if (attemptsLeft === 0) {
    console.log("Access blocked");
}

