//Creating a function to show the users in fireBase

window.writeUserData = (userId, name, email, imageURL, cb) => {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageURL,
    }).then(()=> cb())
}

window.signUp = (email, password, cb) => {
    firebase.auth().createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        })
}

window.signIn = (email, password, cb) => {
    firebase.auth().signInWithEmailAndPassword(emailSignIn.value, passwordSignIn.value)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        });
}

window.signInGoogle = (provider, cb) => {
    provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        })
};

window.signInFacebook = (provider, cb) => {
    provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        })
<<<<<<< HEAD
};
=======
};

// window.newUserPost = (uid, displayName, photoURL, mensaje, isPublic, likes) => {
//     let dataOfPosts = {
//         uid: uid,
//         displayName: displayName,
//         photoURL: photoURL,
//         mensaje: mensaje,
//         isPublic: isPublic,
//         likes: 0
//     };
//     let newPostKey = firebase.database().ref().child('posts').push().key;
//     let updates = {};
//     updates['/posts/' + newPostKey] = dataOfPosts;
//     updates['/user-posts/' + uid + '/' + newPostKey] = dataOfPosts;
//     firebase.database().ref().update(updates);
// }


// let toDeletePost = firebase.database().ref().child('/user-posts/' + userId + '/' + newPostOfUser).remove

// let userId = firebase.auth().currentUser.uid;

// window.onload=()=>{
//     myDatabase = window.localStorage;
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         // User is signed in.
//         userName.innerHTML = `Bienvenida ${user.displayName}`
//         writeUserData(user.uid, user.displayName, user.email, user.photoURL)
//       } else {
//         // No user is signed in.
//       }
//     });
>>>>>>> 20f7144d1eac2fe2dae64023676eea2f130119d1
