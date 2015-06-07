(function() {
	angular
	    .module('warehouseApp.VersionService', ['ngResource'])
	    .factory('Version', Version);

	// Get all warehouse users
	function Version($http) {
		var promise, versionService;

		versionService = {
		    async: async
		};

		return versionService;

		function async() {
			if (!promise) {
				// $http returns a promise, which has a then function, which also returns a promise
				promise = $http.get('VERSION.txt').then(function (response) {
				    // The return value gets picked up by the then in the controller.
				    return response.data;
				});
			}
			// Return the promise to the controller
			return promise;
		}
	}
})();
