"use strict";

// while (пока это выполняется, то) проверяет условие перед каждой итерацией
// условие, проверка условия, действие, цикл.
let num = 50;

// while (num <= 55) { //пока наше условие не выполнено, выполнять действие
//     console.log(num);
//     num++;
// }

// do...while проверяет условие после каждой итерации.

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

let resultFirTree = '';
const len = 7;

for (let i=1; i < len; i++) {

    for (let j = 0; j < i; j++) {
        resultFirTree += "*";
    }

    resultFirTree += '\n';
}

console.log(resultFirTree);

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

// tasks

// Задания на использование циклов и условий.

// 1.При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

function firstTask() {

    for (let i=5; i <= 10; i++) {
        console.log(i);
    }
}

firstTask();

// 2.При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном
// порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

function secondTask() {

    for (let i = 20; i >= 10; i--) {
        if ( i === 13) {
            break;
        }
        console.log(i);
    }
}

secondTask();


// 3. При помощи цикла for выведите чётные числа от 2 до 10 включительно

function thirdTask() {

   let num = '';

   for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
   }
}

thirdTask();


// 4.Перепишите цикл  for на вариант с while. Результат должен остаться
// точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {

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

fourthTask();

// 5. Заполните массив цифрами от 5 до 10 включительно. Помните, что
// элементы массива можно сформировать так же, как и обращаться к ним: arr[0].

function fifthTask() {

    let arr = [];

    for (let i = 5; i <= 10; i++) {
        arr[i-5] = i;
        
    }
    console.log(arr);
    return arr;
}

fifthTask();

// Продвинутые задания на использование циклов и условий

// 1. Заполните новый массив (result) числами из старого (arr). Количество
// элементов в массиве можно получить как arr.length, а к элементам
// обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив.

function firstTask() {

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

     for (let i = 0; i < arr.length; i++) {
        result [i] = arr [i];
     }
    
    return result;
}

console.log(firstTask());

// 2.Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка
// строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function secondTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i=0; i < data.length; i++) {
        if( typeof(data[i]) === 'number' ) {
            data[i] = data[i] * 2;
        } else if ( typeof(data[i]) === 'string') {
                data[i] = data[i]  + ' - done';
            }
    }

    return data;
}

console.log(secondTask());

// 3. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

function thirdTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for ( let i = 1; i <= data.length; i++ ) {
        result[i - 1] = data[data.length - i];
    }

    return result;
}

console.log(thirdTask());

// Задача на формирование фигуры

// Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

let result = '';
const lines = 5;

for (let i = 0; i <= lines; i++) {

    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for( let k = 0; k <2 * i + 1; k++) {
        result += '*';
    }
    
    result += '\n';
}

console.log(result);