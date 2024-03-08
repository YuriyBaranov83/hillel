// 1.Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let count = 0;

const result = arr.reduce(function(acc, value) {
    if (value > 0) {
        acc.sum += value;
        acc.count++;
    }
    return acc;
}, { sum: 0, count: 0 });
console.log(`Сума: ${result.sum} / Кількість: ${result.count}`);

// 2.Знайти мінімальний елемент масиву та його порядковий номер.

const { minElement, minIndex } = arr.reduce((acc, cur, index) => {
    if (cur < acc.minElement) {
        acc.minElement = cur;
        acc.minIndex = index;
    }
    return acc;
}, { minElement: 0, minIndex: 0});
console.log(`найменше: ${minElement}/ порядковий номер: ${minIndex}`);

const minElem = Math.min(...arr); // Як варіант
const minInd = arr.indexOf(minElem);
console.log(`найменше: ${minElem}, порядковий номер: ${minInd}`);

// 3.Знайти максимальний елемент масиву та його порядковий номер.
const { maxElement, maxIndex } = arr.reduce((acc, cur, index) => {
    if (cur > acc.maxElement) {
        acc.maxElement = cur;
        acc.maxIndex = index;
    }
    return acc;
}, { maxElement: 0, maxIndex: 0 });

console.log(`найбільше: ${maxElement}/ порядковий номер: ${maxIndex}`);

// 4.Визначити кількість негативних елементів.

const negative = arr.reduce((acc, cur) => {
    if(cur < 0){
        acc.count++;
    }
    return acc;
}, {count: 0 });
console.log(`кількість негативних ${negative.count}`);

// 5.Знайти кількість непарних позитивних елементів.
const oddCount = arr.reduce((acc, cur) => {
    if(cur % 2 !== 0 && cur > 0){
        acc.count++;
    }
    return acc;
}, {count: 0 });
console.log(`непарних ${oddCount.count}`);

// 6.Знайти кількість парних позитивних елементів.
const evenCount = arr.reduce((acc, cur) => {
    if(cur % 2 === 0 && cur > 0){
        acc.count++;
    }
    return acc;
}, {count: 0 });
console.log(`непарних ${evenCount.count}`);

// 7.Знайти суму парних позитивних елементів.

const positiveEvenCount = arr.reduce((acc, cur) => {
    if(cur % 2 === 0 && cur > 0){
        acc.sum += cur;
    }
    return acc;
}, {sum: 0 });
console.log(`сума парних ${positiveEvenCount.sum}`);

// 8.Знайти суму непарних позитивних елементів.

const positiveOddCount = arr.reduce((acc, cur) => {
    if(cur % 2 !== 0 && cur > 0){
        acc.sum += cur;
    }
    return acc;
}, { sum: 0 });
console.log(`сума непарних ${positiveOddCount.sum}`);

// 9.Знайти добуток позитивних елементів.
const positiveMult = arr.reduce((acc, cur) => {
    if(cur > 0) {
        acc.mult *= cur;
    }
    return acc;
}, { mult: 1 });
console.log( `добуток позитивних ${positiveMult.mult}`);


// 10. Знайти найбільший серед елементів масиву, остальні обнулити.

const maxEl = arr.reduce((acc, value) => {
    if(value > acc.max){
        acc.max = value;
    }
    return acc;
}, {max: -Infinity });

const resultArr = arr.map(function(element) {
    if (element === maxEl.max) {
        return element;
    } else {
        return 0;
    }
});
console.log(resultArr);

const maxEl2 = Math.max(...arr); //Теж як варіант

arr.filter((value, index) => {
    if (value !== maxEl2) {
        arr[index] = 0;
    }
});

console.log(arr);