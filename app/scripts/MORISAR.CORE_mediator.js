'use strict';

MORISAR.namespace('MORISAR.CORE_mediator');

MORISAR.CORE_mediator = (function() {
	const subscribe = function(channel, fn) {
		if (!MORISAR.CORE_mediator.channels[channel]) MORISAR.CORE_mediator.channels[channel] = [];
		MORISAR.CORE_mediator.channels[channel].push({ context: this, callback: fn });
		return this;
	},
	
	publish = function(channel) {
		if (!MORISAR.CORE_mediator.channels[channel]) return false;
		let args = Array.prototype.slice.call(arguments, 1);
		for (var i = 0, l = MORISAR.CORE_mediator.channels[channel].length; i < l; i++) {
			let subscription = MORISAR.CORE_mediator.channels[channel][i];
			subscription.callback.apply(subscription.context, args);
		}
		return this;
	};
	
	return {
		channels: {},
		publish: publish,
		subscribe: subscribe,
		installTo: function(obj) {
			obj.subscribe = subscribe;
			obj.publish = publish;
		}
	};

})();

MORISAR.CORE_mediator.installTo(MORISAR.facade);

///////////////////////
// Subscribes modules //
///////////////////////

MORISAR.facade.subscribe('Document ready', function (objConfig) {
	MORISAR.facade.interface__setUpField(objConfig);
});

MORISAR.facade.subscribe('Start game', function (objConfig) {
	MORISAR.facade.interface__startGame(objConfig);
});

MORISAR.facade.subscribe('Click on an item', function (objConfig, event) {
	MORISAR.facade.interface__clickOnAnItem(objConfig, event);
})

////////////////////////
// Publish to modules //
////////////////////////

MORISAR.facade.dqeM__addEvent(window, 'load', MORISAR.facade.publish('Document ready', {request: {type: 'GET', url: 'https://kde.link/test/get_field_size.php', async: true, data: null}}));

MORISAR.facade.dqeM__addEvent(MORISAR.facade.dqeM__getClass('b-controll-panel__button')[0], 'click', function (event) {
	MORISAR.facade.publish('Start game', {});
});

MORISAR.facade.dqeM__addEvent(MORISAR.facade.dqeM__getClass('b-content__images')[0], 'click', function (event) {
	MORISAR.facade.publish('Click on an item', {}, event);
});