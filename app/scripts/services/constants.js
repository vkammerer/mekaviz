'use strict';

angular.module('motortouchApp')
	.factory('constants', function () {

		var toReturn = {};

		toReturn.API_URL = 'http://public-api.wordpress.com/rest/v1/sites/vzix.wordpress.com';
//		toReturn.API_URL = 'http://vzix.vincent-kammerer.com/wp_api/v1';

		return toReturn;

	});
