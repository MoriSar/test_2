'use strict';

MORISAR.namespace('MORISAR.module.ajax');

/**
 * Модуль инициализации AJAX запроса
 * @param  {Object} response - ответ сервера
 * @param  {Object} system   - функционал фасада
 * @return {Object}          - фасад модуля
 */
MORISAR.module.ajax = (function () {

	let response,
	system = {

		/**
		 * Метод отправки запроса
		 * @param  {String}   type     - тип запроса
		 * @param  {String}   url      - url адрес запроса
		 * @param  {Boolean}  sync     - характер запроса (синхронный или асинхронный)
		 * @param  {Object}   data     - данные, передаваемый серверу
		 * @param  {Function} callback - callback функция
		 * @return {Object}            - объект XMLHttpRequest
		 */
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
