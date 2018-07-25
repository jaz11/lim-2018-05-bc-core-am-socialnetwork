const login = document.getElementById('login');
const logout = document.getElementById("logout");
const username = document.getElementById('user-name');
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnRegister = document.getElementById("register");
const btnLogout = document.getElementById("btnLogout"); 
const btnSignin = document.getElementById("btnSignin");
const btnGoogle = document.getElementById("btnGoogle");


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
// sesion con Google
btnGoogle.addEventListener ('click', () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters ({
        display: 'popup'
    });
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
       console.log('sesión con Google')
       var user = result.user;
       writeUserData(user.uid, user.displayName, user.email, user.photoURL);
      }).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
        console.log(error.email);
        console.log(error.credential);
        
      });
})


// let hereCallJS = document.getElementById('HereCall');
// let refData = firebase.dataBase().ref().child('text');
// refData.on('value', snap => hereCallJS.innerText = snap.val());

// let clickButtom = document.getElementById('buttonLogIn');

// function registrar () {
//     console.log('funciona el click');
// }