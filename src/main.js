const logIn = document.getElementById('login');
const logOut = document.getElementById('logout');
const userName = document.getElementById('user-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const registerButton = document.getElementById('register');
const logOutButton = document.getElementById('btnLogout'); 
const signInButton = document.getElementById('btnSignin');
const facebookButton = document.getElementById('facebook-button')
const googleButton = document.getElementById('google-button');

var config = {
    apiKey: 'AIzaSyC1K9LkUQyl4cVah4hXkQ6CINmg9Zd_kZI',
    authDomain: 'warique-88140.firebaseapp.com',
    databaseURL: 'https://warique-88140.firebaseio.com',
    projectId: 'warique-88140',
    storageBucket: 'warique-88140.appspot.com',
    messagingSenderId: '399831724179'
};
firebase.initializeApp(config);

//Creating a function for the dataBase
function writeUserData(userId, name, email, imageURL) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageURL,
    });
 }

// Registro con Google 
googleButton.addEventListener ('click', () => {
// Using a popup.
var provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({
       'display': 'popup'
   });
   firebase.auth().signInWithPopup(provider)
       .then(function (result) {
           console.log('Sesión con Google')
           var user = result.user;
           //writeUserData recibe parametros
           writeUserData(user.uid, user.displayName, user.email, user.photoURL);
       }).catch(function (error) {
           console.log(error.code);
           console.log(error.message);
           console.log(error.email);
           console.log(error.credential);
       });
})

facebookButton.addEventListener('click', () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            console.log('Sesión con Facebook')
            var user = result.user;
            //writeUserData recibe parametros
            writeUserData(user.uid, user.displayName, user.email, user.photoURL);
 
        }).catch(function (error) {
            console.log(error.code);
            console.log(error.message);
            console.log(error.email);
            console.log(error.credential);
        });
})

window.onload = () => { 
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            login.classList.remove('hiden');
            logout.classList.add('hiden');
            console.log('inicio logueado')
        } else {
            login.classList.add('hiden');
            logout.classList.remove('hiden');
            console.log('no está logueado');
        }
    });
}


btnRegister.addEventListener('click', () => {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then( () => {
            console.log('se creo el usuario');
        })
        .catch( (error) => {
            console.log(error.code, error.message);

        });
});

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

// btnRegister.addEventListener('click', registerUser)

// let hereCallJS = document.getElementById('HereCall');
// let refData = firebase.dataBase().ref().child('text');
// refData.on('value', snap => hereCallJS.innerText = snap.val());

// let clickButtom = document.getElementById('buttonLogIn');

// function registrar () {
//     console.log('funciona el click');
// }


// pruebas de enlazar FB
FB.getLoginStatus.


FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


{
    status: 'connected';
    authResponse: {
        accessToken: '...';
        expiresIn:'...';
        signedRequest:'...';
        userID:'...';
    }
}

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


