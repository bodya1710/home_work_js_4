//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function takeLowNum(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3){
//         return num1;
//     }
//     if (num3 < num2 && num3 < num1){
//         return num3;
//     }
//     if (num2 < num1 && num2 < num3){
//         return num2;
//     }
// }
// let x = takeLowNum(34, 3, 343);
// console.log(x);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function takeBigNum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3){
//         return num1;
//     }
//     if (num3 > num2 && num3 > num1){
//         return num3;
//     }
//     if (num2 > num1 && num2 > num3){
//         return num2;
//     }
// }
// let x1 = takeBigNum(1212, 312121, 343);
// console.log(x1);

//- створити функцію яка повертає найбільше число з масиву
// function takeBigestNum(arr) {
//     let numB = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         let numI = arr[i];
//         if (numI > numB){
//             numB = numI;
//         }
//     }
//     return numB;
// }
// let arr1 = [1, 3, 987, 83473,  56, 12, 344];
// let x2 = takeBigestNum(arr1);
// console.log(x2);

//- створити функцію яка повертає найменьше число з масиву
// function takeLowtNum(arr) {
//     let numL = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         let numI = arr[i];
//         if (numI < numL){
//             numL = numI;
//         }
//     }
//     return numL;
// }
// let arr1 = [1, 3, 987, 83473,  56, 12, 344];
// let x2 = takeLowtNum(arr1);
// console.log(x2);

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr4 =[1,2,10];
// function sumArr(arr) {
//     let numS = null;
//     for (let i = 0; i < arr.length; i++) {
//         numS += arr[i];
//     }
//     return numS;
// }
// let x = sumArr(arr4);
// console.log(x);

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr4 =[1,2,10];
// function averageArr(arr) {
//     let numS = null;
//     for (let i = 0; i < arr.length; i++) {
//         numS += arr[i];
//     }
//     let numA = numS /  arr.length;
//     return numA;
// }
// let x = averageArr(arr4);
// console.log(x);

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function takeAll() {
//     let numL = Infinity;
//     let numB = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         let numI = arguments[i];
//         if (numI < numL){
//             numL = numI;
//         }
//         let numI2 = arguments[i];
//         if (numI2 > numB){
//             numB = numI2;
//         }
//     }
//     console.log(numB);
//     return numL;
// }
// let x = takeAll(12, 123, 1231, 111);
// console.log(x);

//- створити функцію яка заповнює масив рандомними числами
// function random1(arr) {
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 1000));
//     }
//     return arr;
// }
// let arr6 = [];
// let x = random1(arr6);
// console.log(x);

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomLimir(arr, limit) {
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * limit));
//     }
//     return arr;
// }
// let arr6 = [];
// let x = randomLimir(arr6, 1214);
// console.log(x);

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr1 = [1,2,3];
// function reverseAr(arr) {
//    let newAr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newAr.push(arr[i]);
//     }
//     return newAr;
// }
// let x = reverseAr(arr1);
// console.log(x);