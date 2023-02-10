"use strict";

// while (пока это выполняется, то)

let num = 50;

// while (num <= 55) { //пока наше условие не выполнено, выполнять действие
//     console.log(num);
//     num++;
// }

// do

// do { //сделай, пожалуйста, что-то
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for

// for (let i = 1; i < 8; i++) { // i - итератор, 7 итераций (повторений)
//     console.log(num);
//     num++;
// }

// break

for (let i = 1; i < 10; i++) { // i - итератор, 7 итераций (повторений)
    if (i === 6) {
        break; // прерывает цикл на этом этапе
    }

    console.log(i);
}

// continue

for (let i = 1; i < 10; i++) { // i - итератор, 7 итераций (повторений)
    if (i === 6) {
        continue; // возволяет пропустить тот шаг, который не нужен
    }

    console.log(i);
}


// цикл в цикле и метки

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 0; j++) {
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const len = 7;

for (let i=1; i < len; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '/n';
}

console.log(result);

// метки

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}