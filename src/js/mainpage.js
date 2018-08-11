const logOutButton = document.getElementById('btnLogout');
const userName = document.getElementById('user-name');
const newPost = document.getElementById('new-post');
const inputPost = document.getElementById('post');
const buttonToPublic = document.getElementById('bttn-new-post');
const privacyOptions = document.getElementById('privacy-options');

buttonToPublic.addEventListener('click', () => {
  let currentUser = {};
  window.onload = () => {
    verificateUserAuth();
  };
  const newPostOfUser = newUserPost(userId, post.value);
  // const printPost = document.createElement('p').innerHTML(`${post.value}`);
  let toEdit = document.createElement('button');
  toEdit.createElement('type', 'input');
  toEdit.setAttribute('value', 'Update');
  let toDelete = document.createElement('button');
  toDelete.setAttribute('value', 'Delete');
  let containerPost = document.createElement('div');
  let posts = document.getElementById('post-container');
  let printPost = document.createElement('p');
  posts.appendChild(printPost);
  printPost.setAttribute('id', newPostOfUser);
  printPost.innerHTML(`${post.value}`);
});

//LogOut button 
logOutButton.addEventListener('click', () => {
  firebase.auth().signOut()
    .then(() => {
      window.location.assign('../index.html');
    }).catch((error) => {
      console.log('error al cerrar sesión');
    });
});




