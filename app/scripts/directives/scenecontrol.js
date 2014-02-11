'use strict';

angular.module('motortouchApp')
	.directive('scenecontrol', [
		'$rootScope',
		'vvvv',
		function (
			$rootScope,
			vvvv
		){
		  return {
		    restrict: 'E',
		    replace: true,
				templateUrl: 'views/scenecontrol.html',
		    link: function (scope, ele, attrs) {
		    	scope.compress = function(){
		    		vvvv.emit({action:'compress'})
		    	}
		    	scope.expand = function(){
		    		vvvv.emit({action:'expand'})
		    	}
		    }
		  };
	}]);
