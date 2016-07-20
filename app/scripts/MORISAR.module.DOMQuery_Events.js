'use strict';

MORISAR.namespace('MORISAR.module.DOMQuery_Events');

/**
 * Модуль стандартных операцис с DOM и кроссбраузерное создание событий
 * @return {Object}           - фасад модуля
 */
MORISAR.module.DOMQuery_Events = (function () {
	
	return {

		/**
		 * Метод создания слушателя события
		 * @param  {Object}   el   - элемент, который будет слушать модуль
		 * @param  {String}   type - тип события
		 * @param  {Function} fn   - callback функция
		 */
		dqeM__addEvent: function (el, type, fn) {
			if (typeof addEventListener !== 'undefined') {
				el.addEventListener(type, fn, false);
			} else if (typeof attachEvent !== 'undefined') {
				el.attachEvent('on' + type, fn);
			} else {
				el['on' + type] = fn;
			}
		},

		/**
		 * Метод удаления слушателя события
		 * @param  {Object}   el   - элемент, с которого снимается слушатель
		 * @param  {Ысештп}   type - тип события
		 * @param  {Function} fn   - callback функция
		 */
		dqeM__removeEvent: function (el, type, fn) {
			if (typeof removeEventListener !== 'undefined') {
				el.removeEventListener(type, fn, false);
			} else if (typeof attachEvent !== 'undefined') {
				el.detachEvent('on' + type, fn);
			} else {
				el['on' + type] = null;
			}
		},

		/**
		 * Метод определения элемента, спровоцировавшего событие
		 * @param  {Object} event - объект события
		 * @return {Object}       - элемент, спровоцировавший событие
		 */
		dqeM__getTarget: function (event) {
			if (typeof event.target !== 'undefined') {
				return event.target; 
			} else {
				return event.srcElement;
			};
		},

		/**
		 * Метод отмены стандартного действия
		 * @param  {Object} event - объект события
		 */
		dqeM__preventDefault: function (event) {
			if (typeof event.preventDefault !== 'undefined') {
				event.preventDefault();
			} else {
				event.returnValue = false;
			};
		},

		/**
		 * Метод поиска элемента DOM по id
		 * @param  {String} id - id искомого элемента
		 * @return {Object}    - искомый элемент
		 */
		dqeM__getId: function(id) {
			return document.getElementById(id)
		},

		/**
		 * Метод поиска искомых элементов DOM по тегу
		 * @param  {String} tag - тег искомых элементов
		 * @return {Array}      - массив искомых элементов
		 */
		dqeM__getTag: function(tag) {
			return document.getElementsByTagName(tag)
		},

		/**
		 * Метод поиска элемента DOM по атрибуту, спровоцировавшего событие
		 * @param  {Object} event - объект события
		 * @param  {String} attr  - название атрибута искомого элемента
		 * @return {Object}       - искомый элемент DOM
		 */
		dqeM__getAttr: function(event, attr) {
			const target = this.dqeM__getTarget(event);
			const data = target.getAttribute(attr);

			return data;
		},

		/**
		 * Метод поиска элементов DOM по тегу name
		 * @param  {String} name - название тега name
		 * @return {Array}       - массив искомых элементов
		 */
		dqeM__getName: function(name) {
			return document.getElementsByName(name);
		},

		/**
		 * Метод поиска элементов DOM по классу
		 * @param  {String} className - класс элементов
		 * @return {Array}            - массив искомых элементов
		 */
		dqeM__getClass: function(className) {
			return document.getElementsByClassName(className)
		},

		/**
		 * Метод получения свойств стиля элемента DOM
		 * @param  {String} id - id элемента
		 * @return {Object}    - объект свойств стиля элемента
		 */
		dqeM__getStyle: function(id) {
			this.dqeM__getId(id);
			return window.getComputedStyle(this.dqeM__getId(id))
		},

		/**
		 * Метод назначения класса элементу DOM
		 * @param  {String} id        - id элемента
		 * @param  {String} className - название класса
		 */
		dqeM__addClass: function(id, className) {
			const e = this.dqeM__getId(id);
			e.classList.add(className);
		},

		/**
		 * Метод удаления класса элемента DOM
		 * @param  {String} id        - id элемента
		 * @param  {String} className - название класса
		 */
		dqeM__removeClass: function(id, className) {
			const e = this.dqeM__getId(id);
			e.classList.remove(className);
		}
	}
})();
