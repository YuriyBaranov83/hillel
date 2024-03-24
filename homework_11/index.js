const input = document.getElementById('myInput');

input.addEventListener('focus', function(){
    const newDiv = document.createElement('div');
    newDiv.textContent = 'it\'s new div';
    newDiv.classList.add('block'); 
    document.body.appendChild(newDiv);
});
input.addEventListener('blur', function(){
    const divToRemove = document.querySelector('.block');
    if (divToRemove) {
        divToRemove.remove();
    }
});