// function* Foo() {
//     console.log('start')
//     yield 1
//     yield 2
//     yield 3
//     console.log('finish')
//   }

//   const iterator = Foo()
//   console.log(iterator.next().value)
//   console.log(iterator.next().value )
//   console.log(iterator.next().value )
//   console.log(iterator.next().value )

// *******

//   function Boo() {
// писати код тут
//   }

//   const iterator = Boo()
//   iterator.next().value // 1
//   iterator.next().done // false

"use strict";

function Boo() {
  let count = 0;

  const iterator = {
    next: function () {
      count++;
      if (count <= 3) {
        return { value: count, done: false };
      } else {
        console.log("finish");
        return { done: true };
      }
    },
  };

  console.log("start");
  return iterator;
}

const iterator = Boo();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
