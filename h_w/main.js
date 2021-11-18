//- створити функцію яка обчислює та повертає площу прямокутника висотою
// function rectangleS(a, b) {
//     return a * b
// }
// let x = rectangleS(2, 3);
// console.log(x);

//- створити функцію яка обчислює та повертає площу кола
// function circleS(r) {
//     const p = 3.14;
//    return Math.pow(r, 2) * p;
// }
// let x = circleS(7);
// console.log(x);
//- створити функцію яка обчислює та повертає площу циліндру
// function cylinderS(r, h) {
//     const p = 3.14;
//     return 2 * p * r * h;
// }
// let x = cylinderS(3, 4);
// console.log(x);
//- створити функцію яка приймає масив та виводить кожен його елемент
// let arr1 = [1, 12, 45];
// function logAr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// logAr(arr1);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function writeS(text) {
//     document.write(`<p>${text}</p>`);
// }
// writeS('sdvjfdbvbdvj');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listWrite(text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// listWrite('hello');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listWrite2(text, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//
//     document.write(`</ul>`);
// }
// listWrite2('world', 2);
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function sortV(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${arr[i]}</li>`);
//         document.write(`</ul>`);
//     }
// }
// let arr1 = ['asd', 12, true, 'sdccsdc', 121 ];
// sortV(arr1);
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr1 = [{
//     id: 1,
//     name: 'pitro',
//     age: 23
//
// }, {
//     id: 2,
//     name: 'fitro',
//     age: 53
//
// }, {
//     id: 3,
//     name: 'Vadil',
//     age: 43
//
// }];
// function postUser(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let user = arr[i];
//         document.write(`<div>`);
//         document.write(`${user.id}`);
//         document.write(`${user.name}`);
//         document.write(`${user.age}`);
//         document.write(`</div>`);
//     }
// }
// postUser(arr1);