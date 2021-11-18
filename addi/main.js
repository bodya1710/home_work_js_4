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
let arr1 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
function clearedArr2(arr) {
    let keys1 = [];
    for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
        console.log(obj)
        for (let j = 0; j < obj.length; j++) {
            keys1.push(obj[j]);
            console.log(obj[j])
        }
    }
    return keys1;
}
let x = clearedArr2(arr1);
console.log(x);