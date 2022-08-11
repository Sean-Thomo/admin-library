// Get html classes
const cards = document.getElementById('cards');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const bookPages = document.querySelector('.pages');
const bookStatus = document.querySelector('.status');

let myLibrary = [
  {
    title: 'Title 1',
    author: 'J.R.R. Tolkien',
    pages: '295 pages',
    status: 'not ready yet'
  }, {
    title: 'Title 2',
    author: 'J.R.R. Tolkien',
    pages: '295 pages',
    status: 'not ready yet'
  }, {
    title: 'Title 3',
    author: 'J.R.R. Tolkien',
    pages: '295 pages',
    status: 'not ready yet'
  },
]

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Loop through array of objects and populate card elemnts
function createCards(array) {
  array.forEach(result => {
    // Construct card 
    const card = document.createElement('div');
    card.classList.add('card');
    const content = `
      <div class="image-section"></div>
      <ul>
        <li><h1 class="title">${result.title}</h1></li>
        <li><p class="author">${result.author}</p></li>
        <li><p class="pages">${result.pages}</p></li>
        <li><p class="status">${result.status}</p></li>
      </ul>
    `;

    card.innerHTML = content;

    // Append new card element to the card-container
    cards.appendChild(card);
  });
}

createCards(myLibrary)

Book.prototype.info = function () {
  return (`${title} by ${author}, ${pages}, ${status}`);
}

function addBookToLibrary() {
  
}

bookTitle.textContent = myLibrary[0].title;