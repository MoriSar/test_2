'use strict';

MORISAR.namespace('MORISAR.module.controllPanel');

/**
 * Модуль контроля процесса игры
 * @param  {Object} system    - функционал модуля
 * @return {Object}           - фасад модуля
 */
MORISAR.module.controllPanel = (function () {

	let system = {

		/**
		 * Старт контроля
		 * @param  {Array}  blocks    - массив блоков
		 * @param  {Object} leftCoupe - html объект
		 */
		startControll: function (blocks, leftCoupe) {

			let coupe = [];

			for (var i = 0; i < blocks.length; i++) {
				if (blocks[i].getAttribute('data-checked') === 'false') {
					coupe.push(blocks[i]);
				}
			};
			leftCoupe.innerHTML = coupe.length / 2;

			if (!coupe.length) {
				if (confirm('Игра пройдена! Перейти на следующий уровень?')) {
					location.reload();
				}

			}
		},

		/**
		 * Метод проверки уровня сложности игры
		 * @param  {Object} blocks - массив блоков
		 */
		checkLevel: function (blocks) {
			
			if (blocks.length > 20 && blocks.length < 40) {
				alert('Повышеный уровень сложности! Пары удвоены!');

			} else if (blocks.length > 40 && blocks.length < 60) {
				alert('Высокий уровень сложности! Пары утроены!');
			};
		}

	};

	return {

		cpM__startControll: system.startControll,
		cpM__checkLevel: system.checkLevel

	}
	
})();
