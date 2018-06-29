const assert = require('assert');
const accout = require('./account');

let someUser = new accout.Account(1,"sada","S A",3400,true);
let array = someUser.getAllInfo();
let types_array = ['number', 'string','string','number','boolean'];

it("Array typeof is correct", () => {
    for(var i = 0; i < array.length; i++){
        assert.equal(typeof(array[i]), types_array[i]);
    }
    
});