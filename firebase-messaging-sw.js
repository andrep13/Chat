// Give the service worker access to Firebase Messaging.

// Note that you can only use Firebase Messaging here, other Firebase libraries

// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWLZ6D4RjdnwLxiSrQbIbJJ3VqbsDbth0",
      authDomain: "blog-andre-c7dec.firebaseapp.com",
      databaseURL: "https://blog-andre-c7dec-default-rtdb.firebaseio.com",
      projectId: "blog-andre-c7dec",
      storageBucket: "blog-andre-c7dec.appspot.com",
      messagingSenderId: "145107204999",
      appId: "1:145107204999:web:59c1a4e4c4438c39b2b122",
      measurementId: "G-6KG5DR3SWH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



