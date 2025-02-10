import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTEXn89NUIdFtPEZ92tPsAFKmxrm-5j_A",
  authDomain: "nebulaxbt-54ee7.firebaseapp.com",
  databaseURL: "https://nebulaxbt-54ee7-default-rtdb.firebaseio.com",
  projectId: "nebulaxbt-54ee7",
  storageBucket: "nebulaxbt-54ee7.firebasestorage.app",
  messagingSenderId: "1090496247458",
  appId: "1:1090496247458:web:fa3d512fe417a29e50c9fb",
  measurementId: "G-VMMVMQRS7N",
};

// ✅ Ensure Firebase is only initialized once
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
