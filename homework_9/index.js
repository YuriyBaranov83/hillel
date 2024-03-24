function createSum() {
    let result = 0; 
    
    return function(num) {
        result += num;
        return result;
    };
}

const sum = createSum();

console.log(sum(1));  
console.log(sum(2));  
console.log(sum(15));