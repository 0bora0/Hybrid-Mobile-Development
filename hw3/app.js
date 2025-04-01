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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("register")?.addEventListener("click", register);
  document.getElementById("login")?.addEventListener("click", login);
  document.getElementById("logout")?.addEventListener("click", logout);
  document.getElementById("addBook")?.addEventListener("click", addBook);
  document.getElementById("updateBook")?.addEventListener("click", updateBook);
  document.getElementById('goToLoginButton')?.addEventListener('click', goToLoginPage);
  document.getElementById('goToRegisterButton')?.addEventListener('click', goToRegisterPage);
});

function goToCreateBookPage() {
  const navigator = document.getElementById("navigator");
  navigator.pushPage("createBookPage.html");
}

function goToRegisterPage() {
  const navigator = document.getElementById("navigator");
  navigator.pushPage("registerPage.html");
}

function goToLoginPage() {
  const navigator = document.getElementById("navigator");
  navigator.pushPage("loginPage.html");
}

function register() {
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registration successful!");
      const navigator = document.getElementById("navigator");
      navigator.pushPage('loginPage.html'); // Navigate to login page
    })
    .catch((error) => alert(error.message));
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      loadBooks();
      const navigator = document.getElementById("navigator");
      navigator.resetToPage("booksPage.html"); // Navigate to books page after login
    })
    .catch((error) => alert(error.message));
}

function logout() {
  signOut(auth)
    .then(() => {
      alert("Logged out!");
      const navigator = document.getElementById("navigator");
      navigator.resetToPage('loginPage.html'); // Navigate to login page after logout
    })
    .catch((error) => alert(error.message));
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userEmailDisplay").innerText = user.email;
    loadBooks();
  } else {
    const navigator = document.getElementById("navigator");
    navigator.resetToPage("loginPage.html");
  }
});

function loadBooks() {
  const user = auth.currentUser;
  if (!user) return;

  const bookList = document.getElementById("bookList");
  if (!bookList) return;
  bookList.innerHTML = "";

  get(ref(db, "books")).then((snapshot) => {
    const books = snapshot.val();
    if (books) {
      for (let id in books) {
        let book = books[id];
        if (book.userId === user.uid) {
          let item = document.createElement("ons-list-item");
          item.innerHTML = `
            <div class="left">${book.title} by ${book.author}</div>
            <div class="right">
              <ons-button class="editBookButton" data-id="${id}">Edit</ons-button>
              <ons-button class="deleteBookButton" data-id="${id}">Delete</ons-button>
            </div>`;
          bookList.appendChild(item);
        }
      }
      attachEventListeners();
    }
  });
}

function attachEventListeners() {
  document.querySelectorAll(".editBookButton").forEach((btn) => {
    btn.addEventListener("click", (event) => editBook(event.target.dataset.id));
  });
  document.querySelectorAll(".deleteBookButton").forEach((btn) => {
    btn.addEventListener("click", (event) => deleteBook(event.target.dataset.id));
  });
}

function addBook() {
  const user = auth.currentUser;
  if (!user) {
    alert("Please log in first!");
    return;
  }
  const title = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  if (!title || !author) {
    alert("Please enter both title and author.");
    return;
  }
  const newBookRef = push(ref(db, "books"));
  set(newBookRef, {
    userId: user.uid,
    title,
    author,
  }).then(() => {
    alert("Book added successfully!");
    const navigator = document.getElementById("navigator");
    navigator.resetToPage("booksPage.html"); // Navigate to books page after adding book
  });
}

function editBook(bookId) {
  const bookRef = ref(db, `books/${bookId}`);
  get(bookRef).then((snapshot) => {
    const book = snapshot.val();
    document.getElementById("editBookTitle").value = book.title;
    document.getElementById("editBookAuthor").value = book.author;
    const updateButton = document.getElementById("updateBook");
    updateButton.onclick = () => updateBook(bookId);
  });
  const navigator = document.getElementById("navigator");
  navigator.pushPage("editBookPage.html");
}

function updateBook(bookId) {
  const title = document.getElementById("editBookTitle").value.trim();
  const author = document.getElementById("editBookAuthor").value.trim();
  if (!title || !author) {
    alert("Please enter both title and author.");
    return;
  }
  const bookRef = ref(db, `books/${bookId}`);
  update(bookRef, {
    title,
    author,
  }).then(() => {
    alert("Book updated successfully!");
    const navigator = document.getElementById("navigator");
    navigator.popPage(); // Go back to previous page after updating
  });
}

function deleteBook(bookId) {
  const bookRef = ref(db, `books/${bookId}`);
  remove(bookRef).then(() => {
    alert("Book deleted successfully!");
    loadBooks(); // Reload book list after deletion
  });
}
