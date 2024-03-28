const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const imgs = document.querySelectorAll('img');
let currentIndex = 0;

watchButtons();

next.addEventListener('click', function() {
    imgs[currentIndex].classList.remove('active');
    currentIndex = currentIndex + 1;
    imgs[currentIndex].classList.add('active');
    watchButtons();
});

prev.addEventListener('click', function() {
    imgs[currentIndex].classList.remove('active');
    currentIndex = currentIndex - 1;
    imgs[currentIndex].classList.add('active');
    watchButtons();
});

function watchButtons() {
    
    if (currentIndex === 0) {
        prev.style.display = 'none';
    } else {
        prev.style.display = 'block';
    }

    if (currentIndex === imgs.length - 1) {
        next.style.display = 'none';
    } else {
        next.style.display = 'block';
    }
}

