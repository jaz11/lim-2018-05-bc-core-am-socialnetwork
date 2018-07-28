let boton = document.getElementById('boton')
boton = addEventListener('click', guardar)



firebase.initializeApp({
    apiKey: "AIzaSyC1K9LkUQyl4cVah4hXkQ6CINmg9Zd_kZI",
    authDomain: "warique-88140.firebaseapp.com",
    projectId: "warique-88140",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

//agregar documentos
function guardar() {
    let name = document.getElementById('nombre').value
    let firstName = document.getElementById('apellido').value
    let born = document.getElementById('nacimiento').value
    db.collection("users").add({
        first: name,
        last: firstName,
        born: born
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('nacimiento').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

//Leer documentos
let tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().first}</td>
        <td>${doc.data().last}</td>
        <td>${doc.data().born}</td>
        <td><button class='btn btn-danger' onclick='eliminar("${doc.id}")'>Eliminar</button></td>
        <td><button class='btn btn-warning'>Editar</></td>
        </tr>
        `
       
    });
});

//borrar 
function eliminar(id){
    db.collection("users").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}
