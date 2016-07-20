'use strict';

MORISAR.namespace('MORISAR.module.timer');

/**
 * Модуль инициализации таймера
 * @param  {Number} timerId   - id таймера
 * @param  {Object} system    - функционал модуля
 * @return {Object}           - фасад модуля
 */
MORISAR.module.timer = (function () {
	let timerId,
	system = {

		/**
		 * Метод начала отсчета
		 * @param  {Object} timer - DOM элемент таймера
		 */
		startTime: function (timer) {
			if (timerId) clearInterval(timerId);
			let secs = 0;
			timer.innerHTML = `${secs} сек.`;
			timerId = setInterval(function () {
				secs++;
				timer.innerHTML = `${secs} сек.`;
			}, 1000);
		}

	};

	return {

		tM__startTime: system.startTime,
		tM__timer: function () {
			return timerId;
		}

	}

})();
