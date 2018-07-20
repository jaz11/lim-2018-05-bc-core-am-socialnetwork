<<<<<<< HEAD
const=[love:Dkom&&Jass,luck:1195]
=======
var hereCallJS = document.getElementById('HereCall');
var refData = firebase.dataBase().ref().child('text');
refData.on('value', snap => hereCallJS.innerText = snap.val());


// {
//     status: 'connected';
//     authResponse: {
//         accessToken: '...';
//         expiresIn:'...';
//         signedRequest:'...';
//         userID:'...'
//     }
// };
>>>>>>> 6f74e10df1b88d39a4294edfc155ac84c70ff7d7
