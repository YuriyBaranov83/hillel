const inpSearch = document.querySelector('.input');

async function getId() {
  try {
    inpSearch.addEventListener('change', async function () {
      const inputValue = parseInt(inpSearch.value);
      const body = document.querySelector('body');
      const active = document.querySelectorAll('.active');

      active.forEach(element => {
        element.remove();
      });

      if (inputValue > 0 && inputValue <= 100) {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`);
        const foundPost = await postResponse.json();

        const titleId = document.createElement('h1');
        titleId.textContent = foundPost.title;
        body.appendChild(titleId);
        titleId.classList.add('active');

        const bodyId = document.createElement('p');
        bodyId.textContent = foundPost.body;
        body.appendChild(bodyId);
        bodyId.classList.add('active');

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${inputValue}`);
        const foundComments = await commentsResponse.json();
        
        foundComments.forEach(comment => {
          const commentElement = document.createElement('i');
          commentElement.textContent = comment.body;
          body.appendChild(commentElement);
        });

        const button = document.createElement('button');
        button.textContent = 'Show comments';
        body.appendChild(button);

        button.addEventListener('click', function () {
          const italicElements = document.querySelectorAll('i');
          italicElements.forEach(element => {
            element.classList.add('active');
          });
          button.style.display = 'none';
        });

      } else {
        const div = document.createElement('div');
        div.textContent = 'Please enter only numbers from 1 to 100';
        body.appendChild(div);
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

getId();