const logOutButton = document.getElementById('btnLogout');
// const userName = document.getElementById('user-name');
// const bd = document.getElementById('db');
// const btnSave = document.getElementById('btn-saven');
// const post = document.getElementById('post');
// const posts = document.getElementById('posts');
// const privacySelect = document.getElementById('privacy-option');

const userName = document.getElementById('user-name');
const newPost = document.getElementById('new-post');
const inputPost = document.getElementById('post');
const buttonToPublic = document.getElementById('bttn-new-post');
const privacyOptions = document.getElementById('privacy-options');

// privacySelect.
// const forPrivacy = () => {

// }

//LogOut button 
logOutButton.addEventListener('click', () => {
  firebase.auth().signOut()
    .then(() => {
      window.location.assign('../index.html');
    }).catch((error) => {
      console.log('error al cerrar sesión');
    });
});


// 

// Get a reference to the database service
var database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     bd.classList.remove('hiden');
//     posts.classList.remove('hiden');
//     userName.innerHTML=`Bienvenida ${user.display}`
//   } else {
//     bd.classList.add('hiden');
//     post.classList.add('hiden')
//   }
// });



// firebase.initializeApp({
//   apiKey: "AIzaSyC1K9LkUQyl4cVah4hXkQ6CINmg9Zd_kZI",
//   authDomain: "warique-88140.firebaseapp.com",
//   projectId: "warique-88140",
// });

// window.onload = () => {
//   firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//           login.classList.remove('hiden');
//           logout.classList.add('hiden');
//           // console.log('inicio logueado')
//       } else {
//           login.classList.add('hiden');
//           logout.classList.remove('hiden');
//           // console.log('no está logueado');
//       }
//   });
// }

// // Initialize Cloud Firestore through Firebase
// const cloudFire = firebase.firestore();

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
// //agregar documentos
// const saveData = () => {
//   let name = document.getElementById('nombre').value
//   let lastName = document.getElementById('apellido').value
//   let born = document.getElementById('nacimiento').value
//   cloudFire.collection("users").add({
//     first: name,
//     last: lastName,
//     born: born
//   })
//     .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//       document.getElementById('nombre').value = '';
//       document.getElementById('apellido').value = '';
//       document.getElementById('nacimiento').value = '';
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
// };

// //Leer documentos
// let table = document.getElementById('table');
// cloudFire.collection("users").onSnapshot((querySnapshot) => {
//   table.innerHTML = '';
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data().first}`);
//     table.innerHTML += `
//         <tr>
//         <th scope="row">${doc.id}</th>
//         <td>${doc.data().first}</td>
//         <td>${doc.data().last}</td>
//         <td>${doc.data().born}</td>
//         <td><button class='btn btn-danger' onclick='removePost("${doc.id}")'>Eliminar</button></td>
//         <td><button class='btn btn-warning'>Editar</></td>
//         </tr>
//         `

//   });
// });

// //borrar 
// const removePost = (id) => {
//   cloudFire.collection("users").doc(id).delete()
//   .then(() => {
//     console.log("Document successfully deleted!");
//   })
//   .catch((error) => {
//     console.error("Error removing document: ", error);
//   });
// };

// cargar el muro 
var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
});

//Hacer una nueva publicación
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

// recuento
var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});

//editar una publicacion
function editPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);

}

//Cómo agregar una devolución de llamada de finalización
firebase.database().ref('users/' + userId).set({
  username: name,
  email: email,
  profile_picture : imageUrl
}, function(error) {
  if (error) {
    // The write failed...
  } else {
    // Data saved successfully!
  }
});

//eliminar
function toggleStar(postRef, uid) {
  postRef.transaction(function(post) {
    if (post) {
      if (post.stars && post.stars[uid]) {
        post.starCount--;
        post.stars[uid] = null;
      } else {
        post.starCount++;
        if (!post.stars) {
          post.stars = {};
        }
        post.stars[uid] = true;
      }
    }
    return post;
  });
}



