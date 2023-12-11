
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZUWCHiI6jsPht8ko530GgZV-FEvfMmNQ",
  authDomain: "chatapp-bf983.firebaseapp.com",
  projectId: "chatapp-bf983",
  storageBucket: "chatapp-bf983.appspot.com",
  messagingSenderId: "1077716029249",
  appId: "1:1077716029249:web:166a44b578c961bbbcdbc0",
  measurementId: "G-5VQTTQXGFP"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);