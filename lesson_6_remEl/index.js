// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7, 5];
function removeElement(arr, valueToRemove){
    return arr.reduce((acc, current) => {
        if(current !== valueToRemove) {
            acc.push(current);
        }
        return acc;
    },[]);
}
const newArray = removeElement(array, 6);
console.log(newArray);

function removeElement2(arr, valueToRemove) {
    const newArray = arr.filter(function(e) {
        return e !== valueToRemove;
    });
    return newArray;
}

const newArray1 = removeElement2(array, 7);
console.log(newArray1);
