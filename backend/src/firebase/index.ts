import { config } from "dotenv";
import * as firebase from "firebase";
import "firebase/storage";

config(); // Inject Firebase credentials from a `.env` file
const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID
} = process.env;

// Create and initialize a Firebase instance
firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
});

// Export the Firebase database and Firebase storage services
const firebaseDatabase = firebase.database();
const firebaseStorage = firebase.storage();
export { firebaseDatabase, firebaseStorage };
