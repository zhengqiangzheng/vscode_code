require('./datatype');
require('./enum');
require('./interface');
require('./es6/c');
import $ from 'jquery';
import moment from 'moment';
let hello: string = 'hello typescript';
document.querySelectorAll('.app')[0].innerHTML = 'hello';

$('.app').css('color', 'red');
let version = globalLib.version;
declare module 'moment' {
  export function myFunction(): void;
}
moment.myFunction = () => {};
declare global {
  namespace globalLib {
    function doAnything(): void;
  }
}
globalLib.doAnything = () => {};
