window.signUp = (email, password, callbackRegister) => {
    firebase.auth().createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value)
        .then((result) => {
            callbackRegister(null, result);
        })
        .catch((error) => {
            callbackRegister(error);
        })
}

window.signIn = (email, password, callbackSignIn) => {
    firebase.auth().signInWithEmailAndPassword(emailSignIn.value, passwordSignIn.value)
        .then((result) => {
            callbackSignIn(null, result);
        })
        .catch((error) => {
            callbackSignIn(error);
        });
}
window.google = (provider, callbackGoogle) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            callbackGoogle(null, result);
        })
        .catch((error) => {
            callbackGoogle(error);
        })
};
window.facebook = () => {
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // var user = result.user;
            callbackFacebook(null, result)
        })
        .catch((error) => {
            callbackFacebook(error)
        })
}


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
