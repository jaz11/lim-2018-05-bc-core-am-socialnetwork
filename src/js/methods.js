//SignUp variables
const nameSignUp = document.getElementById('name-signup');
const userSignUp = document.getElementById('user-signup');
const emailSignUp = document.getElementById('email-signup');
const passwordSignUp = document.getElementById('password-signup');
const passwordValidation = document.getElementById('password-validation');
const registerButton = document.getElementById('register');
//SignIn variables
const googleButton = document.getElementById('google-button');
const facebookButton = document.getElementById('facebook-button');
const emailSignIn = document.getElementById('email-signin');
const passwordSignIn = document.getElementById('password-signin');
const signInButton = document.getElementById('sign-in-button');

let config = {
    apiKey: 'AIzaSyC1K9LkUQyl4cVah4hXkQ6CINmg9Zd_kZI',
    authDomain: 'warique-88140.firebaseapp.com',
    databaseURL: 'https://warique-88140.firebaseio.com',
    projectId: 'warique-88140',
    storageBucket: 'warique-88140.appspot.com',
    messagingSenderId: '399831724179'
};
firebase.initializeApp(config);


//Creating a function to show the users in fireBase
const writeUserData = (userId, name, email, imageURL) => {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageURL,
    });
}

//Function to call the other HTML where's the main page of the app
const htmlCall = () => {
    window.location.assign('mainpage.html');
};

//EMAIL register
registerButton.addEventListener('click', () => {
    const callbackRegister = (error, result) => {
        if(error) {
            console.log(error.code, error.message);
        } else {
            alert('¡Usuario Registrado Exitosamente!');
            let user = result.user;
            //writeUserData recibe parametros
            writeUserData(user.uid, user.displayName, user.email, user.photoURL);
            htmlCall();
        }
    }
    signUp(emailSignUp.value, passwordSignUp.value, callbackRegister)
});


///////////////////////////////////Métodos de Inicio de Sesión///////////////////////////////////

//EMAIL LogIn button 
signInButton.addEventListener('click', () => {
    const callbackSignIn = (error, result) => {
        if(error){
            console.log(error.code, error.message);
        } else {
            alert('Sesión Iniciada Correctamente');
            htmlCall();
        }
    }
    signIn(emailSignIn.value, passwordSignIn.value, callbackSignIn)
});

//GOOGLE LogIn button 
googleButton.addEventListener('click', () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('¡Usuario Registrado Con Google Exitosamente!')
            let user = result.user;
            writeUserData(user.uid, user.displayName, user.email, user.photoURL);
            htmlCall();
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            console.log(error.email);
            console.log(error.credential);
        });
})

//FACEBOOK LogIn button
facebookButton.addEventListener('click', () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('¡Usuario Registrado Con Facebook Exitosamente!')
            let user = result.user;
            writeUserData(user.uid, user.displayName, user.email, user.photoURL);
            htmlCall();
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            console.log(error.email);
            console.log(error.credential);
        });
})