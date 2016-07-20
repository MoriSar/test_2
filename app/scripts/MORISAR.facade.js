'use strict';

MORISAR.namespace('MORISAR.facade');

/**
 * Фасад приложения
 * @param  {Object} system - функционал фасада
 * @return {Object}        - фасад
 */
MORISAR.facade = (function () {
	let system = {
		appRunStatus: false
	};

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

		/**
		 * Интерфейс "Начало игры"
		 * @param  {Object} objConfig - объект конфигурации
		 * @param  {Object} event     - объект события
		 */
		interface__startGame: function (objConfig, event) {
			system.appRunStatus = this.ssM__start();
			let _this = this,
			target = this.dqeM__getTarget(event),
			blocks = this.sufM__getBlocks();
			if (target.getAttribute('data-started') === 'false') {
				this.spM__setPictures(blocks);
				setTimeout(function () {
					_this.spM__setDefaultPictures(blocks);
				}, objConfig.timer_1);
				target.setAttribute('data-started', 'true');
				this.cpM__startControll(blocks, this.dqeM__getId('leftCoupe'));
				this.cpM__checkLevel(blocks)
				this.tM__startTime(this.dqeM__getId('timer'));
			} else {
				console.warn('Приложение уже запущено!');
			};
		},

		/**
		 * Интерфейс "Инициализация игры"
		 * @param  {Object} objConfig - объект конфигурации
		 */
		interface__setUpField: function (objConfig) {
			let _this = this;
			this.aM__sendRequest(objConfig.request.type, objConfig.request.url, objConfig.request.async, objConfig.request.data, function (response) {

				_this.sufM__setUpField(response, _this.dqeM__getClass('cssload-loader')[0], _this.dqeM__getClass('b-content')[0], _this.dqeM__getClass('b-content__images')[0]);
			});
		},

		/**
		 * Интерфейс "Клик по картинке"
		 * @param  {Object} objConfig - объект конфигурации
		 * @param  {Object} event     - объект события
		 */
		interface__clickOnAnItem: function (objConfig, event) {
			if (system.appRunStatus) {
				let _this = this,
				target = this.dqeM__getTarget(event),
				blocksObj = this.cacM__catch(objConfig, event, target);

				this.vpM__viewPicture(objConfig, this.sufM__getBlocks(), blocksObj, target);
				this.cpM__startControll(this.sufM__getBlocks(), this.dqeM__getId('leftCoupe'));
			}
		}
	}
})();

MORISAR.facade.f__incaps(MORISAR.module.DOMQuery_Events);
MORISAR.facade.f__incaps(MORISAR.module.ajax);
MORISAR.facade.f__incaps(MORISAR.module.setUpField);
MORISAR.facade.f__incaps(MORISAR.module.setPictures);
MORISAR.facade.f__incaps(MORISAR.module.catchACoupe);
MORISAR.facade.f__incaps(MORISAR.module.viewPicture);
MORISAR.facade.f__incaps(MORISAR.module.startStop);
MORISAR.facade.f__incaps(MORISAR.module.controllPanel);
MORISAR.facade.f__incaps(MORISAR.module.timer);
