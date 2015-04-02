'use strict';

var contains = require( './../lib' );

var arr = [ 1, '2', NaN, null, {} ];

console.log( contains( arr, '2' ) );
// returns true

console.log( contains( arr, NaN ) );
// returns true

console.log( contains( arr, 2 ) );
// returns false
