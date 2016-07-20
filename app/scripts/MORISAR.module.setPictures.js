'use strict';

MORISAR.namespace('MORISAR.module.setPictures');

/**
 * Модуль установки парных изображений блокам
 * @param  {Object} system    - функционал модуля
 * @return {Object}           - фасад модуля
 */
MORISAR.module.setPictures = (function () {
	let system = {

		/**
		 * Метод установки парных изображений блокам
		 * @param {Array} blocks - массив блоков
		 */
		setPictures: function (blocks) {

			for (let i = 0; i < blocks.length; i++) {
				let tempNumber = parseInt(blocks[i].getAttribute('data-id'));
				
				if (tempNumber > 9) {
					let stringNumber = `${tempNumber}`,
					tempStringNumber = `${stringNumber.charAt(0)}0`,
					ratio = parseInt(tempStringNumber);
					blocks[i].classList.add(`bg${tempNumber - ratio}`);
				} else {
					blocks[i].classList.add(`bg${tempNumber}`);
				}
			};
			return blocks;
		},

		/**
		 * Метод установки стартового изображения блокам
		 * @param {Array} blocks - массив блоков
		 */
		setDefaultPictures: function (blocks) {
			for (var i = 0; i < blocks.length; i++) {
				blocks[i].style.backgroundImage = 'url(images/vopros.png)';
			}
		}
	};

	return {
		spM__setPictures: system.setPictures,
		spM__setDefaultPictures: system.setDefaultPictures,
		spM__getBlocksWithPictures: function () {
			return blocks;
		}
	}

})();
