'use strict';

angular.module('motortouchApp')
	.directive('dynamic', [
		'$compile',
		function (
			$compile
		){
		  return {
		    restrict: 'A',
		    replace: true,
		    link: function (scope, ele, attrs) {
		      scope.$watch(attrs.dynamic, function(html) {
		      	/* Ugly hack: replace media paths with localhost when running on Irwin s machine */
		      	if (
		      		(window.location.hostname === 'localhost') &&
		      		(window.location.port === '') &&
			      	(html)
			      ){
			      	html = html.replace(/http:\/\/demo.mekaviz.com\/wp-content\/uploads\//g, window.location.origin + '/vk/wp-content/uploads/')
		      	}
		        ele.html(html);
		        $compile(ele.contents())(scope);
		      });
		    }
		  };
	}]);
