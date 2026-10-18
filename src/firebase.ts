import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
});

export const db = getDatabase(app);
export const likesRef = ref(db, "likes");