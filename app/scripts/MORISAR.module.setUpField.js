'use strict';

MORISAR.namespace('MORISAR.module.setUpField');

/**
 * Модуль инициализации игрового поля (блоков)
 * @param  {Array}  blocks    - массив блоков
 * @param  {Object} accessory - вспомагательный функционал модуля
 * @param  {Object} system    - функционал модуля
 * @return {Object}           - фасад модуля
 */
MORISAR.module.setUpField = (function () {
	let blocks = [],
	accessory = {

		/**
		 * Метод генерации случайного числа в интервале
		 * @param  {Number} min - минимальное значение интервала
		 * @param  {Number} max - максимальное значение интервала
		 * @return {Number}     - случайное число
		 */
		getRandomNumber: function (min, max) {
			let rand = min + Math.floor(Math.random() * (max + 1 - min));
			return rand;
		},

		/**
		 * Значок загрузки
		 * @param  {Object} loader  - DOM элемент индикатора загрузки
		 * @param  {Object} content - основной контент приложения
		 */
		loader: function (loader, content) {
			loader.style.display = 'none';
			content.style.display = 'block';
		},

		/**
		 * Метод создания массива с парными числами
		 * @param {Array} blocks - массив блоков, которым нужно раздать парные числа
		 * @param {Array} array  - массив парных чисел
		 */
		setDataIdArray: function (blocks, array) {
			for (let i = 1; i <= blocks.length / 2; i++) {
				array.push(i);
				array.push(i);
			};
			return array;
		},

		/**
		 * Метод раздачи парных чисел блокам
		 * @param {Array} dataIdArray - массив парных чисел
		 * @param {Array} blocks      - массив блоков
		 */
		setDataId: function (dataIdArray, blocks) {
			let value = 0;
			for (let i = 0; i < blocks.length; i++) {
				let randomIndex = accessory.getRandomNumber(0, dataIdArray.length - 1);
				value = dataIdArray[randomIndex];
				blocks[i].setAttribute('data-id', value);
				blocks[i].setAttribute('data-checked', false);
				blocks[i].setAttribute('data-clicked', false);
				dataIdArray.splice(randomIndex, 1);
			};
		}
	},

	system = {

		/**
		 * Метод инициализации блоков
		 * @param {Object} response    - объект ответа сервера
		 * @param {Object} loader      - индикатор загрузки
		 * @param {Object} mainContent - основной контент приложения
		 * @param {Object} items        - элемент DOM - скелет блоков
		 */
		setUpField: function (response, loader, mainContent, items) {
			let dataIdArray = [];

			accessory.loader(loader, mainContent);

			for (let i = 0; i < response.height; i++) {

				let tr = document.createElement('tr');
				tr.setAttribute('class','item-v item');

				for (let k = 0; k < response.width; k++) {

					let td = document.createElement('td');
					td.setAttribute('class', 'item-h item');
					tr.appendChild(td);
					blocks.push(td);

				};

				items.appendChild(tr);
			};

			dataIdArray = accessory.setDataIdArray(blocks, dataIdArray);

			accessory.setDataId(dataIdArray, blocks);

		}
	};

	return {
		sufM__setUpField: system.setUpField,
		sufM__getBlocks: function () {
			return blocks;
		}
	}

})();
