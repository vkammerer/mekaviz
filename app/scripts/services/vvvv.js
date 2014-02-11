'use strict';

angular.module('motortouchApp')
	.service('vvvv', [
		'$rootScope',
		'$window',
		'$location',
		'$timeout',
		function (
			$rootScope,
			$window,
			$location,
			$timeout
		){


			$window.VVVV = { evenements: [] } || $window.VVVV;
			var vvvvcommunicationnode = document.getElementById("description");

			var emit = function(evenement){

				$window.VVVV.evenements.push(evenement);
				vvvvcommunicationnode.setAttribute("content", JSON.stringify(evenement).replace(/\"/g,"'"))

/*
				for (var key in param) {
					$rootScope.scenecontrolButtonClicked = true;
					$location.search(key, param[key]);
					$location.replace();
					$timeout(function(){
						$location.search('');
						$location.replace();
						$rootScope.scenecontrolButtonClicked = false;
					},500)
				}
*/
			}

			return {
				emit: emit
			};

	}]);
