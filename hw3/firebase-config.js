// Импортиране на Firebase SDK (версия 9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Тук въведи твоите Firebase данни
const firebaseConfig = {
  apiKey: "AIzaSyDSQoAxJavPF2PRi848Hzs2mB-qX1Kb1MA",
  authDomain: "library-2025.firebaseapp.com",
  databaseURL:
    "https://library-2025-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "library-2025",
  storageBucket: "library-2025.firebasestorage.app",
  messagingSenderId: "464596156063",
  appId: "1:464596156063:web:5014be157fcb6bb5872caa",
};
// Инициализиране на Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// Експортиране за използване в други файлове
export { db, auth };
