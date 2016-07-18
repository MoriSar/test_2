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
		incaps: function (module) {
			for (let key in module) {
				this[key] = module[key];
			};
		}
	}
}());
