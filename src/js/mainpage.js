// const logOutButton = document.getElementById('btnLogout');
// const username = document.getElementById('user-name');
// const newPost = document.getElementById('new-post');
// const inputPost = document.getElementById('post');
// const buttonToPublic = document.getElementById('bttn-new-post');
// const privacyOptions = document.getElementById('privacy-options');
const logOutButton = document.getElementById('btnLogout');
const userName = document.getElementById('user-name');
const bd = document.getElementById('new-post2');
const post = document.getElementById('post2'); //textarea del post principal
const btnSave = document.getElementById('bttn-new-post2');
const posts = document.getElementById('posts2');
const postNew = document.getElementById('createP'); 

function writeNewPost(uid, body) {

  // A post entry.
  let postData = {
    // author: username,
    uid: uid,
    body: body,
    // title: title,
    // starCount: 0,
    // authorPic: picture
  };

  //obtiene una clave para un nuevo post
  let newPostKey = firebase.database().ref().child('posts2').push().key;

  // Escribe los datos de los nuevos post's simultaneamente en la lista de post y la lista de user's post
  let updates = {};

  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  firebase.database().ref().update(updates);
  return newPostKey;
}

btnSave.addEventListener('click', () => {
  // verifico qué usuario se ha logueado
  let userId = firebase.auth().currentUser.uid;

  // escribo los post en la base de datos
  console.log(post.value)
  const newPost = writeNewPost(userId, post.value);

  // postNew.innerHTML=`
  // <textarea name="" id="${post}" >${post.body}</textarea>
  // <button onclick="eliminar()"></button>
  // <button onclick="editar()"></button>
  // `

  // //creo el boton de actualizar
  var btnUpdate = document.createElement("input");
  btnUpdate.setAttribute("value", "Update");
  btnUpdate.setAttribute("type", "button");

  //creo el boton de eliminar
  var btnDelete = document.createElement("input");
  btnDelete.setAttribute("value", "Delete");
  btnDelete.setAttribute("type", "button");

  var contPost = document.createElement('div');

  // creo el textarea donde se publican los nuevos post
  var textPost = document.createElement('textarea')
  textPost.setAttribute("id", newPost);
console.log(newPost);

  // le añado el valor del post
  textPost.innerHTML = newPost;

  // le doy funcionalidad al botón 'eliminar'
  btnDelete.addEventListener('click', () => {
    // ubico el post que voy a eliminar (Base de datos)
    firebase.database().ref().child('/user-posts/' + userId + '/' + newPost).remove();
    firebase.database().ref().child('posts/' + newPost).remove();

    //falta crear una función que elimine post a post porque actualmente 
    // está eliminando todos los posts (DOM)
    while (posts.firstChild) post.removeChild(posts.firstChild);

    // Para no recargar la pagina
    window.location.reload();
  });
  // boton editar
  btnUpdate.addEventListener('click', () => {
    const newUpdate = document.getElementById(newPost);

    const nuevoPost = {
      body: newUpdate.value,
    };

    var updatesUser = {};
    var updatesPost = {};

    updatesUser['/user-posts/' + userId + '/' + newPost] = nuevoPost;
    updatesPost['/posts/' + newPost ] = nuevoPost;

    firebase.database().ref().update(updatesUser);
    firebase.database().ref().update(updatesPost);
    
  });

  contPost.appendChild(textPost);
  contPost.appendChild(btnUpdate );
  contPost.appendChild(btnDelete);
  posts.appendChild(contPost);

})


// LogOut button 
logOutButton.addEventListener('click', () => {
  firebase.auth().signOut()
    .then(() => {
      window.location.assign('../index.html');
    }).catch((error) => {
      // console.log('error al cerrar sesión');
    });
});



// // Get a reference to the database service
// var database = firebase.database();

// function writeNewPost(uid, username, title, body) {
//   // A post entry.
//   var postData = {
//     author: username,
//     uid: uid,
//     body: body,
//     title: title,
//     starCount: 0,
//   };

//   // Get a key for a new Post.
//   var newPostKey = firebase.database().ref().child('posts').push().key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   var updates = {};
//   updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//   return firebase.database().ref().update(updates);
// }

// //Recuento de likes o star
// var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// starCountRef.on('value', function(snapshot) {
//   updateStarCount(postElement, snapshot.val());
// });
