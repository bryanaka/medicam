// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBEmp9zzycP_l1VgiIT0QNLtO5ZsWDanrw",
  authDomain: "medicam-1670b.firebaseapp.com",
  databaseURL: "https://medicam-1670b.firebaseio.com",
  projectId: "medicam-1670b",
  storageBucket: "medicam-1670b.appspot.com",
  messagingSenderId: "243857898828",
  appId: "1:243857898828:web:5460a867999ed7d1a663e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
var messaging = firebase.messaging();
