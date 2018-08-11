global.window = global;
global.assert = require('chai').assert;
// require('../src/data');
//require importa archivos, devuelve un valor dependiendo de lo que expone el módulo
require('../src/js/validations.js')
require('./validation.spec.js');
