// БУРГЕР МЕНЮ

let burger = document.querySelector(".header__nav__btns__burger");
let menu = document.querySelector(".header__nav__menu");

burger.addEventListener("click", function () {
	menu.classList.toggle("burger--open");
	menu.classList.toggle("burger--close");
});

menu.addEventListener("click", function () {
	menu.classList.toggle("burger--open");
	menu.classList.toggle("burger--close");
});

// СЛАЙДЕР В HEADER

let btnLeft = document.querySelector(".header__box__arrow--left");
let btnRight = document.querySelector(".header__box__arrow--right");
let sliderBlock = document.querySelectorAll(".header__box__about");

let i = 2;

btnLeft.addEventListener("click", function () {

	sliderBlock[0].classList.add("hidden");
	sliderBlock[1].classList.add("hidden");
	sliderBlock[2].classList.add("hidden");
	sliderBlock[3].classList.add("hidden");
	sliderBlock[4].classList.add("hidden");

	i--;
	if (i < 0) {
		i = sliderBlock.length - 1;
	}
	sliderBlock[i].classList.remove("hidden");
	
});

btnRight.addEventListener("click", function () {

	sliderBlock[0].classList.add("hidden");
	sliderBlock[1].classList.add("hidden");
	sliderBlock[2].classList.add("hidden");
	sliderBlock[3].classList.add("hidden");
	sliderBlock[4].classList.add("hidden");

	i++;
	if (i >= sliderBlock.length) {
		i = 0;
	}
	sliderBlock[i].classList.remove("hidden");

});

let sliderDotOne = document.querySelector(".sl__img__one");
let sliderDotTwo = document.querySelector(".sl__img__two");
let sliderDotThree = document.querySelector(".sl__img__three");
let sliderDotFour = document.querySelector(".sl__img__four");
let sliderDotFive = document.querySelector(".sl__img__five");

sliderDotOne.onclick = function () {
	sliderBlock[1].classList.add("hidden");
	sliderBlock[2].classList.add("hidden");
	sliderBlock[3].classList.add("hidden");
	sliderBlock[4].classList.add("hidden");
	sliderBlock[0].classList.remove("hidden");
}

sliderDotTwo.onclick = function () {
	sliderBlock[0].classList.add("hidden");
	sliderBlock[2].classList.add("hidden");
	sliderBlock[3].classList.add("hidden");
	sliderBlock[4].classList.add("hidden");
	sliderBlock[1].classList.remove("hidden");
}

sliderDotThree.onclick = function () {
	sliderBlock[0].classList.add("hidden");
	sliderBlock[1].classList.add("hidden");
	sliderBlock[3].classList.add("hidden");
	sliderBlock[4].classList.add("hidden");
	sliderBlock[2].classList.remove("hidden");
}

sliderDotFour.onclick = function () {
	sliderBlock[0].classList.add("hidden");
	sliderBlock[1].classList.add("hidden");
	sliderBlock[2].classList.add("hidden");
	sliderBlock[4].classList.add("hidden");
	sliderBlock[3].classList.remove("hidden");
}

sliderDotFive.onclick = function () {
	sliderBlock[0].classList.add("hidden");
	sliderBlock[1].classList.add("hidden");
	sliderBlock[2].classList.add("hidden");
	sliderBlock[3].classList.add("hidden");
	sliderBlock[4].classList.remove("hidden");
}

// СОРТИРОВКА ПОСТОВ

let btn = document.querySelectorAll(".projects__punkts__punkt");
let btnall = document.querySelector(".all");
let btnweb = document.querySelector(".web");
let btnapp = document.querySelector(".app");
let btnill = document.querySelector(".ill");
let btnphoto = document.querySelector(".photo");

let post = document.querySelectorAll(".projects__posts__post");

