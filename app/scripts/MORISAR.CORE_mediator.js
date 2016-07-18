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

}());

MORISAR.CORE_mediator.installTo(MORISAR.facade);

///////////////////////
// Subscribes modules //
///////////////////////

MORISAR.facade.subscribe('Document ready', function (objConfig) {
	
});

////////////////////////
// Publish to modules //
////////////////////////

// $(document).ready(MORISAR.facade.publish('Document ready', {}));
