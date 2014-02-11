'use strict';

angular.module('motortouchApp')
	.filter('filterByParamId', function() {
		return function(input, param, id) {
			var toReturn = [];
			var i=0, len=input.length;
			for (; i<len; i++) {
				if (input[i][param]._id === id) {
					toReturn.push(input[i]);
				}
			}
			return toReturn;
		};
	});

angular.module('motortouchApp')
	.filter('filterByParamVal', function() {
		return function(input, param, val) {
			var toReturn = [];
			var i=0, len=input.length;
			for (; i<len; i++) {
				if (input[i][param] === val) {
					toReturn.push(input[i]);
				}
			}
			return toReturn;
		};
	});

angular.module('motortouchApp')
	.filter('getById', function() {
		return function(input, id) {
			var i=0, len=input.length;
			for (; i<len; i++) {
				if (input[i]._id === id) {
					return input[i];
				}
			}
			return null;
		};
	});

angular.module('motortouchApp')
	.filter('hasWordpressCategory', function() {
		return function(input, category) {
			var toReturn = [];
			var i=0, len=input.length;
			for (; i<len; i++) {
				if (input[i]['categories'].indexOf(category) !== -1) {
					toReturn.push(input[i]);
				}
			}
			return toReturn;
		};
	});

angular.module('motortouchApp')
	.filter('hasWordpressTag', function() {
		return function(input, tag) {
			var toReturn = [];
			var i=0, len=input.length;
			for (; i<len; i++) {
				if (input[i]['tags'].indexOf(tag) !== -1) {
					toReturn.push(input[i]);
				}
			}
			return toReturn;
		};
	});

