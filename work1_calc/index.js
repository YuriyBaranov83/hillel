const question = prompt('what do you want? please enter: add, sub, mult or div');
const firstNumber = +prompt('please enter first number');
const secondNumber = +prompt('please enter second number');

if (typeof firstNumber === "number" && typeof secondNumber === "number") {
    if(question === 'add'){
        alert(firstNumber + secondNumber);
    }
    if(question === 'sub'){
        alert(firstNumber - secondNumber);
    }
    if(question === 'mult'){
        alert(firstNumber * secondNumber);
    }if(question === 'div'){
        if (secondNumber !== 0) {
            alert(firstNumber / secondNumber);
        } else {
            alert('error! you cant divide by 0');
            location.reload();
        }
    }else{
        alert('you enter unknown function');
    }
}else{
    alert('next time enter a number');
    location.reload();
}