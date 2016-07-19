'use strict';

MORISAR.namespace('MORISAR.module.setUpField');

MORISAR.module.setUpField = (function () {
	let blocks = [],
	accessory = {
		getRandomNumber: function (min, max) {
			let rand = min + Math.floor(Math.random() * (max + 1 - min));
			return rand;
		},

		loader: function (loader, content) {
			loader.style.display = 'none';
			content.style.display = 'block';
		},

		setDataIdArray: function (blocks, array) {
			for (let i = 1; i <= blocks.length / 2; i++) {
				array.push(i);
				array.push(i);
			};
			
			return array;
		},

		setDataId: function (dataIdArray, blocks) {
			let value = 0;
			for (let i = 0; i < blocks.length; i++) {
				let randomIndex = accessory.getRandomNumber(0, dataIdArray.length - 1);
				value = dataIdArray[randomIndex];
				blocks[i].setAttribute('data-id', value);
				blocks[i].setAttribute('data-checked', false);
				dataIdArray.splice(randomIndex, 1);
			};
		}
	},

	system = {

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
