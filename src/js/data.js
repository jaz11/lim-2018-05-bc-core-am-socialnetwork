window.registrar = (email, password, cb) => {
    firebase.auth().createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value)
    .then((result) => {
        cb(null, result);
    })
    .catch((error) => {
        cb(error);
    })
}

// window.signIn = (email, password, callbackSignIn) => {
//     firebase.auth().signInWithEmailAndPassword(emailSignIn.value, passwordSignIn.value)
//     .then((result) => {
//        callbackSignIn(null, result)
//     })
//     .catch((error) => {
//         callbackSignIn(error);
//     });
// }



// //Function to confirm the password
// const passwordConfirm = () => {
//     let password = document.getElementById('new-password');
//     if (password === passwordValidation) {
//         let
//     }
// }

let config = {
    apiKey: 'AIzaSyC1K9LkUQyl4cVah4hXkQ6CINmg9Zd_kZI',
    authDomain: 'warique-88140.firebaseapp.com',
    databaseURL: 'https://warique-88140.firebaseio.com',
    projectId: 'warique-88140',
    storageBucket: 'warique-88140.appspot.com',
    messagingSenderId: '399831724179'
};
firebase.initializeApp(config);