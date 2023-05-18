'use strict';

/* ------------ services section -------------*/

const servicesTabs = document.querySelector('.services-tabs');
const servicesContents = document.querySelectorAll('.services-content');

servicesTabs.addEventListener('click', (e) => {
	if (e.target === e.currentTarget) return;

	if (!e.target.classList.contains('active')) {
		document.querySelector('.services-content.active').classList.remove('active');
		servicesTabs.querySelector('.active').classList.remove('active');
		e.target.classList.add('active');

		servicesContents.forEach(content => {
			if (content.dataset.tabs === e.target.innerText) {
				content.classList.add('active');
			}
		})
	}
})

/*------------- work-section --------------*/

const workCards = [{
	category: 'graphic design',
	src: 'graphic_design/graphic-design1.jpg',
}, {
	category: 'web design',
	src: 'web_design/web-design2.jpg',
}, {
	category: 'wordpress',
	src: 'wordpress/wordpress1.jpg',
}, {
	category: 'landing pages',
	src: 'landing_page/landing-page1.jpg',
}, {
	category: 'landing pages',
	src: 'landing_page/landing-page2.jpg',
}, {
	category: 'web design',
	src: 'web_design/web-design1.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design2.jpg',
}, {
	category: 'wordpress',
	src: 'wordpress/wordpress2.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design3.jpg',
}, {
	category: 'landing pages',
	src: 'landing_page/landing-page3.jpg',
}, {
	category: 'web design',
	src: 'web_design/web-design3.jpg',
}, {
	category: 'wordpress',
	src: 'wordpress/wordpress3.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design4.jpg',
}, {
	category: 'web design',
	src: 'web_design/web-design4.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design5.jpg',
}, {
	category: 'wordpress',
	src: 'wordpress/wordpress4.jpg',
}, {
	category: 'landing pages',
	src: 'landing_page/landing-page4.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design6.jpg',
}, {
	category: 'wordpress',
	src: 'wordpress/wordpress5.jpg',
}, {
	category: 'landing pages',
	src: 'landing_page/landing-page5.jpg',
}, {
	category: 'web design',
 	src: 'web_design/web-design5.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design7.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design8.jpg',
}, {
	category: 'wordpress',
	src: 'wordpress/wordpress6.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design9.jpg',
}, {
	category: 'web design',
	src: 'web_design/web-design6.jpg',
}, {
	category: 'wordpress',
	src: 'wordpress/wordpress7.jpg',
}, {
	category: 'wordpress',
	src: 'wordpress/wordpress8.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design10.jpg',
}, {
	category: 'landing pages',
	src: 'landing_page/landing-page6.jpg',
}, {
	category: 'wordpress',
	src: 'wordpress/wordpress9.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design11.jpg',
}, {
	category: 'web design',
	src: 'web_design/web-design7.jpg',
}, {
	category: 'wordpress',
	src: 'wordpress/wordpress10.jpg',
}, {
	category: 'landing pages',
	src: 'landing_page/landing-page7.jpg',
}, {
	category: 'graphic design',
	src: 'graphic_design/graphic-design12.jpg',
},
]

const cardsArr = workCards.map(el => {
	return `<li class="work-card" data-category="${el.category}">
	<div class="work-card-inner">
		<img class="work-card-front" src="./img/work/${el.src}" alt="${el.category}" class="work-card-front"
		width="284"
		height="206">
	
		<div class="work-card-back">
			<a href="#" class="work-card-back-icon">
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759143 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922616 9.8266 0.0883684 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" />
				</svg>
			</a>
			<a href="#" aria-label="Read more about this work">[Read more...] class="work-card-back-icon">
				<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="12" height="11"/>
				</svg>
			</a>
			<p class="work-card-back-title accent-color-green">creative design</p>
			<p class="work-card-back-category">${el.category}</p>
		</div>
	</div>
	</li>`
});


const workGallary = document.querySelector('.work-gallery');
let quantity = 12;
workGallary.insertAdjacentHTML("beforeend", cardsArr.slice(0, quantity).join(''));


const loadMoreBtn = document.querySelector('.load-more-btn');
const galleryPreloader = document.querySelector('#work-preloader');

loadMoreBtn.addEventListener('click', (e) => {
	loadMoreBtn.style.display = 'none';
	galleryPreloader.style.display = 'inline-block';

	setTimeout(() => {		
		galleryPreloader.style.display = 'none';
		workGallary.insertAdjacentHTML("beforeend", cardsArr.slice(quantity, quantity + 12).join(''));
		quantity += 12;

		if (quantity !== 36) {
			loadMoreBtn.style.display = 'inline-block';
		}

		const activeCategory = document.querySelector('.work-category.active');

		if (activeCategory.dataset.category !== 'all') {
			document.querySelectorAll('.work-card').forEach(card => {
				const category = card.dataset.category;
				const currentCategory = activeCategory.dataset.category;
				card.style.display = (category === currentCategory) ? 'block' : 'none';
			})
		}
	}, 2000)
})


const workTabs = document.querySelector('.work-categories');

workTabs.addEventListener('click', (e) => {
	if (e.target === e.currentTarget) return;

	const cards = document.querySelectorAll('.work-card');

	if (!e.target.classList.contains('active')) {
		document.querySelector('.work-category.active').classList.remove('active');
		e.target.classList.add('active');

		cards.forEach(card => {
			if (e.target.dataset.category === 'all' || card.dataset.category === e.target.dataset.category) {
				card.style.display = 'block';
			} else {
				card.style.display = 'none';
			}
		})
	}
})


/*------------- feedback-section --------------*/

const slider = document.querySelector('.user-slider');
const sliderPhotos = Array.from(document.querySelectorAll('.user-slider-photo'));
const userFeedbacks = document.querySelectorAll('.user-feedback-wrap');

function ShowFeedback (index) {
	sliderPhotos[index].classList.add('active');

	userFeedbacks.forEach((feedback) => {
		if (feedback.dataset.user === sliderPhotos[index].dataset.user) {
			feedback.style.opacity = 0;
			feedback.classList.add('active');
			setTimeout(() => {
				feedback.style.opacity = 1;
			}, 100)
		}
	})
}

slider.addEventListener('click', (e) => {
	const target = e.target.closest('.slider-arrow') || e.target.closest('.user-slider-photo');
	if (!target) return;

	document.querySelector('.user-feedback-wrap.active').classList.remove('active');

	const activeSlide = document.querySelector('.user-slider-photo.active');
	let slideIndex = sliderPhotos.indexOf(activeSlide);
	activeSlide.classList.remove('active');

	if (target.classList.contains('slider-arrow-left')) {
		slideIndex--;
		if (slideIndex < 0) {
			slideIndex = sliderPhotos.length - 1;
		}
	} else if (target.classList.contains('slider-arrow-right')) {
		slideIndex++;
		if (slideIndex === sliderPhotos.length) {
			slideIndex = 0;
		}
	} else if (target.classList.contains('user-slider-photo')) {
		slideIndex = sliderPhotos.indexOf(target);
	}
	ShowFeedback(slideIndex);
});