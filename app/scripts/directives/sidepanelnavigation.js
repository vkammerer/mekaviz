'use strict';

angular.module('motortouchApp')
	.directive('sidepanelnavigation', [
		'$rootScope',
		'$window',
		function (
			$rootScope,
			$window
		){
		  return {
		    restrict: 'E',
		    replace: true,
				templateUrl: 'views/sidepanelnavigation.html',
		    link: function (scope, ele, attrs) {
		    	scope.goBack = function(){
						$rootScope.historyIndex = $rootScope.historyIndex - 1;
						$rootScope.historyButtonClicked = true;
			    	$window.history.back();
		    	}
		    	scope.goForward = function(){
						$rootScope.historyIndex = $rootScope.historyIndex + 1;
						$rootScope.historyButtonClicked = true;
			    	$window.history.forward();
		    	}
		    }
		  };
	}]);
