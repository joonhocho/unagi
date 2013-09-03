(function () {
	'use strict';

	var objectKeys = Object.keys;

	module.exports = {
		filterKeys: (function () {
			function has(key) {
				return key in this;
			}
			return function (obj, keys) {
				return keys ? keys.filter(has, obj) : objectKeys(obj);
			};
		})()
	};

})();
