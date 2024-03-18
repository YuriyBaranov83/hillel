// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, valueToRemove){
    return arr.reduce((acc, current) => {
        if(current !== valueToRemove) {
            acc.push(current);
        }
        return acc;
    },[]);
}
const newArray = removeElement(array, 5);
console.log(newArray);
