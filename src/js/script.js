import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "/src/sass/style.scss";

try {
    new Swiper('.works__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        speed: 300,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.icon-right-open',
            prevEl: '.icon-left-open',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 35,
            }
        }
    });
} catch (e) { }

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let menuClose = document.querySelector('.header__menu-close');
// let noScrollBody = document.querySelector('body')
let currentWidth = window.innerWidth;

// function burgerFunction() {
//     burger.addEventListener('click', function () {
//         menu.classList.add('header__menu-active')
//         noScrollBody.classList.add('no-scroll')
//     })
//     menuClose.addEventListener('click', function () {
//         menu.classList.remove('header__menu-active')
//         noScrollBody.classList.remove('no-scroll')
//     })
//     window.addEventListener('resize', function () {
//         if (currentWidth > 768) {
//             menu.classList.remove('header__menu-active')
//             noScrollBody.classList.remove('no-scroll')
//         };
//     });
// };
// burgerFunction();
function burgerFunction() {
    burger.addEventListener('click', function () {
        menu.classList.add('header__menu-active')
        document.body.style.overflow = 'hidden';
    })
    menuClose.addEventListener('click', function () {
        menu.classList.remove('header__menu-active')
        document.body.style.overflow = 'visible';
    })
    window.addEventListener('resize', function () {
        if (currentWidth > 768) {
            menu.classList.remove('header__menu-active')
            document.body.style.overflow = 'visible';
        };
    });
};
burgerFunction();


try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {

            tabs.forEach((t) => t.removeAttribute("id"));
            contents.forEach((c) => (c.style.display = "none"));

            tab.id = "catalog__tab-active";
            contents[index].style.display = "block";
        });
    });

    contents.forEach((c, i) => (c.style.display = i === 0 ? "block" : "none"));
} catch (e) { }



