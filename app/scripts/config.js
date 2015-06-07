(function() {
	angular
	    .module('warehouseApp.config', [])
	    .provider('config', configProvider);

	function configProvider() {
		var config = {},
		    configByEnv;

		configByEnv = {
		    dev: {
		        apiPath: 'http://10.20.1.1/codedor/dmdepot/dmd001/local/jyrki/www/public_html/warehouse/',
		        cookie: { // Cookie path & domain
		            path: '/codedor/dmdepot/',
		            domain: window.location.host
		        },
		        html5Mode: true, // Hide # in the url
		    },
		    preview: {
		        apiPath: 'http://dmd001.preview.codedor.be/warehouse/',
		        cookie: {
		            path: '/',
		            domain: '.dmd001.preview.codedor.be'
		        },
		        html5Mode: true
		    },
		    live: {
		        apiPath: 'https://www.dmdepot.be/warehouse/',
		        cookie: {
		            path: '/',
		            domain: '.dmdepot.be'
		        },
		        html5Mode: true
		    }
		};

		return {
			setConfig: setConfig,
			$get: get
		};

		function setConfig(env) {
			config = configByEnv[env];
			angular.extend(config, {env: env});
		}

		function get() {
			return config;
		}
	}
})();
