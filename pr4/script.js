// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i+=2) {
//     console.log(i);
// }

// for (let i = 20; i >= 0; i--) {
//     console.log(i);
// }

// let count = 0;
// for (let i = 0; i < 10; i++) {
//     count += i
// }
// console.log(count);

// let sum = 0;
// for (let i = 0; i < 50; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

//__________________________________#1
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//     if (i % 3 && i % 5 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// for (let i = 1; i < 100; i++ ) {
//     if (i > 25 && i % 4 && i % 6 === 0) {
//         console.log(i)
//         break
//     }
// }

// for (let i = 1; i < 30; i++ ) {
//     if (i % 5 === 0) {
//         continue
//     }
//     console.log(i)
// }

// let student = +prompt("Number of students");
// let sum = 0, goodGrade = 0, badGrade = 0;
// let maxGrade = 1;
// let minGrade = 12;
//
// for (let i = 1; i <= student; i++) {
//     let grade = +prompt("Enter grade for student " + i);
//
//     if (!(grade >= 1 && grade <= 12) || Number.isNaN(grade)) {
//         alert("Error: Grade must be between 1 and 12");
//         i--;
//         continue;
//     }
//
//     sum += grade;
//     if (grade > 7) {
//         goodGrade++;
//     } else if (grade < 7) {
//         badGrade++;
//     }
//     if (grade > maxGrade) {
//         maxGrade = grade;
//     }
//     if (grade < minGrade) {
//         minGrade = grade;
//     }
// }
//
// console.log("Sum of grades:", sum);
// console.log("Grades above 7:", goodGrade);
// console.log("Grades below 7:", badGrade);
// console.log("Maximum grade:", maxGrade);
// console.log("Minimum grade:", minGrade);

//___________________________________________________________________#2

let participants = +prompt("Number of participants");
let sum = 0, count90to100 = 0, count60to89 = 0, countBelow60 = 0;
let maxScore = 0;
let minScore = 100;
let firstHundred = -1;

for (let i = 1; i <= participants; i++) {
    let score = +prompt("Enter score for participant " + i);
    if (!(score >= 0 && score <= 100)) {
        alert("Error: Score must be between 0 and 100");
        i--;
        continue;
    }
    sum += score;

    if (score >= 90) {
        count90to100++;
    } else if (score >= 60) {
        count60to89++;
    } else {
        countBelow60++;
    }
    if (score > maxScore) {
        maxScore = score;
    }
    if (score < minScore) {
        minScore = score;
    }
    if (score === 100 && firstHundred === -1) {
        firstHundred = i;
    }
}

let average = sum / participants;

console.log("Average score:", average);
console.log("Scores 90-100:", count90to100);
console.log("Scores 60-89:", count60to89);
console.log("Scores below 60:", countBelow60);
console.log("Highest score:", maxScore);
console.log("Lowest score:", minScore);
console.log("First participant with 100 points:", firstHundred);