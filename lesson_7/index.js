// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

function raisePow(num, degree) {
    if (degree === 0) {
        return 1;
    } else if (degree > 0) {
        return num * raisePow(num, degree - 1);
    } else {
        return 1 / (num * raisePow(num, -degree - 1));
    }
}

const result = raisePow(2, 9); 
console.log(result); 