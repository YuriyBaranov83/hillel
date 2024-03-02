// task 1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let res = '';
for (let i = 20 ; i <= 30 ; i += 0.5) {
    res += i.toString() + ', ';
}
res = res.slice(0, -2);
console.log(res);

// task 2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
const dollar = 38;
let calc = '';
for (let i = 10; i <= 100; i += 10) {
    calc += i + ' долларів = ' + (i * dollar) + ' гривень\n';
}
console.log(calc);

// task 3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const numb = 1000;
let res2 = '';
for (let i = 1 ; i <= 100 ; i++) {
    if( i**2 > numb) {
        break;
    }
    i = i.toString();
    res2 += i + ', ';
}
console.log(res2.slice(0, -2));

//task 4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const simple = -10;
if (simple < 0){
    console.log(simple + ' - ' + 'це не просте число');
}else if (simple === 1 || simple === 0) {
    console.log(simple + ' - ' + 'це не просте число'); 
} else {
    let isSimp = true; 

    for (let i = 2; i < simple; i++) {
        if (simple % i === 0) {
            isSimp = false;
            break;
        }
    }

    if (isSimp) {
        console.log(simple + ' - ' + 'це просте число');
    } else {
        console.log(simple + ' - ' + 'це не просте число');
    }
}

//task 5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const nums = 80;
let e = 0;

for (e = 0; Math.pow(3, e) < nums; e++) {
    
}

if (Math.pow(3, e) === nums) {
    console.log(`${nums} можливо отримати як 3 в ступіні ${e}.`);
} else {
    console.log(`${nums} не можливо отримати як 3 в будь якій ступіні.`);
}


