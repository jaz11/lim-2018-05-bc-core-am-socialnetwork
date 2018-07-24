const btnLogout = document.getElementById("btnLogout");
const btnSignin = document.getElementById("btnSignin");
const register = document.getElementById("register");
const email = document.getElementById("email");
const password = document.getElementById("password");


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

// let hereCallJS = document.getElementById('HereCall');
// let refData = firebase.dataBase().ref().child('text');
// refData.on('value', snap => hereCallJS.innerText = snap.val());

// let clickButtom = document.getElementById('buttonLogIn');

// function registrar () {
//     console.log('funciona el click');
// }