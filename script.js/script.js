// Первое задание
let name = prompt('Ваше имя');
let age = +prompt('Возраст');
let city = prompt('Город проживания');
let phone = prompt('Введите номер своего телефона');
let email = prompt('Введите ваш email');
let company = prompt('В какой компании вы работаете?');
if (age <= 0) {
    alert('Хтота-та урот -_-')
} else if ((20 >= age && age >= 5) || (30 >= age && age >= 25) || (40 >= age && age >= 35) || (50 >= age && age >= 45) || (60 >= age && age >= 55) || (70 >= age && age >= 65) || (80 >= age && age >= 75) || (90 >= age && age >= 85) || (99 >= age && age >= 95)) {
    document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}`)
} else if (age == 1 || age == 21 || age == 31 || age == 41 || age == 51 || age == 61 || age == 71 || age == 81 || age == 91) {
    document.write(`Меня зовут ${name}. Мне ${age} год. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}`)
} else {
    document.write(`Меня зовут ${name}. Мне ${age} года. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email} <br>`)
}

// // Второе задание
let year = new Date().getFullYear();
let year2 = +year - age;
document.write(`${name} родился в ${year2} <br>`);

// Третее задание
let number = prompt('Введите 6 цифр');
if (+number[0] + +number[1] + +number[2] == +number[3]+ +number[4]+ +number[5]) {
    document.write(`Да`);
} else {document.write(`Нет`)};

// Четвертое задание
let number2 = +prompt('Введите цифру');
if (number2 > 0) {
    document.write(`Верно`);
} else {document.write(`Неверно`)};

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
if (((a > 2) && (a < 11)) || ((b >= 6) || (b <14))) {
    document.write('Верно', '<br>');
} else {
    document.write('Неверно', '<br>');
}

// Седьмое задание
let n = +prompt('Введите число от 0 до 59');
if (n >=0 && n <= 15) {
    alert('Первая');
} else if (n > 15 && n <= 30) {
    alert('Вторая');
} else if (n >30 && n <= 45) {
    alert('Третья');
} else if (n > 45 && n <= 59) {
    alert('Четвертая');
} else {
    alert('Не верное значение');
}

// Восьмое задание
let day = +prompt('Введите число от 1 до 31');
if (day >=0 && day <= 10) {
    alert('Первая декада');
} else if (day > 10 && day <= 20) {
    alert('Вторая декада');
} else if (day >20 && day <= 31) {
    alert('Третья декада');
}  else {
    alert('Не верное значение');
}

// Девятое задание
let day = +prompt('Количество дней');
if (day >= 365) {
    alert(`${day / 365} лет`);
} else {
    alert('Меньше года');
}
if (day >= 31) {
    alert(`${(day / 31)} месцев`);
} else {
    alert('Меньше месяца');
}
if (day >= 7) {
    alert(`${(day / 7)} недель`);
} else {
    alert('Меньше недели');
}
alert(`${(day * 24)} часов`);
alert(`${(day * 1440)} минут`);
alert(`${(day * 86400)} секунд`);

// Десятое задание
day = +prompt('Количество дней');
let m;
if (day >= 1 && day <= 31) {
    alert('Месяц 1 - Январь');
    m = 1;
} else if (day >= 31 && day <= 59) {
    alert('Месяц 2 - Февраль');
    m = 2;
} else if (day > 59 && day <= 90) {
    alert('Месяц 3 - Март');
    m = 3;
} else if (day > 90 && day <= 120) {
    alert('Месяц 4 - Апрель');
    m = 4;
} else if (day > 120 && day <= 151) {
    alert('Месяц 5 - Май');
    m = 5;
} else if (day > 151 && day <= 181) {
    alert('Месяц 6 - Июнь');
    m = 6;
} else if (day > 181 && day <= 212) {
    alert('Месяц 7 - Июль');
    m = 7;
} else if (day > 212 && day <= 242) {
    alert('Месяц 8 - Август');
    m = 8;
} else if (day > 242 && day <= 273) {
    alert('Месяц 9 - Сентябрь');
    m = 9;
} else if (day > 273 && day <= 303) {
    alert('Месяц 10 - Октябрь');
    m = 10;
} else if (day > 303 && day <= 334) {
    alert('Месяц 11 - Ноябрь');
    m = 11;
} else if (day > 334 && day <= 365) {
    alert('Месяц 12 - Декабрь');
    m = 12;
}
switch(m) {
    case (1):
        alert('Зима');
        break;
    case (2):
        alert('Зима');
        break;
    case (3):
        alert('Весна');
        break;
    case (4):
        alert('Весна');
        break;
    case (5):
        alert('Весна');
        break;
    case (6):
        alert('Лето');
        break;
    case (7):
        alert('Лето');
        break;
    case (8):
        alert('Лето');
        break;
    case (9):
        alert('Осень');
        break;
    case (10):
        alert('Осень');
        break;
    case (11):
        alert('Осень');
        break;
    case (12):
        alert('Зима');
        break;
}
