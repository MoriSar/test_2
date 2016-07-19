'use strict';

MORISAR.namespace('MORISAR.facade');


MORISAR.facade = (function () {
	return {
		
		f__incaps: function (module) {
			for (let key in module) {
				this[key] = module[key];
			};
		},

		interface__startGame: function (objConfig) {
			let mBlocks = this.spM__setPictures(this.sufM__getBlocks());
		},

		interface__setUpField: function (objConfig) {
			let _this = this;
			this.aM__sendRequest(objConfig.request.type, objConfig.request.url, objConfig.request.async, objConfig.request.data, function (response) {

				_this.sufM__setUpField(response, _this.dqeM__getClass('cssload-loader')[0], _this.dqeM__getClass('b-content')[0], _this.dqeM__getClass('b-content__images')[0]);
			});
		},

		interface__clickOnAnItem: function (objConfig, event) {
			let _this = this,
			blocksObj = this.cacM__catch(objConfig, event, function (event) {
				return _this.dqeM__getTarget(event);
			});

			console.log(blocksObj);
		}
	}
})();

MORISAR.facade.f__incaps(MORISAR.module.DOMQuery_Events);
MORISAR.facade.f__incaps(MORISAR.module.ajax);
MORISAR.facade.f__incaps(MORISAR.module.setUpField);
MORISAR.facade.f__incaps(MORISAR.module.setPictures);
MORISAR.facade.f__incaps(MORISAR.module.catchACoupe);


console.info(MORISAR.facade);