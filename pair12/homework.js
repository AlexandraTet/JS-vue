let courses = [
    { id: 1, title: "HTML Basics", category: "Frontend", price: 400, duration: 24, rating: 3, available: true },
    { id: 2, title: "CSS Fundamentals", category: "Frontend", price: 300, duration: 24, rating: 4, available: true },
    { id: 3, title: "JavaScript Core", category: "Backend", price: 700, duration: 48, rating: 5, available: false },
    { id: 4, title: "Vue.js Guide", category: "Frontend", price: 800, duration: 36, rating: 4, available: true },
    { id: 5, title: "Python Basics", category: "Backend", price: 900, duration: 56, rating: 5, available: true },
    { id: 6, title: "C++ Programming", category: "Backend", price: 1100, duration: 72, rating: 5, available: false },
    { id: 7, title: "Data Structures", category: "Backend", price: 1200, duration: 256, rating: 1, available: false },
    { id: 8, title: "React and TypeScript", category: "Frontend", price: 1500, duration: 92, rating: 5, available: true }
];

const findCourseById = (id) => courses.find(course => course.id === id);
const findCoursesByCategory = (category) => courses.filter(course => course.category.toLowerCase() === category.toLowerCase());
const findCoursesByPrice = (price) => courses.filter(course => course.price <= price);
const findCoursesByTitle = (title) => courses.filter(course => course.title.toLowerCase().includes(title.toLowerCase()));
const getCoursesTitles = () => courses.map(course => course.title);
const getDiscountCourses = () => courses.map(course => {
    return {
        title: course.title,
        price: course.price * 0.85
    };
});
const sortCoursesByPrice = () => courses.map(course => course).sort((a, b) => a.price - b.price);
const sortCoursesByRating = () => courses.map(course => course).sort((a, b) => b.rating - a.rating);
const sortCoursesByTitle = () => courses.map(course => course).sort((a, b) => a.title.localeCompare(b.title));
const calculateAvailableCourses = () => {
    let availableCourses = courses.filter(course => course.available === true);
    let totalSum = 0;
    let average = 0;

    for (let course of availableCourses) {
        totalSum += course.price;
    }

    if (availableCourses.length > 0) {
        average = totalSum / availableCourses.length;
    }

    return {
        total: totalSum,
        average: average,
        count: availableCourses.length
    };
};

do {
    let userChoice = +prompt(
        "1 - Find course by ID\n" +
        "2 - Show courses by category\n" +
        "3 - Search by max price\n" +
        "4 - Search by title\n" +
        "5 - Get all course titles\n" +
        "6 - Get 15% discount prices\n" +
        "7 - Sort by price (low to high)\n" +
        "8 - Sort by rating (high to low)\n" +
        "9 - Sort by title (A-Z)\n" +
        "10 - Available courses stats\n" +
        "0 - Exit"
    );

    if (userChoice === 0) {
        break;
    }

    if (userChoice === 1) {
        let enterId = +prompt("Enter course ID: ");

        if (isNaN(enterId) || enterId <= 0 || enterId % 1 !== 0) {
            alert("Please enter a valid positive integer ID.");
        } else {
            let foundCourse = findCourseById(enterId);

            if (foundCourse) {
                let status = "Not available";
                if (foundCourse.available) {
                    status = "Available";
                }
                alert(`Title: ${foundCourse.title}\nCategory: ${foundCourse.category}\nPrice: ${foundCourse.price} UAH\nDuration: ${foundCourse.duration}h\nRating: ${foundCourse.rating}\nStatus: ${status}`);
            } else {
                alert("Course not found.");
            }
        }
    } else if (userChoice === 2) {
        let enterCategory = prompt("Enter category (e.g. Frontend or Backend): ");

        if (!enterCategory || enterCategory.trim() === "") {
            alert("Category cannot be empty.");
        } else {
            let foundCourses = findCoursesByCategory(enterCategory.trim());

            if (foundCourses.length > 0) {
                alert(`Found courses: ${foundCourses.map(course => course.title).join(", ")}`);
            } else {
                alert("No courses found in this category.");
            }
        }
    } else if (userChoice === 3) {
        let enterPrice = prompt("Enter max price: ");

        if (!enterPrice || enterPrice.trim() === "") {
            alert("Price cannot be empty.");
        } else if (isNaN(enterPrice) || +enterPrice < 0) {
            alert("Please enter a valid non-negative number.");
        } else {
            let foundCourses = findCoursesByPrice(+enterPrice);

            if (foundCourses.length > 0) {
                alert(`Found courses up to ${enterPrice} UAH: ${foundCourses.map(course => course.title).join(", ")}`);
            } else {
                alert("No courses found within this price limit.");
            }
        }
    } else if (userChoice === 4) {
        let enterTitle = prompt("Enter title search query: ");

        if (!enterTitle || enterTitle.trim() === "") {
            alert("Query cannot be empty.");
        } else {
            let foundCourses = findCoursesByTitle(enterTitle.trim());

            if (foundCourses.length > 0) {
                alert(`Found courses: ${foundCourses.map(course => course.title).join(", ")}`);
            } else {
                alert("No courses found.");
            }
        }
    } else if (userChoice === 5) {
        let titles = getCoursesTitles();
        alert(titles.join(", "));
    } else if (userChoice === 6) {
        let discounted = getDiscountCourses();
        alert(discounted.map(course => `${course.title} - ${course.price.toFixed(2)} UAH`).join("\n"));
    } else if (userChoice === 7) {
        let sorted = sortCoursesByPrice();
        alert(sorted.map(course => `${course.title} - ${course.price} UAH`).join("\n"));
    } else if (userChoice === 8) {
        let sorted = sortCoursesByRating();
        alert(sorted.map(course => `${course.title} - Rating: ${course.rating}`).join("\n"));
    } else if (userChoice === 9) {
        let sorted = sortCoursesByTitle();
        alert(sorted.map(course => course.title).join(", "));
    } else if (userChoice === 10) {
        let stats = calculateAvailableCourses();

        if (stats.count > 0) {
            alert(`Total price of available courses: ${stats.total} UAH\nAverage price: ${stats.average.toFixed(2)} UAH`);
        } else {
            alert("No available courses.");
        }
    } else {
        alert("Please select an option from 0 to 10.");
    }
} while (confirm("Return to menu? "));