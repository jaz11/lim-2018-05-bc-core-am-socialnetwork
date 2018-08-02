const logIn = document.getElementById('login');
const logOut = document.getElementById('logout');
const userName = document.getElementById('user-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const registerButton = document.getElementById('register'); 
const facebookButton = document.getElementById('facebook-button')
const googleButton = document.getElementById('google-button');
const signInButton = document.getElementById('btnSignin');
const logOutButton = document.getElementById('btnLogout');

let config = {
    apiKey: 'AIzaSyC1K9LkUQyl4cVah4hXkQ6CINmg9Zd_kZI',
    authDomain: 'warique-88140.firebaseapp.com',
    databaseURL: 'https://warique-88140.firebaseio.com',
    projectId: 'warique-88140',
    storageBucket: 'warique-88140.appspot.com',
    messagingSenderId: '399831724179'
};
firebase.initializeApp(config);

//Creating a function for the dataBase
const writeUserData = (userId, name, email, imageURL) => {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageURL,
    });
 }

// Registro con Google 
googleButton.addEventListener ('click', () => {
let provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({
       'display': 'popup'
   });
   firebase.auth().signInWithPopup(provider)
       .then((result) => {
           alert('¡Usuario Registrado Con Google Exitosamente!')
           let user = result.user;
           writeUserData(user.uid, user.displayName, user.email, user.photoURL);
       })
       .catch((error) => {
           console.log(error.code);
           console.log(error.message);
           console.log(error.email);
           console.log(error.credential);
       });
})

// Registro con Facebook
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
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            console.log(error.email);
            console.log(error.credential);
        });
})

const passwordConfirm = () => {
    let password = document.getElementById('pass-word');
    let passwordValidation = document.getElementById('password-validation');
    if(password === passwordValidation){
    let 
    } 
}

// Registro con Correo Electrónico
registerButton.addEventListener('click', () => {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((result) => {
            alert('¡Usuario Registrado Exitosamente!')
            let user = result.user;
            //writeUserData recibe parametros
            writeUserData(user.uid, user.displayName, user.email, user.photoURL);
        })
        .catch( (error) => {
            console.log(error.code, error.message);

        });
});

window.onload = () => { 
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            login.classList.remove('hiden');
            logout.classList.add('hiden');
            // console.log('inicio logueado')
        } else {
            login.classList.add('hiden');
            logout.classList.remove('hiden');
            // console.log('no está logueado');
        }
    });
}

//Botón inicio de sesión 
signInButton.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
            console.log('Inicia sesión');
        })
        .catch((error) => {
            console.log(error.code, error.message)
        });
})

//Botón cierre de sesión 
logOutButton.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        console.log('Cierro sesion');
        login.classList.remove('hiden');
        logout.classList.add('hiden');
    }).catch((error) => {
        console.log('error al cerrar sesión');
    });
})