const firebaseConfig = {
  apiKey: "AIzaSyB85KXXoGvQ1lbSORpMJ35GsbO1-imamig",
  authDomain: "my-library-7fcb9.firebaseapp.com",
  databaseURL: "https://my-library-7fcb9.firebaseio.com",
  projectId: "my-library-7fcb9",
  storageBucket: "my-library-7fcb9.appspot.com",
  messagingSenderId: "764998864378",
  appId: "1:764998864378:web:6c45a128c4663a0175a843",
  measurementId: "G-V5MG7HEZDW"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = (title, author, pages, read) => {
  const book = new Book(title, author, pages, read);
  firebase.database().ref(title).set(book);
}

const updateDisplay = () => {
  let libraryRef = firebase.database().ref();
  libraryRef.on('value', (snapshot)=> {
    document.getElementById("libraryDisplay").innerHTML = "";
    for (const prop in snapshot.val()){
      let bookCard = document.createElement("div");
      bookCard.className = "bookCard";
      let titleLine = document.createElement("p");
      titleLine.innerHTML = "Title: " + snapshot.val()[prop].title;
      bookCard.appendChild(titleLine);
      let authorLine = document.createElement("p");
      authorLine.innerHTML = "Author: " + snapshot.val()[prop].author;
      bookCard.appendChild(authorLine);
      let pagesLine = document.createElement("p");
      pagesLine.innerHTML = "Number of Pages: " + snapshot.val()[prop].pages;
      bookCard.appendChild(pagesLine);
      let readLine = document.createElement("p");
      readLine.innerHTML = "Read?";
      bookCard.appendChild(readLine);
      let readBox = document.createElement("input");
      readBox.type = "checkbox";
      let valOf = snapshot.val()[prop].read;
      readBox.checked = valOf;
      readBox.onclick = function() {
       firebase.database().ref(prop + "/read").set(!valOf);
      };
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
        firebase.database().ref(prop).remove();
      };
      bookCard.appendChild(deleteButton);
      document.getElementById("libraryDisplay").appendChild(bookCard);
    } 
  });
}

const openForm = () => {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("btnOpen").style.opacity = "5%";
  document.getElementById("libraryDisplay").style.opacity = "5%";
}

const closeForm = () => {
  document.getElementById("popupForm").style.display = "none";
  document.getElementById("btnOpen").style.opacity = "100%";
  document.getElementById("libraryDisplay").style.opacity = "100%";
}

const resetForm = () => {
  document.getElementById("form").reset();
}