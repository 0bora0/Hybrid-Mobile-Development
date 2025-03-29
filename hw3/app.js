import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import {
  ref,
  push,
  set,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "onsenui/js/onsenui";

// Регистрация
 export function register() {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registration successful!");
      navigator.popPage();
    })
    .catch((error) => alert(error.message));
}

// Вход
 export function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      loadBooks();
      navigator.pushPage("mainPage.html");
    })
    .catch((error) => alert(error.message));
}

// Изход
 export function logout() {
  signOut(auth).then(() => {
    alert("Logged out!");
    navigator.resetToPage("loginPage.html");
  });
}

// Проследяване на статуса на потребителя
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userEmailDisplay").innerText = user.email;
    loadBooks();
  } else {
    navigator.resetToPage("loginPage.html");
  }
});

// Зареждане на книги
function loadBooks() {
  const user = auth.currentUser;
  if (!user) return;

  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  get(ref(db, "books")).then((snapshot) => {
    const books = snapshot.val();
    for (let id in books) {
      let book = books[id];
      if (book.userId === user.uid) {
        let item = document.createElement("ons-list-item");
        item.innerHTML = `
                    <div class="left">${book.title} by ${book.author}</div>
                    <div class="right">
                        <ons-button onclick="editBook('${id}')">Edit</ons-button>
                        <ons-button onclick="deleteBook('${id}')">Delete</ons-button>
                    </div>`;
        bookList.appendChild(item);
      }
    }
  });
}

// Добавяне на книга
 export function addBook() {
  const user = auth.currentUser;
  if (!user) {
    alert("Please log in first!");
    return;
  }

  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const newBookRef = push(ref(db, "books"));

  set(newBookRef, { title, author, userId: user.uid })
    .then(() => {
      alert("Book added successfully!");
      navigator.popPage();
    })
    .catch((error) => alert(error.message));
}

// Редактиране на книга
let editingBookId = null;

 export function editBook(bookId) {
  editingBookId = bookId;

  get(ref(db, `books/${bookId}`))
    .then((snapshot) => {
      const book = snapshot.val();
      document.getElementById("editBookTitle").value = book.title;
      document.getElementById("editBookAuthor").value = book.author;
      navigator.pushPage("editBookPage.html");
    })
    .catch((error) => alert(error.message));
}

// Запазване на промените в книга
 export function updateBook() {
  if (!editingBookId) return;

  const title = document.getElementById("editBookTitle").value.trim();
  const author = document.getElementById("editBookAuthor").value.trim();

  if (title === "" || author === "") {
    alert("Please enter both title and author.");
    return;
  }

  update(ref(db, `books/${editingBookId}`), { title, author })
    .then(() => {
      alert("Book updated successfully!");
      navigator.popPage();
    })
    .catch((error) => alert(error.message));
}

// Изтриване на книга
 export function deleteBook(bookId) {
  if (confirm("Are you sure you want to delete this book?")) {
    remove(ref(db, `books/${bookId}`))
      .then(() => alert("Book deleted successfully!"))
      .catch((error) => alert(error.message));
  }
}