btnall.addEventListener("click", function () {
	for (let i = 0; i < post.length; i++) {
		post[i].classList.remove("hidden");
		btnweb.classList.remove("punkt--choice");
		btnapp.classList.remove("punkt--choice");
		btnill.classList.remove("punkt--choice");
		btnphoto.classList.remove("punkt--choice");
		btnall.classList.add("punkt--choice");
	}
});

btnweb.addEventListener("click", function () {
	for (let i = 0; i < post.length; i++) {
		post[i].classList.remove("hidden");
		btnall.classList.remove("punkt--choice");
		btnapp.classList.remove("punkt--choice");
		btnill.classList.remove("punkt--choice");
		btnphoto.classList.remove("punkt--choice");
		btnweb.classList.add("punkt--choice");
		if (btnweb.name != post[i].dataset.category) {
			post[i].classList.add("hidden");
		}
	}
});

btnapp.addEventListener("click", function () {
	for (let i = 0; i < post.length; i++) {
		post[i].classList.remove("hidden");
		btnweb.classList.remove("punkt--choice");
		btnall.classList.remove("punkt--choice");
		btnill.classList.remove("punkt--choice");
		btnphoto.classList.remove("punkt--choice");
		btnapp.classList.add("punkt--choice");
		if (btnapp.name != post[i].dataset.category) {
			post[i].classList.add("hidden");
		}
	}
});

btnill.addEventListener("click", function () {
	for (let i = 0; i < post.length; i++) {
		post[i].classList.remove("hidden");
		btnweb.classList.remove("punkt--choice");
		btnapp.classList.remove("punkt--choice");
		btnall.classList.remove("punkt--choice");
		btnphoto.classList.remove("punkt--choice");
		btnill.classList.add("punkt--choice");
		if (btnill.name != post[i].dataset.category) {
			post[i].classList.add("hidden");
		}
	}
});

btnphoto.addEventListener("click", function () {
	for (let i = 0; i < post.length; i++) {
		post[i].classList.remove("hidden");
		btnweb.classList.remove("punkt--choice");
		btnapp.classList.remove("punkt--choice");
		btnill.classList.remove("punkt--choice");
		btnall.classList.remove("punkt--choice");
		btnphoto.classList.add("punkt--choice");
		if (btnphoto.name != post[i].dataset.category) {
			post[i].classList.add("hidden");
		}
	}
});


// ДОГРУЗКА ПОСТОВ

doppost = document.querySelectorAll(".dop--post");
btnload = document.querySelector(".projects__button");

btnload.addEventListener("click", function () {
	for (let i = 0; i < doppost.length; i++) {
		doppost[i].classList.toggle("hidden--dop");
		btnload.classList.add("hidden");
	}
});

// ВИДЕО

present = document.querySelector(".video__presentation");
btnplay = document.querySelector(".video__presentation__play");
video = document.querySelector(".video__presentation__film");

btnplay.addEventListener("click", function () {
	video.classList.remove("height");
});

// СМЕНА КАРТИНОК В ПОСТЕ

let photo = document.querySelector(".posts--one");
let sliderPost = document.querySelectorAll(".posts__slider--img");

let photoPost = [
	"url(../img/post1.png)",
	"url(../img/post1-2.png)",
	"url(../img/post1-3.png)",
	"url(../img/post1-4.png)",
	"url(../img/post1-5.png)"
]

for (let i = 0; i < sliderPost.length; i++) {
	sliderPost[i].addEventListener("click", function () {
		photo.style.backgroundImage = photoPost[i];
	});
}

// СЛАЙДЕР ПОСТОВ

let clickOne = document.querySelector(".posts__click__one");
let clickTwo = document.querySelector(".posts__click__two");
let postsBlock = document.querySelectorAll(".posts__block");

function slide () {
	for (let i = 0; i < postsBlock.length; i++) {
		postsBlock[i].classList.toggle("hidden");
	}
}

clickOne.addEventListener("click", slide);
clickTwo.addEventListener("click", slide);