'use strict';

angular.module('motortouchApp')
	.directive('pre', [
		function (
		){
			return {
				restrict: 'E',
				link: function(scope, element, attrs) {
					if (element.hasClass('transclude')) {
						element.replaceWith(element[0].innerText)
					}
				}
			};
	}]);
