// const number0fFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

// const personalMovieDB = {
//     count: number0fFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// function firstTask() {
//     for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }    
// }

// for (let i = 20; i > 9; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 2; i < 11; i = i + 2) {
//     console.log(i);
// }

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// let i = 2;

// while (i <= 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// const arrayOfNumbers = [];
//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
// return arrayOfNumbers;

// //23 lesson
// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// //4 code writing exercise 
// /* Задачи:

// 1. Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// 2. Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// 3. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ] */
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);
//     // Не трогаем
//     return result;
// }

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);
//     // Не трогаем
//     return data;
// }

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i <= data.length; i++) {
//         result [i - 1] = data[data.length-i]
//     }
//     console.log(result)
    
//     // Не трогаем
//     return result;
// }
// // repeat 4 writing exercise 
// /* 1. Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// 2. Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// 3. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ] */

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i]=arr[i];
//     }
//     console.log(result);
    
//     // Не трогаем
//     return result;
// }

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);
    
//     // Не трогаем
//     return data;
// }

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }
//     console.log(result);
//     // Не трогаем
//     return result;
// }

// // 5 writing exercise 
// //      *
// //     ***
// //    *****
// //   *******
// //  *********
// // ***********

// // *
// // ***
// // *****
// // *******
// // *********
// // ***********

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';

// }
// console.log(result);

// 24 lesson
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// const number0fFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

// const personalMovieDB = {
//     count: number0fFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if(a != null && b!= null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
    
// }

// if (personalMovieDB.count > 30) {
//     prompt('Вы киноман');
// } else if (personalMovieDB.count > 10) {
//     prompt('Вы классический зритель');
// } else if (personalMovieDB.count >= 0) {
//     prompt('Просмотрено довольно мало фильмов');
// } else {
//     prompt('Произошла ошибка');
// }

// console.log(personalMovieDB);

//25 lesson

// function showFirstMessage() {
//     console.log('Hello world!');
// }

// showFirstMessage();

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);

// function calc(a, b) {
//     return(a + b);
// }

// console.log(calc(15, 110));
// console.log(calc(35, 10));
// console.log(calc(11, 12));

// function ret() {
//     let num = 50

//     //

//     return(num);
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello')
// };

// logger();

// const calc = (a, b) => { return a + b };

// 26 lesson

/* const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr); */

// 27 lesson

/* const usdCurr = 28;
const eurCurr = 32;
const discout = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discout);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

function doNothing() {}

console.log(doNothing() === undefined); */

//4 code writing exercise 

/* Задачи:

1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

P.S. возвращать - это использовать ключевое слово return.

P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15

Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

Вызов функции getMathResult(10, '5') даст ответ 10

Вызов функции getMathResult(10, 0) даст ответ 10

Вызов функции getMathResult(20, -5) даст ответ 20

Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

Да, задача сложнее, но она просто объединяет все то, что мы уже учили. */

// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello('Антон'));

// Место для второй задачи
function returnNeighboringNumbers() {

}

// Место для третьей задачи
function getMathResult() {

}