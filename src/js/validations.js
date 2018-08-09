window.registerEmail = (email) => {
    // Una expresión regular es un objeto que describe un patrón de caracteres.
    let regExpRegisterEmail = /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/
    const result;
    if (regExpRegisterEmail.test(emai)) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

window.registerPassword = (password) => {

    let regExpRegisterPassword = /^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#\$%\^&\*\?_~\/]{4,20}$/
    const result;
    if (regExpRegisterPassword.test(password)) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

window.loginEmail = (email) => {

    let regExpLoginEmail = /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/
    const result;
    if (regExpLoginEmail.test(email)) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

window.loginPassword = (password) => {

    let regExpLoginPassword = /^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#\$%\^&\*\?_~\/]{4,20}$/
    const result;
    if (regExpLoginPassword.test(password)) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

// window.registerEmail = (emailSignUp) => {
//     // Una expresión regular es un objeto que describe un patrón de caracteres.
//     let regExpRegisterEmail = /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/
//     const result;
//     if (regExpRegisterEmail.test(emailSignUp)) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// };

// window.registerPassword = (passwordSignUp) => {

//     let regExpRegisterPassword = /^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#\$%\^&\*\?_~\/]{4,20}$/
//     const result;
//     if (regExpRegisterPassword.test(passwordSignUp)) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// };

// window.loginEmail = (emailSignIn) => {

//     let regExpLoginEmail = /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/
//     const result;
//     if (regExpLoginEmail.test(emailSignIn)) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// };

// window.loginPassword = (passwordSignIn) => {

//     let regExpLoginPassword = /^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#\$%\^&\*\?_~\/]{4,20}$/
//     const result;
//     if (regExpLoginPassword.test(passwordSignIn)) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// };