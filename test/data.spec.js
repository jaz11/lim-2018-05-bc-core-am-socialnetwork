describe('registerEmail', () => {
 
  //Validando correo con caracteres mayúsculas y minúsculas
  it( 'debería retornar true para kellyROSALES@gmail.com', () => {
    assert.equal(window.registerEmail('kellyROSALES@gmail.com'), true); 
  });
  //Validando correo con digitos del 0-9
  it( 'debería retornar true para kelly123@gmail', () => {
    assert.equal(window.registerEmail('kelly123@gmail'), true); 
  });
  //validando que el dominio 
  it( 'debería retornar true para ', () => {
    assert.equal(window.registerEmail(''), true); 
  });

});


// Validar un email:
// Acepto un rango de caracteres de "A-Z" en mayúsculas y minúsculas,
// rango de digitos del "0-9, y caracteres permitidos en las direcciones de correo. 
// Todo esto en un mínimo de 2 y no especifico el máximo "{2,}". Seguido por un "@", y
// seguido por el mismo patron de concordancia, para el nombre del dominio.
// Todo esto seguido por un "."(punto). Terminado por rango de caracteres de "A-Z" en mayúsculas y minúsculas, 
// mínimo de 2 y máximo 4 "{2,4}"

describe('registerPassword', () =>{

});

describe('loginEmail', () =>{

});

describe('loginPassword', () =>{

});

// Validar un password:
// Acepto un rango "-" de caracteres de la "a" a la "z" en mayúsculas "A-Z" y minúsculas "a-z" y con sus acentos.
//  También incluye rango de digitos del "0-9", y caracteres especiales "!@#\$%\^&\*\?_~\/".
//   Los caracteres especiales siempre escapados por "\".


// Validar un email:
// Acepto un rango de caracteres de "A-Z" en mayúsculas y minúsculas,
// rango de digitos del "0-9, y caracteres permitidos en las direcciones de correo. 
// Todo esto en un mínimo de 2 y no especifico el máximo "{2,}". Seguido por un "@", y
// seguido por el mismo patron de concordancia, para el nombre del dominio.
// Todo esto seguido por un "."(punto). Terminado por rango de caracteres de "A-Z" en mayúsculas y minúsculas, 
// mínimo de 2 y máximo 4 "{2,4}"


// describe ('función para loguearse', () => {
// it('input donde el usuario se loguea debería reconocer un correo válido');
// it('input donde el usuario ingresa su contraseña debería hacer un click por cada caracter ingresado');
// it('el usuario debería poder visualizar los términos y condiciones en un pop up');
// it('al hacer click en ingresar, el usuario debería de poder visualizar una pantalla con contenido de sus preferencias');
// it('al hacer click en registrarse, el usuario debería poder ver el listado de los antojos frecuentes');
// });
