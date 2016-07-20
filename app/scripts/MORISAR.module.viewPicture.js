'use strict';

MORISAR.namespace('MORISAR.module.viewPicture');

/**
 * Модуль отображения парных картинок
 * @param  {Object} system    - функционал модуля
 * @return {Object}           - фасад модуля
 */
MORISAR.module.viewPicture = (function () {
	
	let system = {

		/**
		 * Метод отображения парных картинок
		 * @param  {Object} objConfig - объект конфигурации
		 * @param  {Array}  blocks    - массив блоков
		 * @param  {Object} blocksObj - объект блоков
		 * @param  {Object} target    - элемент DOM, вызвавший событие
		 */
		viewPicture: function (objConfig, blocks, blocksObj, target) {

			target.style.backgroundImage = '';

			if (!blocksObj.changePicture) {
				setTimeout(function () {
					if (!blocksObj.checked.length) {
						for (var i = 0; i < blocks.length; i++) {
							if (blocks[i].getAttribute('data-checked') === 'false') {
								blocks[i].style.backgroundImage = 'url(images/vopros.png)';
							}
						}
					}
				}, objConfig.timer_2);
			};
			
			for (var i = 0; i < blocksObj.coupe.length; i++) {
				blocksObj.coupe[i].style.backgroundImage = '';
			};
		}
	};

	return {
		vpM__viewPicture: system.viewPicture
	}

})();
