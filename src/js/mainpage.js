const logOutButton = document.getElementById('btnLogout');
// const userName = document.getElementById('user-name');
// const bd = document.getElementById('db');
// const btnSave = document.getElementById('btn-saven');
// const post = document.getElementById('post');
// const posts = document.getElementById('posts');
// const privacySelect = document.getElementById('privacy-option');

// privacySelect.
// const forPrivacy = () => {

// }

//LogOut button 
logOutButton.addEventListener('click', () => {
  firebase.auth().signOut()
    .then(() => {
      window.location.assign('../index.html');
    }).catch(() => {
      // console.log('error al cerrar sesión')
    });
});

