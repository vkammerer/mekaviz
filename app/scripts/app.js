'use strict';

angular.module('motortouchApp', [
	'ngSanitize',
	'ngRoute',
	'ngResource',
	'ui.bootstrap',
	'ngAnimate'
])
.config([
	'$routeProvider',
	'$httpProvider',
	function(
		$routeProvider,
		$httpProvider
	){

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl',
				reloadOnSearch: false
			})
			.when('/company', {
				templateUrl: 'views/company.html',
				controller: 'PostShowCtrl',
				reloadOnSearch: false
			})
			.when('/models', {
				templateUrl: 'views/model/all.html',
				controller: 'PostListCtrl',
				reloadOnSearch: false
			})
			.when('/models/:modelSlug', {
				templateUrl: 'views/model/show.html',
				controller: 'PostShowCtrl',
				reloadOnSearch: false
			})
			.when('/pieces/:pieceSlug', {
				templateUrl: 'views/piece/show.html',
				controller: 'PostShowCtrl',
				reloadOnSearch: false
			})
			.otherwise({
				redirectTo: '/'
			});
	}])
.run([
	'$rootScope',
	'initialisation',
	'constants',
	'Post',
	'$location',
	function(
		$rootScope,
		initialisation,
		constants,
		Post,
		$location
	){

		var theme = $location.$$search.theme;

		if (theme) {
			angular.element(document.getElementsByTagName('body')).addClass('theme-' + theme);
		}

		$rootScope.constants = constants;
		$rootScope.sidepanels = {
			left : false,
			right : false,
			menu : false
		};
		initialisation.trackHistory();

	}
]);
