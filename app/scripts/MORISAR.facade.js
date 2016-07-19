'use strict';

MORISAR.namespace('MORISAR.facade');

/**
 * Фасад приложения
 * @return {[type]}    
 */
 MORISAR.facade = (function () {
 	return {
		/**
		 * Инкапсуляция модулей в фасаде
		 * @param  {Object} module - подключаемый модуль
		 */
		 f__incaps: function (module) {
		 	for (let key in module) {
		 		this[key] = module[key];
		 	};
		 },

		 interface__setUpField: function (objConfig) {
		 	let _this = this;
		 	this.aM__sendRequest(objConfig.request.type, objConfig.request.url, objConfig.request.async, objConfig.request.data, function (response) {

		 		_this.sufM__setUpField(response, _this.dqeM__getClass('cssload-loader')[0], _this.dqeM__getClass('b-content')[0], _this.dqeM__getClass('b-content__images')[0]);
		 	});
		 }
		}
	})();

	MORISAR.facade.f__incaps(MORISAR.module.DOMQuery_Events);
	MORISAR.facade.f__incaps(MORISAR.module.ajax);
	MORISAR.facade.f__incaps(MORISAR.module.setUpField);


	console.info(MORISAR.facade);