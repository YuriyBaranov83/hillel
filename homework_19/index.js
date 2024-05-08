// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост,
// то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.
"use strict";

const inpSearch = document.querySelector(".input");

async function getId() {
  try {
    const idPost = await fetch("https://jsonplaceholder.typicode.com/posts");
    const idPostData = await idPost.json();

    const idComments = await fetch('https://jsonplaceholder.typicode.com/comments');
    const idCommentsData = await idComments.json();

    inpSearch.addEventListener("change", function () {
      const inputValue = parseInt(inpSearch.value);
      const body = document.querySelector('body');
      const titleId = document.createElement('h1');
      const bodyId = document.createElement('p');
      const active = document.querySelectorAll('.active');

      active.forEach(function(element) {
        element.remove();
      });

      if (inpSearch.value > 0 && inpSearch.value <= 100) {
        const foundPost = idPostData.find(post => post.id === inputValue);
        
        body.appendChild(titleId);
        titleId.classList.add('active');
        body.appendChild(bodyId);
        bodyId.classList.add('active');
        titleId.textContent = `${foundPost.title}`;
        bodyId.textContent = `${foundPost.body}`;

		const foundComments = idCommentsData.filter(comments => comments.postId === foundPost.id);
        const button = document.createElement('button');
        
		foundComments.forEach(function(element){
			const commentsForPost = element.body;
        	const commentElement = document.createElement('i');
			body.appendChild(commentElement);
            commentElement.classList.add('italic');
			commentElement.textContent = `${commentsForPost}`;
		});

		body.appendChild(button);
        button.classList.add('active');
        button.textContent = 'Show comments';

        button.addEventListener('click', function(){
			const italic = document.querySelectorAll('.italic');
			italic.forEach(function(element) {
				element.classList.add('active');
			});
			button.style.display = 'none';
		});

      } else {
        const div = document.createElement('div');
        div.classList.add('active');
        body.appendChild(div);
        div.textContent = 'Please enter only numbers from 1 to 100';
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

getId()
