//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function argymentOneShow(a) {
//     if (arguments[1] === undefined){
//         console.log(a);
//     }
//     return  arguments[1] + a;
// }
// let x = argymentOneShow(12, 121);
// console.log(x);
//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
// function addingArr(arr1, arr2) {
//     let i2 = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         arr1[i] += arr2[i2]
//         i2++
//     }
//     return arr1
// }
// let x = addingArr(arr1, arr2);
// console.log(x);

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arr1 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function clearedArr(arr) {
//     let keys = [];
//     for (let i = 0; i < arr.length; i++) {
//             let obj = arr[i];
//         for (let k in obj) keys.push(k);
//     }
//     return keys;
// }
// let x = clearedArr(arr1);
// console.log(x);

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arr1 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function clearedArr2(arr) {
//     let keys1 = [];
//     for (let i = 0; i < arr.length; i++) {
//             let obj = arr[i];
//         console.log(obj)
//         let j = 0;
//         for (let objKey in obj) {
//             keys1.push(obj[objKey]);
//         }
//     }
//     return keys1;
// }
// let x = clearedArr2(arr1);
// console.log(x);
//-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// function foo(arr, i) {
//     let buffer = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = buffer;
//     return arr;
// }
// let x = foo([9,8,0,4], 0);
// console.log(x);
//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let arr = [1,0,6,0,3];
// let arr1 = [0,1,2,3,4];
//     function foo(arr) {
//         for (var i = 0, endI = arr.length - 1; i < endI; i++) {
//             for (var j = 0, endJ = endI - i; j < endJ; j++) {
//                 if (arr[j] === 0) {
//                     let swap = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = swap;
//                 }
//             }
//         }
//         return arr;
//     }
//
// console.log(foo(arr));
// console.log(foo(arr1));
// console.log(foo([0,0,1,0]));
