// names = ["John", "Jane", "Jack"];
// console.log(names);
// console.log(names[1]);
// console.log(names.length);
//
// names2 = []
// names.push('Vlada');
// name.push('Jane');
//
// names2.pop()
// names2.unshift('Vlada');
// console.log(names2);
//
// names2.shift()
// console.log(names2);
//
// names.splice(1, 3)
// console.log(names);
// console.log(names2);
//
// names = ['Ivan', 'Mark', 'Miroslava', 'Oleksandra', 'Emiliia']
// let deleted = names.slice(2, 1)
// names.splice(1, 'Bohdan')
// names.splice(0, 1, 'Ksu', 'Mariia')
//
// console.log(deleted)
// console.log(names)

// let names = ['Ivan', 'Mark', 'Miroslava', 'Oleksandra', 'Emiliia'];
//
// function register(name) {
//     if (name.trim().length === 0) {
//         alert('Please enter a name');
//         return;
//     }
//
//     let duplicate = false;
//     for (let i = 0; i < names.length; i++) {
//         if (names[i] === name) {
//             duplicate = true;
//             break;
//         }
//     }
//
//     if (duplicate) {
//         alert(`This name ${name} is already taken`);
//         return;
//     }
//
//     names.push(name);
//     alert(`Student ${name} registered`);
// }
//
// function deleteStudent(name) {
//     let index = -1;
//     for (let i = 0; i < names.length; i++) {
//         if (names[i] === name) {
//             index = i;
//             break;
//         }
//     }
//
//     if (index === -1) {
//         alert(`This name ${name} is not found`);
//     } else {
//         names.splice(index, 1);
//         alert(`Student ${name} deleted`);
//     }
// }
//
// function count() {
//     alert(`Total number of students: ${names.length}`);
// }

// let names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];
//
// // for (let i = 0; i < names.length; i += 1) {
// //     console.log(names[i]);
// // }
//
// for (name of names) {
//     console.log(name);
// }


//=================================================================================================
let names = ["Mykyta", "Oleksandra", "Vlad", "Ivan"];

names.push("Vlada");
names.unshift("Alice");
names.pop();
names.splice(2, 1, "Miroslava");

for (let i = 0; i < names.length; i++) {
    console.log(`${i + 1}. ${names[i]}`);
}

for (let name of names) {
    console.log(name);
}

names.forEach(function (name) {
    console.log(`${name}: ${name.length}`);
});


//=================================================================================================
let prices = [120, 250, 180, 300, 150, 400];

// Option1: for
let sum = 0;
let count = 0;

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    if (prices[i] >= 200) {
        count++;
    }
}

let avg = sum / prices.length;

console.log(`Sum: ${sum}`);
console.log(`Count: ${count}`);
console.log(`Average: ${avg}`);

// Option2: for of
let sum2 = 0;
let count2 = 0;

for (let price of prices) {
    sum2 += price;
    if (price >= 200) {
        count2++;
    }
}

console.log(`Sum: ${sum2}`);
console.log(`Count: ${count2}`);

// Option3: forEach
let sum3 = 0;
let count3 = 0;

prices.forEach(function (price) {
    sum3 += price;
    if (price >= 200) {
        count3++;
    }
});

console.log(`Sum: ${sum3}`);
console.log(`Count: ${count3}`);
