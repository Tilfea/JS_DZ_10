// // Первое задание
// let name = prompt('Ваше имя');
// let age = +prompt('Возраст');
// let city = prompt('Город проживания');
// let phone = prompt('Введите номер своего телефона');
// let email = prompt('Введите ваш email');
// let company = prompt('В какой компании вы работаете?');
// if (age <= 0) {
//     alert('Хтота-та урот -_-')
// } else if ((20 >= age && age >= 5) || (30 >= age && age >= 25) || (40 >= age && age >= 35) || (50 >= age && age >= 45) || (60 >= age && age >= 55) || (70 >= age && age >= 65) || (80 >= age && age >= 75) || (90 >= age && age >= 85) || (99 >= age && age >= 95)) {
//     document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}`)
// } else if (age == 1 || age == 21 || age == 31 || age == 41 || age == 51 || age == 61 || age == 71 || age == 81 || age == 91) {
//     document.write(`Меня зовут ${name}. Мне ${age} год. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}`)
// } else {
//     document.write(`Меня зовут ${name}. Мне ${age} года. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email} <br>`)
// }

// // Второе задание
// let year = new Date().getFullYear();
// let year2 = +year - age;
// document.write(`${name} родился в ${year2} <br>`);

// // Третее задание
// let number = prompt('Введите 6 цифр');
// if (+number[0] + +number[1] + +number[2] == +number[3]+ +number[4]+ +number[5]) {
//     document.write(`Да`);
// } else {document.write(`Нет`)};

// Четвертое задание
// let number2 = +prompt('Введите цифру');
// if (number2 > 0) {
//     document.write(`Верно`);
// } else {document.write(`Неверно`)};

// Пятое задание
let a = 10;
let b = 2;
document.write('Сумма равна ', a+b, '<br>');
document.write('Разность равна ', a-b, '<br>');
document.write('Произведение равно ', a*b, '<br>');
document.write('Частное равно ', a-b, '<br>');
if ((a + b) > 1) {
    document.write('Квадрат суммы равен ', (a+b)**2, '<br>');
}

// Шестое задание

// Седьмое задание

// Восьмое задание

// Девятое задание

// Десятое задание