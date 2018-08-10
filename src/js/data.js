//Creating a function to show the users in fireBase
window.writeUserData = (userId, name, email, imageURL) => {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageURL,
    });
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
};

window.newUserPost = (uid, username, picture, body) => {
    let dataOfPosts = {
        author: username,
        uid: uid,
        body: body,
        authorPic: picture
    };

    let keyOfPost = firebase.database().ref().child('posts').push().key;

    let updates = {};
    updates['/posts/' + keyOfPost] = newUserPost;
    updates['/user-posts/' + uid + '/' + keyOfPost] = newUserPost;

    firebase.database().ref().update(updates);
    return keyOfPost;

};

// let toDeletePost = firebase.database().ref().child('/user-posts/' + userId + '/' + newPostOfUser).remove

// let userId = firebase.auth().currentUser.uid;

