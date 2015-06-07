(function() {
	angular
	    .module('locationsApp', [
	        'ngMaterial',
	        'uiGmapgoogle-maps',
	        'locationsApp.AppController'
	    ])
	    .config(configBlock)
	    .run(runBlock);

	function configBlock($mdThemingProvider, uiGmapGoogleMapApiProvider) {
		$mdThemingProvider
		    .theme('default')
		    .primaryPalette('deep-purple')
		    .accentPalette('blue-grey')
		    .warnPalette('amber')
		    .backgroundPalette('grey');

		uiGmapGoogleMapApiProvider.configure({
		    //    key: 'your api key',
		    v: '3.17',
		    libraries: 'places'
		});
	}

	function runBlock($rootScope) {

	}
})();
