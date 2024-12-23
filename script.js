
// Вам необходимо самостоятельно решить, для какого задания 
// какой оператор ветвления лучше использовать: if, switch или 
// тернарный.
// // 1task 
// 1. Запросить у пользователя его возраст и определить, кем он 
// является: ребенком (0–2), подростком (12–18), взрослым 
// (18_60) или пенсионером (60– ...)

// let age = Math.abs(Math.trunc(+prompt("Возраст?", "от 0 до бесконечности")));
// let message =
//   age <= 2
//      "Вы - ребенок!";
//     age <= 12
//      "Вы - подросток!";
//      age < 18
//      "Вы - взрослый!";
//      age <= 60
//      "Вы - пенсионер!"
// alert(message)
  
// 2task
// Запросить у пользователя число от 0 до 9 и вывести ему 
// спецсимвол, который расположен на этой клавише (1–!, 
// 2–@, 3–# и т. д).
// let num = prompt('введите число от 0 до 9') 
// if( num === '0') {
//     console.log(')')
// }
// else if( num === '1'){
//     console.log('!')
// }
// else if( num === '2'){
//     console.log('@')
// }
// else if( num === '3'){
//     console.log('#')
// }
// else if( num === '4'){
//     console.log('$')
// }
// else if( num === '5'){
//     console.log('%')
// }
// else if( num === '6'){
//     console.log('^')
// }
// else if( num === '7'){
//     console.log('&')
// }
// else if( num === '8'){
//     console.log('*')
// }
// else if( num === '9'){
//     console.log('(')
// }

// 3task
// Запросить у пользователя трехзначное и число и проверить, 
// есть ли в нем одинаковые цифры
// let num = prompt('введите трехзначное число') 
// let arrNum = num.split('')

// console.log(num);
// console.log(arrNum);
// console.log(arrNum[0])
// console.log(arrNum[1])
// console.log(arrNum[2])

// if(arrNum{0} === arrNum[1]) {
//     alert('There is coincidence')
// }
//  else if(arrNum{0} === arrNum[2]) {
//     alert('There is coincidence')
// }
//  else if(arrNum{1} === arrNum[2]) {
//     alert('There is coincidence')
// }else 
// alert{'noy'}

//4task
// Запросить у пользователя год и проверить, високосный он 
// или нет. Високосный год либо кратен 400, либо кратен 4 и 
// при этом не кратен 100.
// let years = promt('Введите год')
// if(year % 400 == 0){
//     console.log('год високосный');
// }
// else if(year % 4 == 0){
//     console.log('год високосный');
// }
// else if(year % 100 != 0){
//     console.log('год невисокосный');
// }


// //5task
// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// let numPalindrom = prompt('введите 5-ти значное число')
// let arrNum = numPalindrom.split('')
// if(arrNum[0] === arrNum[4]) && (arrNum[1] === arrNum[3]) {
//     console.log('Это число -палиндром')
// }else{
// console.log('не палиндром')
// }


//6task
// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, 
// UAN или AZN, и получает в ответ соответствующую сумму
// let summa = Math.abs(+prompt("Введите сумму USD для обмена: "));
// const eur = Number(1.08);
// const uan = Number(0.15);
// const azn = Number(0.59);
// let rate = "";
// do {
//   rate = prompt(
//     "На какую валюту вы хотите обменять доллары? Введите EUR для обмена на евро, UAN для обмена на юани, либо AZN для азербайджанских манатов."
//   );
//   rate = rate.toUpperCase();
// } while (rate != "EUR" && rate != "UAN" && rate != "AZN");
// let convert_summa = 0;
// if (rate == "EUR") {
//   convert_summa = (summa * eur).toFixed(2);
// }
// if (rate == "UAN") {
//   convert_summa = (summa * uan).toFixed(2);
// }
// if (rate == "AZN") {
//   convert_summa = (summa * azn).toFixed(2);
// }

// alert(`Вы поменяли ${summa} USD на ${convert_summa} ${rate}`);

    //7task
//     Запросить у пользователя сумму покупки и вывести сумму 
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 
// до 500 – 5%, от 500 и выше – 7%. 
    // function specialCharacter() {
    //     let num = prompt('Введите сумму покупки');
    //     if (num <200){
    //     alert(num=num*1)
    //     }
    //     else if (num >=200 && num <300){
    //     alert(num - (num/100*3))
    //     }
    //     else if (num >=300 && num <500){
    //     alert(num - (num/100*5))
    //     }
    //     else if (num >=500){
    //     alert(num - (num/100*7))
    //     }
    // }

    //8task
//     Запросить у пользователя длину окружности и периметр 
// квадрата. Определить, может ли такая окружность поместиться в указанный квадрат
//     let circuit = prompt("Введите длину окружности: ");
// let perimete = prompt("Введите периметр квадрата: ");
// if (circuit / 2 / Math.PI > perimetr / 4 / 2) {
//   alert("Окружность данной длины не впишется в данный квадрат!");
// } else {
//   alert("Окружность данной длины впишется в данный квадрат!");
// }

//9task
// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 
// балла. После вопросов выведите пользователю количество 
// набранных баллов.
// Cоздайте функцию checkPassword(x), которая вернет
// значение true, если в качестве аргумента в нее будет
// передан допустимый пароль (одно из значений «Step»,
// «Web» или «JavaScript»). Иначе функция должна вернуть false

// function checkPassword(x) {
    // if
// }

// Создайте функцию определения знака числа sign(x),
// которая вернет значение –1, если аргумент «х» — отрицательное число, 1 — если положительное, 0 —
// если аргумент «х» равен нулю

// function sign(x) {
    
// }



// Предложите имя (согласно правилам именования)
// и создайте функцию, которая будет возвращать названия дней недели по их номеру: 0-Sunday, 1-Monday,
// 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday.
// function week(num) {
    //     if(0)
    //     alert('Sunday');
    // else if(1)
    //     alert('Monday');
    // else if(2)
    //     alert('Tuesday');
    // else if(3)
    //     alert('Wednesday');
    // else if(4)
    //     alert('Thursday');
    // else if(5)
    //     alert('Friday');
    // else if(6)
    //     alert('Saturday');
        
    
// }

