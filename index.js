
let form = document.querySelector('#form');

var firebaseConfig = {
    apiKey: "AIzaSyA6THYHMrUZ4To3RuM3vcv7k9rL17_5Ztw",
    authDomain: "voices-ism.firebaseapp.com",
    projectId: "voices-ism",
    storageBucket: "voices-ism.appspot.com",
    messagingSenderId: "285780517372",
    appId: "1:285780517372:web:5fb8a781e59d409237d279"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = form.elements.email.value;
    let password = form.elements.password.value;
    // console.log(email);
    // console.log(password);

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            form.reset();
            window.location.href = "home.html";
        })
        .catch(err => {
            alert(err.message);
        })
});