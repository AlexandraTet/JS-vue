// let book = {
//     title: "1984",
//     author: "George Orwell",
//     year: 1948,
//     price: 10,
//     isAvailable: true
// }
//
// console.log(book);
// console.log(book.title);

let books = [
    {id: 1,
    title: "1984",
    author: "George Orwell",
    year: 1948,
    price: 10,
    isAvailable: true
    },

    {id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    price: 15,
    isAvailable: true
    },

    {id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    price: 12,
    isAvailable: false
    },

    {id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    price: 10,
    isAvailable: true
    }
]

// for (let book of books) {
//     console.log(`book: ${book.id} - ${book.author}`);
// }
// books.forEach(function (book) {
//     console.log(`book: ${book.author}, ${book.isAvailable}`);
// })

let isAvailableCount = 0;
let totalPrice = 0;

for (let book of books) {
    if (book.isAvailable === true) {
        isAvailableCount++;
        totalPrice += book.price;
    }
}

console.log(totalPrice);
console.log(isAvailableCount);

books[1].price = 750;
console.log(books);

books.push({
    id: 5,
    title: "North Woods",
    author: "Daniel Mason",
    year: 2023,
    price: 10,
    isAvailable: true
})

})
console.log(books);

let enterId = +prompt("Enter your book ID");
let bookFound = null;

for (let book of books) {
    if (book.id === enterId) {
        bookFound = book;
        break;
    }
}

if (bookFound !== null) {
    let status = "Not available";
    if (bookFound.isAvailable) {
        status = "Available"
    }
    alert(`Book ${bookFound.title} is ${status}`);
} else {alert("Book not found")}