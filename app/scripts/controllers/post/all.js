'use strict';

angular.module('motortouchApp')
	.controller('PostListCtrl', [
		'Post',
		'$scope',
		'vvvv',
		function (
			Post,
			$scope,
			vvvv
		){

			$scope.Math = window.Math;
			$scope.scrolllevel = 0;

			$scope.modelSelection = function(slug){
				vvvv.updateUrl({action:'modelselection', modelslug:slug})
			}

	}]);
