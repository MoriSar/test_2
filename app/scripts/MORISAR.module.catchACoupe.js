'use strict';

MORISAR.namespace('MORISAR.module.catchACoupe');

MORISAR.module.catchACoupe = (function () {
	let blocksObj = {checked: [], coupe: []},
	system = {
		catchACoupe: function (objConfig, event, callback) {
			let target = callback(event);

			if (target.getAttribute('data-checked') === 'true') {
				return false;
			}

			blocksObj.checked.push(target);

			if (blocksObj.checked.length === 2) {
				if (blocksObj.checked[0].getAttribute('data-id') === blocksObj.checked[1].getAttribute('data-id')) {
					for (let i = 0; i < blocksObj.checked.length; i++) {
						blocksObj.checked[i].setAttribute('data-checked', true);
						blocksObj.coupe.push(blocksObj.checked[i]);
					}
				}
				blocksObj.checked = [];
			};

			return blocksObj;

		}
	};

	return {
		cacM__catch: system.catchACoupe
	}

})();
