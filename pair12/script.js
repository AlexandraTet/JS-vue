// function isHighScore(score) {
//     return score >= 10;
// }
//
// scores = [12, 5, 9, 10, 11, 12]
//
// let highScore = scores.filter(isHighScore);
// console.log(highScore);

// scores = [12, 5, 9, 10, 11, 12]
// let highScore = scores.filter(score => score >= 10);
// console.log(highScore);
//
// let courses = [
//     {id: 1, name: 'HTML', credit: 3, price: 30, active: true},
//     {id: 2, name: 'CSS', credit: 3, price: 30, active: false},
//     {id: 3, name: 'JavaScript', credit: 4, price: 50, active: false},
//     {id: 4, name: 'React', credit: 4, price: 50, active: true},
// ]
//
// // let idCourses = +prompt('Enter course id: ');
// // let course = courses.find(course => course.id === idCourses);
// // if (found === undefined) {
// //     alert('Course not found');
// // } else {
// //     alert(`Course name: ${course.name}, Course credit: ${course.credit}, Course price: ${course.price}, Course active: ${course.active}`);
// // }
// // let activeCourses = courses.filter(course => course.active === true);
// // console.log(activeCourses)
// // let titleCourse = courses.map(course => course.name);
// // let priceCourse = courses.map(course => course.price);
// // console.log(titleCourse);
// // console.log(priceCourse);
//
// let jsSearch = course.filter(course => course.name.includes('JavaScript'))
// console.log(jsSearch);

let books = [
    {id: 1, title: 'The Great Gatsby', author: 'Francis Scott Fitzgerald', year: 1925, isAvailable: true},
    {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, isAvailable: true},
    {id: 3, title: '1984', author: 'George Orwell', year: 1949, isAvailable: true},
    {id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, isAvailable: false},
    {id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, isAvailable: true}
]

let years = +prompt('Enter year: ');
let existingBooks = books.filter(book => book.year === years);
console.log(existingBooks);
