(function() {
	// Set the current env.
	angular
	    .module('warehouseApp.languages', [])
	    .constant('languages', [
	        {
	            locale: 'nl',
	            human: 'Nederlands'
	        },
	        {
	            locale: 'en',
	            human: 'English'
	        }
	    ]);
})();
