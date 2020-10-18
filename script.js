let myLibrary = [];

function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary (title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function updateDisplay () {
  document.getElementById("libraryDisplay").innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement("div");
    bookCard.className = "bookCard";
    let titleLine = document.createElement("p");
    titleLine.innerHTML = "Title: " + myLibrary[i].title;
    bookCard.appendChild(titleLine);
    let authorLine = document.createElement("p");
    authorLine.innerHTML = "Author: " + myLibrary[i].author;
    bookCard.appendChild(authorLine);
    let pagesLine = document.createElement("p");
    pagesLine.innerHTML = "Number of Pages: " + myLibrary[i].pages;
    bookCard.appendChild(pagesLine);
    let readLine = document.createElement("p");
    readLine.innerHTML = "Read?";
    bookCard.appendChild(readLine);
    let readBox = document.createElement("input");
    readBox.type = "checkbox";
    if (myLibrary[i].read = true) {
      readBox.checked = true;
    }
    readBox.onclick = function () {
      myLibrary[i].read = !myLibrary[i].read;
    }
    readLine.appendChild(readBox);
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.style.margin = "0 auto";
    deleteButton.style.display = "block";
    deleteButton.style.backgroundColor = "#560C03";
    deleteButton.style.color= "white";
    deleteButton.style.borderColor = "black";
    deleteButton.onclick = function () {
      bookCard.remove();
      myLibrary.splice(i, 1);
    };
    bookCard.appendChild(deleteButton);
    document.getElementById("libraryDisplay").appendChild(bookCard);
  }
}

function openForm() {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("btnOpen").style.opacity = "5%";
  document.getElementById("libraryDisplay").style.opacity = "5%";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  document.getElementById("btnOpen").style.opacity = "100%";
  document.getElementById("libraryDisplay").style.opacity = "100%";
}
