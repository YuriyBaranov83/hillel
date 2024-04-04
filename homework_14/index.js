'use strict'

const buy = document.querySelector('.item__btn');
const formUser = document.querySelector('#form');
const nameUser = document.querySelector('input[name="name_user"]');
const city = document.querySelector('#city');
const department = document.querySelector('#department');
const payment = document.querySelector('.payment span');
const quantity = document.querySelector('input[name="quantity"]');

buy.addEventListener('click', () => {
    formUser.style.display = 'flex';
});


formUser.addEventListener('submit', function(event)  {
    event.preventDefault();
    
    const formData = new FormData(this);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    const isValid = fieldValidation (formObject);

    if (isValid) {
        formUser.style.display = 'none';

        const table = document.querySelector('.table');
        table.classList.add('table__order');

        const tbody = document.querySelector('.tbody');

        for (const key in formObject) {
            const tdKey = document.createElement("td");
            tdKey.textContent = key;
            
            const tr = document.createElement('tr');
            tr.appendChild(tdKey);

            const tdValue = document.createElement("td");
            tdValue.textContent = formObject[key];
            tr.appendChild(tdValue);
            
            tbody.appendChild(tr);
        }

        const tbodyBtn = document.querySelector('.tbody__btn');
        tbodyBtn.style.display = 'block'
        tbodyBtn.addEventListener('click', function() {
            formUser.submit();
        });
        
    }else{
        const warningExists = formUser.querySelector('.div__warning');
        if (warningExists) {
            warningExists.remove();
        }
        const warning = document.createElement('div');
        formUser.appendChild(warning);
        warning.textContent= 'Заповніть поля!';
        warning.classList.add('div__warning');
    }
});

function fieldValidation(obj) {
    const formElements = document.querySelectorAll('#form input, #form select, .payment span');
    formElements.forEach(function(element) {
        element.classList.remove('invalid__field');
    });
    
    let isValid = true;

    if(obj.name_user.trim().length < 1) {
        nameUser.classList.add('invalid__field');
        isValid = false;
    }
    if(obj.city.length < 1) {
        city.classList.add('invalid__field');
        isValid = false;
    }
    if(obj.department.length < 1) {
        department.classList.add('invalid__field');
        isValid = false;
    }
    if(obj.payment_method === undefined){
        payment.classList.add('invalid__field');
        isValid = false;
    }
    if(obj.quantity.length < 1) {
        quantity.classList.add('invalid__field');
        isValid = false;
    }
    
    return isValid;
}