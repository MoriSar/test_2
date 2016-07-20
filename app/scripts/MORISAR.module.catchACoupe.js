'use strict';

MORISAR.namespace('MORISAR.module.catchACoupe');

/**
 * Модуль захвата парных блоков
 * @param  {Object} blockObj  - объект блоков
 * @param  {Object} system    - функционал модуля
 * @return {Object}           - фасад модуля
 */
MORISAR.module.catchACoupe = (function () {
	let blocksObj = {checked: [], coupe: [], changePicture: false},
	system = {

		/**
		 * Захват парных блоков
		 * @param  {Object} objConfig - объект конфигурации
		 * @param  {Object} event     - объект события
		 * @param  {Object} target    - объект, вызвавший событие
		 * @return {Object}           - объект блоков
		 */
		catchACoupe: function (objConfig, event, target) {

			if (target.getAttribute('data-checked') === 'true') {
				blocksObj.changePicture = false;
				return false;
			};
			blocksObj.checked.push(target);

			if (blocksObj.checked.length === 2) {
				if (blocksObj.checked[0].getAttribute('data-id') === blocksObj.checked[1].getAttribute('data-id') && blocksObj.checked[0].getAttribute('data-clicked') !== blocksObj.checked[1].getAttribute('data-clicked')) {
					for (let i = 0; i < blocksObj.checked.length; i++) {
						blocksObj.checked[i].setAttribute('data-checked', true);
						blocksObj.checked[i].classList.add('item-checked');
						blocksObj.coupe.push(blocksObj.checked[i]);
					}
					blocksObj.changePicture = true;
				};

				for (let i = 0; i < blocksObj.checked.length; i++) {
					blocksObj.checked[i].setAttribute('data-clicked' , false);
				}
				blocksObj.changePicture = false;
				blocksObj.checked = [];
			};

			if (blocksObj.checked.length) {
				if (target.getAttribute('data-clicked') === 'true') {
					target.setAttribute('data-clicked', false);
					blocksObj.changePicture = false;
				} else {
					target.setAttribute('data-clicked', true);
					blocksObj.changePicture = true;
				}
			}
			return blocksObj;

		}
	};

	return {
		cacM__catch: system.catchACoupe
	}

})();
