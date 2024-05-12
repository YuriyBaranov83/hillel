// Створити клас SuperMath.

// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

'use strict';
class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;

    if (!this.isValidOperator(znak)) {
    alert('Введіть оператори: +, -, /, *');
      return;
    }

    const confirmMessage = `Ви хочете зробити дію '${znak}' з числами ${X} і ${Y}?`;
    const confirmation = confirm(confirmMessage);

    if (confirmation) {
      const result = this.operate(X, Y, znak);
      alert(`Результат: ${result}`);
    } else {
      this.input();
    }
  }

  isValidOperator(operator) {
    return /^[\+\-\*\/]$/.test(operator);
  }

  operate(X, Y, znak) {
    switch (znak) {
      case '+':
        return X + Y;
      case '-':
        return X - Y;
      case '/':
        return X / Y;
      case '*':
        return X * Y;
      default:
        alert('Error');
    }
  }

  input() {
    const X = parseInt(prompt('Введіть число X:'));
    const Y = parseInt(prompt('Введіть число Y:'));
    const znak = prompt('Введіть математичний оператор (+, -, /, *):');
    this.check({ X, Y, znak });
  }
}

const superMath = new SuperMath();
const obj = { X: 120, Y: 10, znak: '+' };
superMath.check(obj);
