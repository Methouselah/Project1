'use strict';

// Место для первой задачи
function firstTask() {
    for (let i = 5; i <= 10; i++) {
		console.log(i);
	}
}
// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >= 10; i--) {
		if (i === 13) {
            break;
        }
        console.log(i);
	}
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i++) {
		if (i % 2 === 0) {
            console.log(i);
        }
	}
}
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
	// Пишем решение вот тут
    let i = 2;
	while (i <= 16) {
		if (i % 2 === 0) {
			i++;
			continue;
		} else {
			console.log(i);
		}
		i++;
    }
}
// 5
function fifthTask() {
	const arrayOfNumbers = [];

	for (let i = 0; i <= 5; i++) {
        arrayOfNumbers[i] = 5 + i;
    }
    console.log(arrayOfNumbers);
	return arrayOfNumbers
}

