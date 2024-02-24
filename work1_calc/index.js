const question = prompt('please enter only: add, sub, mult or div');
const firstNumber = +prompt('please enter first number');
const secondNumber = +prompt('please enter second number');

if (typeof firstNumber === "number" && typeof secondNumber === "number") {
    if(question === 'add'){
        const add = firstNumber + secondNumber;
        alert(firstNumber + '+' + secondNumber + '=' + add);
    }
    else if(question === 'sub'){
        const sub = firstNumber - secondNumber;
        alert(firstNumber + '-' + secondNumber + '=' + sub);
    }
    else if(question === 'mult'){
        const mult = firstNumber * secondNumber;
        alert(firstNumber + '*' + secondNumber + '=' + mult);
    }
    else if(question === 'div'){
        if (secondNumber !== 0) {
            const div = firstNumber / secondNumber; 
            alert(firstNumber +  '/' + secondNumber + '=' + div);
        } else {
            alert('error! you cant divide by 0');
            location.reload();
        }
    }else{
        alert('you enter unknown function');
        location.reload();
    }
}else{
    alert('next time enter a number');
    location.reload();
}