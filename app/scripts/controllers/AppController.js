(function() {
	angular.module('locationsApp.AppController', [])
	    .controller('AppController', AppController)
	    .controller('DialogController', DialogController);

	function AppController ($scope, $mdSidenav, $mdDialog) {
		$scope.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};

		$scope.isOpen = false;
		$scope.map = {
		    center: {
		        latitude: 50.8333,
		        longitude: 4
		    },
		    zoom: 8,
		    options: {
		        disableDefaultUI: true,
		        disableDoubleClickZoom: true,
		        draggable: false,
		        keyboardShortcuts: false,
		        scrollwheel: false,
		        styles: [
		            {
		                featureType: 'road',
		                elementType: 'geometry',
		                stylers: [
		                    {lightness: 60},
		                    {visibility: 'simplified'}
		                ]
		            },
		            {
		                featureType: 'road',
		                elementType: 'labels',
		                stylers: [
		                    {visibility: 'off'}
		                ]
		            }
		        ]
		    },
		};

		$scope.showAdvanced = function(ev) {
			$mdDialog.show({
			    controller: DialogController,
			    templateUrl: 'templates/dialog.html',
			    targetEvent: ev,
			})
			.then(function(answer) {
			    $scope.alert = 'You said the information was "' + answer + '".';
			}, function() {
			    $scope.alert = 'You cancelled the dialog.';
			});
		};
	}

	function DialogController($scope, $mdDialog) {
		$scope.hide = function() {
			$mdDialog.hide();
		};
		$scope.cancel = function() {
			$mdDialog.cancel();
		};
		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}
})();
