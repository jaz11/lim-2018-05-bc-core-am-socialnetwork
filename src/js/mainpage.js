const logOutButton = document.getElementById('btnLogout');
const userName = document.getElementById('user-name');
const newPost = document.getElementById('new-post');
const inputPost = document.getElementById('post');
const buttonToPublic = document.getElementById('bttn-new-post');
const privacyOptions = document.getElementById('privacy-options');

//LogOut button 
logOutButton.addEventListener('click', () => {
  firebase.auth().signOut()
    .then(() => {
      window.location.assign('../index.html');
    }).catch((error) => {
      console.log('error al cerrar sesión');
    });
});

