'use strict';

MORISAR.namespace('MORISAR.module.startStop');

/**
 * Модуль инициализации флага запуска\остановки приложения
 * @param  {Object} system    - функционал модуля
 * @return {Object}           - фасад модуля
 */
MORISAR.module.startStop = (function () {
	
	let system = {
		status: false,

		/**
		 * Запуск
		 * @return {Boolean} - статус
		 */
		start: function () {
			this.status = true;
			return this.status;
		},

		/**
		 * Остановка
		 * @return {boolean} - статус
		 */
		stop: function () {
			this.status = false;
			return this.status;
		}
	};

	return {
		ssM__start: system.start,
		ssM__stop: system.stop
	}

})()