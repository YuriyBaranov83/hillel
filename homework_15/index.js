'use strict'

const buy = document.querySelector('.item__btn');
const formUser = document.querySelector('#form');
const nameUser = document.querySelector('input[name="name_user"]');
const city = document.querySelector('#city');
const department = document.querySelector('#department');
const payment = document.querySelector('.payment span');
const quantity = document.querySelector('input[name="quantity"]');
const phoneUser = document.querySelector('#phone_user');
const emailUser = document.querySelector('#email_user');

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
    if(obj.phone_user.length < 1) {
        phoneUser.classList.add('invalid__field');
    }
    if(obj.email_user.length < 1) {
        emailUser.classList.add('invalid__field');
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



nameUser.addEventListener('input', function() {
    const nameError = document.getElementById('name-error');
    const nameRegex = /^[А-ЯЇЄІA-Z][а-яїєі'a-z]+ [А-ЯЇЄІA-Z][а-яїєі'a-z]+ [А-ЯЇЄІA-Z][а-яїєі'a-z]+$/;
    if (!nameRegex.test(this.value)) {
        nameError.textContent = 'Прізвище та ім\'я повинні складатися з трьох слів, кожне з великої літери';
    } else {
        nameError.textContent = '';
    }
});

phoneUser.addEventListener('input', function() {
    const phoneError = document.getElementById('phone-error');
    const phoneRegex = /^[\d()+-]{10,13}$/;
    if (!phoneRegex.test(this.value)) {
        phoneError.textContent = 'Неправильний формат номера телефону';
    } else {
        phoneError.textContent = '';
    }
});

emailUser.addEventListener('input', function() {
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.value)) {
        emailError.textContent = 'Неправильний формат email';
    } else {
        emailError.textContent = '';
    }
});