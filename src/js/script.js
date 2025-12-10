import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate, { Rules } from 'just-validate';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'animate.css';


import "/src/sass/style.scss";

//swiper
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

//burger
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

//tabs
try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {

            tabs.forEach((t) => t.removeAttribute("id"));
            contents.forEach((c) => (c.style.display = "none"));

            tab.id = "catalog__tab-active";
            contents[index].style.display = "grid";
        });
    });

    contents.forEach((c, i) => (c.style.display = i === 0 ? "grid" : "none"));
} catch (e) { }

//validation
try {
    const gitValidate = new JustValidate('.git__form');

    gitValidate
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'The name is required',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Minimum 2 characters needed',
            },

        ], {
            errorLabelStyle: {
                color: '#DB0C35'
            }
        })
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'The email is required',
            },
            {
                rule: 'email',
                errorMessage: 'Wrong email format',

            },
        ], {
            errorLabelStyle: {
                color: '#DB0C35'
            }
        })
        .addField('#question', [
            {
                rule: 'required',
                errorMessage: 'This field must be filled',
            },
            {
                rule: 'minLength',
                value: 5,
                errorMessage: 'Minimum 5 characters needed',
            },

        ], {
            errorsContainer: document.querySelector('#question').parentElement.querySelector('.error-message'),
            errorLabelStyle: {
                color: '#DB0C35'
            }
        })
        .addField('#checkbox', [
            {
                rule: 'required',
                errorMessage: 'You have to agree with the terms',

            },
        ], {
            errorsContainer: document.querySelector('#checkbox').parentElement.parentElement.querySelector('.checkbox-error-message'),
            errorLabelStyle: {
                color: '#DB0C35'
            }
        }
        )
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch('https://httpbin.org/post', {
                method: 'POST',
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log('Success', data);
                    form.reset();
                })
        });

} catch (e) { }

try {
    const footerValidate = new JustValidate('.footer__form');

    footerValidate
        .addField('#footer__email', [
            {
                rule: 'required',
                errorMessage: 'The email is required',
            },
            {
                rule: 'email',
                errorMessage: 'Wrong email format',

            },
        ], {
            errorsContainer: document.querySelector('#footer__email').parentElement.querySelector('.error-message'),
            errorLabelStyle: {
                color: '#DB0C35'
            }
        })
        .addField('#footer__checkbox', [
            {
                rule: 'required',
                errorMessage: 'You have to agree with the terms',

            },
        ], {
            errorsContainer: document.querySelector('#footer__checkbox').parentElement.parentElement.querySelector('.checkbox-error-message'),
            errorLabelStyle: {
                color: '#DB0C35'
            }
        }
        )
} catch (e) { }
try {
    function animations() {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            const screenWidth = window.screen.width;
            console.log(scrollPosition);
            if (screenWidth >= 1200) {
                if (scrollPosition >= 900) {
                    document.querySelector('.git__img').classList.add('animate__slideInLeft', 'animate__animated')
                    document.querySelector('.git__form').classList.add('animate__slideInRight', 'animate__animated')
                    document.querySelector('.git__vase').classList.add('animate__slideInRight', 'animate__animated')
                }
                if (scrollPosition >= 200) {
                    document.querySelector('.animate__about-right-1').classList.add('animate__slideInRight', 'animate__animated')
                    document.querySelector('.animate__about-right-2').classList.add('animate__slideInRight', 'animate__animated')
                    document.querySelector('.animate__about-left').classList.add('animate__slideInLeft', 'animate__animated')
                }
            }
        });
    }

    animations()
} catch (e) { }



