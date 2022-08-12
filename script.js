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
const cardsDiv = document.querySelector('.cards');

let books = [];

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
  cardsDiv.style.display = "none";
  formDiv.style.display = "none";

}

submitBtn.addEventListener("click", getDataForm);

// Loop through array of objects and populate card elements
function createCards(array) {
  array.forEach((result) => {
    // Construct card
    const card = document.createElement("div");
    card.classList.add("card");
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
