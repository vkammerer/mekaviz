'use strict';

angular.module('motortouchApp')
	.service('initialisation', [
		'$rootScope',
		'$location',
		'vvvv',
		function (
			$rootScope,
			$location,
			vvvv
		){
			var trackHistory = function(){
				$rootScope.history = [];
				$rootScope.historyIndex = 0;
				$rootScope.historyButtonClicked = false;
				$rootScope.scenecontrolButtonClicked = false;

				$rootScope.$on('$routeChangeStart', function() {
					vvvv.emit({url:$location.$$path})
				})
				$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
//					vvvv.emit({url:$location.$$path})
					if (
						!$rootScope.historyButtonClicked &&
						!$rootScope.scenecontrolButtonClicked
						) {
						$rootScope.history.splice($rootScope.historyIndex);
						$rootScope.history.push($location.$$path)
						$rootScope.historyIndex = $rootScope.history.length;
					}
					$rootScope.historyButtonClicked = false;
				});
			}

			return {
				trackHistory: trackHistory
			};

	}]);
