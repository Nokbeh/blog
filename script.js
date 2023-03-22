console.log('Script file loaded.');

const postList = document.querySelector('#post-list');

// Define an array of blog post objects
const posts = [
  {
    title: 'My First Blog Post',
    subtitle: 'A quick introduction to my blog',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '2023-03-15'
  },
  {
    title: 'My Second Blog Post',
    subtitle: 'A deeper dive into my interests',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '2023-03-16'
  },
  {
    title: 'My Third Blog Post',
    subtitle: 'My thoughts on current events',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '2023-03-17'
  }
];

// Loop through the posts array and create a new HTML element for each post
posts.forEach(post => {
  const postPreview = document.createElement('li');
  postPreview.classList.add('post-preview');
  postPreview.innerHTML = `
    <a href="post.html">
      <h3>${post.title}</h3>
      <p>${post.subtitle}</p>
      <p>${post.date}</p>
    </a>
  `;
  postList.appendChild(postPreview);
});

// Define a function to get the search input value and filter the blog post previews
function searchPosts() {
  const input = document.querySelector('#search').value.toLowerCase();
  const postPreviews = document.querySelectorAll('.post-preview');
  postPreviews.forEach(postPreview => {
    const title = postPreview.querySelector('h3').textContent.toLowerCase();
    const subtitle = postPreview.querySelector('p').textContent.toLowerCase();
    if (title.indexOf(input) > -1 || subtitle.indexOf(input) > -1) {
      postPreview.style.display = '';
    } else {
      postPreview.style.display = 'none';
    }
  });
}

// Add an event listener to the search input field
const searchInput = document.querySelector('#search');
searchInput.addEventListener('keyup', searchPosts);

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', searchPosts);

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
