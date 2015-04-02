/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	contains = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-contains', function tests() {

	it( 'should export a function', function test() {
		expect( contains ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				contains( value, '' );
			};
		}
	});

	it( 'should return false if provided an empty array', function test() {
		assert.isFalse( contains( [] ) );
	});

	it( 'should positively validate', function test() {
		var arr, obj, date, values;

		function foo(){}
		arr = [];
		obj = {};
		date = new Date();
		values = [
			1,
			'2',
			null,
			undefined,
			false,
			NaN,
			arr,
			obj,
			foo
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( contains( values, values[ i ] ) );
		}
	});

	it( 'should negatively validate', function test() {
		var arr, values;

		arr = [ 1, '2', 3 ];
		values = [
			5,
			'a',
			null,
			undefined,
			true,
			{},
			[],
			function(){},
			NaN
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( contains( arr, values[ i ] ) );
		}
	});

});
