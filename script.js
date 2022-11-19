let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");

const openButton = document.getElementById("openButton");
openButton.addEventListener("click", openForm);

const closeButton = document.getElementById("closeButton")
closeButton.addEventListener("click", closeForm);

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", () => {
  if(titleInput.checkValidity() && authorInput.checkValidity() && pagesInput.checkValidity()) {
    addBookToLibrary(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('read').checked);
    closeForm();
    resetForm();
    updateDisplay();} else {
      alert("All Inputs are required!");
      };
});

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function updateDisplay() {
  document.getElementById("libraryDisplay").innerHTML = "";
  myLibrary.forEach((e) => {
    let bookCard = document.createElement("div");
    bookCard.className = "bookCard";
    let titleLine = document.createElement("p");
    titleLine.innerHTML = "Title: " + e.title;
    bookCard.appendChild(titleLine);
    let authorLine = document.createElement("p");
    authorLine.innerHTML = "Author: " + e.author;
    bookCard.appendChild(authorLine);
    let pagesLine = document.createElement("p");
    pagesLine.innerHTML = "Number of Pages: " + e.pages;
    bookCard.appendChild(pagesLine);
    let readLine = document.createElement("p");
    readLine.innerHTML = "Read?";
    bookCard.appendChild(readLine);
    let readBox = document.createElement("input");
    readBox.type = "checkbox";
    readBox.checked = e.read;
    readBox.onclick = function() {  
      if (e.read === true) {
        e.read = false;
      } else {e.read = true};
      };
    readLine.appendChild(readBox);
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.onclick = function () {
      bookCard.remove();
      myLibrary.splice(myLibrary.indexOf(e), 1);
    };
    bookCard.appendChild(deleteButton);
    document.getElementById("libraryDisplay").appendChild(bookCard);
  });
};

function openForm() {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("libraryDisplay").style.opacity = "25%";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  document.getElementById("libraryDisplay").style.opacity = "100%";
}

function resetForm() {
  document.getElementById("form").reset();
}
