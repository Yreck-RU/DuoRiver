
function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
//Слайдеры=============================================
const swiper = new Swiper('.other-albums__slider', {
	//direction: 'vertical',
	loop: true,
	//slidesPerView: 3,
	spaceBetween: 30,

	navigation: {
		nextEl: '.other-albums__body-reght-buton__prev',
		prevEl: '.other-albums__body-reght-buton__next',
	},

	breakpoints: {
		320.1: {
			slidesPerView: 1,
		},
		380.1: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		992.1: {
			slidesPerView: 3,
		},
		1024.1: {
			slidesPerView: 4,
		},
	},
});
const swiper2 = new Swiper('.slaider-2__body-slaider', {
	loop: true,
	navigation: {
		prevEl: '.slaider_2__other-albums__body-reght-buton__next',
		nextEl: '.slaider_2__other-albums__body-reght-buton__prev',
	},
	//centeredSlides: true,
	breakpoints: {
		320.1: {
			//slidesPerView: "auto",
			slidesPerView: 2,
			spaceBetween: 10,
		},
		480.1: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		992.1: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024.1: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});
const swiper3 = new Swiper('.slaider-3__body-slaider', {
	loop: true,
	navigation: {
		nextEl: '.slaider_3__other-albums__body-reght-buton__next',
		prevEl: '.slaider_3__other-albums__body-reght-buton__prev',
	},
	//centeredSlides: true,
	breakpoints: {
		320.1: {
			//slidesPerView: "auto",
			slidesPerView: 2,
			spaceBetween: 10,
		},
		480.1: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		992.1: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024.1: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});
const swiper4 = new Swiper('.slaider-4__body-slaider', {
	loop: true,
	navigation: {
		nextEl: '.slaider_4__other-albums__body-reght-buton__next',
		prevEl: '.slaider_4__other-albums__body-reght-buton__prev',
	},
	//centeredSlides: true,
	breakpoints: {
		320.1: {
			//slidesPerView: "auto",
			slidesPerView: 2,
			spaceBetween: 10,
		},
		480.1: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		992.1: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024.1: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});
const swiper5 = new Swiper('.slaider-5__body-slaider', {
	loop: true,
	slidesPerView: 2,
	navigation: {
		nextEl: '.slaider_5__other-albums__body-reght-buton__next',
		prevEl: '.slaider_5__other-albums__body-reght-buton__prev',
	},
	//centeredSlides: true,
	breakpoints: {
		320.1: {
			//slidesPerView: "auto",
			spaceBetween: 10,
		},
		480.1: {
			spaceBetween: 10,
		},
		992.1: {
			spaceBetween: 20,
		},
		1024.1: {
			spaceBetween: 30,
		},
	},
});
const formTop = document.querySelectorAll('#form-top');
if (formTop.length > 0) {
	var handlesSlider = document.getElementById('slider-handles');

	noUiSlider.create(handlesSlider, {
	    start: [0, 1456],
	    connect: true,
	    range: {
	        'min': [1],
	        'max': [2000],
	    }
	});

	var inputStart = document.getElementById('slider-handles__start');
	var inputEnd = document.getElementById('slider-handles__end');


	inputStart.addEventListener('change', function () {
	    handlesSlider.noUiSlider.set([inputStart.value, null]);
	});
	inputEnd.addEventListener('change', function () {
	    handlesSlider.noUiSlider.set([null, inputEnd.value]);
	});

	let videobodys = document.querySelectorAll('.form-item');
	let videoButtons = document.querySelectorAll('.form-body');
	if (videobodys.length > 0) {
		for (let i = 0; i < videobodys.length; i++) {
			const videobody = videobodys[i];
			const videoButton = videoButtons[i];
			videobody.addEventListener("click", function (e) {
				if (videoButton.classList.contains('_active')) {
					videoButton.classList.remove('_active');
					videobody.classList.remove('_active');
				} else {
					const activs = document.querySelectorAll('._active');
					for (let i = 0; i < activs.length; i++) {
						const activ = activs[i];
						activ.classList.remove('_active');
					}
					videoButton.classList.toggle('_active');
					videobody.classList.toggle('_active');
				}
			});
		}
	}
	let formButton = document.querySelector('.catalog-wraper__top-body__mb-button-left');
	let formButtonRemoves = document.querySelectorAll('#catalog-wraper__remov');
	let formBody = document.querySelector('.catalog-wraper__top-body-form2');
	formButton.addEventListener("click", function () {
		formBody.classList.toggle('_active');
	});
	for (let i = 0; i < formButtonRemoves.length; i++) {
		const formButtonRemove = formButtonRemoves[i];
		formButtonRemove.addEventListener("click", function (e) {
			formBody.classList.remove('_active');
		});
	}
}

function hideSpollersBody2(spollersBlock) {
	const spollerActiveTitle = spollersBlock.querySelectorAll('._active');
	if (spollerActiveTitle) {
		spollerActiveTitle.classList.remove('_active');
		_slideUp(spollerActiveTitle.nextElementSibling, 500);
	}
}

//Спойлеры=============================================
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});

	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});

	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});

			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}

let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration)
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
