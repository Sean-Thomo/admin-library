// Get html classes
const cards = document.getElementById("cards");
const bookTitle = document.querySelector(".title");
const bookAuthor = document.querySelector(".author");
const bookPages = document.querySelector(".pages");
const bookStatus = document.querySelector(".status");
const addBook = document.querySelector(".add-book-btn");
const formDiv = document.querySelector(".form");
formDiv.style.display = "none";

// Actual form
const form = document.getElementById("form");
const submitBtn = document.querySelector(".submit-book-btn");

// Cards
const cardsDiv = document.querySelector('#cards');

let books = [
  {
    title:'Test 1',
    author: 'Author 1',
    pages: 123,
    status: 'Read'
  },{
    title:'Test 2',
    author: 'Author 2',
    pages: 123,
    status: 'Read'
  },{
    title:'Test 3',
    author: 'Author 3',
    pages: 123,
    status: 'Read'
  },{
    title:'Test 3',
    author: 'Author 3',
    pages: 123,
    status: 'Read'
  },
];

addBook.addEventListener("click", () => {
  if (formDiv.style.display === "none") {
    formDiv.style.display = "block";
  } else {
    formDiv.style.display = "none";
  }
});

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function getDataForm(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let title = formData.get("title");
  let author = formData.get("author");
  let pages = formData.get("pages");
  let status = formData.get("status");
  if (status) {
    status = 'Not read yet'
  } else {
    status = 'Read'
  }

  let book = new Book(title, author, pages, status);
  books.push(book);
  createCards(books);
  formDiv.style.display = "none";

  bookTitle.value="";
  bookAuthor.value="";
  bookPages.value=0;

}

submitBtn.addEventListener("click", getDataForm);

// Loop through array of objects and populate card elements
function createCards(array) {
  array.forEach((result) => {
    // Construct card
    const card = document.createElement("div");
    card.classList.add("card");
    const content = `
      <h1 class="title">${result.title}</h1>
      <p class="author">${result.author}</p>
      <p class="pages">${result.pages}</p>
      <p class="status">${result.status}</p>
      <button class="delete-btn" onclick="return this.parentNode.remove()">Delete</button>
    `;

    card.innerHTML = content;
    cards.appendChild(card);
  });

}