'use strict';

MORISAR.namespace('MORISAR.module.ajax');

MORISAR.module.ajax = (function () {

	let response,
	system = {
		sendRequest: function (type, url, sync, data = null, callback) {
			let xhr = new XMLHttpRequest();
			xhr.open(type, url, sync);
			xhr.onreadystatechange = function() { 
				if(xhr.readyState == 4 && xhr.status == 200){
					response = JSON.parse(xhr.responseText);
					callback(response);
				}
			}
			xhr.send(data);
			return xhr;
		}
	};

	return {
		aM__sendRequest: system.sendRequest
	}


})();
