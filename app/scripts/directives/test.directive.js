(function() {
	angular
	    .module('warehouseApp.fallbackSrc', [])
	    .directive('fallbackSrc', fallbackSrc);

	function fallbackSrc() {
		var directive = {
		    link: link
		};
		return directive;

		function link(scope, element, attrs) {
			if (sourceIsEmpty()) {
				useFallbackSource();
			} else {
				listenForSourceLoadingError();
			}

			function sourceIsEmpty() {
				var originalSource = element.attr('src');
				return originalSource? false : true;
			}

			function useFallbackSource() {
				element.attr('src', attrs.fallbackSrc);
			}

			function listenForSourceLoadingError() {
				element.bind('error', function() {
				    useFallbackSouce();
				});
			}
		}
	}
})();
