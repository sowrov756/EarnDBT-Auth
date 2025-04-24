// Firebase Config (demo config, change with your real one if needed)
const firebaseConfig = {
  apiKey: "AIzaSyDemoApiKey123456",
  authDomain: "earnbdt-demo.firebaseapp.com",
  projectId: "earnbdt-demo",
  storageBucket: "earnbdt-demo.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => document.getElementById('message').innerText = "Registered!")
    .catch(err => document.getElementById('message').innerText = err.message);
}

function signIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => document.getElementById('message').innerText = "Logged in!")
    .catch(err => document.getElementById('message').innerText = err.message);
}
