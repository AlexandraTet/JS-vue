let clubs = [
    { id: 1, name: "Robotics Club", category: "IT", price: 1200, members: 15, active: true },
    { id: 2, name: "Basketball Team", category: "Sport", price: 800, members: 20, active: true },
    { id: 3, name: "Art Studio", category: "Art", price: 950, members: 10, active: false },
    { id: 4, name: "Web Development", category: "IT", price: 1500, members: 18, active: true },
    { id: 5, name: "Chess Club", category: "Sport", price: 600, members: 8, active: false }
];

function showAllClubs() {
    if (clubs.length === 0) {
        alert("Catalog is empty.");
        return;
    }

    let message = "";
    for (let club of clubs) {
        let status = "Closed";
        if (club.active) {
            status = "Open";
        }
        message += `ID: ${club.id}, Name: ${club.name}, Category: ${club.category}, Price: ${club.price}, Members: ${club.members}, Status: ${status}\n`;
    }
    alert(message);
}

function findClubById() {
    let enterId = +prompt("Enter club ID:");
    let clubFound = null;

    for (let club of clubs) {
        if (club.id === enterId) {
            clubFound = club;
            break;
        }
    }

    if (clubFound !== null) {
        let status = "Closed";
        if (clubFound.active) {
            status = "Open";
        }
        alert(`ID: ${clubFound.id}\nName: ${clubFound.name}\nCategory: ${clubFound.category}\nPrice: ${clubFound.price}\nMembers: ${clubFound.members}\nStatus: ${status}`);
    } else {
        alert("Club not found.");
    }
}

function enrollMember() {
    let enterId = +prompt("Enter club ID:");
    let clubFound = null;

    for (let club of clubs) {
        if (club.id === enterId) {
            clubFound = club;
            break;
        }
    }

    if (clubFound === null) {
        alert("Club not found.");
        return;
    }

    if (clubFound.active) {
        let isAgree = confirm(`Join ${clubFound.name}?`);
        if (isAgree) {
            clubFound.members++;
            alert(`Enrolled! Total members: ${clubFound.members}`);
        }
    } else {
        alert("Enrollment is closed.");
    }
}

function toggleEnrollmentStatus() {
    let enterId = +prompt("Enter club ID:");
    let clubFound = null;

    for (let club of clubs) {
        if (club.id === enterId) {
            clubFound = club;
            break;
        }
    }

    if (clubFound === null) {
        alert("Club not found.");
        return;
    }

    let isAgree = confirm("Change status?");
    if (isAgree) {
        clubFound.active = !clubFound.active;
        alert("Status changed.");
    }
}

function addNewClub() {
    let name = prompt("Enter name:");
    let category = prompt("Enter category:");
    let price = +prompt("Enter price:");
    let members = +prompt("Enter members:");
    let active = confirm("Is open?");

    if (name === "" || price < 0 || members < 0) {
        alert("Invalid input.");
        return;
    }

    let newId = clubs.length + 1;

    clubs.push({
        id: newId,
        name: name,
        category: category,
        price: price,
        members: members,
        active: active
    });

    alert("Club added.");
}

function showStatistics() {
    if (clubs.length === 0) {
        alert("Catalog is empty.");
        return;
    }

    let activeCount = 0;
    let totalMembers = 0;
    let totalPrice = 0;

    for (let club of clubs) {
        if (club.active) {
            activeCount++;
        }
        totalMembers += club.members;
        totalPrice += club.price;
    }

    let avgPrice = totalPrice / clubs.length;

    alert(`Total clubs: ${clubs.length}\nActive clubs: ${activeCount}\nTotal members: ${totalMembers}\nAverage price: ${avgPrice}`);
}

while (true) {
    let choice = +prompt("1 - Show all\n2 - Find by ID\n3 - Enroll member\n4 - Change status\n5 - Add club\n6 - Show stats\n0 - Exit");

    if (choice === 0) {
        break;
    }

    if (choice === 1) {
        showAllClubs();
    } else if (choice === 2) {
        findClubById();
    } else if (choice === 3) {
        enrollMember();
    } else if (choice === 4) {
        toggleEnrollmentStatus();
    } else if (choice === 5) {
        addNewClub();
    } else if (choice === 6) {
        showStatistics();
    }
}