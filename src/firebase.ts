import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // <-- 1. Importar getStorage

const firebaseConfig = {
  apiKey: "AIzaSyC4ZSSKXi0Q7nFpaxOMp_nnNwPJvuhatlg",
  authDomain: "lottopos-73556.firebaseapp.com",
  projectId: "lottopos-73556",
  storageBucket: "lottopos-73556.appspot.com",
  messagingSenderId: "533950757876",
  appId: "1:533950757876:web:af3bc603f602eaf6b517a1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // <-- 2. Exportar el servicio de Storage

export default app;