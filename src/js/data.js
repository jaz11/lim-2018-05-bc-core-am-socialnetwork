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
       callbackSignIn(null, result)
    })
    .catch((error) => {
        callbackSignIn(error);
    });
}



// //Function to confirm the password
// const passwordConfirm = () => {
//     let password = document.getElementById('new-password');
//     if (password === passwordValidation) {
//         let
//     }
// }
