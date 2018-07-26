const login = document.getElementById('login');
const logout = document.getElementById("logout");
const username = document.getElementById('user-name');
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnRegister = document.getElementById("register");
const btnLogout = document.getElementById("btnLogout"); 
const btnSignin = document.getElementById("btnSignin");
const googleButton = document.getElementById("google-button");

var config = {
    apiKey: "AIzaSyC1K9LkUQyl4cVah4hXkQ6CINmg9Zd_kZI",
    authDomain: "warique-88140.firebaseapp.com",
    databaseURL: "https://warique-88140.firebaseio.com",
    projectId: "warique-88140",
    storageBucket: "warique-88140.appspot.com",
    messagingSenderId: "399831724179"
};
firebase.initializeApp(config);

// Registro con Google 
googleButton.addEventListener ('click', () => {
// Using a popup.
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
firebase.auth().signInWithPopup(provider).then(function(result) {
 // This gives you a Google Access Token.
 var token = result.credential.accessToken;
 // The signed-in user info.
 var user = result.user;
 var credential = firebase.auth.GoogleAuthProvider.credential(
    googleUser.getAuthResponse().id_token);
firebase.auth().signInWithCredential(credential)
});
})

window.onload = () => { 
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            login.classList.remove("hiden");
            logout.classList.add("hiden");
            console.log('inicio logueado')
        } else {
            login.classList.add("hiden");
            logout.classList.remove("hiden");
            console.log('no está logueado');
        }
    });
}

register.addEventListener('click', () => {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(function () {
            console.log('se creo e usuario')
        })
        .catch(function (error) {
            console.log(error.code, error.message)
        });
});

btnSignin.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(function () {
            console.log('Inicia sesión');
        })
        .catch(function (error) {
            console.log(error.code, error.message)
        });
})

btnLogout.addEventListener('click', () => {
    firebase.auth().signOut().then(function () {
        console.log('Cierro sesion');
        login.classList.remove("hiden");
        logout.classList.add("hiden");
    }).catch(function (error) {
        console.log('error al cerrar sesión');
    });
})



// let hereCallJS = document.getElementById('HereCall');
// let refData = firebase.dataBase().ref().child('text');
// refData.on('value', snap => hereCallJS.innerText = snap.val());

// let clickButtom = document.getElementById('buttonLogIn');

// function registrar () {
//     console.log('funciona el click');
// }