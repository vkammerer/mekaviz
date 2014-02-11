'use strict';

angular.module('motortouchApp')
	.controller('PostShowCtrl', [
		'$rootScope',
		'$scope',
		'$filter',
		'$routeParams',
		'Post',
		function (
			$rootScope,
			$scope,
			$filter,
			$routeParams,
			Post
		){

			var modelSlug = $routeParams.modelSlug || "";
			var pieceSlug = $routeParams.pieceSlug || "";

			Post.then(function(){
				if (modelSlug) {
					$scope.model = $filter('filterByParamVal')($rootScope.models, 'slug' , modelSlug)[0];
					$scope.modelpieces = $filter('hasWordpressTag')($rootScope.pieces, $scope.model.slug);
				}
				else if (pieceSlug) {
					$scope.piece = $filter('filterByParamVal')($rootScope.pieces, 'slug' , pieceSlug)[0];
					$scope.model = $filter('filterByParamVal')($rootScope.models, 'slug' , $scope.piece.tags[0])[0];
					$scope.modelpieces = $filter('hasWordpressTag')($rootScope.pieces, $scope.model.slug);
				}
			})

	}]);
