'use strict';

MORISAR.namespace('MORISAR.module.setPictures');

MORISAR.module.setPictures = (function () {
	let mBlocks = [],
	system = {
		setPictures: function (blocks) {
			mBlocks = blocks;
			let pictures = ['https://kde.link/test/0.png', 'https://kde.link/test/1.png', 'https://kde.link/test/2.png', 'https://kde.link/test/3.png', 'https://kde.link/test/4.png', 'https://kde.link/test/5.png', 'https://kde.link/test/6.png', 'https://kde.link/test/7.png', 'https://kde.link/test/8.png', 'https://kde.link/test/9.png'];
			for (let i = 0; i < mBlocks.length; i++) {
				
				switch(mBlocks[i].getAttribute('data-id')) {
					case '1': case '11': case'21': case'31': case'41': case'51': case'61':
						mBlocks[i].style.backgroundImage = `url(${pictures[0]}`;
						break;
					case '2': case'12': case'22': case'32': case'42': case'52': case'62':
						mBlocks[i].style.backgroundImage = `url(${pictures[1]}`;
						break;
					case '3': case'13': case'23': case'33': case'43': case'53': case'63':
						mBlocks[i].style.backgroundImage = `url(${pictures[2]}`;
						break;
					case '4': case'14': case'24': case'34': case'44': case'54': case'64':
						mBlocks[i].style.backgroundImage = `url(${pictures[3]}`;
						break;
					case '5': case'15': case'25': case'35': case'45': case'55':
						mBlocks[i].style.backgroundImage = `url(${pictures[4]}`;
						break;
					case '6': case'16': case'26': case'36': case'46': case'56':
						mBlocks[i].style.backgroundImage = `url(${pictures[5]}`;
						break;
					case '7': case'17': case'27': case'37': case'47': case'57':
						mBlocks[i].style.backgroundImage = `url(${pictures[6]}`;
						break;
					case '8': case'18': case'28': case'38': case'48': case'58':
						mBlocks[i].style.backgroundImage = `url(${pictures[7]}`;
						break;
					case '9': case'19': case'29': case'39': case'49': case'59':
						mBlocks[i].style.backgroundImage = `url(${pictures[8]}`;
						break;
					case '10': case'20': case'30': case'40': case'50': case'60':
						mBlocks[i].style.backgroundImage = `url(${pictures[9]}`;
						break;
					default:
						console.log('Блоков больше, чем рассчитано картинок!');
				};
			};
			return mBlocks;
		}
	};

	return {
		spM__setPictures: system.setPictures,
		spM__getBlocksWithPictures: function () {
			return mBlocks;
		}
	}

})();
