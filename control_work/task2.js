let numberStudents = +prompt("Enter the number of students: ");
let avgGrade = 0;
let sumGrade = 0;
let numberBadGrades = 0;
let numberGoodGrades = 0;
let maxGrade = 0;
let gradesList = "Grades: ";

for (let i = 1; i <= numberStudents; i++) {
    let grade = +prompt(`Enter grade (1-12) for student ${i}: `);

    sumGrade += grade;

    if (i === 1) {
        gradesList += grade;
    } else {
        gradesList += ", " + grade;
    }

    if (grade >= 7) {
        numberGoodGrades++;
    } else {
        numberBadGrades++;
    }

    if (grade > maxGrade) {
        maxGrade = grade;
    }
}

avgGrade = sumGrade / numberStudents;

console.log(`Number of students: ${numberStudents}\n${gradesList}\n\nResult:\nSum: ${sumGrade}\nAverage: ${avgGrade}\nGrades 7 and above: ${numberGoodGrades}\nGrades below 7: ${numberBadGrades}\nHighest grade: ${maxGrade}`);