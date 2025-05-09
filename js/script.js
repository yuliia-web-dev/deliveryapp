"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const swiperContainer = document.querySelector('.welcome__swiper');
	if (swiperContainer) {
		const newSlider = new Swiper('.welcome__swiper', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			}
		});
	}
});

function togglePassword(button) {
	const input = document.querySelector('#password'); // заміни на свій селектор
	const isPassword = input.type === 'password';

	input.type = isPassword ? 'text' : 'password';
	button.classList.toggle('active', isPassword);
}

document.addEventListener('DOMContentLoaded', function () {
	const swiperContainer = document.querySelector('.cards__swiper');
	if (swiperContainer) {
		const newSlider = new Swiper('.cards__swiper', {
			slidesPerView: 1.2,
			spaceBetween: 20,
			loop: true,


		});
	}
});


const ratings = document.querySelectorAll('[data-rating]');
if (ratings) {
	ratings.forEach(rating => {
		const currentValue = +rating.dataset.rating;
		currentValue ? starRatingSet(rating, currentValue) : null;
	});
}

function starRatingGet(rating, currentElement) {
	const ratingValue = +currentElement.value;
	// Тут відправка оцінки (ratingValue) на бекенд...
	// Уявімо, що ми отримали середню оцінку 3.2
	const resultRating = 3.2;
	starRatingSet(rating, resultRating);
}
function starRatingSet(rating, value) {
	const ratingItems = rating.querySelectorAll('.rating__item');
	const resultFullItems = parseInt(value);
	const resultPartItem = value - resultFullItems;

	ratingItems.forEach((ratingItem, index) => {
		ratingItem.classList.remove('active');
		ratingItem.querySelector('span') ? ratingItems[index].querySelector('span').remove() : null;

		if (index <= (resultFullItems - 1)) {
			ratingItem.classList.add('active');
		}
		if (index === resultFullItems && resultPartItem) {
			ratingItem.insertAdjacentHTML("beforeend", `<span style="width:${resultPartItem * 100}%"></span>`)
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const openBtn = document.getElementById('openSidebar');
	const sidebar = document.getElementById('sidebar');
	const content = document.getElementById('mainContent');
	const closeBtn = document.querySelector('.sidebar__button');

	if (!openBtn || !sidebar || !content || !closeBtn) return;

	let isOpen = false;
	let touchStartX = 0;
	let touchEndX = 0;

	function toggleSidebar() {
		isOpen = !isOpen;
		sidebar.classList.toggle('active', isOpen);
		content.classList.toggle('shifted', isOpen);

		if (isOpen) {
			closeBtn.style.opacity = '1';
			closeBtn.style.pointerEvents = 'auto';
		}
	}

	function closeSidebar() {
		if (isOpen) {
			closeBtn.style.opacity = '0';
			closeBtn.style.pointerEvents = 'none';
			toggleSidebar();
		}
	}

	openBtn.addEventListener('click', toggleSidebar);
	closeBtn.addEventListener('click', closeSidebar);
	content.addEventListener('click', closeSidebar);

	// Свайп (на мобільних)
	content.addEventListener('touchstart', (e) => {
		touchStartX = e.changedTouches[0].screenX;
	});

	content.addEventListener('touchend', (e) => {
		touchEndX = e.changedTouches[0].screenX;
		let diffX = touchEndX - touchStartX;

		// Якщо свайп вліво більше ніж 50px — закриваємо
		if (isOpen && diffX < -50) {
			closeSidebar();
		}
	});
});


const tabButtons = document.querySelectorAll('.orders__buttons-wrap button');
const orders = document.querySelectorAll('.orders__item');

tabButtons.forEach(button => {
	button.addEventListener('click', () => {
		// Видаляємо клас active у всіх кнопок
		tabButtons.forEach(btn => btn.classList.remove('active'));
		button.classList.add('active');

		const filter = button.textContent.toLowerCase().replace(/\s/g, '-'); // "On delivery" → "on-delivery"

		orders.forEach(order => {
			const status = order.dataset.status;

			if (filter === 'all' || status === filter) {
				order.style.display = 'flex';
			} else {
				order.style.display = 'none';
			}
		});
	});
});


document.addEventListener('DOMContentLoaded', function () {
	const swiperContainer = document.querySelector('.menu-saved__swiper');
	if (swiperContainer) {
		const newSlider = new Swiper('.menu-saved__swiper', {
			slidesPerView: 1.3,
			centeredSlides: true,
			spaceBetween: 20,
			loop: true,


		});
	}
});